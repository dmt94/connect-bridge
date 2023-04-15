const Contact = require('../../models/contact');

module.exports = {
  create,
  allContacts,
  delete: deleteContact,
  view: getContact,
  update
}

async function create(req, res) {
  req.body.user = req.user;
  const application = await Contact.create(req.body);
  console.log("application", application);
  res.json(application);
}

async function update(req, res) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('mutuals');
    console.log(updatedContact);
    res.json(updatedContact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function allContacts(req, res) {
  const contacts = await Contact.find({user: req.user._id}).populate('mutuals');
  res.json(contacts);
}



async function deleteContact(req, res) {
  await Contact.findByIdAndDelete(req.params.id);
  const contact = await Contact.find({user: req.user._id});
  res.json(contact);
}

async function getContact(req, res) {
  const contact = await Contact.findById(req.params.id);
  console.log("ID of contact", req.params.id)
  console.log("This is the mutual contact:", contact)
  res.json(contact);
}