const userBuilder = require('./controllers/userController');
const commissionBuilder = require('./controllers/commissionController')
const cardBuilder = require('./controllers/cardController')

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

  app.route('/commissions')
    .get(commissionBuilder.list_all_commissions)
    .post(commissionBuilder.create_a_commission)

  app.route('/commissions/:commissionId')
    .get(commissionBuilder.read_a_commission)
    .put(commissionBuilder.update_a_commission)
    .delete(commissionBuilder.delete_a_commission)

  app.route('/cards')
    .get(cardBuilder.list_all_cards)
    .post(cardBuilder.create_a_card)

  app.route('/cards/:cardId')
    .get(cardBuilder.read_a_card)
    .put(cardBuilder.update_a_card)
    .delete(cardBuilder.delete_a_card)
};