require("dotenv").config("../.env");
const dev = {
  app: {
    port: process.env.PORT || 8000,
  },
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/USER_CURD_DB",
  },
};
module.exports = dev;
