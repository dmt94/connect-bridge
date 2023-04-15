const Application = require('../../models/application');

module.exports = {
  create,
  allApplications,
  delete: deleteApplication,
  view: getApplication,
  update
}

async function create(req, res) {
  req.body.user = req.user;
  const application = await Application.create(req.body);
  res.json(application);
}

async function update(req, res) {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('contacts');
    console.log(updatedApplication);
    res.json(updatedApplication);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
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

async function getApplication(req, res) {
  const application = await Application.findById(req.params.id);
  res.json(application);
}
