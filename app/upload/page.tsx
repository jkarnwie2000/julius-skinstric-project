"use client";

import { useState, type FormEvent } from "react";
import UploadOptions from "../components/UploadOptions";

export default function UploadPage() {
  const [loading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCameraLoader, setIsCameraLoader] = useState(false);

  return (
    <section className="min-h-[calc(100vh-80px)] px-8 flex flex-col">
      <h1 className="uppercase font-bold max-sm:mt-2">To Start Analysis</h1>

      <div className="flex flex-1 items-center justify-center gap-32 w-full max-md:flex-col">
        <UploadOptions
          option="camera"
          setIsLoading={setIsLoading}
          showModal={showModal}
          setShowModal={setShowModal}
          setIsCameraLoader={setIsCameraLoader}
        />

        <UploadOptions option="upload" setIsLoading={setIsLoading} />
      </div>
    </section>
  );
}