const express = require('express')
const router = express.Router()
const {getAllFeedbacks,createFeedback} = require('../Controllers/Feedback.js')

router.get('/getAllFeedbacks', getAllFeedbacks)
router.post('/createFeedback',createFeedback)
module.exports = router