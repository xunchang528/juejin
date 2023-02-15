const CMS_URL = process.env.CMS_URL

function Authors({authorData}) {
    const authors = authorData.data;
    return ( 
      <div>
        <div>
            <h3>作者榜</h3>
        </div>
        <ul>
        {authors.map((author) => (
            <li key={author.id}>
                <img src={`${process.env.CMS_URL}${author.attributes.authorImg.data.attributes.url}`} alt="" />
                <h3>{author.attributes.authorName}</h3>
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