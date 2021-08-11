const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Registro = new Schema({
 country:{type:String},
 date:{type:Date, default: Date.now()}
},{
    collection:'logs'
});

module.exports = mongoose.model('Registro',Registro);
