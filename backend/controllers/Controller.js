'use strict';


let mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

exports.list_all_tasks = (req, res) => {
  Task.find({}, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  let new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    console.log("findbyid: ", req.params.taskId)
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_any = function(req, res) {
  const filter = req.body[0]
  const update = req.body[1]
  Task.findOneAndUpdate(filter, update, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.list_find = (req, res) => {
  console.log('tasksfind: ', req.body)
  Task.find(req.body, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_list = function(req, res) {


  Task.remove(
    req.body
  , function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.create_restaurant = async (req, res) => {
  const { name, location, cost } = req.body
  try {
    const { restaurantId } = await createRestaurant(name, location, cost)
    res.json({
      restaurantId
    })
  } catch (err) {
    res.status(400).json({
      message
    })
  }
}
