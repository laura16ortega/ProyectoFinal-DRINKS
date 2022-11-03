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

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
            image: user.image,
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
  var _req$body2, fullName, email, password, phone_number, image, userExists, user, _res$status$json;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, fullName = _req$body2.fullName, email = _req$body2.email, password = _req$body2.password, phone_number = _req$body2.phone_number, image = _req$body2.image;
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
          return regeneratorRuntime.awrap(_userModel["default"].create(_defineProperty({
            fullName: fullName,
            image: image,
            email: email,
            password: password,
            phone_number: phone_number
          }, "image", image)));

        case 9:
          user = _context2.sent;

          if (user) {
            res.status(201).json((_res$status$json = {
              _id: user._id,
              fullName: user.fullName,
              image: user.image,
              email: user.email,
              isAdmin: user.isAdmin
            }, _defineProperty(_res$status$json, "image", user.image), _defineProperty(_res$status$json, "token", (0, _generateToken["default"])(user._id)), _res$status$json));
          }

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
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

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
})); //PROFILE

userRouter.get("/profile", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee4(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.user._id));

        case 2:
          user = _context4.sent;

          if (!user) {
            _context4.next = 7;
            break;
          }

          res.json(_defineProperty({
            _id: user._id,
            fullName: user.fullName,
            image: user.image,
            email: user.email,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt
          }, "image", user.image));
          _context4.next = 9;
          break;

        case 7:
          res.status(404);
          throw new Error("User not found");

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
})); //GET ALL USERS

userRouter.get("/all", (0, _expressAsyncHandler["default"])(function _callee5(req, res) {
  var keyword, users;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          keyword = req.query.keyword ? {
            name: {
              $regex: req.query.keyword,
              $options: "i"
            }
          } : {};
          _context5.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].find(_objectSpread({}, keyword)));

        case 3:
          users = _context5.sent;
          res.json(users);

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
})); //UPDATE PROFILE

userRouter.put("/profile", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee6(req, res) {
  var user, _res$json2, updateUser;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.user._id));

        case 2:
          user = _context6.sent;

          if (!user) {
            _context6.next = 13;
            break;
          }

          user.fullName = req.body.fullName || user.fullName;
          user.email = req.body.email || user.email;

          if (req.body.password) {
            user.password = req.body.password;
          }

          _context6.next = 9;
          return regeneratorRuntime.awrap(user.save());

        case 9:
          updateUser = _context6.sent;
          res.json((_res$json2 = {
            _id: updateUser._id,
            fullName: updateUser.fullName,
            email: updateUser.email,
            image: updateUser.image,
            isAdmin: updateUser.isAdmin,
            createdAt: updateUser.createdAt
          }, _defineProperty(_res$json2, "image", updateUser.image), _defineProperty(_res$json2, "token", (0, _generateToken["default"])(updateUser._id)), _res$json2));
          _context6.next = 15;
          break;

        case 13:
          res.status(404);
          throw new Error("User not found");

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  });
})); //PATCH PROFILE

userRouter.patch("/profile", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee7(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findById(req.user._id));

        case 3:
          user = _context7.sent;
          Object.assign(user, req.body);
          user.save();
          res.send({
            data: user
          });
          _context7.next = 12;
          break;

        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          res.status(404).send({
            error: "User not found"
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 9]]);
})); //DELETE USER

userRouter["delete"]("/delete", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee8(req, res) {
  var id, user, resultado;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          id = req.body.id;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].findById(id));

        case 3:
          user = _context8.sent;

          if (user) {
            _context8.next = 9;
            break;
          }

          res.status(404);
          throw new Error("Invalid id");

        case 9:
          _context8.next = 11;
          return regeneratorRuntime.awrap(_userModel["default"].deleteOne({
            _id: _mongoose["default"].Types.ObjectId(id)
          }));

        case 11:
          resultado = _context8.sent;
          res.status(201).json({
            message: "User deleted"
          });

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  });
}));
var _default = userRouter;
exports["default"] = _default;