import * as yup from "yup";
import { LoginErrors, SignupErrors } from "../../common/constants/errors";
export const signupSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required(LoginErrors.USERNAME_REQUIRED)
      .min(3, LoginErrors.MIN)
      .max(18, LoginErrors.MAX),
    firstname: yup
      .string()
      .required(SignupErrors.FIRSTNAME_REQUIRED)
      .min(3, LoginErrors.MIN)
      .max(18, LoginErrors.MAX),
    lastname: yup
      .string()
      .required(SignupErrors.LASTNAME_REQUIRED)
      .min(2, LoginErrors.MIN)
      .max(18, LoginErrors.MAX),
    email: yup.string().required(SignupErrors.EMAIL_REQURED).email(SignupErrors.EMAIL_INVALID),

    password: yup.string().required(LoginErrors.PASSWORD_REQUIRED),
  })
  .required();
