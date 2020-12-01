
const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    actual_url: String,
    short_url: String
});

module.exports = mongoose.model("urls", urlSchema);
