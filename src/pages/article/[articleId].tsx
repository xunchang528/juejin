import { LOCALDOMAIN, CMSDOMAIN } from "../../utils";
import axios from "axios";
import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import styles from "./styles.module.scss";
import { Interface } from "readline";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const showdown = require("showdown");

export interface IArticleProps {
  title: string;
  authorName: string;
  authorDesc: string;
  authorImg: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  content: string;
  view: string;
  adUrl: {
    attributes: {
      AdImg: {
        data: {
          attributes: {
            url: string;
          }
        }       
      }
    };
  }[];
}

const Article: NextPage<IArticleProps> = ({
  title,
  authorName,
  authorDesc,
  authorImg,
  content,
  view,
  adUrl,
}) => {
  const converter = new showdown.Converter();
  return (
    <div className={styles.container}>
      {/* 文章信息 */}
      <div className={styles.article}>
        <h1 className={styles.title}>{title}</h1>
        {/* 作者信息 */}
        <div className={styles.info}>
          <a href="#">
            <img
              src={CMSDOMAIN + authorImg.data.attributes.url}
              className={styles.authorImg}
            ></img>
          </a>
          <div className={styles.infoBox}>
            <div className={styles.authorName}>
              <a>
                <span>{authorName}</span>
                <span title="创作等级">
                  <img></img>
                </span>
              </a>
            </div>
            <div className={styles.editDate}>
              <time>2023年01月31日 15:54</time>
              <span> ·  阅读{view}</span>
            </div>
          </div>
          <button className={styles.followBtn}>
            <span>+关注</span>
          </button>
        </div>
        {/* 文章内容 */}
        <div
          dangerouslySetInnerHTML={{
            __html: converter.makeHtml(content),
          }}
          className={styles.content}
        />
      </div>
      {/* 侧边栏 */}
      <div className={styles.sideBar}>
        {/* 作者信息栏 */}
        <div className={styles.authorBlock}>
          {/* 作者信息 */}
          <div className={styles.info}>
            <a>
              <img
                src={CMSDOMAIN + authorImg.data.attributes.url}
                className={styles.authorImg}
              ></img>
            </a>
            <div className={styles.infoBox}>
              <div className={styles.authorName}>
                <a>
                  <span>{authorName}</span>
                  <span title="创作等级">
                    <img></img>
                  </span>
                </a>
              </div>
              <a className={styles.signature}>
                <div>{authorDesc}</div>
              </a>
            </div>
          </div>
          {/* 关注私信按钮 */}
          <div className={styles.btnBlock}>
            <button className={[styles.btn, styles.btnFirst].join(" ")}>
              关注
            </button>
            <button className={[styles.btn, styles.btnSecond].join(" ")}>
              私信
            </button>
          </div>
          {/* 分割线 */}
          <div className={styles.divider}></div>
          {/* 点赞数和阅读数 */}
          <div className={styles.articleDetail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              className={styles.icon}
              data-v-71f2d09e=""
              data-v-bdf6e7fa=""
            >
              <g
                fill="none"
                fill-rule="evenodd"
                transform="translate(0 .57)"
                data-v-71f2d09e=""
                data-v-bdf6e7fa=""
              >
                <ellipse
                  cx="12.5"
                  cy="12.57"
                  fill="#E1EFFF"
                  rx="12.5"
                  ry="12.57"
                  data-v-71f2d09e=""
                  data-v-bdf6e7fa=""
                ></ellipse>
                <path
                  fill="#7BB9FF"
                  d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
                  data-v-71f2d09e=""
                  data-v-bdf6e7fa=""
                ></path>
              </g>
            </svg>
            <span>获得点赞</span>
            <span>&nbsp;&nbsp;11,270</span>
          </div>
          <div className={styles.articleDetail}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              className={styles.icon}
              data-v-71f2d09e=""
              data-v-bdf6e7fa=""
            >
              <g
                fill="none"
                fill-rule="evenodd"
                data-v-71f2d09e=""
                data-v-bdf6e7fa=""
              >
                <circle
                  cx="12.5"
                  cy="12.5"
                  r="12.5"
                  fill="#E1EFFF"
                  data-v-71f2d09e=""
                  data-v-bdf6e7fa=""
                ></circle>
                <path
                  fill="#7BB9FF"
                  d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
                  data-v-71f2d09e=""
                  data-v-bdf6e7fa=""
                ></path>
              </g>
            </svg>
            <span>文章被阅读</span>
            <span>&nbsp;&nbsp;2,392,244</span>
          </div>
        </div>
        {/* 广告 */}
        {adUrl?.map((item) => (
          <a>
            <img
              className={styles.adFirst}
              src={CMSDOMAIN + item.attributes.AdImg.data.attributes.url}
            ></img>
          </a>
        ))}
        {/* 相关文章 */}
        <div className={styles.relateArticle}>
          <div className={styles.relateTitle}>相关文章</div>
          <div className={styles.divider}></div>
        </div>
        {/* 文章目录 */}
        <div className={styles.relateArticle}>
          <div className={styles.relateTitle}>目录</div>
          <div className={styles.divider}></div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleId } = context.query;
  const { data: articleData } = await axios.get(
    `${LOCALDOMAIN}/api/articleInfo`,
    {
      params: {
        articleId,
      },
    }
  );
  const { data: adData } = await axios.get(`${LOCALDOMAIN}/api/advertise`);
  return {
    props: {
      title: articleData.title,
      authorName: articleData.authorName,
      authorDesc: articleData.authorDesc,
      authorImg: articleData.authorImg,
      content: articleData.content,
      view: articleData.view,
      adUrl: adData,
    }, // 需要拿props包裹
  };
};

export default Article;
