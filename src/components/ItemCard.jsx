export default function ItemCard({
  data: { imgURL, name, priceRange, label, colors },
}) {
  return (
    <div className="text-base group">
      <div className="relative">
        <img src={imgURL} alt="plant image" />
        {label && (
          <p className="top-4 left-0 absolute text-base w-fit text-right px-2 py-1 lg:px-4 bg-[#4BD8C8] text-white">
            {label}
          </p>
        )}
      </div>
      <div className="hidden group-hover:grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-fit mt-4 ">
        {colors.map((color, index) => {
          if (index < 5) {
            return (
              <img
                key={index + color}
                className={`w-7 aspect-square rounded-full`}
                src={`assets/colors/${color}.png`}
                alt={color}
              />
            );
          }
        })}
        {colors.length > 5 && (
          <i className="text-gray-500 text-lg">+{colors.length - 5}</i>
        )}
      </div>
      <h3 className="mt-4 md:text-xl">{name}</h3>
      <i className="text-gray-500 group-hover:hidden">
        Choose your planter style
        <span className="hidden md:inline"> & color</span>
      </i>
      <p className="mt-4 text-sm md:text-base">{priceRange}</p>
    </div>
  );
}
