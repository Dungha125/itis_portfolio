import Intro from "@/components/main/Intro";
import Main from "@/components/main/Main";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Main></Main>
        <Intro></Intro>
      </div>
    </main>
  );
}
