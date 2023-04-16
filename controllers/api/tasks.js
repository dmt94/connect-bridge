const Task = require('../../models/task');

module.exports = {
  create,
  allTasks,
  delete: deleteTask,
  view: getTask,
  update
}

async function create(req, res) {
  req.body.user = req.user;
  const task = await Task.create(req.body);
  res.json(task);
}

async function update(req, res) {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
  const task = await Task.find({user: req.user._id});
  res.json(task);
}

async function getTask(req, res) {
  const task = await Task.findById(req.params.id);
  res.json(task);
}