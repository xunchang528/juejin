import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import styles from "./index.module.scss";
import axios from "axios";
import { LOCALDOMAIN } from "../utils";
import { IArticleIntro } from "./api/articleIntro";
import App from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IProps {
  title: string;
  description: string;
  authorName: string;
  date: string;
  tag: string;
  tabData: object;
  contentTabData: object;
  adData: String;
  authorData: String;
  articleData: String;
}

const Home: NextPage<IProps> = ({
  title,
  description,
  authorName,
  date,
  tag,
  tabData,
  contentTabData,
  adData,
  authorData,
  articleData
}) => {
  const items = [1, 2, 3, 4, 5];
  var result = [];
  for (var i = 0; i < items.length; i++) {
    result.push(
      <div className={styles.entry_list_list}>
        <li className={styles.item}>
          {/* 文章入口 */}
          <div className={styles.entry}>
            <div className={styles.meta_container}>
              <Link className={styles.user_message} href={`url`}>
                <div className={styles.popover_box}>{authorName}</div>
              </Link>
              <div className={styles.date}>{date}</div>
              <div className={styles.tag_list}>
                <Link className={styles.tag} href={``}>
                  {tag}
                </Link>
              </div>
            </div>
            <div className={styles.content_wrapper}>
              <div className={styles.content_main}>
                <div className={styles.title_row}>
                  <Link
                    className={styles.title}
                    href={`${LOCALDOMAIN}/article/1`}
                  >
                    title
                  </Link>
                </div>
                <div className={styles.abstract}>
                  <Link href={`${LOCALDOMAIN}/article/1`}>
                    <div className={styles.abstracts}>{description}</div>
                  </Link>
                </div>
                <ul className={styles.action_list}>
                  <li className={styles.item_view}>
                    <i className={styles.view}></i>
                    <span>1</span>
                  </li>
                  <li className={styles.item_like}>
                    <i className={styles.like}></i>
                    <span>2</span>
                  </li>
                  <li className={styles.item_comment}>
                    <i className={styles.comment}></i>
                    <span>3</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }

 

  return (
    <>
  <ContentNav contentTabData={contentTabData} />

    
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.entry_list}>
            <div className={styles.entry_list_container}>
              <header className={styles.list_header}>
                <nav className={styles.list_nav}>
                  <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>推荐</li>
                    <li className={styles.nav_item}>最新</li>
                    <li className={styles.nav_item}>热榜</li>
                  </ul>
                  <div className={styles.dorp_down_area}></div>
                </nav>
              </header>
              {result}
              {/* 文章列表 */}
              <Articles articleData={articleData}/>
            </div>
          </div>
          {/* 主页侧边广告栏 */}
          <aside className={styles.aside}>
            <div className={styles.sidebar_block}>
              <div className={styles.banner}>ad</div>
            </div>
            <div>
              {/* 广告位 */}
              <Ads adData={adData}/>
              {/* 作者榜 */}
              <Authors authorData={authorData}/>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Home;

// nav栏数据
export async function getServerSideProps() {
  // 抓取数据
  //Tab数据
  const navResponse = await fetch(`${process.env.DB_PATH}/tabs`);
  const navData = await navResponse.json();
  console.log(navData);

  //bigtag数据
  const contentNavResponse = await fetch(`${process.env.DB_PATH}/big-tags`);
  const contentNavData = await contentNavResponse.json();

  //AD数据
  const adResponse = await fetch(`${process.env.DB_PATH}/ads?populate=*`)
  const adData = await adResponse.json();
  
  //author数据
  const authorResponse = await fetch(`${process.env.DB_PATH}/authors?populate=*`)
  const authorData = await authorResponse.json();

  //article数据
  const articleResponse = await fetch(`${process.env.DB_PATH}/articles?populate=*`)
  const articleData = await articleResponse.json();

  return {
    props: {
      // index页面传出数据
      tabData: navData,
      contentTabData: contentNavData,
      adData,
      authorData,
      articleData
    },
  };
}
