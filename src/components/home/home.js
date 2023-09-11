import Head from "next/head";

import styles from "@/components/home/styles/Home.module.scss";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Footer from "@/components/footer/footer";
import BankTask from "@/components/BankTask/BankTask";
import InfoBlock from "@/components/InfoBlock/InfoBlock";

function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Header />
        <main>
          <Main />
          <BankTask />
          <InfoBlock />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
