import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Container, TextField, InputAdornment, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function ButtonAppBar() {
  const { user, logout, search } = useUserContext();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    search(searchValue);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "rgb(255, 213, 33)" }}
        component={"header"}
        position="static"
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            gap: "40px",
            "@media screen and (max-width: 1280px)": {
              flexDirection: "column",
              gap: 0,
            },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{
              mr: 2,
              "@media screen and (max-width: 1280px)": {
                display: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="primary"
            fontWeight={700}
            variant="h6"
            component="div"
          >
            The Simpson APP
          </Typography>
          <Box
            flexGrow={1}
            component={"form"}
            onSubmit={handleSearchSubmit}
            sx={{
              "@media screen and (max-width: 1280px)": {
                order: "1",
              },
            }}
          >
            <TextField
              fullWidth
              value={searchValue}
              onChange={handleSearchChange}
              variant="outlined"
              label="Buscar personajes por nombre"
              size="small"
              color="primary"
              margin="normal"
              sx={{ backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit" aria-label="search" size="large">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Typography
            color="primary"
            fontWeight={700}
            variant="h6"
            component="div"
            marginRight={4}
          >
            {user?.name && `Bienvenido  ${user?.name}`}
          </Typography>
          <Button
            variant="contained"
            onClick={() => user?.name && logout()}
            color="primary"
            sx={{
              "@media screen and (max-width: 1280px)": {
                order: "-1",
                my: 1,
              },
            }}
          >
            {user?.name ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth={"xl"}>
        <Outlet />
      </Container>
    </>
  );
}
