import PropTypes from "prop-types";

const CheckboxFilter = ({ options, selectedOptions, handleCheckboxChange }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
      {options.map((option) => (
        <div key={option} className="flex items-center mb-2">
          <input
            type="checkbox"
            id={option}
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor={option} className="text-gray-700">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

CheckboxFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default CheckboxFilter;
