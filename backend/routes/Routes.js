'use strict';
module.exports = function(app) {
  const List = require('../controllers/Controller');

  // todoList Routes
  app.route('/tasks')
    .get(List.list_all)
    .post(List.create)
    .delete(List.delete)
    .put(List.update_any)

  app.route('/tasksfind')
    .post(List.find)
  
    
};