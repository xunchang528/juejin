import  styles from "./styles.module.scss";

const CMS_URL = process.env.CMS_URL

function Ads({adData}) {
    const ads = adData.data;
    return ( 
      <div>
        <ul>
        {ads.map((ad) => (
            <li key={ad.id} className={styles.ad}>
                <img src={`${process.env.CMS_URL}${ad.attributes.AdImg.data.attributes.url}`} alt="" />
            </li>
          ))}
        </ul>
      </div>
     );
}

export default Ads;