const { JobController } = require("../controllers");
const jobRouter = require("express").Router();

jobRouter.get("/", jobRouter.getJob);
jobRouter.post("/", jobRouter.addJob);
jobRouter.get("/search", jobRouter.searchJob);
jobRouter.get("/:id", jobRouter.getJobById);
jobRouter.put("/:id", jobRouter.editJob);
jobRouter.delete("/:id", jobRouter.deleteJob);

module.exports = jobRouter;