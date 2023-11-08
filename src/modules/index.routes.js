import { HttpStatus } from "../../enums/httpStatus.js";
import { AppError } from "../../utils/appError.js";
import contactUsRouter from "./contactus/contactus.router.js";
export function init(app) {
  app.use("/api/v1/contactus", contactUsRouter);

  app.all("*", (req, res, next) => {
    next(
      new AppError(
        `can't find this route ${req.originalUrl}`,
        HttpStatus.NotFound
      )
    );
  });
}
