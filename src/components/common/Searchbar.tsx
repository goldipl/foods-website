import React from "react";

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="searchbar-box">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Szukaj..."}
        className="search-input"
      />
    </div>
  );
};

export default Searchbar;
