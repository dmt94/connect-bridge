const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks');

router.post('/create', tasksCtrl.create);

router.get('/', tasksCtrl.allTasks);

router.get('/:id', tasksCtrl.view);

router.put('/update/:id', tasksCtrl.update);

router.delete('/delete/:id', tasksCtrl.delete);

module.exports = router;