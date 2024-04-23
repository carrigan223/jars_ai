import Image from "next/image";
import TitlePill from "./components/title/TitlePill";
import TitleStar from "./components/title/TitleStar";
import Title from "./components/title/Title";
import HeaderIcon from "./components/header/HeaderIcon";
import Column from "./components/main-display/column/Column";
import MainDisplay from "./components/main-display/MainDisplay";

export default function Home() {
  const color = "rgba(192, 77, 250)";
  const colorTwo = "rgba(192, 77, 250,.5)";

  const colText = "the FIRST pane";

  return (
    <main className="flex min-h-screen flex-col p-title">
      <HeaderIcon />
      <Title />
      <MainDisplay />
    </main>
  );
}
