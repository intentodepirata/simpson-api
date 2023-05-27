import { Button, TextField, Typography, Paper } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import { initialValues } from "./utils/initialValues";
import { loginFormSchema } from "./loginFormSchema";
import { FormValues } from "./types/FormValues";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { User } from "../../interfaces/userContext";

export default function LoginForm() {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: loginFormSchema,
      onSubmit: (values: FormValues, actions: FormikHelpers<FormValues>) => {
        login(values as User);
        navigate("/characters");
        actions.resetForm();
      },
    });
  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "whitesmoke",
        p: 4,
        minWidth: "420px",
      }}
    >
      <Typography
        mb={2}
        fontWeight={700}
        component={"h1"}
        variant="h4"
        color="initial"
      >
        Iniciar Sesion
      </Typography>
      <Typography mb={1} variant="h6" color="initial">
        Inicia sesion con tus datos anteriores
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        id="name"
        name="name"
        label="Nombre"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        id="email"
        name="email"
        label="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        id="password"
        name="password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        sx={{ mb: 2 }}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Iniciar sesion
      </Button>
      {/* <pre>{JSON.stringify({ values, errors }, null, 1)}</pre> */}
    </Paper>
  );
}
