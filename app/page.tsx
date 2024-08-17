"use client"

import Activity from "@/components/main/Activity";
import Benefit from "@/components/main/Benefit";
import Contact from "@/components/main/Contact";
import Intro from "@/components/main/Intro";
import Main from "@/components/main/Main";
import Manage from "@/components/main/Manage";
import Room from "@/components/main/Room";
import FormRegister from "@/components/src/FormRegister";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [clickButton, setClickButton] = useState(false);

  const handleFormClick = () => {
    setClickButton(!clickButton);
  };
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
      <Main onClick={handleFormClick} /> {/* Pass the handler function */}
      {clickButton && <FormRegister />}
        <Intro></Intro>
        <Benefit></Benefit>
        <Activity></Activity>
        <Room></Room> 
        <Contact></Contact>
      </div>
    </main>
  );
}
