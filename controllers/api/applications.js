const Application = require('../../models/application');

module.exports = {
  create,
  allApplications,
  delete: deleteApplication
}

async function create(req, res) {
  req.body.user = req.user;
  const application = await Application.create(req.body);
  res.json(application);
}

async function allApplications(req, res) {
  const applications = await Application.find({user: req.user._id});
  res.json(applications);
}

async function deleteApplication(req, res) {
  await Application.findByIdAndDelete(req.params.id);
  const application = await Application.find({user: req.user._id});
  res.json(application);
}
