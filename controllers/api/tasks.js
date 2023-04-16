const Task = require('../../models/task');
const Application = require('../../models/application');

module.exports = {
  create,
  allTasks,
  delete: deleteTask,
  view: getTask,
  update
}

async function create(req, res) {
  const applicationId = req.body.application;
  req.body.user = req.user;

  try {
    const task = await Task.create(req.body);
    const updatedApplication = await Application.findByIdAndUpdate(applicationId, {
      $push: {task: task._id}
    }, {new: true}).populate('contacts').populate('reference').populate('task');

    console.log("updated Application", updatedApplication)
    res.json(updatedApplication);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function update(req, res) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log(updatedTask);
    res.json(updatedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
}
async function allTasks(req, res) {
  const tasks = await Task.find({user: req.user._id});
  res.json(tasks);
}

async function deleteTask(req, res) {
  await Task.findByIdAndDelete(req.params.id);
  // const task = await Task.find({user: req.user._id});
  const updatedApplication = await Application.find({user: req.user._id});

  res.json(updatedApplication);
}

async function getTask(req, res) {
  const task = await Task.findById(req.params.id);
  res.json(task);
}