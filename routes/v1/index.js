const express = require('express');

const router = express.Router();
const userRoutes = require('./userRoutes.js').default;

router.use('/user', userRoutes);

module.exports = router;