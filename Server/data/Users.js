import bcrypt from "bcryptjs";

const users = [
  {
    fullName: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
    phone_number: 3147800804,
  },
  {
    fullName: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("12345", 10),
    phone_number: 3107800804,
  },
];

export default users;
