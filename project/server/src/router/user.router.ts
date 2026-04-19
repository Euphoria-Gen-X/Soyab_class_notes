const express = require("express");
const router = express.Router();
const {Profile} = require("../controller/user.controller");

//middleware is extra secuirity layer which is used to check the request before it reaches the controller   
const userMiddleware = require("../middleware/user.middleware");
router.get('/profile/:username/:age',userMiddleware,Profile);
module.exports = router;