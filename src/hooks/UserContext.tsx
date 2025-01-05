import { createContext } from "react";

// Definir el contexto con valores iniciales
export const infoUser = createContext<{
  token: string;
  setToken: (token: string) => void;
}>({
  token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYmRiYWEzYy0zNTY1LTQ0MDctYTI0ZC03YjJlMWJlOGI4ZGIiLCJ1c2VybmFtZSI6InVzZXJuYW1lMSIsImlhdCI6MTczNTQ2ODU4MywiZXhwIjoxNzcxNDY4NTgzfQ.MORXwffUYkaXYE1mbZiA1aE18BdJLv7k0EkGIqCJSDE",
    setToken: () => {}, // Función vacía por defecto
});

// Componente proveedor que gestiona el estado
// const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [token, setToken] = useState<string>(
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYmRiYWEzYy0zNTY1LTQ0MDctYTI0ZC03YjJlMWJlOGI4ZGIiLCJ1c2VybmFtZSI6InVzZXJuYW1lMSIsImlhdCI6MTczNTQ2ODU4MywiZXhwIjoxNzcxNDY4NTgzfQ.MORXwffUYkaXYE1mbZiA1aE18BdJLv7k0EkGIqCJSDE"
//   );

//   return (
//     <infoUser.Provider value={{ token, setToken }}>
//       {children}
//     </infoUser.Provider>
//   );
// };

// export default UserProvider;
