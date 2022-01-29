import "./styles.css";

export const Input = ({ searchValue, handleChange }) => {
  return (
    <input
      value={searchValue}
      className="input-search"
      type="search"
      onChange={handleChange}
      placeholder="Type your search!"
    />
  );
};
