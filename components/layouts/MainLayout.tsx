import React, { FC, PropsWithChildren } from 'react';
import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


export const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
          <Head>
            <title>Home - Rodrigo</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
    
          <main className={`${styles.main} ${inter.className}`}>
            {children}
          </main>
        </>
      )
}
