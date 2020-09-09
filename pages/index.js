import Head from "next/head";
import Header from "./header";
import Carousel from "./carousel";
import Map from "./map";
import Headline from "./headline";
import News from "./news";
import Form from "./form";
import Slider from "./slider";
import Footer from "./footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Animal Lovers</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Carousel />
      <Map />
      <Headline title="Aktuality" />
      <News />
      <Headline title="Novinky e-mailem" />
      <Form />
      <Headline title="Zvířata dle druhu" />
      <Slider />
      <Footer />
    </div>
  );
}
