import { NavLink } from "./NavLink";
import Link from "next/link";
import { useState,useEffect } from "react";




const NavData=({tabData})=> {

  return ( 
    <ul  className="flex laptop:hidden h-16 ">
      {
        tabData.data.map((el)=>(
          el.attributes.info?(
              <li className="flex m-0 justify-center items-center p-0 cursor-pointer relative h-16 desktop:hidden">
                <Link href={el.attributes.href} key={el.id} className=' inline-block h-16 my-0 mx-3 leading-lineheight text-sm before:absolute text-slate-500 before:inset-0 '>
                  {el.attributes.name}
                </Link>
                <span id="active_text" className="absolute inline-block  top-2 left-3 z-10 whitespace-nowrap px-2 py-0.5 text-white   bg-red-500  rounded-xl leading-4 text-center font-medium">
                  {el.attributes.info}
                </span>
              </li>
                 
          ):(
            <NavLink  href={el.attributes.href} className={`before:absolute  before:inset-0  hover:border-b-2 hover:border-b-blue-500 hover:text-slate-500 focus:text-blue-500`}>{el.attributes.name}</NavLink>    
          )
        )

        )
      }
      </ul>
   );
}

export default NavData;

