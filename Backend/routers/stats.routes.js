


const express = require("express");
const { detailedStats } = require("../controllers/stats.controller");
const auth = require("../middleware/auth");

const StatsRouter = express.Router();

StatsRouter.get("/detailed-stats", detailedStats);

module.exports = StatsRouter;
