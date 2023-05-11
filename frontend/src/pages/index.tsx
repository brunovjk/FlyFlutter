import Head from "next/head";
import LandingPage from "./landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>brunovjk - Web3 Developer</title>
        <meta name="description" content="Web3 Developer" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
