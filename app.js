const express = require("express");
const APP_SERVER = express();

// INJECTING ALL THE ROUTERS
APP_SERVER.use("/api/signup", require("./routers/user"));
APP_SERVER.use("/api/auth", require("./routers/user"));
APP_SERVER.use("/api/employee", require("./routers/employee"));
module.exports = APP_SERVER;