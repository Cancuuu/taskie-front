import DepartmentForm from "../components/DepartmentForm/DepartmentForm";
import Grid from "../components/grid/grid";
import Toolbar from "../components/Toolbar/Toolbar";
import Layout from "../layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout>
        <Toolbar page="add" />
        <DepartmentForm />
      </Layout>
    </>
  );
}
