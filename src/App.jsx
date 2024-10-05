import { useEffect, useState } from "react";
import Range from "./Component/Range/Range";
import ProductCard from "./Component/ProductCard/ProductCard";
import CheckboxFilter from "./Component/CheckboxFilter/CheckboxFilter";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        if (data?.length > 0) {
          const allPrices = data?.map((item) => item?.price);
          const allCategories = data?.map((item) => item?.category);
          const minPricee = Math.min(...allPrices);
          const maxPricee = Math.max(...allPrices);
          setMaxPrice(maxPricee);
          setMinPrice(minPricee);

          const uniqueCategories = [...new Set(allCategories)];
          setCategories(uniqueCategories);

          setAllProducts(data);
          setLoading(false);
        }
      });
  }, []);

  const handleMinChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredProducts = allProducts.filter(
    (product) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category))
  );

  return loading ? (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
    </div>
  ) : (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 lg:p-8">
      {/* Filter section */}
      <div className="lg:col-span-1 h-fit bg-white p-4 shadow-md rounded-md lg:sticky lg:top-4   ">
        <Range
          handleMaxChange={handleMaxChange}
          handleMinChange={handleMinChange}
          maxPrice={maxPrice}
          minPrice={minPrice}
        />

        {/* Checkbox filter */}
        <CheckboxFilter
          options={categories}
          selectedOptions={selectedCategories}
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>

      {/* Product Cards Section */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
