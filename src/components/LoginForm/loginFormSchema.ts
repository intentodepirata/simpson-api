import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, "El email de usuario de contener al menos 3 caracteres")
    .email("Por favor introduzca un email valido")
    .required("Requerido"),
  name: yup
    .string()
    .min(3, "El email de usuario de contener al menos 3 caracteres")
    .required("Requerido"),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        "Debe contener un minimo de 5 caracteres, 1 mayuscula, 1 minuscula y 1 numero",
    })
    .required("Requerido"),

});
