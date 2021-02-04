const mongoose = require('mongoose');
const commission = mongoose.model('commission');

exports.list_all_commissions = (req, res) => {
  commission.find({}, (err, commissions) => {
    if (err) res.send(err);
    res.json(commissions);
  });
};

exports.create_a_commission = (req, res) => {
  const newCommission = new commission(req.body);
  newCommission.save((err, commission) => {
    if (err) res.send(err);
    res.json(commission);
  });
};

exports.read_a_commission = (req, res) => {
  commission.findById(req.params.commissionId, (err, commission) => {
    if (err) res.send(err);
    res.json(commission);
  });
};

exports.update_a_commission = (req, res) => {
  commission.findOneAndUpdate(
    { _id: req.params.commissionId },
    req.body,
    { new: true },
    (err, commission) => {
      if (err) res.send(err);
      res.json(commission);
    }
  );
};

exports.delete_a_commission = (req, res) => {
  commission.deleteOne({ _id: req.params.commissionId }, err => {
    if (err) res.send(err)
    else res.json({
      message: 'commission successfully deleted',
     _id: req.params.commissionId
    });
  });
};