const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST : http://localhost:3001/api/users
router.post('/', usersCtrl.create);

module.exports = router;