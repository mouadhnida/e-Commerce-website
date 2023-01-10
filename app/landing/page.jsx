'use client'

import { Suspense } from "react";
import Header from "../../components/header";
import NewArrival from "../../components/newArrival";

export default function Landing() {
    return (
      <div>
        <Header />
        <Suspense fallback={<h1>Loading</h1>}>
        <NewArrival/>
        </Suspense>
      </div>
    )
  }
  
