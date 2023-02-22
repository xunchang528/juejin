import styles from "./styles.module.scss";
import Link from "next/link";

//图片的api是这样的http://localhost:1337/uploads/Article1_Author_54480d7d11.png
//所以需要CMS_URL
//“uploads/Article1_Author_54480d7d11.png”这段url在authorImg.data.url, 头像时用到
const CMS_URL = process.env.CMS_URL
const LOCAL_URL = process.env.LOCAL_URL

function Articles({articleData}) {
    // 得到articles,一个list
    const articles = articleData.data;
    return ( 
        <div className={styles.entry_list_list}>
            {/* 遍历articles里面的每一篇文章 */}
            {articles.map((article) => (
                <li key={article.id} className={styles.item}>
                    {/* 文章入口 */}
                    <div className={styles.entry}>
                        <div className={styles.meta_container}>
                            <Link className={styles.user_message} href={`${CMS_URL}/article/{id}`}>
                                <div className={styles.popover_box}>{article.attributes.authorName}</div>
                            </Link>
                        <div className={styles.date}>{article.attributes.publishedAt}</div>
                        </div>
                        <div className={styles.content_wrapper}>
                            <div className={styles.content_main}>
                                <div className={styles.title_row}>
                                    <Link className={styles.title} href={`${CMS_URL}/article/{id}`}>
                                        {article.attributes.title}
                                    </Link>
                                </div>
                                <div className={styles.abstract}>
                                    <Link href={`${CMS_URL}/article/{id}`}>
                                        <div className={styles.abstracts}>Description</div> {/* 直接hardcode了,正常应该取文章中一段 */}
                                    </Link>
                                </div>
                                <ul className={styles.action_list}>
                                    <li className={styles.item_view}>
                                        <i className={styles.view}></i>
                                        <span>{article.attributes.view}</span>
                                    </li>
                                    <li className={styles.item_like}>
                                        <i className={styles.like}></i>
                                        <span>{article.attributes.like}</span>
                                    </li>
                                    <li className={styles.item_comment}>
                                        <i className={styles.comment}></i>
                                        <span>3</span>{/* 数据库里没有comment的数据 */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </div>
     );
}

export default Articles;