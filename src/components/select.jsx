import React, { useState } from 'react';

const MultiSelectCheckbox = () => {
  const options = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  const handleSelectAll = () => {
    if (selectedItems.length === options.length) {
      // Se todos estiverem selecionados, desmarque todos
      setSelectedItems([]);
    } else {
      // Caso contrário, selecione todos
      setSelectedItems(options);
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleSelectAll}
          checked={selectedItems.length === options.length}
        />
        Selecionar Todos
      </label>
      <br />
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={option}
            checked={selectedItems.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          />
          {option}
        </label>
      ))}
      <br />
      <span>
        Itens Selecionados: {selectedItems.map(item => <span key={item}>{item}, </span>)}
      </span>
    </div>
  );
};

export default MultiSelectCheckbox;