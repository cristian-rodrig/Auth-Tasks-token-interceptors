const {Schema, model} = require ('mongoose');

const userSchema = new Schema({
    email: String,
    password: String,
}, {
    timestamps: true //crea la fecra de creacion y actualizacion
});

module.exports = model('User', userSchema);