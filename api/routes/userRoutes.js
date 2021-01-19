const userBuilder = require('../controllers/userController');

module.exports = app => {
  app
    .route('/users')
    .get(userBuilder.list_all_users)
    .post(userBuilder.create_a_user);

  app
    .route('/users/:userId')
    .get(userBuilder.read_a_user)
    .put(userBuilder.update_a_user)
    .delete(userBuilder.delete_a_user);
};