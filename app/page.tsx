import Activity from "@/components/main/Activity";
import Benefit from "@/components/main/Benefit";
import Contact from "@/components/main/Contact";
import Fandq from "@/components/main/Fandq";
import Intro from "@/components/main/Intro";
import Main from "@/components/main/Main";
import Manage from "@/components/main/Manage";
import Room from "@/components/main/Room";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Main/> 
        <Intro></Intro>
        <Benefit></Benefit>
        <Activity></Activity>
        <Manage></Manage>
        <Room></Room> 
        
        <Contact></Contact>
      </div>
    </main>
  );
}
