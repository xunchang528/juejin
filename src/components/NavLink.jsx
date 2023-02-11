import Link from "next/link";
import clsx from "clsx";
import { Menu } from "@headlessui/react"


export function NavLink(props){
  const {href,children,className,}=props


  return(
    //flex-shrink-0必备属性，不然内容会被挤压
      <li  className={`flex flex-shrink-0 m-0 justify-center items-center p-0 cursor-pointer relative h-16 `} >
    <Link href={href} className={clsx(`inline-block text-sm  my-0 mx-3 leading-lineheight text-slate-500 ` ,className)  }>
      {children}
      </Link>

      </li>
    
  )

}

export function MobileNavLink({href,children,className=''}){
  return (
    <Menu.Button
      as={Link}
      href={href}
      className={clsx('block w-full focus:text-blue-500 ',className)}
    >
      {children}
    </Menu.Button>
  )
}