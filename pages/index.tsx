import type { NextPage } from "next";
import HomeContent from "./Home/Home";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BAY PEDALS</title>
      </Head>
      <HomeContent/>
    </div>
  );
};

export default Home;
