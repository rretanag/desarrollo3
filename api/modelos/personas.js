const mongoose = require("mongoose");

const schema_persona = new mongoose.Schema({
    plato: { type: String, required: true, unique: true },
    ingredientes: { type: String, required: true, unique: true },
    costo: { type: String, required: true, unique: false }
});

module.exports = mongoose.model("ANIMALES", schema_persona, "animal");