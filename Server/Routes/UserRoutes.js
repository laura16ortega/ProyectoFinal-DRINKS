import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import User from "../src/models/userModel.js";
import generateToken from "../utils/generateToken.js";
import mongoose from "mongoose";

const userRouter = express.Router();

//LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        image: user.image,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

//REGISTER
userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
    const { fullName, email, password, phone_number, image } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({
      fullName,
      image,
      email,
      password,
      phone_number,
      image,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        image: user.image,
        email: user.email,
        isAdmin: user.isAdmin,
        image: user.image,
        token: generateToken(user._id),
      });
    }
  })
);
/* userRouter.post("/", asyncHandler(async(req,res)=> {
  try{
    const { email } = req.body;
    const userExists = await User.findOne({ email })
    if(userExists) {
      res.status(200);

    }
  }catch(err){
    console.error(err);
  }
})) */
//PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        image: user.image,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        image: user.image,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);
//GET ALL USERS
userRouter.get(
  "/all",
  asyncHandler(async (req, res) => {
    const keyword = req.query.keyword
      ? { name: { $regex: req.query.keyword, $options: "i" } }
      : {};
    const users = await User.find({ ...keyword });
    res.json(users);
  })
);

//UPDATE PROFILE
userRouter.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.fullName = req.body.fullName || user.fullName;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        fullName: updateUser.fullName,
        email: updateUser.email,
        image: updateUser.image,
        isAdmin: updateUser.isAdmin,
        createdAt: updateUser.createdAt,
        image: updateUser.image,
        token: generateToken(updateUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

//PATCH PROFILE
userRouter.patch(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      Object.assign(user, req.body);
      user.save();
      res.send({ data: user });
    } catch (error) {
      res.status(404).send({ error: "User not found" });
    }
  })
);
//DELETE USER
userRouter.delete(
  "/delete",
  protect,
  asyncHandler(async (req, res) => {
    const { id } = req.body;
    const user = await User.findById(id);
    if (!user) {
      res.status(404);
      throw new Error("Invalid id");
    } else {
      const resultado = await User.deleteOne({
        _id: mongoose.Types.ObjectId(id),
      });
      res.status(201).json({ message: "User deleted" });
    }
  })
);

export default userRouter;
