import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardSmall from "../components/CardSmall/CardSmall";
import { Character } from "../interfaces/character";
import Paginacion from "../components/Paginacion/Paginacion";
import Spinner from "../components/Spinner/Spinner";
import { useUserContext } from "../context/UserContext";

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const limit = 9;
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(73);
  const [cargando, setCargando] = useState<boolean>(false);
  const { find } = useUserContext();
  useEffect(() => {
    const llamadaApi = async () => {
      setCargando(true);
      const url = `https://apisimpsons.fly.dev/api/personajes/?limit=${limit}&page=${page}`;
      const urlFind = `https://apisimpsons.fly.dev/api/personajes/find/${find}`;
      const response = await fetch(find ? urlFind : url);
      const data = await response.json();
      setTotalPage(data.totalPages);
      setCharacters(data.docs ? data.docs : data.result);
      setCargando(false);
    };
    llamadaApi();
  }, [limit, page, find]);

  return (
    <>
      {cargando ? (
        <Spinner />
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            placeItems: "center",
            mt: 5,
            "@media screen and (max-width: 1280px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0,
            },
            "@media screen and (max-width: 768px)": {
              gridTemplateColumns: "repeat(1, 1fr)",
            },
          }}
        >
          {characters?.map((character: Character) => (
            <CardSmall key={character._id as string} character={character} />
          ))}
        </Box>
      )}
      <Paginacion setPage={setPage} totalPage={totalPage} />
      <Typography
        sx={{
          position: "relative",
          bottom: "0",
          left: "1130px",
          padding: "10px",
        }}
        variant="body2"
        color="initial"
      >
        Lucatoni &copy;. Todos los derechos reservados{" "}
        {new Date().getFullYear()}{" "}
      </Typography>
    </>
  );
}
