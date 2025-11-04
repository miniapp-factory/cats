"use client";
import { useState } from "react";
import CatCard from "./cat-card";
import { getRandomCat, Cat } from "@/lib/cats";

export default function CatFactory() {
  const [cat, setCat] = useState<Cat>(getRandomCat());

  const reroll = () => setCat(getRandomCat());

  const share = async () => {
    const text = `Check out my cat: ${cat.name} (${cat.rarity}) - ${cat.job}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "My Cat", text });
      } catch (e) {
        console.error(e);
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(text);
        alert("Cat info copied to clipboard!");
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <CatCard cat={cat} />
      <div className="flex gap-2">
        <button
          onClick={reroll}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reroll
        </button>
        <button
          onClick={share}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Share
        </button>
      </div>
    </div>
  );
}
