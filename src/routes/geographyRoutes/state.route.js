const stateController = require("../../controllers/geographyControllers/state.controller");
//const authentication = require("../../middleware/authentication.middleware");
//const authorizeRole = require("../../middleware/authorization.middleware");
const validate = require("../../middleware/validate.middleware");
const {
  InsertStateSchema,
  updateStateSchema,
} = require("../../validation/geography/state.validation");

const router = require("express").Router();

// route : "/geography/state/get"
router.post(
  "/get",
  //authentication, // everyone can access this
  stateController.getState,
);

// route : "/geography/state/delete"
router.post(
  "/delete",
  //authentication,
  //authorizeRole("SUPER_ADMIN"),
  stateController.deleteState,
);

// route : "/geography/state/create"
router.post(
  "/Insert",
  //authentication,
  //authorizeRole("SUPER_ADMIN"),
  validate(InsertStateSchema),
  stateController.InsertState,
);

// route : "/geography/state/update"
router.post(
  "/update",
  //authentication,
  //authorizeRole("SUPER_ADMIN"),
  validate(updateStateSchema),
  stateController.updateState,
);

module.exports = router;
