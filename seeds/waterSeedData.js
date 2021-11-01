const { Water } = require("../models");

const waterdata = [
  {
    mon_amount: 8,
    tues_amount: 9,
    wed_amount: 7,
    thurs_amount: 6,
    fri_amount: 8,
    sat_amount: 7,
    sun_amount: 6,
    user_id: 1,
  },
  {
    mon_amount: 6,
    tues_amount: 6,
    wed_amount: 8,
    thurs_amount: 5,
    fri_amount: 7,
    sat_amount: 8,
    sun_amount: 9,
    user_id: 2,
  },
  {
    mon_amount: 10,
    tues_amount: 9,
    wed_amount: 8,
    thurs_amount: 7,
    fri_amount: 6,
    sat_amount: 5,
    sun_amount: 4,
    user_id: 3,
  },
];

const seedWater = () => Gallery.bulkCreate(gallerydata);

module.exports = seedWater;
