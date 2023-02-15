import { Container } from "./Container"
import Link from "next/link"
import { useEffect, useState,useRef } from "react"
import { NavLink } from "./NavLink"
import Image from "next/image"
import {DesktopLogo,MobileLogo,SearchIcon,MemberIcon }from "./logo"
import {MyDrop,MobileDrop} from "./Menu"
import NavData from "./NavData"


function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function Header({className,tabData}){
  let headerRef = useRef()
  
  let isInitial = useRef(true)

  useEffect(() => {
    

    function updateHeaderStyles() {
      console.log(window.scrollY)
    }

     function updateStyles() {
      updateHeaderStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('wheel', updateStyles, { passive: true })
    // window.addEventListener('resize', updateStyles)

     return () => {
      window.removeEventListener('wheel', updateStyles, { passive: true })
      // window.removeEventListener('resize', updateStyles)
    }
  }, []);
  

  return(
    <div className="relative h-16">
     <header id="juejin_header" className={`fixed inset-0  h-16 w-screen bg-white z-50 text-gray-400 border-b border-b-slate-100  tablet:h-14 transition-all -translate-y-0 `} ref={headerRef}>
      <Container className='max-w-10xl tablet:ml-3 laptop:w-11/12'>   
            {/*Logo  */}
         <Link href='#' aria-label="Home" className="mr-4 ml-6 inline-block h-5 w-auto laptop:ml-0 tablet:mr-0">
            <span className="flex items-center h-full">
                <DesktopLogo className='mx-0 w-7  tablet:hidden' />

                <MobileLogo className="w-8 hidden tablet:inline-block tablet:h-7 " />
            </span>      
          </Link>  
        <nav className="h-full flex-auto flex-shrink-0 leading-none"> 
         
            <ul className="flex items-center justify-between relative flex-row-reverse h-full m-0 laptop:justify-end laptop:flex-row">
              {/*左侧  */}
              <li className="flex order-last laptop:block laptop:absolute laptop:left-0 laptop:top-0  z-10 " >
                <div className="cursor-pointer hidden mx-2 laptop:h-14 laptop:flex laptop:items-center laptop:text-blue-500 minlaptop:pt-1 laptop:justify-start laptop:w-20  laptop:text-sm ">
                  <span className="text-2sm font-medium ">首页</span>
                  {/* 小屏下拉 */}
                  <MobileDrop tabData={tabData}/>
                </div>
                {/* nav栏数据 */}
                <NavData tabData={tabData}/>
              </li>
              {/* 右侧 */}
            <ul className="flex items-center justify-end relative  h-full m-0 order-none laptop:mr-5 tablet:w-80 tablet:mx-0">
                <li className="flex-auto h-20 flex justify-end laptop:mr-3 tablet:ml-0 tablet:justify-start tablet:w-72">
                  <ul className="flex justify-start  tablet:w-80">
                    {/* 搜索栏 */}
                     <li className="h-20 cursor-auto pl-0 text-gray-500 px-4 text-2sm m-0  flex justify-center items-center md:pl-32   ">
                 
                  <form role='search' className="bg-white flex items-center justify-between rounded-2sm relative  h-8 border border-gray-300  hover:border-slate-400 tablet:w-44  xl:w-64  ">

                    <input type="search" maxLength='32'  className=" w-5/6 py-1  pl-3  text-sm text-slate-400  bg-transparent -outline-offset-2  placeholder:text-slate-400 tablet:h-8 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-transparent focus:ring-transparent block  sm:text-sm focus:ring-1" placeholder=""/>
                    <div className="relative -left-0 w-11 h-7 bg-slate-100">
                      {/* icon */}
                      <SearchIcon />
                      {/* <Image alt="juejin_search" src={search} className='inline-block w-7 pr-3 cursor-pointer mx-4 my-2 '/> */}
                    </div>
                    <div className="hidden"></div>
                  </form>
                     </li>
                        {/* 创作者中心 */}
                        <li className=" w-36 px-4 overflow-visible cursor-default transition-transitionProperty-width pr-0 text-sm m-0 flex justify-center items-center relative md:hidden ">
                          <div className="flex items-center relative cursor-pointer w-32 h-9">
                            <button className="px-3 h-full text-white bg-blue-500 rounded-tl-sm rounded-bl-sm duration-100 delay-75 ease-linear hover:bg-blue-600">
                              创作者中心
                            </button>
                          <MyDrop />
                          </div>                            
                    </li>
                  </ul>
                </li>  
                {/* 会员 */}
                <li className="relative text-slate-500 px-4 text-2sm m-0 flex justify-center items-center cursor-pointer laptop:hidden">
                  <div className="flex items-center h-full relative"> 
                    <div className="relative flex items-center h-full">
                      {/* <Image src={member} alt='Member' className='w-6 h-6'/> */}
                      <MemberIcon />
                    </div>
                    <div className="text-slate-500 font-normal text-sm leading-5 ml-1">会员</div>
                  </div>
                </li>

                {/* 登录/注册 */}
                <li className="text-blue-500 tablet:pl-3 text-sm m-0  flex justify-center items-center cursor-pointer relative">
                  <div className="relative">
                      <button className="bg-rgba(30,128,255,.05) border border-solid border-bcButton py-1 px-1 font-normal mr-8 h-9 overflow-hidden rounded-md md:mr-0 tablet:mr-7 tablet:w-16">
                        <span className="mx-2">登录</span>
                        <div className="inline-block md:hidden">
                          <div className="inline-block align-middle  bg-#abcdff h-3 w-px"></div>
                          <span className="mx-2">注册</span>
                        </div>
                      </button>
                  </div>
                </li>
              </ul>        
            </ul>    
        </nav>
     
      </Container>
    </header>
      
    </div>
   
  )
}

export default Header
 