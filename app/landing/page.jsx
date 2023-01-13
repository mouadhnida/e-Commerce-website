import Script from "next/script";


import Comment from "../../components/features";
import Header from "../../components/header";
import NewArrival from "../../components/newArrival";

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
        <Comment/>
      </div>
    )
  }
  
