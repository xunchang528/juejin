import { NavLink } from "./NavLink";
import Link from "next/link";
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";




const NavData=({tabData})=> {
  // 兼容数量
  const btn=useRef()

  const [isOver,setIsOver]=useState(false)
  const [show,setShow]=useState(false)
  const [overData,setOverData]=useState('')
  const [infoData,setInfoData]=useState(false)

  

  useEffect(() => {
    if(tabData.data.length > 10){
      // console.log('first')
      setIsOver(true)
    }
    

  }, [isOver])

  

 

  return ( 
    <>
    <ul onClick={()=>setInfoData(true)} className={clsx(`w-144 flex flex-shrink-0 laptop:hidden h-16`, show?'':'overflow-hidden')}>
      {
        tabData.data.map((el)=>(
          el.attributes.info?(
              <li className="flex m-0 justify-center items-center p-0 cursor-pointer relative h-16 desktop:hidden">
                <Link href={el.attributes.href} key={el.id} className=' inline-block h-16 my-0 mx-3 leading-lineheight text-sm before:absolute text-slate-500 before:inset-0 hover:border-b-blue-500 hover:text-slate-500 focus:text-blue-500 cursor-pointer'>
                  {el.attributes.name}
                </Link>
                {infoData?(""):(<span id="active_text" className={clsx(`absolute inline-block  top-2 left-3 z-10 whitespace-nowrap px-2 py-0.5 text-white  bg-red-500  rounded-xl leading-4 text-center font-medium`)}>
                  {el.attributes.info}
                </span>)}
              </li>
                 
          ):(
            <NavLink  href={el.attributes.href} className={`before:absolute  before:inset-0  hover:border-b-2 hover:border-b-blue-500 hover:text-slate-500 focus:text-blue-500`}>{el.attributes.name}</NavLink>    
          )
        )

        )
      }
      
      </ul>


     {
      isOver?(
        !show?(
          <div ref={btn} onClick={()=>setShow(true) } className={`text-slate-500  inline-block h-16 my-0 mx-3 text-sm before:absolute  before:inset-0`}>更多</div>
        ):(
          <div ref={btn} onClick={()=>setShow(false) } className={`text-slate-500  inline-block h-16 my-0 mx-3 text-sm before:absolute  before:inset-0`}>收起</div>
        )

      ):(<></>)
        
      }
    </>
    
     
   );
}

export default NavData;

