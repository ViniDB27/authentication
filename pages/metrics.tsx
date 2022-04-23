import { setupApiClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  return (
    <div>
      <h1>Aqui teem metricas</h1>
    </div>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const api = setupApiClient(ctx);
    const response = await api.get("/me");
    console.log(response);

    return {
      props: {},
    };
  },
  {
    permissions: ["metric.list"],
    roles: ["administrator"],
  }
);
