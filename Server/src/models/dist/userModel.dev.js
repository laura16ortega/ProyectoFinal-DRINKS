"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    "default": false
  },
  phone_number: {
    type: Number,
    required: true
  },
  address: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
}); //LOGIN


userSchema.methods.matchPassword = function _callee(enterPassword) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_bcryptjs["default"].compare(enterPassword, this.password));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
}; //REGISTER


userSchema.pre('save', function _callee2(next) {
  var salt;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!this.isModified('password')) {
            next();
          }

          _context2.next = 3;
          return regeneratorRuntime.awrap(_bcryptjs["default"].genSalt(10));

        case 3:
          salt = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(_bcryptjs["default"].hash(this.password, salt));

        case 6:
          this.password = _context2.sent;

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this);
});

var User = _mongoose["default"].model('User', userSchema);

var _default = User;
exports["default"] = _default;