const mongoose = require("mongoose");

const MONGO_URL = `mongodb+srv://nasa-api:a3PHvpjgx1qGJL27@nasacluster.x3b4fhu.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error", err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
};
