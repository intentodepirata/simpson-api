import { Routes, Route } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import Home from "./views/Home";
import Characters from "./views/Characters";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<HomeLayout />}>
          <Route index element={<Characters />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
