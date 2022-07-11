'use strict';
module.exports = function(app) {
  const todoList = require('../controllers/Controller');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)
    .delete(todoList.delete_list)
    .put(todoList.update_any)

  app.route('/tasksfind')
    .post(todoList.list_find)
  
  app.route('/restaurant')
  .post(todoList.create_restaurant)
    
};