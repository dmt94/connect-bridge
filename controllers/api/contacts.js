const Contact = require('../../models/contact');

module.exports = {
  create,
  allContacts,
  delete: deleteContact
}

async function create(req, res) {
  req.body.user = req.user;
  const application = await Application.create(req.body);
  res.json(application);
}

async function allApplications(req, res) {
  const application = await Application.find({user: req.user._id});
  res.json(application);
}

async function deleteApplication(req, res) {
  await Application.findByIdAndDelete(req.params.id);
  const application = await Application.find({user: req.user._id});
  res.json(application);
}
