import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Bem vindo {user?.email}</h3>
    </div>
  );
}
