const Feedback = require('../DataBase/Models/Feedback.js')

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll()
    res.status(200).json(feedbacks)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = getAllFeedbacks