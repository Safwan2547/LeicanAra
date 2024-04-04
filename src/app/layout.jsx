
import dynamic from "next/dynamic";

import "./globals.css";
import Cursor from "../components/Cursor";
import Navbar from "../components/nav";
// import NavMenu from "../components/navMenu";
// import LoadingScreen from "../components/loading";
import Footer from "../components/Footer";
import SmoothScroll from "@/components/smoothScroll";
import { AnimatePresence } from "framer-motion";
 


export const metadata = {
  title: 'LeicanAra',
}
export default function RootLayout({ children }) {

  
 
 

 
  return (
    <html lang="en">
      <body  className="overflow-hidden bg-white">
      <Navbar   />       
       <Cursor />
       
       <SmoothScroll>
        <main>{children}</main>
        </SmoothScroll>
        <Footer/>

      </body>
    </html>
  );
}
