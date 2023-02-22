import styles from "./styles.module.scss";

const CMS_URL = process.env.CMS_URL

function Authors({authorData}) {
    const authors = authorData.data;
    return ( 
      <div>
        <div className={styles.auther}>
            <h3 className={styles.h3}>作者榜</h3>
        </div>
        <ul>
        {authors.map((author) => (
            <li key={author.id} className={styles.item}>
                <img className={styles.avatar} src={`${process.env.CMS_URL}${author.attributes.authorImg.data.attributes.url}`} alt="" />
                <h3>{author.attributes.authorDesc}</h3>
            </li>
          ))}
        </ul>
        <div>
            <h3>完整榜单 &gt;</h3>
        </div>
      </div>
     );
}

export default Authors;