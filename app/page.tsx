import Image from "next/image";
import TitlePill from "./components/title/TitlePill";
import TitleStar from "./components/title/TitleStar";
import Title from "./components/title/Title";

export default function Home() {
  const color = "purple";
  return (
    <main className="flex min-h-screen flex-col p-title">
      <div className="flex items-center pb-10">
        <Image src="/dreamicon.png" alt="Dream Logo" width={23} height={23} />
        <span className="font-semibold text-xl">Dream</span>
      </div>
      <Title />
      <div className="flex ">
        <div
          style={{
            backgroundColor: color,
          }}
          className="h-column border w-column mx-10    flex items-center justify-center mt-10"
        >
          the FIRST pane
        </div>
        <div className="h-column border w-column    flex items-center justify-center mt-10">
          the FIRST pane
        </div>
        <div className="h-column border w-column    flex items-center justify-center mt-10">
          the FIRST pane
        </div>{" "}
      </div>
    </main>
  );
}
