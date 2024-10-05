import PropTypes from "prop-types";

const Range = ({ minPrice, handleMaxChange, handleMinChange, maxPrice }) => {
  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Filter by Price</h2>

      {/* Slider Section */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handleMinChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={handleMaxChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Price Display */}
      <div className="mt-4 md:mt-6 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
        <div className="flex gap-4">
          <div className="p-2 bg-gray-100 rounded-lg text-center">
            <span className="text-md font-medium">Min Price:</span>
            <span className="ml-2 text-md">{minPrice}</span>
          </div>
          <div className="p-2 bg-gray-100 rounded-lg text-center">
            <span className="text-md font-medium">Max Price:</span>
            <span className="ml-2 text-md">{maxPrice}</span>
          </div>
        </div>

        {/* Selected Range Box */}
        {/* <div className="p-2 bg-gray-100 rounded-lg text-center">
          <span className="text-md font-medium">Range:</span>
          <span className="ml-2 text-md">{minPrice} - {maxPrice}</span>
        </div> */}
      </div>
    </div>
  );
};

export default Range;

Range.propTypes = {
  minPrice: PropTypes.number.isRequired,
  handleMaxChange: PropTypes.func.isRequired,
  handleMinChange: PropTypes.func.isRequired,
  maxPrice: PropTypes.number.isRequired,
};
