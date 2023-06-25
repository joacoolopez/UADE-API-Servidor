const mongoose = require('mongoose');
const { Schema } = mongoose;

const MailSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    nrotelefono:String,
    comentario:String,
    estado: Boolean
});

const Mail = mongoose.model('Mail', MailSchema);

module.exports = Mail;