'use strict';


let mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

exports.list_all = (req, res) => {
  Task.find({}, (err, data) => {
    if (err)
      res.send(err);
    
    res.json(data);
  });
};




exports.create = function(req, res) {
  let new_post = new Task(req.body);
  new_post.save(function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};




exports.update_any = function(req, res) {
  const filter = req.body[0]
  const update = req.body[1]
  Task.findOneAndUpdate(filter, update, {new: true}, function(err, query) {
    if (err)
      res.send(err);
    res.json(query);
  });
};




exports.find = (req, res) => {
  console.log('tasksfind: ', req.body)
  Task.find(req.body, (err, query) => {
    if (err)
      res.send(err);
    res.json(query);
  });
};

exports.delete = function(req, res) {


  Task.remove(
    req.body
  , function(err, query) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


