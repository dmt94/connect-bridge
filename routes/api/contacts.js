const express = require('express');
const router = express.Router();
const contactsCtrl = require('../../controllers/api/contacts');

router.post('/create', contactsCtrl.create);

router.get('/', contactsCtrl.allContacts);

router.get('/:id', contactsCtrl.view);

router.get('/update/:id', contactsCtrl.update);

router.delete('/delete/:id', contactsCtrl.delete);

module.exports = router;