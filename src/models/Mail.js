const mongoose = require('mongoose');
const { Schema } = mongoose;

const MailSchema = new Schema({
    name:String,
    lastname:String,
    email:String,
    nrotelefono:String,
    comentario:String
});

const Mail = mongoose.model('Mail', MailSchema);

module.exports = Mail;