import type { AppProps, AppContext } from "next/app";
import React from "react";
import App from "next/app";
import Head from "next/head";
import axios from "axios";
import { ThemeContextProvider } from "../store/themes";
import "./global.scss";
export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

const MyApp = (data: AppProps & IComponentProps): JSX.Element => {
  const {
    Component,
    pageProps,
    isMobile,
    isSupportWebp,
  } = data;

  return (
    <div>
      <Head>
        <title>{`Nextjs仿掘金官网`}</title>
        <meta
          name="description"
          content={`Nextjs仿掘金官网`}
        />
        <meta name="viewport" content="user-scalable=no" />
        <meta name="viewport" content="initial-scale=1,maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContextProvider>
        <Component
          {...pageProps}
          isMobile={isMobile}
          isSupportWebp={isSupportWebp}
        />
      </ThemeContextProvider>
    </div>
  );
};



export default MyApp;
