import { useContext } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../context/AuthContext";
import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Bem vindo {user?.email}</h3>

      <button onClick={signOut} >Sair</button>

      <Can permissions={["metrics.list"]}>
        <div>metrics</div>
      </Can>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const api = setupApiClient(ctx);
  const response = await api.get("/me");
  console.log(response);

  return {
    props: {},
  };
});
