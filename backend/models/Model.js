'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let TaskSchema = new Schema({
  cargo: {
    type: String,
  },
  nome: {
    type: String,
  },
  codigo: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
