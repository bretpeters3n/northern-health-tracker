const { User } = require("../models");

const userdata = [
  {
    email: "bretpetersen82@gmail.com",
    password: "p@ssw0rd",
  },
  {
    email: "bretpetersen82@gmail.com",
    password: "p@ssw0rd",
  },
  {
    email: "bretpetersen82@gmail.com",
    password: "p@ssw0rd",
  },
];

const seedUser = () => Gallery.bulkCreate(userdata);

module.exports = seedUser;
