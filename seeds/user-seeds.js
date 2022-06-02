const { User } = require("../models");

const userData = [
  {
    username: "Jared",
    password: "password123",
  },
  {
    username: "Tera",
    password: "password321",
  },
  {
    username: "Kyle",
    password: "password789",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
