"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AnalysisPage() {
  const router = useRouter();
  const [status, setStatus] = useState(
    "PREPARING YOUR ANALYSIS..."
  );
  const [error, setError] = useState("");
  const hasRequested = useRef(false);

  useEffect(() => {
    if (hasRequested.current) return;
    hasRequested.current = true;

    async function analyzeImage() {
      const storedImage =
        sessionStorage.getItem("capturedImage");

      if (!storedImage) {
        setError("No captured image was found.");
        return;
      }

      const base64Image =
        storedImage.split(",")[1] ?? storedImage;

      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: base64Image,
            }),
          }
        );

        if (!response.ok) {
          const message = await response.text();
          throw new Error(
            message || `Request failed: ${response.status}`
          );
        }

        const result = await response.json();

        if (
          !result?.data?.race ||
          !result?.data?.age ||
          !result?.data?.gender
        ) {
          throw new Error(
            result?.message || "The API returned no demographic data."
          );
        }

        sessionStorage.setItem(
        "analysisResults",
        JSON.stringify(result)
        );
        router.push("/results");        
      }
      
      catch (error) {
        console.error("Analysis failed:", error);
        setError(
          error instanceof Error
            ? error.message
            : "The analysis failed."
        );
      }
    }
    analyzeImage();
 }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">
          {status}
        </h1>

        {error && (
          <p className="mt-4 text-red-600">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}