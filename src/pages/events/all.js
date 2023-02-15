import ContentNav from "../../components/Page_nav";


function Active(props){
  return(
    <>
    <ContentNav contentTabData={props.contentTabData}/>
    <>你好</>
    </>
  )
}
export default Active
// nav栏数据
export async function getServerSideProps() {
  // 抓取数据
  //Tab数据
  const navResponse = await fetch(`${process.env.DB_PATH}/tabs`);
  const navData = await navResponse.json();

  //bigtag数据
  const contentNavResponse = await fetch(`${process.env.DB_PATH}/big-tags`);
  const contentNavData = await contentNavResponse.json();

  return {
    props: {
      // 传出数据
      tabData: navData,
      contentTabData: contentNavData,
    },
  };
}