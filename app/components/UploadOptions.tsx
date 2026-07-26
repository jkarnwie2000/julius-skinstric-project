"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";


export default function UploadOptions({
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
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const handleAllowCamera = async () => {
    try {
      setIsLoading(true);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setCameraActive(true);
      setShowModal?.(false);
      setIsCameraLoader?.(true);
    } catch (error) {
      console.error("Camera access failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      streamRef.current
        ?.getTracks()
        .forEach((track) => track.stop());
    };
  }, []);

  const handleImageClick = () => {
  fileInputRef.current?.click();
};

const handleImageChange = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];

  if (!file) return;

  console.log("Selected file:", file.name);
};

const handleCapture = () => {
  const video = videoRef.current;
  const canvas = canvasRef.current;

  if (!video || !canvas || video.videoWidth === 0) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const context = canvas.getContext("2d");
  context?.drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );

setCapturedImage(canvas.toDataURL("image/jpeg", 0.9));
video.pause();
};

const handleRetake = async () => {
  setCapturedImage(null);
  await videoRef.current?.play();
};

const handleUsePhoto = () => {
  if (!capturedImage) return;

  sessionStorage.setItem("capturedImage", capturedImage);

  streamRef.current
    ?.getTracks()
    .forEach((track) => track.stop());

  console.log("Photo confirmed and ready for analysis.");
};

switch (option) {
    case "camera":
  return (
    <div className="relative w-100 h-100 object-contain">
      <img
        src="/assets/camera.svg"
        alt="camera"
        id="camera_icon"
        className={`cursor-pointer ${
          cameraActive ? "hidden" : ""
        }`}
        onClick={() => setShowModal?.(true)}
      />

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className={`absolute inset-0 z-20 w-full h-full object-cover ${
          cameraActive ? "block" : "hidden"
        }`}
      />

      <canvas ref={canvasRef} className="hidden" />

{cameraActive && !capturedImage && (
  <button
    onClick={handleCapture}
    className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 bg-black px-4 py-2 text-white"
  >
    TAKE PICTURE 
  </button>
    )}

    {capturedImage && (
      <img
        src={capturedImage}
        alt="Captured preview"
        className="absolute inset-0 z-30 w-full h-full object-cover"
      />
    )}

    {capturedImage && (
  <div className="absolute bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-3">
    <button
      onClick={handleRetake}
      className="bg-white px-4 py-2 text-black"
    >
      RETAKE
    </button>

    <button
      onClick={handleUsePhoto}
      className="bg-black px-4 py-2 text-white"
    >
      USE PHOTO
    </button>
  </div>
)}

  <div className="upload_line-primary" />
  <div className="upload_bullet-point-primary" />

  {showModal && !cameraActive && (
    <div className="absolute top-[25%] left-[100%] z-50 w-[20vw] min-w-[240px] p-4 bg-[#1A1B1C] text-white">
      <h1 className="font-light">
        Allow A.I. to access your camera
      </h1>

      <hr className="my-4 border-white" />

      <div className="flex justify-end gap-4">
        <button onClick={() => setShowModal?.(false)}>
          Deny
        </button>

        <button onClick={handleAllowCamera}>
          Allow
        </button>
      </div>
    </div>
  )}
</div>
  );
    case "upload":
      return (
        <div className="w-100 h-100 object-contain cursor-pointer">
          <img
            src="/assets/gallery.svg"
            alt="gallery"
            onClick={handleImageClick}
            className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
          />

          <div className="upload_line-secondary" />
          <div className="upload_bullet-point-secondary" />

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </div>
      );

    default:
      return null;
  }
}