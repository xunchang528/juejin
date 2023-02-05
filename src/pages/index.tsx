import React, { useContext, useEffect, useRef, useState } from "react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styles from "./index.module.scss";
import axios from "axios";
import { LOCALDOMAIN } from "../utils";
import { IArticleIntro } from "./api/articleIntro";
import App from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  articles: {
    list: {
      label: string;
      info: string;
      link: string;
    }[];
    total: number;
  };
}

const Home: NextPage<IProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Link href={`${LOCALDOMAIN}/article/1`}>article</Link>
      </div>
    </div>
  );
};


export default Home;
