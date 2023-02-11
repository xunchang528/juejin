import clsx from "clsx";
export function Container({className,...props}) {
  return ( 
    <div className={clsx(` relative  flex items-center mx-auto w-auto h-full  `,className)}{...props}>

    </div>
   );
}

