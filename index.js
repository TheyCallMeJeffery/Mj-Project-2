const mongoose = require('mongoose');


const initializeDb = async () => {
  const dbUri = 'mongodb://localhost:27017/quizdb'; 
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};


const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = {
  initializeDb,
  Question,
};
