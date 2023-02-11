import clsx from "clsx";

export function MobileLogo(props) {
  return ( 

      
      <svg width="36" height="28" {...props} viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/>
      </svg>


   );
}

export function DesktopLogo(props) {
  return ( 
    <>
    <svg width="36" height="28" {...props} viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/>
      </svg>
      <span  className={clsx(`flex flex-shrink-0 pl-1 text-xl pb-1 font-medium text-black font-sans tablet:hidden `)}>稀土掘金</span>
    </>

  )
}

export function SearchIcon(props){
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className='inline-block w-7 pr-3 cursor-pointer mx-4 my-1' >
      <path d="M12.4008 12.4008C14.744 10.0577 14.744 6.25871 12.4008 3.91556C10.0577 1.57242 6.25871 1.57242 3.91556 3.91556C1.57242 6.25871 1.57242 10.0577 3.91556 12.4008C6.25871 14.744 10.0577 14.744 12.4008 12.4008ZM12.4008 12.4008L15.5828 15.5828" stroke="#515767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  )
}

export function MemberIcon(props){
  return(
    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="className='w-6 h-6'">
<path d="M14.5496 1.85159C12.9816 0.94629 11.0497 0.94629 9.48166 1.85159L3.6278 5.23131C2.05978 6.13661 1.09383 7.80968 1.09383 9.62028V16.3797C1.09383 18.1903 2.05978 19.8634 3.6278 20.7687L9.48166 24.1484C11.0497 25.0537 12.9816 25.0537 14.5496 24.1484L20.4034 20.7687C21.9715 19.8634 22.9374 18.1903 22.9374 16.3797V9.62028C22.9374 7.80968 21.9715 6.13661 20.4034 5.23131L14.5496 1.85159Z" fill="#33375E" stroke="url(#paint0_linear_17431_150592)" stroke-width="1.05897"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.81691 7.01512L9.45774 7.01512C9.55835 7.01512 9.65238 7.06513 9.70864 7.14855L11.8039 10.2554C11.9241 10.4336 12.1866 10.4332 12.3062 10.2547L14.3881 7.14589C14.4443 7.06204 14.5385 7.01172 14.6394 7.01172H17.1972C17.4448 7.01172 17.5876 7.29288 17.4416 7.49279L12.2877 14.5479C12.1674 14.7126 11.9218 14.7135 11.8004 14.5495L6.57391 7.49781C6.42591 7.29813 6.56839 7.01512 6.81691 7.01512ZM13.5443 20.1643H10.6408C10.5436 20.1643 10.4524 20.1176 10.3957 20.0388L4.0568 11.2267C3.99375 11.139 3.98233 11.0242 4.02686 10.9256L5.16013 8.41552C5.2559 8.20341 5.54492 8.17353 5.68109 8.36166L11.7902 16.8019C11.9118 16.9699 12.1629 16.9679 12.2826 16.798L18.2545 8.32346C18.3877 8.13446 18.6746 8.15785 18.7745 8.36584L20.0033 10.9253C20.0507 11.0239 20.041 11.1406 19.978 11.2303L13.7925 20.0352C13.7357 20.1161 13.643 20.1643 13.5443 20.1643Z" fill="url(#paint1_linear_17431_150592)"/>
<path d="M9.45774 7.01512V7.08236H9.45774L9.45774 7.01512ZM6.81691 7.01512V6.94789V7.01512ZM9.70864 7.14855L9.76439 7.11095V7.11095L9.70864 7.14855ZM11.8039 10.2554L11.7482 10.293H11.7482L11.8039 10.2554ZM12.3062 10.2547L12.2503 10.2173L12.3062 10.2547ZM14.3881 7.14589L14.444 7.1833V7.1833L14.3881 7.14589ZM17.4416 7.49279L17.3873 7.45313V7.45313L17.4416 7.49279ZM12.2877 14.5479L12.342 14.5876L12.2877 14.5479ZM11.8004 14.5495L11.8544 14.5095V14.5095L11.8004 14.5495ZM6.57391 7.49781L6.62792 7.45777L6.62792 7.45777L6.57391 7.49781ZM10.3957 20.0388L10.4503 19.9995L10.3957 20.0388ZM4.0568 11.2267L4.00222 11.2659H4.00222L4.0568 11.2267ZM4.02686 10.9256L3.96558 10.898H3.96558L4.02686 10.9256ZM5.16013 8.41552L5.09885 8.38785L5.16013 8.41552ZM5.68109 8.36166L5.62662 8.40108V8.40108L5.68109 8.36166ZM11.7902 16.8019L11.7357 16.8413L11.7902 16.8019ZM12.2826 16.798L12.2277 16.7592L12.2826 16.798ZM18.2545 8.32346L18.1995 8.28473L18.2545 8.32346ZM18.7745 8.36584L18.7139 8.39494V8.39494L18.7745 8.36584ZM20.0033 10.9253L20.0639 10.8962V10.8962L20.0033 10.9253ZM19.978 11.2303L20.033 11.2689L20.033 11.2689L19.978 11.2303ZM13.7925 20.0352L13.8475 20.0739L13.7925 20.0352ZM9.45774 6.94789L6.81691 6.94789V7.08236L9.45774 7.08236V6.94789ZM9.76439 7.11095C9.69563 7.00901 9.5807 6.94789 9.45774 6.94789L9.45774 7.08236C9.53599 7.08236 9.60914 7.12125 9.6529 7.18614L9.76439 7.11095ZM11.8597 10.2178L9.76439 7.11095L9.6529 7.18614L11.7482 10.293L11.8597 10.2178ZM12.2503 10.2173C12.1573 10.3561 11.9532 10.3565 11.8597 10.2178L11.7482 10.293C11.8951 10.5108 12.2159 10.5104 12.3621 10.2921L12.2503 10.2173ZM14.3322 7.10847L12.2503 10.2173L12.3621 10.2921L14.444 7.1833L14.3322 7.10847ZM14.6394 6.94448C14.5161 6.94448 14.4009 7.00599 14.3322 7.10848L14.444 7.1833C14.4876 7.11809 14.5609 7.07896 14.6394 7.07896V6.94448ZM17.1972 6.94448H14.6394V7.07896H17.1972V6.94448ZM17.4959 7.53245C17.6744 7.2881 17.4998 6.94448 17.1972 6.94448V7.07896C17.3898 7.07896 17.5009 7.29766 17.3873 7.45313L17.4959 7.53245ZM12.342 14.5876L17.4959 7.53245L17.3873 7.45313L12.2335 14.5082L12.342 14.5876ZM11.7463 14.5896C11.8948 14.7899 12.195 14.7889 12.342 14.5876L12.2335 14.5082C12.1399 14.6363 11.9489 14.637 11.8544 14.5095L11.7463 14.5896ZM6.51989 7.53785L11.7463 14.5896L11.8544 14.5095L6.62792 7.45777L6.51989 7.53785ZM6.81691 6.94789C6.51314 6.94789 6.33902 7.29381 6.51989 7.53785L6.62792 7.45777C6.51281 7.30245 6.62364 7.08236 6.81691 7.08236V6.94789ZM10.6408 20.2315H13.5443V20.097H10.6408V20.2315ZM10.3412 20.078C10.4105 20.1744 10.522 20.2315 10.6408 20.2315V20.097C10.5652 20.097 10.4944 20.0607 10.4503 19.9995L10.3412 20.078ZM4.00222 11.2659L10.3412 20.078L10.4503 19.9995L4.11138 11.1874L4.00222 11.2659ZM3.96558 10.898C3.91119 11.0184 3.92509 11.1587 4.00222 11.2659L4.11138 11.1874C4.0624 11.1193 4.05348 11.0301 4.08814 10.9533L3.96558 10.898ZM5.09885 8.38785L3.96558 10.898L4.08814 10.9533L5.22141 8.44319L5.09885 8.38785ZM5.73555 8.32224C5.56891 8.092 5.21574 8.12896 5.09885 8.38785L5.22141 8.44319C5.29606 8.27786 5.52093 8.25506 5.62662 8.40108L5.73555 8.32224ZM11.8447 16.7625L5.73555 8.32224L5.62662 8.40108L11.7357 16.8413L11.8447 16.7625ZM12.2277 16.7592C12.1344 16.8916 11.9391 16.8929 11.8447 16.7625L11.7357 16.8413C11.8845 17.0469 12.1914 17.0441 12.3376 16.8367L12.2277 16.7592ZM18.1995 8.28473L12.2277 16.7592L12.3376 16.8367L18.3095 8.3622L18.1995 8.28473ZM18.8351 8.33674C18.7129 8.08218 18.3621 8.05403 18.1995 8.28473L18.3095 8.3622C18.4133 8.21489 18.6364 8.23351 18.7139 8.39494L18.8351 8.33674ZM20.0639 10.8962L18.8351 8.33674L18.7139 8.39494L19.9427 10.9544L20.0639 10.8962ZM20.033 11.2689C20.11 11.1594 20.1219 11.0168 20.0639 10.8962L19.9427 10.9544C19.9795 11.031 19.972 11.1218 19.9229 11.1916L20.033 11.2689ZM13.8475 20.0739L20.033 11.2689L19.9229 11.1916L13.7375 19.9966L13.8475 20.0739ZM13.5443 20.2315C13.665 20.2315 13.7781 20.1726 13.8475 20.0739L13.7375 19.9966C13.6932 20.0595 13.6211 20.097 13.5443 20.097V20.2315Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_17431_150592" x1="12.0156" y1="1" x2="12.0156" y2="25" gradientUnits="userSpaceOnUse">
<stop stop-color="#E9D7BB"/>
<stop offset="0.479167" stop-color="#FDEFBA"/>
<stop offset="1" stop-color="#ECD7B7"/>
</linearGradient>
<linearGradient id="paint1_linear_17431_150592" x1="12.0171" y1="19.6483" x2="12.0171" y2="6.42187" gradientUnits="userSpaceOnUse">
<stop stop-color="#E4C087"/>
<stop offset="1" stop-color="#F6EAD1"/>
</linearGradient>
</defs>
    </svg>

  )
}

