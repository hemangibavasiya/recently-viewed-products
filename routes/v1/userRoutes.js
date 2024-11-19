const express = require('express');
const router = express.Router();
const { getRecentlyViewedProducts } = require('../controllers/userController.js');

// Route to get recently viewed products for a user
router.get('/:userId/recentlyViewed', getRecentlyViewedProducts);

module.exports = router;