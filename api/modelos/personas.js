const mongoose = require("mongoose");

const schema_persona = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    apellidos: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: false }
});

module.exports = mongoose.model("USUARIOS", schema_persona, "usuarios");