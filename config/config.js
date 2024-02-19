require("dotenv").config("../.env");
const dev = {
  app: {
    port: process.env.PORT || 8000,
  },
  db: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/USER_CURD_DB",
  },
  token: {
    key: process.env.SECRET_KEY || "this_is_very_SECRET_KEY",
  },
};
module.exports = dev;
