import { Container } from "./Container";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { getStaticProps } from "../pages";
import { useState,useEffect } from "react";
import { useRouter } from "next/router"


function ContentNav({contentTabData}) {

  // 判断路由是否存在
  // let isHomepage = useRouter().pathname === '/'
  // let isRouter = useRouter().pathname === '/events/all'

    const [topNav,setTopNav]=useState('top-14')


    useEffect(()=>{
    const scroll = ()=>{
      const {scrollY}=window
    // console.log('scrollY',scrollY)
    if(scrollY >= "180"){
      // console.log('first')
      setTopNav('top-0')
    }
    else{
      setTopNav('top-14')

    }

    }
    window.addEventListener('scroll',scroll,{passove:true})
    // return window.removeEventListener('scroll',scroll,{passove:true})
  },[topNav])
  
  return ( 
    // 这里出现了bug，因为我的层级之前设太高导致我的menu组件显示不出来
    <nav  id="content_nav" className={`fixed left-0  z-40 shadow-sm  h-12 border-b transition-all duration-500  bg-white ${topNav}`}>
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