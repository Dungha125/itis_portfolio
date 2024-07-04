import Activity from "@/components/main/Activity";
import Benefit from "@/components/main/Benefit";
import Intro from "@/components/main/Intro";
import Main from "@/components/main/Main";
import Manage from "@/components/main/Manage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Main></Main>
        <Intro></Intro>
        <Benefit></Benefit>
        <Activity></Activity>
        <Manage></Manage>
      </div>
    </main>
  );
}
