import Image from "next/image";

export default function FlipCard() {
  return (
    <div className="group perspective-[1000px] w-100 h-80 ">
      <div
        className="
          relative h-full w-full
          transition-transform duration-700
          group-hover:rotate-y-180
          transform-3d
        "
      >
        {/* Front */}
        <div
          className="
            absolute inset-0
            
            text-white rounded-xl
            flex items-center justify-center
            backface-hidden
          "
        >
          <div>
            <Image src={"/images/jotform.svg"} alt="image" fill className="object-cover rounded-3xl"/>

          </div>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            bg-[#F5D7C5] text-black rounded-xl
            flex items-center justify-center
            rotate-y-180
            backface-hidden
          "
        >
          Back
        </div>
      </div>
    </div>
  );
}
