const router = require("express").Router();

const countryRouter = require("./country.route");
const stateRouter = require("./state.route");
const cityRouter = require("./city.route");
const localityRouter = require("./locality.route");

router.use("/country", countryRouter);
router.use("/state", stateRouter);
router.use("/city", cityRouter);
router.use("/locality", localityRouter);


module.exports = router;
