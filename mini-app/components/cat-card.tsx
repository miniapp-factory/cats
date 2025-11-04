import { Cat } from "@/lib/cats";
import Image from "next/image";

export default function CatCard({ cat }: { cat: Cat }) {
  return (
    <div
      className="p-4 rounded-lg shadow-md"
      style={{ backgroundColor: cat.background }}
    >
      <Image src={cat.image} alt={cat.name} width={200} height={200} />
      <h2 className="text-xl font-bold mt-2">{cat.name}</h2>
      <p className="text-sm">Rarity: {cat.rarity}</p>
      <p className="text-sm">Job: {cat.job}</p>
    </div>
  );
}
