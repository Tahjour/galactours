import Head from "next/head";
import { Fragment } from "react";
import MainLayout from "../../components/0_layout/main-layout";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Planetours</title>
        <meta name="description" content="The best tours around the milky way" />
      </Head>
      <MainLayout />
    </Fragment>
  );
}
