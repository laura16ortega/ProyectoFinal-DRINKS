"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _productModel = _interopRequireDefault(require("../src/models/productModel.js"));

var _AuthMiddleware = _interopRequireDefault(require("../Middleware/AuthMiddleware.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productRoute = _express["default"].Router(); //GET ALL PRODUCTS


productRoute.get("/", (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var keyword, products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          keyword = req.query.keyword ? {
            name: {
              $regex: req.query.keyword,
              $options: "i"
            }
          } : {};
          _context.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].find(_objectSpread({}, keyword)));

        case 3:
          products = _context.sent;
          res.json(products);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
})); //GET SINGLE PRODUCT

productRoute.get("/:id", (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].findById(req.params.id));

        case 2:
          product = _context2.sent;

          if (!product) {
            _context2.next = 7;
            break;
          }

          res.json(product);
          _context2.next = 8;
          break;

        case 7:
          throw new Error("Product not found");

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
})); //PRODUCT REVIEW

productRoute.post("/:id/review", _AuthMiddleware["default"], (0, _expressAsyncHandler["default"])(function _callee3(req, res) {
  var _req$body, rating, comment, product, alreadyReviewed, review;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, rating = _req$body.rating, comment = _req$body.comment;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].findById(req.params.id));

        case 3:
          product = _context3.sent;

          if (!product) {
            _context3.next = 18;
            break;
          }

          alreadyReviewed = product.reviews.find(function (r) {
            return r.user.toString() === req.user._id.toString();
          });

          if (!alreadyReviewed) {
            _context3.next = 9;
            break;
          }

          res.status(400);
          throw new Error("Product already reviewed");

        case 9:
          review = {
            fullName: req.user.fullName,
            rating: Number(rating),
            comment: comment,
            user: req.user._id
          };
          product.reviews.push(review);
          product.numReviews = product.reviews.length;
          product.rating = product.reviews.reduce(function (acc, item) {
            return item.rating + acc;
          }, 0) / product.reviews.length;
          _context3.next = 15;
          return regeneratorRuntime.awrap(product.save());

        case 15:
          res.status(201).json({
            message: "Review added"
          });
          _context3.next = 19;
          break;

        case 18:
          throw new Error("Product not found");

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  });
}));
var _default = productRoute;
exports["default"] = _default;