"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Scores = Record<string, number>;
type DemographicKey = "race" | "age" | "gender";

type AnalysisResult = {
  message?: string;
  data?: {
    race: Scores;
    age: Scores;
    gender: Scores;
  };
};

function sortScores(scores: Scores) {
  return Object.entries(scores).sort(
    ([, firstScore], [, secondScore]) =>
      secondScore - firstScore
  );
}

function formatPercentage(score: number) {
  const percentage = score <= 1 ? score * 100 : score;
  return percentage.toFixed(2);
}

export default function ResultsPage() {
  const [result, setResult] =
    useState<AnalysisResult | null>(null);

  const [error, setError] = useState("");

  const [selected, setSelected] = useState<
    Record<DemographicKey, string>
  >({
    race: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    try {
      const storedResults =
        sessionStorage.getItem("analysisResults");

      if (!storedResults) {
        throw new Error("No analysis results were found.");
      }

      const parsedResults: AnalysisResult =
        JSON.parse(storedResults);

      if (
        !parsedResults.data?.race ||
        !parsedResults.data?.age ||
        !parsedResults.data?.gender
      ) {
        throw new Error(
          "The demographic results could not be found."
        );
      }

      setResult(parsedResults);

      setSelected({
        race:
          sortScores(parsedResults.data.race)[0]?.[0] ?? "",
        age:
          sortScores(parsedResults.data.age)[0]?.[0] ?? "",
        gender:
          sortScores(parsedResults.data.gender)[0]?.[0] ?? "",
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "The results could not be loaded."
      );
    }
  }, []);

  if (error) {
    return (
      <main className="min-h-[calc(100vh-64px)] bg-white text-black flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </main>
    );
  }

  if (!result?.data) {
    return (
      <main className="min-h-[calc(100vh-64px)] bg-white text-black flex items-center justify-center">
        <p>LOADING RESULTS...</p>
      </main>
    );
  }

  const sections: {
    key: DemographicKey;
    title: string;
    scores: Scores;
  }[] = [
    {
      key: "race",
      title: "RACE",
      scores: result.data.race,
    },
    {
      key: "age",
      title: "AGE",
      scores: result.data.age,
    },
    {
      key: "gender",
      title: "GENDER",
      scores: result.data.gender,
    },
  ];

  return (
    <main className="min-h-[calc(100vh-64px)] bg-white px-6 py-8 text-[#1A1B1C] md:px-10">
      <h1 className="text-2xl font-semibold">
        DEMOGRAPHICS
      </h1>

      <p className="mt-1 text-sm">
        PREDICTED RACE, AGE AND GENDER
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <section className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {sections.map(({ key, title }) => (
            <div
              key={key}
              className="border-t-2 border-black bg-[#F3F3F3] p-5"
            >
              <p className="text-3xl capitalize">
                {selected[key] || "Unknown"}
              </p>

              <p className="mt-10 font-semibold">
                {title}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {sections.map(({ key, title, scores }) => (
            <div
              key={key}
              className="border-t-2 border-black"
            >
              <h2 className="bg-[#F3F3F3] p-4 font-semibold">
                {title}
              </h2>

              <div className="mt-2">
                {sortScores(scores).map(
                  ([label, score]) => {
                    const isSelected =
                      selected[key] === label;

                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() =>
                          setSelected((current) => ({
                            ...current,
                            [key]: label,
                          }))
                        }
                        className={`flex w-full justify-between px-4 py-3 text-left capitalize transition-colors ${
                          isSelected
                            ? "bg-black text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <span>{label}</span>

                        <span>
                          {formatPercentage(score)}%
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="mt-10">
        <Link
          href="/upload"
          className="inline-block border border-black px-5 py-3 font-semibold"
        >
          BACK
        </Link>
      </div>
    </main>
  );
}