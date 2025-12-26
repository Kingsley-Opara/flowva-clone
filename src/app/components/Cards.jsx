"use client"
import Marquee from "react-fast-marquee";
import FlipCard from "./FlipCard";

export default function MarqueeCards() {
  return (
    <Marquee
      speed={40}
      pauseOnHover={false} // keep marquee moving
      gradient={false}
    >
      <div className="flex gap-6 px-6 mt-15">
        {Array.from({ length: 10 }).map((_, i) => (
          <FlipCard key={i} />
        ))}
      </div>
    </Marquee>
  );
}
