"use client";
import Marquee from "react-fast-marquee";
import { tools } from "@/app/lib/utilis";
import Image from "next/image";

export default function Tools() {
  
  return (
    <div>
        <Marquee gradient={false} speed={60} className="mt-15">
        {tools.map((tool) => (
            <div className="mx-10" key={tool.id}>
                <Image src={tool.image} alt="image" height={150} width={150}/>

            </div>
        ))}
        </Marquee>

        <Marquee gradient={false} speed={60} className="mt-15">
        {[...tools].reverse().map((tool) => (
            <div className="mx-10" key={tool.id}>
                <Image src={tool.image} alt="image" height={150} width={150}/>

            </div>
        ))}
        </Marquee>
    </div>
  );
}
