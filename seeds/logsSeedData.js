const { Logs } = require("../models");

const LogsData = [
  {
    user_id: 1,
    day: new Date('10/1/2021'),
    calorie: 1000,
    exercise: 30,
    sleep: 8,
    water: 8,
  },
  {
    user_id: 1,
    day: new Date('10/2/2021'),
    calorie: 2000,
    exercise: 60,
    sleep: 7,
    water: 8,
  },
  {
    user_id: 1,
    day: new Date('10/3/2021'),
    calorie: 1500,
    exercise: 20,
    sleep: 8,
    water: 5,
  },
  
];

const seedLogs = () => Logs.bulkCreate(LogsData);

module.exports = seedLogs;
