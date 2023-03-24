const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');

router.get('/', function(req, res) {
    res.redirect('/movies')
})

router.post('/movies/:id/reviews', reviewsCtrl.create);




module.exports = router;