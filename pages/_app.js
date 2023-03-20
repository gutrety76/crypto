import "../styles/globals.css"
import Head from 'next/head';

import store, {persister} from "../store/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { NotificationsProvider } from '@mantine/notifications';
// import { Montserrat } from '@next/font/google'
// const inter = Montserrat({ subsets: ['latin'] })
export default function App(props) {
    const { Component, pageProps } = props;





  return (
      <>
        <Head>
          <title>CryptoMainX</title>
          <link rel="icon" href="/favicon.png"/>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="description" content="Buy cryptocurrency profitably, conveniently and securely through our online service.
                            The CryptoMainX cryptocurrency exchanger offers good conditions, ease of action, no hidden fees and a transparent algorithm of work.
                            Experience all the benefits of working with an advanced service.
                            CryptoMainX specializes in the exchange of cryptocurrencies for cryptocurrencies, which allows it to offer one of the most profitable courses on the European market.
                            After all, our goal is to build mutually beneficial and trusting relationships that will last for many years.
                            CryptoMainX is a system containing the entire set of necessary functions for comfortable, fast and secure conversion of the most common electronic payment systems and cryptocurrencies.
                            Software created by professionals in compliance with all safety rules"/>
        </Head>
          <Provider store={store}>
        <PersistGate loading={`cryptomainx crypto exchanger`} persistor={persister}>

            <NotificationsProvider>
               <Component {...pageProps} />

            </NotificationsProvider>


        </PersistGate>
          </Provider>
      </>
  );
}