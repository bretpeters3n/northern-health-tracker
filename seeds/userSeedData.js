const { User } = require("../models");

const userData = [
  {
    email: "bretpetersen@gmail.com",
    password: "p@ssw0rd",
  },
  {
    email: "bretpeterse@gmail.com",
    password: "p@ssw0rd",
  },
  {
    email: "bretpetersen82@gmail.com",
    password: "p@ssw0rd",
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
