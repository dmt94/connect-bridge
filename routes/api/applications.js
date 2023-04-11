const express = require('express');
const router = express.Router();
const applicationsCtrl = require('../../controllers/api/applications');

router.post('/create', applicationsCtrl.create);

router.get('/', applicationsCtrl.allApplications);

router.delete('/delete/:id', applicationsCtrl.deleteApplication);

module.exports = router;