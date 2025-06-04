const countryController = require("../../controllers/geographyControllers/country.controller");
//const authentication = require("../../middleware/authentication.middleware");
//const authorizeRole = require("../../middleware/authorization.middleware");
const validate = require("../../middleware/validate.middleware");
const {
  InsertCountrySchema,
  updateCountrySchema,
} = require("../../validation/geography/country.validation");

const router = require("express").Router();

// route : "/geography/country/get"
router.post(
  "/get",
  //authentication, // everyone can access this
  countryController.getCountry,
);

// route : "/geography/country/delete"
router.post(
  "/delete",
  //authentication,
  //authorizeRole("SUPER_ADMIN"),
  countryController.deleteCountry,
);

// route : "/geography/country/create"
router.post(
  "/Insert",
 // authentication,
  //authorizeRole("SUPER_ADMIN"),
  validate(InsertCountrySchema),
  countryController.InsertCountry,
);

// route : "/geography/country/update"
router.post(
  "/update",
  //authentication,
 // authorizeRole("SUPER_ADMIN"),
  validate(updateCountrySchema),
  countryController.updateCountry,
);

module.exports = router;
