import Head from "next/head";
import styles from "./App.module.css";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>brunovjk</title>
        <meta name="description" content="Web3 Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.app}>
          <Header />
          <Hero />
          <Projects />
          <ScrollToTopButton />
        </div>
      </main>
    </>
  );
}
