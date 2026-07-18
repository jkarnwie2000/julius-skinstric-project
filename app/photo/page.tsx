"use client"

import Image from "next/image";

export default function PhotoPage() {
 return (
<div className="min-h-[90vh] flex flex-col items-center justify-center bg-white text-center">
<div className="absolute top-16 left-9 text-left">
<p className="font-semibold text-xs">TO START ANALYSIS</p>
</div>
<div className="relative flex h-[700px] w-full max-w-[700px] items-center justify-center">
  <Image
    src="/assets/Diamond-light-large.webp"
    alt=""
    width={1500}
    height={1500}
    className="absolute w-full max-w-[700px] animate-spin-slow"
    priority
  />

  <Image
    src="/assets/Diamond-medium-medium.webp"
    alt=""
    width={1100}
    height={1100}
    className="absolute w-[90%] max-w-[640px] animate-spin-medium"
  />

  <Image
    src="/assets/Diamond-dark-small.webp"
    alt=""
    width={900}
    height={900}
    className="absolute w-[80%] max-w-[580px] animate-spin-fast"
  />

  <div className="relative z-10 flex flex-col items-center">
    <p className="mb-1 text-sm uppercase tracking-wider text-gray-400">
      CLICK TO TYPE
    </p>

    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex flex-col items-center"
    >
      <input
        className="w-[90vw] max-w-[600px] border-b border-black bg-transparent text-center text-5xl outline-none"
        placeholder="Introduce Yourself"
        autoComplete="off"
        type="text"
        name="name"
      />
    </form>
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