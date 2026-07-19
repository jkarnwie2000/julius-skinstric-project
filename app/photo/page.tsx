"use client"

import Image from "next/image";
import Link from "next/link";

export default function PhotoPage() {
 return (
<div className="relative h-[calc(100vh-76px)] overflow-hidden flex flex-col items-center justify-center bg-white text-center">
<div className="absolute top-16 left-9 text-left">
<p className="font-semibold text-xs">TO START ANALYSIS</p>
</div>
<div className="mb-3 text-center text-sm leading-5 animate-fade-up">
  <p>Julius Karnwie</p>
  <p>Washington, D. C.</p>
</div>
<div className="relative flex aspect-square w-[min(762px,90vw,70vh)] items-center justify-center animate-fade-up">
  {/* Rotating background diamonds */}
  <Image
    src="/assets/Diamond-light-large.webp"
    alt=""
    width={700}
    height={700}
    className="absolute w-full max-w-[762px] animate-spin-slow brightness-50"
  />

  <Image
    src="/assets/Diamond-medium-medium.webp"
    alt=""
    width={640}
    height={640}
    className="absolute w-[90%] max-w-[682px] animate-spin-medium"
  />

  <Image
    src="/assets/Diamond-dark-small.webp"
    alt=""
    width={580}
    height={580}
    className="absolute w-[80%] max-w-[602px] animate-spin-fast"
  />

  {/* One portrait above the diamonds */}
  <div className="relative z-10 h-[42%] w-[42%] overflow-hidden transition-transform duration-500 ease-out hover:scale-105">
    <Image
      src="/assets/Best Image.png"
      alt="Portrait"
      fill
      className="object-cover"
    />
  </div>
</div>
<div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
    <Link className="inset-0" aria-label="Back" href="/">
<div>
<div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
<span className="rotate-[-45deg] text-xs font-semibold sm:hidden">BACK</span>
</div>
<div className="group hidden sm:flex flex-row relative justify-center items-center">
<div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>
<span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300">▶</span>
<span className="text-sm font-semibold hidden sm:block ml-6 ">BACK</span>
</div>
</div>
</Link>
</div>
</div>

 );

} 