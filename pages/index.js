import Head from "next/head";
import Header from "./header";
import Slider from "./slider";
import Map from "./map";
import Aktuality from "./aktuality";
import Form from "./form";
import Headline from "./headline";
import Footer from "./footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Slider />
      <Map />
      <Headline title="Aktuality" />
      <Aktuality />
      <Headline title="Novinky e-mailem" />
      <Form />
      <Headline title="Zvířata dle druhu" />
      <Footer />
    </div>
  );
}
