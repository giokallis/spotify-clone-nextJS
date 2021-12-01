import React from "react";
import Sidebar from "../components/Sidebar";
import MainView from "../components/MainView";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
       <Sidebar />
       <MainView/>

      </main>
     <div>{/*Player*/}</div>
    </div>
  )
}
