const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const fetchuser = (req, res, next) => {

  // Get the user from the JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token)
    res.status(401).send({ error: "Plase Authenticate using valid Token" });
  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Plase Authenticate using valid Token" });
  }
};

module.exports = fetchuser;
