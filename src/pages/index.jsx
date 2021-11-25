import Grid from "../components/grid/grid";
import Toolbar from "../components/Toolbar/Toolbar";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Toolbar />
        <Grid />
      </Layout>
    </>
  );
}
