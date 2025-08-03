const router = require("express").Router();
const base = "api";

router.get(`/${base}`, (req, res) => {
    res.json("API Webpage");
})

const employeeRouter = require("./employee");
const employerRouter = require("./employer");
const jobRouter = require("./job");

module.exports = router;