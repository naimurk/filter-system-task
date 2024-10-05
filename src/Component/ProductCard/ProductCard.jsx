import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    // console.log("hello")
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Product Image */}
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      {/* Product Info */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
        <p className="text-gray-500 mb-4">{product?.category}</p>
        <p className="text-gray-700 font-medium">${product?.price}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-4">{product?.description}</p>

      {/* Button */}
      <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors duration-300 ease-in-out">
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
