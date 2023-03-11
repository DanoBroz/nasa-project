const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL = `mongodb+srv://nasa-api:a3PHvpjgx1qGJL27@nasacluster.x3b4fhu.mongodb.net/?retryWrites=true&w=majority`;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error", err);
});

async function startServer() {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Server started on port ${PORT}...`);
    });
}

startServer();
