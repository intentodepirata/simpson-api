import { Box, Typography } from "@mui/material";
import { Character } from "../../interfaces/character";

interface CardSmallProps {
  character: Character;
}

const CardSmall: React.FC<CardSmallProps> = ({ character }) => {
  const { Nombre, Estado, Genero, Historia, Imagen, Ocupacion } = character;

  return (
    <Box
      component="article"
      sx={{
        maxWidth: "450px",
        height: "350px",
        display: "flex",
        overflow: "hidden",
        background: "rgb(255, 213, 33)",
        borderRadius: "0.5rem",
        margin: "0.75rem",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -2px",
        "@media screen and (max-width: 420px)": {
          flexDirection: "column",
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Box
          component={"img"}
          src={Imagen}
          alt={Nombre}
          sx={{
            maxHeight: "340px",
            objectFit: "scale-down",
            transition: "transform 0.6s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          position: "relative",
          padding: "0.75rem",
          color: "primary",
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          scrollbarWidth: "unset",
          scrollbarColor: "transparent transparent",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "1.5rem", fontWeight: 800, color: "primary" }}
          >
            {Nombre}
          </Typography>
          <Box
            sx={{
              display: "flex",
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
            />
            {Estado} - {Genero}
          </Box>
        </Box>
        <Box sx={{ marginTop: 0.5 }}>
          <Typography sx={{ fontWeight: 700, color: "blue" }}>
            Historia:
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            {Historia}
          </Typography>
        </Box>
        <Box sx={{ marginTop: "auto" }}>
          <Typography sx={{ fontWeight: 700, color: "blue" }}>
            Ocupacion:
          </Typography>
          <Typography variant="body2" sx={{ color: "black" }}>
            {Ocupacion}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardSmall;
