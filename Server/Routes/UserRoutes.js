import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import User from "../src/models/userModel.js";
import generateToken from "../utils/generateToken.js";


const userRouter = express.Router();

//LOGIN
userRouter.post(
	'/login',
	asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user && (await user.matchPassword(password))) {
			res.json({
				_id: user._id,
				fullName: user.fullName,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id),
				createdAt: user.createdAt,
			});
		} else {
			res.status(401);
			throw new Error('Invalid Email or Password');
		}
	})
);

//REGISTER
userRouter.post(
	'/',
	asyncHandler(async (req, res) => {
		const { fullName, email, password, phone_number } = req.body;
		const userExists = await User.findOne({ email });

		if (userExists) {
			res.status(400);
			throw new Error('User alrady exists');
		}

		const user = await User.create({
			fullName,
			email,
			password,
			phone_number,
		});

		if (user) {
			res.status(201).json({
				_id: user._id,
				fullName: user.fullName,
				email: user.email,
				isAdmin: user.isAdmin,
				token: generateToken(user._id),
			});
		}
	})
);
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
        email: user.email,
        isAdmin: user.isAdmin,

        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);

export default userRouter;
