import ItemCard from "./ItemCard";

const itemsMOCK = [
  {
    imgURL: "assets/new_arrivals/beginner.png",
    name: "Parlor Palm",
    priceRange: "$30-$51",
    colors: [
      "olive",
      "cerulean",
      "gray",
      "black",
      "terracota",
      "cream",
      "forest",
      "slate",
    ],
  },
  {
    imgURL: "assets/new_arrivals/beginner.png",
    name: "Parlor Palm",
    priceRange: "$30-$51",
    label: "Back in Stock",
    colors: [
      "black",
      "terracota",
      "cream",
      "forest",
      "slate",
      "olive",
      "cerulean",
    ],
  },
  {
    imgURL: "assets/new_arrivals/beginner.png",
    name: "Parlor Palm",
    priceRange: "$30-$51",
    label: "Pet-Friendly",
    colors: ["forest", "slate", "black", "terracota", "cream", "olive"],
  },
  {
    imgURL: "assets/new_arrivals/beginner.png",
    name: "Parlor Palm",
    priceRange: "$30-$51",
    label: "New Arrival",
    colors: ["black", "terracota", "cream", "forest", "slate"],
  },
];

export default function FeatureContainer({ title, items }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[2rem]">{title}</h1>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 gap-8 text-xs font-medium">
        {itemsMOCK.map((item, index) => {
          return <ItemCard key={title + index} data={item} />;
        })}
      </div>
    </div>
  );
}
