const express = require('express')
const router = express.Router();
require('../DB/conn')
const User = require('../model/userSchema');


router.get('/', (req, res) => {
  res.send("hello world form the router side")
})

// router.post('/', (req, res) => {
//   res.send(req.body);
// })


router.post("/register", async (req, res) => {
  const { email ,name ,age , gender ,mobile ,religionBeliever} = req.body;

  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(422).json({ err: "email already registered" })
    } else {
      const user = new User({ email ,name ,age , gender ,mobile ,religionBeliever});

      const userRegister = await user.save();

      if (userRegister) {
        return res.status(201).json(user)
      }
    }

  } catch (error) {
    console.log(error);
  }

})

module.exports = router;