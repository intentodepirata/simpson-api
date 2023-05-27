export interface User {
    email: string;
    password: string;
    name: string;
  }
  
 export interface UserContextValue {
    user: User | null;
    search: (userFind:string) => void;
    login: (usuario: User) => void;
    logout: () => void;
    find: string |null
  }
  