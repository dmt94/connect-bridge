const Contact = require('../../models/contact');

module.exports = {
  create,
  allContacts,
  delete: deleteContact,
  view: getContact
}

async function create(req, res) {
  req.body.user = req.user;
  const application = await Contact.create(req.body);
  res.json(application);
}

async function allContacts(req, res) {
  const contacts = await Contact.find({user: req.user._id});
  res.json(contacts);
}

async function deleteContact(req, res) {
  await Contact.findByIdAndDelete(req.params.id);
  const contact = await Contact.find({user: req.user._id});
  res.json(contact);
}

async function getContact(req, res) {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
}