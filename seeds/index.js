// const { Water, Sleep, Calories, Exercise, User } = require("../models");

const seedWater = require("./waterSeedData");
const seedSleep = require("./sleepSeedData");
const seedExercise = require("./exerciseSeedData");
const seedCalories = require("./caloriesSeedData");
const seedUser = require("./userSeedData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  console.log("\n----- DATABASE START -----\n");
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");

  await seedWater();
  console.log("\n----- WATER SEEDED -----\n");

  await seedSleep();
  console.log("\n----- SLEEP SEEDED -----\n");

  await seedCalories();
  console.log("\n----- CALORIES SEEDED -----\n");

  await seedExercise();
  console.log("\n----- EXERCISE SEEDED -----\n");

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
