
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import "./globals.css";
import Cursor from "../components/Cursor";
import Navbar from "../components/nav";
// import NavMenu from "../components/navMenu";
// import LoadingScreen from "../components/loading";
import Footer from "../components/Footer";
export const metadata = {
  title: 'LeicanAra',
}
export default function RootLayout({ children }) {
 
 

 
  return (
    <html lang="en">
      <body className="bg-white">
      <Navbar   />       
       <Cursor />
        <main>{children}</main>
        <Footer/>

      </body>
    </html>
  );
}
