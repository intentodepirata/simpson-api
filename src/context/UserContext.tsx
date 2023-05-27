import { useState, useContext, createContext } from "react";
import { User, UserContextValue } from "../interfaces/userContext";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext<UserContextValue>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  search: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  find: null,
});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(() => {
    const userFromSessionStorage = sessionStorage.getItem("user");
    return userFromSessionStorage ? JSON.parse(userFromSessionStorage) : null;
  });
  const [find, setFind] = useState("");

  const navigate = useNavigate();

  function logout() {
    setUser(null);
    sessionStorage.removeItem("user");
    navigate("/");
  }

  function login(usuario: User) {
    setUser(usuario);
    sessionStorage.setItem("user", JSON.stringify(usuario));
  }
  function search(userFind: string) {
    setFind(userFind);
  }

  const value: UserContextValue = {
    user,
    find,
    search,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  return useContext(UserContext);
}
