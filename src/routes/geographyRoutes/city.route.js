const cityController = require("../../controllers/geographyControllers/city.controller");
//const authentication = require("../../middleware/authentication.middleware");
//const authorizeRole = require("../../middleware/authorization.middleware");
const validate = require("../../middleware/validate.middleware");
const {
  InsertCitySchema,
  updateCitySchema,
} = require("../../validation/geography/city.validation");

const router = require("express").Router();

// route : "/geography/city/get"
router.post(
  "/get",
  //authentication, // everyone can access this
  cityController.getCity,
);

// route : "/geography/city/delete"
router.post(
  "/delete",
  //authentication,
  //authorizeRole("SUPER_ADMIN"),
  cityController.deleteCity,
);

// route : "/geography/city/create"
router.post(
  "/Insert",
  //authentication,
  //authorizeRole("SUPER_ADMIN"),
  validate(InsertCitySchema),
  cityController.InsertCity,
);

// route : "/geography/city/update"
router.post(
  "/update",
 // authentication,
  //authorizeRole("SUPER_ADMIN"),
  validate(updateCitySchema),
  cityController.updateCity,
);

module.exports = router;
