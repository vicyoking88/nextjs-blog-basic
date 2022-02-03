import type { NextPage } from "next";
import Layout from "../components/Layout";
import utilStyles from "../pages/styles/utils.module.css"
import Head from "next/head";
import Image from "next/image";
import styles from "./styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout
      title="Home | Next.js"
      description="esta es la descripcion del home"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
