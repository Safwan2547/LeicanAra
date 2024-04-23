
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";
import Cursor from "../components/Cursor";
import Navbar from "../components/nav";
// import NavMenu from "../components/navMenu";
// import LoadingScreen from "../components/loading";
import Footer from "../components/Footer";
import SmoothScroll from "@/components/smoothScroll";
import Head from 'next/head';
import NoiseOverlay from "@/components/NoiseOverLay";
import LoadingScreen from "@/components/loading";
import React from "react";

import { motion, AnimatePresence } from 'framer-motion';


export const metadata = {
  title: 'LeicanAra',
}
export default function RootLayout({ children }) {


  
  
 

 
  return (
    <html className="bg-white" lang="en">
      <body  className="overflow-hidden bg-white">

      <Head>
      <meta charset="UTF-8"/>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
        <Cursor />
        <Navbar />  
      
      

    
      
       <SmoothScroll horizontal={false}>
       

            <main>{children}</main>
        
        </SmoothScroll>
        <Footer/>

      </body>
    </html>
  );
}
