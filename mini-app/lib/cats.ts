export type Cat = {
  name: string;
  rarity: "common" | "uncommon" | "rare" | "legendary";
  job: string;
  background: string;
  image: string;
};

const cats: Cat[] = [
  // Common (4)
  { name: "Whiskers", rarity: "common", job: "Engineer", background: "#f0e68c", image: "/cats/whiskers.png" },
  { name: "Mittens", rarity: "common", job: "Teacher", background: "#f0e68c", image: "/cats/mittens.png" },
  { name: "Paws", rarity: "common", job: "Gardener", background: "#f0e68c", image: "/cats/paws.png" },
  { name: "Shadow", rarity: "common", job: "Baker", background: "#f0e68c", image: "/cats/shadow.png" },

  // Uncommon (3)
  { name: "Sable", rarity: "uncommon", job: "Blacksmith", background: "#d3d3d3", image: "/cats/sable.png" },
  { name: "Luna", rarity: "uncommon", job: "Wizard", background: "#d3d3d3", image: "/cats/luna.png" },
  { name: "Nimbus", rarity: "uncommon", job: "Alchemist", background: "#d3d3d3", image: "/cats/nimbus.png" },

  // Rare (2)
  { name: "Aurora", rarity: "rare", job: "Archmage", background: "#a9a9a9", image: "/cats/aurora.png" },
  { name: "Zephyr", rarity: "rare", job: "Dragon Tamer", background: "#a9a9a9", image: "/cats/zephyr.png" },

  // Legendary (1)
  { name: "Celestia", rarity: "legendary", job: "Cat King", background: "#ffd700", image: "/cats/celestia.png" },
];

export function getRandomCat(): Cat {
  const index = Math.floor(Math.random() * cats.length);
  return cats[index];
}
