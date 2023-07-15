const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const routes = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { hasFormSubmit } = require("@testing-library/user-event/dist/utils");
const { Hash } = require("crypto");
const { error } = require("console");

const JWT_SECRET_KEY = "abhi_ka_liya_simple_ha";

// ROUTE 1: Create a user using : POST "api/auth/createUser" doesnot require Auth
routes.post(
  "/createUser",
  [
    body("name", "Name should be more then 3 length").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password Should be more then 5").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // IF THERE IS A ERROR , RETURN BAD REQUEST AND THE ERROR
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    // CHECK WETHER THE USER WITH THIS EMAIL EXISTS ALREADY
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "SORRY THIS EMAIL ID ALREADY EXISTS!" });
      }

      // CREATING A SECURE PASSWORD USING SALT & HASHING BY BCRYPTJS
      const salt = await bcryptjs.genSalt(10);
      const secPass = await bcryptjs.hash(req.body.password, salt);
      // CREATE A NEW USER
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      // .then(user=> res.json(user))
      // .catch(err=>{
      //   console.log(err);
      //   res.json({"error":"Enter a differnt Email ID ","message":err.message});
      // })

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      console.table(authToken);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("INTERNAL SERVER ERROR ");
    }
  }
);

//ROUTE 2: Authantication a user using : POST "api/auth/login" doesnot require Auth
routes.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // IF THERE IS A ERROR , RETURN BAD REQUEST AND THE ERROR
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.send({ errors: result.array() });
    }
    // CHECK WETHER THE USER WITH THIS EMAIL EXISTS ALREADY
    const { email, password } = req.body;
    try {
      let user = await User.findOne({email});
      if (!user)
        return res
          .status(400)
          .json({error:"PLEASE TRY TO LOGIN WITH CORRECT CREDENTIALS"});

      const passwrodCompare =await bcryptjs.compare(password, user.password);
      if (!passwrodCompare)
        return res
          .status(400)
          .json({error:"PLEASE TRY TO LOGIN WITH CORRECT CREDENTIALS"});
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET_KEY);
      console.table(authToken);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("INTERNAL SERVER ERROR ");
    }
  }
);

//ROUTE 3: Get loggedin user details : POST "api/auth/login"  require Login 
try {
  const userId='todo';
  const user= User.findById(userId);

  
} catch (error) {
  console.error(error.message);
  res.status(500).send("INTERNAL SERVER ERROR ");
}


module.exports = routes;
