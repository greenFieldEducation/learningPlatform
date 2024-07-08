const Feedback = require('../DataBase/Models/Feedback.js')

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll()
    res.status(200).json(feedbacks)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const createFeedback = async (req, res) => {
  console.log(req.body);
  try {
    const newFeedback = await Feedback.create(req.body)
    res.status(201).json(newFeedback)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

module.exports = {createFeedback , getAllFeedbacks}



