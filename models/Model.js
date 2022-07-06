'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let TaskSchema = new Schema({
  name: {
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
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

let FipeSchema = new Schema({  
  nome: {
    type: String,
  },
  codigo: {
    type: String,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Fipe', FipeSchema);
