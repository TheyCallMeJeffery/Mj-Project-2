
const express = require('express');
const Quiz = require('../models/quiz');
const adminCheck = require('../middleware/adminCheck');

const router = express.Router();


router.post('/create', adminCheck, async (req, res) => {
    const { question, options, answer } = req.body;
    try {
        const newQuiz = new Quiz({ question, options, answer });
        await newQuiz.save();
        res.status(201).json({ message: 'Quiz created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


router.get('/', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
