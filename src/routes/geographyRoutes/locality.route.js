const localityController = require("../../controllers/geographyControllers/locality.controller");
//const authentication = require("../../middleware/authentication.middleware");
//const authorizeRole = require("../../middleware/authorization.middleware");
const validate = require("../../middleware/validate.middleware");
const {
  InsertlocalitySchema,
  updateLocalitySchema,
} = require("../../validation/geography/locality.validation");

const router = require("express").Router();

// route : "/geography/locality/get"
router.post(
  "/get",
  //authentication, // everyone can access this
  localityController.getLocality,
);

// route : "/geography/locality/delete"
router.post(
  "/delete",
  //authorizeRole("SUPER_ADMIN"), // Optional: if only admin can delete
  localityController.deleteLocality,
);

// route : "/geography/locality/create"
router.post(
  "/Insert",
 // authentication,
  //authorizeRole("SUPER_ADMIN"),
  validate(InsertlocalitySchema),
  localityController.InsertLocality,
);

// route : "/geography/locality/update"
router.post(
  "/update",
 // authentication,
 // authorizeRole("SUPER_ADMIN"),
  validate(updateLocalitySchema),
  localityController.updateLocality,
);

module.exports = router;
