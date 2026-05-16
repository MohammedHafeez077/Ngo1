const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const { seedDatabase } = require("../config/seed");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const runSeed = async () => {
  try {
    await connectDB();
    await seedDatabase();
    console.log("Database seeding completed.");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

runSeed();
