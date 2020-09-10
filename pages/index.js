import Head from "next/head";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Map from "../components/map";
import Headline from "../components/headline";
import News from "../components/news";
import Form from "../components/form";
import Slider from "../components/slider";
import Footer from "../components/footer";
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
      <div className={styles.top}>
        <Header />
        <Carousel />
      </div>
      <div className={styles.content}>
        <Map />
        <Headline title="Aktuality" />
        <News />
        <Headline title="Novinky e-mailem" />
        <Form />
        <Headline title="Zvířata dle druhu" />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}
