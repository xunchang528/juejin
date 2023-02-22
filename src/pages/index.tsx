import type {  NextPage } from "next";
import styles from "./index.module.scss";
import Ads from "../components/Ads";
import Authors from "../components/Authors";
import Articles from "../components/Articles";
import ContentNav from "../components/Page_nav";
import { Themes } from "../constants/enum";
import { ThemeContext } from "../store/themes";
import { FC, useContext } from "react";

export interface IProps {
  title: String;
  description: String;
  authorName: String;
  date: String;
  tag: String;
  tabData: object;
  contentTabData: object;
  adData: String;
  authorData: String;
  articleData: String;
  entryData: String;
}

const Home: NextPage<IProps> = ({
  contentTabData,
  adData,
  authorData,
  articleData,
}) => {
  const { setTheme } = useContext(ThemeContext);
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
                </nav>
              </header>
              
              {/* 文章列表 */}
              <Articles articleData={articleData}/>
            </div>
          </div>
          {/* 主页侧边广告栏 */}
          <aside className={styles.aside}>
            <div>
              {/* 广告位 */}
              <Ads adData={adData}/>
              {/* 作者榜 */}
              <Authors authorData={authorData}/>
            </div>
          </aside>
          <div className={styles.theme_icon}
        onClick={(): void => {
          if (localStorage.getItem("theme") === Themes.light) {
            setTheme(Themes.dark);
          } else {
            setTheme(Themes.light);
          }
        }}>
          </div>
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

  const pageDataResponse = await fetch(`${process.env.DB_PATH}/articles?populate=*`)
  const pageData = await pageDataResponse.json();
  return {
    props: {
      // index页面传出数据
      tabData: navData,
      contentTabData: contentNavData,
      adData,
      authorData,
      articleData,
      pageData
    },
  };
}
