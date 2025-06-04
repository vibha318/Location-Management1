
const router = require("express").Router();

const geographyRouter = require("./geographyRoutes");


router.use("/geography", geographyRouter);


module.exports = router;
