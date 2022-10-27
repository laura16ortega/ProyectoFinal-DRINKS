"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _AuthMiddleware = _interopRequireDefault(require("../Middleware/AuthMiddleware.js"));

var _userModel = _interopRequireDefault(require("../src/models/userModel.js"));

var _generateToken = _interopRequireDefault(require("../utils/generateToken.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router(); //LOGIN


userRouter.post("/login", (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var _req$body, email, password, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          _context.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 3:
          user = _context.sent;
          _context.t0 = user;

          if (!_context.t0) {
            _context.next = 9;
            break;
          }

          _context.next = 8;
          return regeneratorRuntime.awrap(user.matchPassword(password));

        case 8:
          _context.t0 = _context.sent;

        case 9:
          if (!_context.t0) {
            _context.next = 13;
            break;
          }

          res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            isAdmin: user.isAdmin,
            token: (0, _generateToken["default"])(user._id),
            createdAt: user.createdAt
          });
          _context.next = 15;
          break;

        case 13:
          res.status(401);
          throw new Error("Invalid Email or Password");

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
})); //REGISTER

userRouter.post("/", (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var _req$body2, fullName, email, password, phone_number, userExists, user;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, fullName = _req$body2.fullName, email = _req$body2.email, password = _req$body2.password, phone_number = _req$body2.phone_number;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 3:
          userExists = _context2.sent;

          if (!userExists) {
            _context2.next = 7;
            break;
          }

          res.status(400);
          throw new Error("User already exists");

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].create({
            fullName: fullName,
            email: email,
            password: password,
            phone_number: phone_number
          }));

        case 9:
          user = _context2.sent;

          if (user) {
            res.status(201).json({
              _id: user._id,
              fullName: user.fullName,
              email: user.email,
              isAdmin: user.isAdmin,
              token: (0, _generateToken["default"])(user._id)
            });
          }

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });

}));
/* userRouter.post("/", asyncHandler(async(req,res)=> {
  try{
    const { email } = req.body;
    const userExists = await User.findOne({ email }) 
    if(userExists) {
      res.status(200);

})); // AUTH0 REGISTER/LOGIN AUTHENTICATION TOKEN

userRouter.post("/auth", (0, _expressAsyncHandler["default"])(function _callee3(req, res) {
  var _req$body3, fullName, email, password, phone_number, user, newUser;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, fullName = _req$body3.fullName, email = _req$body3.email, password = _req$body3.password, phone_number = _req$body3.phone_number;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 3:
          user = _context3.sent;

          if (!user) {
            _context3.next = 8;
            break;
          }

          res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            isAdmin: user.isAdmin,
            token: (0, _generateToken["default"])(user._id),
            createdAt: user.createdAt
          });
          _context3.next = 12;
          break;

        case 8:
          _context3.next = 10;
          return regeneratorRuntime.awrap(_userModel["default"].create({
            fullName: fullName,
            email: email,
            password: password,
            phone_number: phone_number
          }));

        case 10:
          newUser = _context3.sent;

          if (newUser) {
            res.status(201).json({
              _id: user._id,
              fullName: user.fullName,
              email: user.email,
              isAdmin: user.isAdmin,
              token: (0, _generateToken["default"])(user._id)
            });
          }


    }
  }catch(err){
    console.error(err);
  }
})) */
//PROFILE

userRouter.get("/profile", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee3(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.user._id));

        case 2:
          user = _context3.sent;

          if (!user) {
            _context3.next = 7;
            break;
          }

          res.json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt
          });
          _context3.next = 9;
          break;

        case 7:
          res.status(404);
          throw new Error("User not found");

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
})); //UPDATE PROFILE

userRouter.put("/profile", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee4(req, res) {
  var user, updateUser;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.user._id));

        case 2:
          user = _context4.sent;

          if (!user) {
            _context4.next = 13;
            break;
          }

          user.fullName = req.body.fullName || user.fullName;
          user.email = req.body.email || user.email;

          if (req.body.password) {
            user.password = req.body.password;
          }

          _context4.next = 9;
          return regeneratorRuntime.awrap(user.save());

        case 9:
          updateUser = _context4.sent;
          res.json({
            _id: updateUser._id,
            fullName: updateUser.fullName,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            createdAt: updateUser.createdAt,
            token: (0, _generateToken["default"])(updateUser._id)
          });
          _context4.next = 15;
          break;

        case 13:
          res.status(404);
          throw new Error("User not found");

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  });
}));
var _default = userRouter;
exports["default"] = _default;
