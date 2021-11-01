const sequelize = require("../config/connection");
const { Water, Sleep, Calories, Exercise, User } = require("../models");

const seedWater = require("./waterSeedData");
const seedSleep = require("./sleepSeedData");
const seedExercise = require("./exerciseSeedData");
const seedCalories = require("./caloriesSeedData");
const seedUser = require("./userSeedData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedWater();

  await seedSleep();

  await seedCalories();

  await seedExercise();

  process.exit(0);
};

seedAll();

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const drivers = await Driver.bulkCreate(driverSeedData);

//   for (const { id } of drivers) {
//     const newLicense = await License.create({
//       driver_id: id,
//     });
//   }

//   for (const car of carSeedData) {
//     const newCar = await Car.create({
//       ...car,
//       driver_id: drivers[Math.floor(Math.random() * drivers.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();
