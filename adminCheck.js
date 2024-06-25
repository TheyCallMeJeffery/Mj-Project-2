
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const adminCheck = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = await User.findById(decoded.userId);
        if (user && user.role === 'admin') {
            req.user = user;
            next();
        } else {
            res.status(403).json({ message: 'Requires admin role' });
        }
    } catch (error) {
        res.status(403).json({ message: 'Failed to authenticate token' });
    }
};

module.exports = adminCheck;
