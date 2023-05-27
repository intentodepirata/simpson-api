import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Character } from "../../interfaces/character";

const CardCharacter = ( character:Character  ) => {
  const {
    _id,
    Nombre,
    Estado,
    Genero,
    Historia,
    Imagen,
    Ocupacion,
  } = character;
  return (
    <Box
      component="article"
      sx={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "rgb(60, 62, 68)",
        borderRadius: "0.5rem",
        margin: "0.75rem",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      }}
    >
     <Box sx={{ flex: " 2 1 0%", width: " 100%", overflow: "hidden" }}>
        <Box component={Link} to={`/character/${_id}`}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              margin: 0,
              objectPosition: "center",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              "&:hover ": {
                transform: "scale(1.2)",
              },
            }}
            component="img"
            src={Imagen}
            alt={Nombre}
          />
        </Box>
      </Box>
      <Box
        sx={{
          flex: "3 1 0%",
          position: "relative",
          padding: "0.75rem",
          color: "rgb(255, 255, 255)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            WebkitBoxPack: "start",
            justifyContent: "flex-start",
          }}
        >
          <Link to={`/character/${_id}`} rel="noopener noreferrer">
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "800" }}
              variant="h2"
              color="white"
            >
              {Nombre}
            </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              WebkitBoxAlign: "center",
              alignItems: "center",
              textTransform: "capitalize",
            }}
          >
            <Box
              sx={{
                height: "0.5rem",
                width: "0.5rem",
                marginRight: "0.375rem",
                background:
                  Estado === "Vivo" ? "rgb(85, 204, 68)" : "rgb(214, 61, 46)",
                borderRadius: "50%",
              }}
            ></Box>{" "}
            {Estado} - {Genero}
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1 1 0%",
            display: "flex",
            flexDirection: "column",
            WebkitBoxPack: "center",
            justifyContent: "center",
          }}
        >
        </Box>
        <Box sx={{ flex: "1 1 0%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "rgb(158, 158, 158)" }}>Historia:</Box>
          <Box
            sx={{ color: "rgb(245, 245, 245)" }}

          >
            {Historia}
          </Box>
        </Box>
        <Box sx={{ flex: "1 1 0%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ color: "rgb(158, 158, 158)" }}>Historia:</Box>
          <Box
            sx={{ color: "rgb(245, 245, 245)" }}

          >
            {Ocupacion}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardCharacter;
