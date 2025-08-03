const { EmployerController } = require("../controllers");
const employerRouter = require("express").Router();

employerRouter.get("/", employerRouter.getEmployer);
employerRouter.post("/", employerRouter.addEmployer);
employerRouter.get("/search", employerRouter.searchEmployer);
employerRouter.get("/:id", employerRouter.getEmployerById);
employerRouter.put("/:id", employerRouter.editEmployer);
employerRouter.delete("/:id", employerRouter.deleteEmployer);

module.exports = employerRouter;