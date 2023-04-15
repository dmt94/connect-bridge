const express = require('express');
const router = express.Router();
const applicationsCtrl = require('../../controllers/api/applications');

router.post('/create', applicationsCtrl.create);

router.get('/', applicationsCtrl.allApplications);

router.get('/:id', applicationsCtrl.view);

router.put('/update/:id', applicationsCtrl.update);

router.delete('/delete/:id', applicationsCtrl.delete);

module.exports = router;