// routes/api/users.js

const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

// POST /api/users
router.post('/', usersCtrl.create);

module.exports = router;