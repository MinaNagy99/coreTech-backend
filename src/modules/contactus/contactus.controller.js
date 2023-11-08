import { ContactUS } from "../../../database/models/contactus.model.js";
import { catchAsyncError } from "../../../middleware/catchAsyncError.js";
import { contactusTemplate } from "../../../utils/contactusTemplate.html.js";
import {
  createRecord,
  deleteRecord,
  getRecord,
  updateRecord,
} from "../../../utils/crudFactory.js";
import { getAllWithApiFeatures } from "../../../utils/getAllWithApiFeatures.js";
import { sendEmail } from "../../../utils/sendEmail.js";

const modelName = "ContactUS";

export const createContactUS = catchAsyncError(async (req, res, next) => {

  const { name, message, phone, email } = req.body
  createRecord(modelName, ContactUS, req, res);
  sendEmail({ recipientEmail: email, emailSubject: "اريد التواصل معك", emailContent: contactusTemplate(name, phone, message) });

});

export const getAllContactUSs = getAllWithApiFeatures(ContactUS);

export const updateContactUS = catchAsyncError(async (req, res, next) => {

  updateRecord(modelName, ContactUS, req, res);
});

export const deleteContactUS = catchAsyncError(async (req, res, next) => {

  deleteRecord(modelName, ContactUS, req, res);
});

export const getContactUS = catchAsyncError(async (req, res, next) => {
  getRecord(modelName, ContactUS, req, res);
});


