"use client"

import Image from "next/image";

export default function PhotoPage() {
 return (
<div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
<div className="absolute top-16 left-9 text-left">
<p className="font-semibold text-xs">TO START ANALYSIS</p>
</div>
Julius Karnwie
<br/>
Washington, D. C.
<div className="relative flex h-[700px] w-full max-w-[700px] items-center justify-center">
  {/* Rotating background diamonds */}
  <Image
    src="/assets/Diamond-light-large.webp"
    alt=""
    width={700}
    height={700}
    className="absolute w-full max-w-[700px] animate-spin-slow"
  />

  <Image
    src="/assets/Diamond-medium-medium.webp"
    alt=""
    width={640}
    height={640}
    className="absolute w-[90%] max-w-[640px] animate-spin-medium"
  />

  <Image
    src="/assets/Diamond-dark-small.webp"
    alt=""
    width={580}
    height={580}
    className="absolute w-[80%] max-w-[580px] animate-spin-fast"
  />

  {/* One portrait above the diamonds */}
  <div className="relative z-10 h-[320px] w-[320px] overflow-hidden">
    <Image
      src="/assets/Best Image.png"
      alt="Portrait"
      fill
      className="object-cover"
    />
  </div>
</div>
<div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
    <a className="inset-0" aria-label="Back" href="/">
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
</a>
</div>
</div>

 );

} 