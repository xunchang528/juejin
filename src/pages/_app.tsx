import type { AppProps, AppContext } from "next/app";
import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import axios from "axios";
import { ThemeContextProvider } from "../store/themes";
import Header from "../components/Header";

import "../styles/globals.css";
//globals太多了，所以我把它们放在一起中间两个可以去掉

export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

const MyApp = (data: AppProps & IComponentProps): JSX.Element => {
  const { Component, pageProps, isMobile, isSupportWebp } = data;

  console.log(pageProps);

  return (
    <div>
      <Head>
        <title>{`Nextjs仿掘金官网`}</title>
        <meta name="description" content={`Nextjs仿掘金官网`} />
        <meta name="viewport" content="user-scalable=no" />
        <meta name="viewport" content="initial-scale=1,maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Header tabData={pageProps.tabData} />     

      <ThemeContextProvider>    

        <main>
          <Component
            {...pageProps}
            isMobile={isMobile}
            isSupportWebp={isSupportWebp}
          />
        </main>
      </ThemeContextProvider>    
      </div>
    
    </div>
  );
};

export default MyApp;
