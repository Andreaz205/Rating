import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
      </>

  )
}
