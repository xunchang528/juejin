import { MobileNavLink } from "./NavLink";
import { Menu, Transition,Popover } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'


function DropIcon({feature}){
  return(
   <svg data-v-422a023a="" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="unfold12-icon"><path data-v-422a023a="" d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z" fill={`${feature?'gray':'white'}`}></path></svg>
  )
}

// pc端的下拉菜单
export function MyDrop({className,data}){
  return(
    // <div className=" w-4 text-right ">
      <Menu as='div' className="relative inline-block text-left transition-transitionProperty-width  ">
        {({open})=>(
        
          <>
          <Menu.Button className=" justify-center h-9 bg-blue-500 rounded-tr-sm rounded-br-sm px-1 py-2 border-l border-opacity-20 border-slate-300 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75  opacity-100">
            <DropIcon />
          </Menu.Button>
        
        {open && (
          
        <Transition.Root 
          
        
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
           >
             
            
        <Transition.Child 
          as='div'
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
             <Menu.Items as='div' className={`absolute right-0 mt-2 w-32 origin-top-right divide-y bg-white divide-gray-100  rounded-md  shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none ` } >   
              <Menu.Item>
                {({ active }) => (
                  <MobileNavLink
                    href='/'
                    className={`${
                      active ? 'bg-gray-300 text-white' : 'text-gray-900'
                    } group-[]:: flex w-full items-center rounded-md px-2 py-2 text-sm `}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    编写文章
                  </MobileNavLink>
                )}
              </Menu.Item>
              
              <Menu.Item>
                {({ active }) => (
                  <MobileNavLink
                    href='/'
                    className={`${
                      active ? 'bg-gray-300 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    写代码
                  </MobileNavLink>
                )}
              </Menu.Item>      
              <Menu.Item>
                {({ active }) => (
                  <MobileNavLink
                    href='/'
                    className={`${
                      active ? 'bg-gray-300 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    写笔记
                  </MobileNavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MobileNavLink
                    href='/'
                    className={`${
                      active ? 'bg-gray-300 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    拓展
                  </MobileNavLink>
                )}
              </Menu.Item>       
              <Menu.Item>
                {({ active }) => (
                  <MobileNavLink
                    href='/'
                    className={`${
                      active ? 'bg-gray-300 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    草稿箱
                  </MobileNavLink>
                )}
              </Menu.Item>
              
    
         
            
          </Menu.Items>
        </Transition.Child>
         
           </Transition.Root>
           
        )}
      </>
          
        )}

        
      </Menu>
    // </div>
  )
  function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
       fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#3380e6" strokeWidth="2" />
    </svg>
  )
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#3380e6" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#3380e6" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#3380e6" strokeWidth="2" />
    </svg>
  )
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#3380e6" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#3380e6" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#3380e6" strokeWidth="2" />
    </svg>
  )
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
          fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#3380e6" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#3380e6" strokeWidth="2" />
    </svg>
  )
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
          fill="#546ae7"
        stroke="#3380e6"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#3380e6" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#3380e6" strokeWidth="2" />
    </svg>
  )
}
}


// 小屏显示下拉菜单
export function MobileDrop({tabData,className}){
  console.log(tabData)
return(
    <div className=" w-4 text-right ">
      <Menu as='div' className="relative inline-block text-left transition-transitionProperty-width">
        <div>
          <Menu.Button className=" justify-center h-9  rounded-tr-sm rounded-br-sm px-1 py-2  border-opacity-20 border-slate-300 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <DropIcon feature/>
          </Menu.Button>
        </div>
        <Transition 
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
           >
              <Menu.Items className="absolute -right-12 items-center mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {tabData.data.map((el)=>(
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <MobileNavLink
                          href='/'
                          className={`flex justify-center   ${
                            active ? 'bg-gray-300 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md text-sm`}
                        >
                          <span className="h-12 leading-10 hover:border-b-2 hover:border-solid hover:border-blue-400">{el.attributes.name}</span>

                        </MobileNavLink>
                      )}
                    </Menu.Item>
                    </div>
                  ))}

              
          </Menu.Items>
           </Transition>
      </Menu>
    </div>
  )
}


