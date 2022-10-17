const express = require('express');
const router = express.Router();
const electionsCtrl = require('../../controllers/api/elections');

// call the middleware
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, electionsCtrl.getAll);

router.post('/new', ensureLoggedIn, electionsCtrl.create);

router.delete('/', ensureLoggedIn, electionsCtrl.deleteElections);


module.exports = router;