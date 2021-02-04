const mongoose = require('mongoose');
const card = mongoose.model('card');

exports.list_all_cards = (req, res) => {
  card.find({}, (err, cards) => {
    if (err) res.send(err);
    res.json(cards);
  });
};

exports.create_a_card = (req, res) => {
  const newcard = new card(req.body);
  newcard.save((err, card) => {
    if (err) res.send(err);
    res.json(card);
  });
};

exports.read_a_card = (req, res) => {
  card.findById(req.params.cardId, (err, card) => {
    if (err) res.send(err);
    res.json(card);
  });
};

exports.update_a_card = (req, res) => {
  card.findOneAndUpdate(
    { _id: req.params.cardId },
    req.body,
    { new: true },
    (err, card) => {
      if (err) res.send(err);
      res.json(card);
    }
  );
};

exports.delete_a_card = (req, res) => {
  card.deleteOne({ _id: req.params.cardId }, err => {
    if (err) res.send(err)
    else res.json({
      message: 'card successfully deleted',
     _id: req.params.cardId
    });
  });
};