
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, 'SECRET_KEY');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

const adminAuth = (req, res, next) => {
  auth(req, res, () => {
    if (req.user.role === 'admin') {
      next();
    } else {
      res.status(403).send({ message: 'Forbidden' });
    }
  });
};

module.exports = { auth, adminAuth };
