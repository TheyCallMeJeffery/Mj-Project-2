
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));


mongoose.connect('mongodb://localhost:27017/quizdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));


app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/public/admin.html');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
