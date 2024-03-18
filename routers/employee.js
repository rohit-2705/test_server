const { createemployee } = require("../controllers/employee");

const EmployeeRouter = require("express").Router();

EmployeeRouter.post("/creation", createemployee); 
module.exports = EmployeeRouter;
