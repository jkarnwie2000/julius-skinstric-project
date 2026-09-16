"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row h-[64px] w-full justify-between py-3 relative z-[1000]">
      <div className="flex flex-row pt-1 scale-75 justify-center items-center">
        <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors h-9 px-4 py-2 font-bold text-sm mr-2 line-clamp-4 leading-[16]px text-[#000000] z-[1000]" href="/">SKINSTRIC</Link>       
        <p className="text-[#000000] font-bold text-sm ml-1.5 mr-1.5">[ INTRO ]</p>
      </div>
    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-colors disabled:pointer-events-none text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 mx-4 scale-[0.8] text-[#FCFCFC] text-[16px] bg-[#000000] leading-[16px]">ENTER CODE</button>
    </div>    
  );
}