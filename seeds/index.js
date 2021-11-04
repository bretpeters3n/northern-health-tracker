const seedUser = require("./userSeedData");
const seedLogs = require("./logsSeedData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  console.log("\n----- DATABASE START -----\n");
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USERS SEEDED -----\n");
  
  await seedLogs();
  console.log("\n----- LOGS SEEDED -----\n");

  process.exit(0);
};

seedAll();