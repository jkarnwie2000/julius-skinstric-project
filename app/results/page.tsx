"use client";

import { useEffect, useState } from "react";

type Scores = Record<string, number>;

type AnalysisResult = {
  message?: string;
  data?: {
    race: Scores;
    age: Scores;
    gender: Scores;
  };
};

function getHighestResult(scores?: Scores) {
  const highest = Object.entries(scores ?? {}).sort(
    ([, first], [, second]) => second - first
  )[0];

  if (!highest) return null;

  return {
    label: highest[0],
    confidence: Math.round(highest[1] * 100),
  };
}

export default function ResultsPage() {
  const [result, setResult] =
    useState<AnalysisResult | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedResults =
      sessionStorage.getItem("analysisResults");

    if (!storedResults) {
      setError("No analysis results were found.");
      return;
    }

    try {
      setResult(JSON.parse(storedResults));
    } catch {
      setError("The analysis results could not be read.");
    }
  }, []);

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </main>
    );
  }

  if (!result?.data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>LOADING RESULTS...</p>
      </main>
    );
  }

  const race = getHighestResult(result.data.race);
  const age = getHighestResult(result.data.age);
  const gender = getHighestResult(result.data.gender);

  const categories = [
    { title: "RACE", result: race },
    { title: "AGE", result: age },
    { title: "GENDER", result: gender },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold">
        DEMOGRAPHICS
      </h1>

      <p className="mt-2">
        PREDICTED RACE, AGE AND GENDER
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {categories.map(({ title, result }) => (
          <div
            key={title}
            className="border border-black p-6"
          >
            <h2 className="font-semibold">{title}</h2>

            <p className="mt-8 text-2xl capitalize">
              {result?.label ?? "Unknown"}
            </p>

            <p className="mt-2">
              {result?.confidence ?? 0}% confidence
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}