import Script from "next/script";


import Header from "../../components/header";
import NewArrival from "../../components/newArrival";
import Features from "../../components/features";
import Footer from "../../components/footer";

export default function Landing() {
  <Script
        src="https://kit.fontawesome.com/0f3f34a956.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      ></Script>
    return (
      <div>
        <Header />
        <NewArrival/>
        <Features/>
        <Footer/>
      </div>
    )
  }
  
