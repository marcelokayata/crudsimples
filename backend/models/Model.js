'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let TaskSchema = new Schema({
  titulo: {
    type: String,
  },
  conteudo: {
    type: String,
  },  
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
