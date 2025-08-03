const { EmployeeController } = require("../controllers");
const employeeRouter = require("express").Router();

employeeRouter.get("/", employeeRouter.getEmployee);
employeeRouter.post("/", employeeRouter.addEmployee);
employeeRouter.get("/search", employeeRouter.searchEmployee);
employeeRouter.get("/:id", employeeRouter.getEmployeeById);
employeeRouter.put("/:id", employeeRouter.editEmployee);
employeeRouter.delete("/:id", employeeRouter.deleteEmployee);

module.exports = employeeRouter;