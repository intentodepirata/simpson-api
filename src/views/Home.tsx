import { Box, Container, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <>
        <Box
          component={"div"}
          sx={{
            width: "689px",
            height: "471.5px",
            backgroundImage: "url(/thesimpson.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 83px right 60px",
            backgroundSize: "100% ",
            backgroundColor: "transparent",
            position: "relative",
          }}
        ></Box>
        <LoginForm />
      </>
      <Typography
        sx={{ position: "fixed", bottom: "0", right: "0", padding: "10px" }}
        variant="body2"
        color="initial"
      >
        Lucatoni &copy;. Todos los derechos reservados{" "}
        {new Date().getFullYear()}{" "}
      </Typography>
    </Container>
  );
}
