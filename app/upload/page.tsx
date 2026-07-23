"use client"

import { useState, type FormEvent } from "react";

export default function UploadPage() {

    const [loading, setIsLoading] = useState(false);


    return(
        <section className="px-8 md:h-full max-lg:min-h-screen flex flex-col lg:relative overflow-x-hidden">

      <h1 className="uppercase font-bold max-sm:mt-2">To Start Analysis</h1>

      <div className="flex-1 flex items-center md:justify-between mx-auto w-full gap-10 max-md:flex-col lg:px-10">

        <UploadOptions

          option="camera"

          setIsLoading={setIsLoading}

          showModal={showModal}

          setShowModal={setShowModal}

          setIsCameraLoader={setIsCameraLoader}

        />

        <UploadOptions option="upload" setIsLoading={setIsLoading} />

      </div>

      <NavigationArrows handleLeftArrowClick={() => router.push("/intro")} />

    </section>

    );
}