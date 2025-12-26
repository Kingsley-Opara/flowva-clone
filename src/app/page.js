import Image from "next/image";
import Navbar from "./components/Navbar";
import Btn from "./components/Btn";
import { GlobalStateProvider } from "./lib/context";
import HeroUsers from "./components/HeroUsers";
import Body from "./components/Body";

export default function Home() {
  return (
    <div className="">
      <GlobalStateProvider>
        <Navbar/>
        <Btn/>
        <div>
          <Body/>
        </div>
      </GlobalStateProvider>
      

    </div>
  );
}
