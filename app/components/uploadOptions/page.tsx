"use client"


export default function uploadOptions() {

switch (option) {

    case "camera":

      return (

        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">

          <div className="relative w-full h-full">

            <img

              src="/assets/camera.svg"

              alt="camera"

              id="camera_icon"

              onClick={() => {

                setShowModal(true);

              }}

            />

            <div className="upload_line-primary" />

            <div className="upload_bullet-point-primary" />

            <h1 className="upload_sub-title-primary">

              Allow A.I to

              <br />

              scan your face

            </h1>

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

                  <button

                    className="text-primary-300 capitalize hover:text-primary-100 transition-colors duration-300 cursor-pointer md:text-[calc(100vw/90)] max-sm:text-[12px]"

                    onClick={() => setShowModal(false)}

                  >

                    Deny

                  </button>

                  <button

                    className="capitalize cursor-pointer md:text-[calc(100vw/90)] max-sm:text-[12px]"

                    onClick={() => {

                      setIsCameraLoader(true);

                      setIsLoading(true);

                    }}

                  >

                    Allow

                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      );

    case "upload":

      return (

        <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">

          <img

            src="/assets/gallery.svg"

            alt="camera"

            onClick={handleImageClick}

          />

          <div className="upload_line-secondary" />

          <div className="upload_bullet-point-secondary" />

          <h1 className="upload_sub-title-secondary">

            Allow A.I. access Gallery

          </h1>

          <input

            type="file"

            ref={fileInputRef}

            className="hidden"

            onChange={(e) => handleImageChange(e)}

            accept="image/*"

          />

        </div>

      );

    default:

      break;

  } 

};

