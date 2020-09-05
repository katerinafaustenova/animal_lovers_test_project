import Head from "next/head";
import Header from "./header";
import Slider from "./slider";
import Map from "./map";
import News from "./news";
import Form from "./form";
import Headline from "./headline";
import Carousel from "./carousel";
import Footer from "./footer";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Slider />
      <Map />
      <Headline title="Aktuality" />
      <News />
      <Headline title="Novinky e-mailem" />
      <Form />
      <Headline title="Zvířata dle druhu" />
      <Carousel />
      <Footer />
    </div>
  );
}
