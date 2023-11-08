import { Router } from "express";
import { validation } from "../../../middleware/validation.js";

import { createContactUsSchema, deleteContactUsSchema, getContactUsSchema, updateContactUsSchema } from "./contactus.validation.js";
import { createContactUS, deleteContactUS, getContactUS, getAllContactUSs, updateContactUS } from "./contactus.controller.js";

const contactUsRouter = Router();

contactUsRouter
  .route("/")
  .post(validation(createContactUsSchema), createContactUS)
  .get(
    getAllContactUSs
  );

contactUsRouter
  .route("/:id")
  .get(
    validation(getContactUsSchema), getContactUS)
  .delete(
    validation(deleteContactUsSchema),
    deleteContactUS
  )
  .put(
    validation(updateContactUsSchema), updateContactUS);

export default contactUsRouter;
