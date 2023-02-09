const express = require("express");

const { contacts: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, statusJoiSchema } = require("../../models/contact");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete(
  "/:contactId",
  validation(joiSchema),
  ctrlWrapper(ctrl.removeContact)
);

router.put("/:contactId", ctrlWrapper(ctrl.updateById));

router.patch(
  "/:contactId/favorite",
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
