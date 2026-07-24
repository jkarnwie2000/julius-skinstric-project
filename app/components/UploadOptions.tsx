"use client";

import { Dispatch, SetStateAction, useRef } from "react";
import React, { useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react'; // Example icon library


export default function UploadOptions({

    // 1. Initialize the file input ref
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 2. Handle the gallery icon click to programmatically trigger the input
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // 3. Handle the selected file changes
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files  && files[0]) {
      const selectedFile = files[0];
      console.log('Selected file:', selectedFile.name);
      // Add your upload or preview logic here
    }
};

        option,

        setIsLoading,

        showModal,

        setShowModal,

        setIsCameraLoader,

        }: {

        option: "camera" | "upload";

        setIsLoading: Dispatch<SetStateAction<boolean>>;

        showModal?: boolean;

        setShowModal?: Dispatch<SetStateAction<boolean>>;

        setIsCameraLoader?: Dispatch<SetStateAction<boolean>>;

        }) {

        const fileInputRef = useRef(null);

        function handleImageChange() {}

        function handleImageClick() {}

        switch (option) {

        case "camera":

        return (

        <div className="w-100 h-100 object-contain cursor-pointer">

        <div className="relative w-full h-full">

        {setShowModal && (

        <img

        src="/assets/camera.svg"

        alt="camera"

        id="camera_icon"

        onClick={() => {

        setShowModal(true);

        }}

        />

        )}

        <div className="upload_line-primary" />

        <div className="upload_bullet-point-primary" />

        <div

        className={`md:w-[25vw] md:h-[10vw] lg:h-[8vw] lg:w-[20vw] max-md:w-[30vw] max-md:h-[20vw] max-sm:h-[30vw] border absolute top-[25%] left-[100%] translate-x-[10%] py-2 px-3 text-white bg-secondary flex flex-col justify-between transition-opacity duration-300

        ${!showModal && "opacity-0"}

        `}

        >

        <h1 className="font-light md:text-[calc(100vw/90)] max-md:text-[16px] max-sm:text-[12px]">

        Allow A.I. to access your camera

        </h1>

        <div className="flex flex-col justify-end">

        <hr className="w-full border-white" />

        <div className="flex justify-end py-[4px] gap-4">

        {setShowModal && (

        <button

        className="text-primary-300 capitalize hover:text-primary-100 transition-colors duration-300 cursor-pointer md:text-[calc(100vw/90)] max-sm:text-[12px]"

        onClick={() => setShowModal(false)}

        >

        Deny

        </button>

        )}

        {setIsCameraLoader && (

        <button

        className="capitalize cursor-pointer md:text-[calc(100vw/90)] max-sm:text-[12px]"

        onClick={() => {

        setIsCameraLoader(true);

        setIsLoading(true);

        }}

        >

        Allow

        </button>

        )}

        </div>

        </div>

        </div>

        </div>

        </div>

        );

        case "upload":

        return (

        <div className="w-100 h-100 object-contain cursor-pointer">

        <img

        src="/assets/gallery.svg"

        alt="camera"

        onClick={handleImageClick} 
        className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
        role="button"
        aria-label="Open gallery"
        />

        <div className="upload_line-secondary" />

        <div className="upload_bullet-point-secondary" />

       <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

        </div>

        );

        default:

        break;

    }

    }