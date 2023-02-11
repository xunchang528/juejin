import { Container } from "./Container";
import { NavLink } from "./NavLink";
import Link from "next/link";

function ContentNav({contentTabData}) {
  return ( 
    // 这里出现了bug，因为我的层级之前设太高导致我的menu组件显示不出来
    <nav className="fixed left-0 top-14 z-40 shadow-sm w-full h-12 border-b transition-all  bg-white ">
      <Container className=''>   

            <div className=" flex justify-between items-center relative  m-auto w-full  h-full leading-none order-first  md:w-auto md:overflow-x-auto md:overflow-y-hidden  max-w-max">
              {/* 左侧 */}
              <ul className="flex justify-start mr-72">
                  {
                contentTabData&&contentTabData.data.map(el=>(
                  <NavLink href='/' className='hover:text-blue-500 md:px-5 md:mx-0'>{el.attributes.name}</NavLink>
              
                ))
              }
              </ul>
          
              <ul className="laptop:hidden">
                <li className="inline-block  text-sm h-16 my-0 px-3 leading-lineheight text-slate-500 overflow-hidden">
                  <Link href='/' className="hover:text-blue-500">标签管理</Link>
                </li>  
          </ul>
            </div>    

     
      </Container>
    </nav>
   );
}

export default ContentNav;