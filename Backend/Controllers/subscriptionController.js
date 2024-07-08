const Instructor = require('../DataBase/Models/Instructor');

const subscriptionController = {
    // Save subscription details
    async saveSubscription(req, res) {
        const { instructorId, subscription } = req.body;

        try {
            const instructor = await Instructor.findByPk(instructorId);

            if (instructor) {
                instructor.subscription = subscription;
                await instructor.save();
                return res.status(200).json({ message: 'Subscription saved successfully' });
            } else {
                return res.status(404).json({ error: 'Instructor not found' });
            }
        } catch (error) {
            console.error('Error saving subscription:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Retrieve subscription details
    async getSubscription(req, res) {
        const { instructorId } = req.params;

        try {
            const instructor = await Instructor.findByPk(instructorId);

            if (instructor) {
                return res.status(200).json(instructor.subscription);
            } else {
                return res.status(404).json({ error: 'Instructor not found' });
            }
        } catch (error) {
            console.error('Error retrieving subscription:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = subscriptionController;
