import React, { useState, useEffect } from 'react';

export const GroceryList = ({ products, query, setProductToShow }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      [...products]
      .sort((a, b) => a.priority - b.priority)
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter(product => {
        if (query === 'Ran out') {
          return product.status === false;
        }

        if (query === 'Have') {
          return product.status === true;
        }

        return product;
      })
    )
  }, [query, products]);

  const addProduct = (item) => {
    setFilteredProducts(prevState => [...prevState, { ...item, id: Math.random() }]);
  }

  const removeProduct = (item) => {
    setFilteredProducts(prevState =>
      prevState.filter(prevItem => prevItem !== item)
    )
  }

  const changeStaus = (item) => {
    setFilteredProducts((prevState) => {
      const newState = prevState.map((prevItem) => {
        if (prevItem === item) {
          const newItem = { ...item };

          newItem.status = !newItem.status;
          newItem.time = new Date();

          return newItem;
        }

        return prevItem;
      });

      return newState;
    });
  }

  const showDetails = (item) => {
    setProductToShow(item);
  };

  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={filteredProducts.id}>
          <input
            type="checkbox"
            checked={product.status}
            onChange={() => changeStaus(product)}
          />
          {product.name}
          {' '}
          <button
            onClick={() => addProduct(product)}
          >
            Add
          </button>
          <button
            onClick={() => removeProduct(product)}
          >
            Remove
          </button>
          <button
            onClick={() => showDetails(product)}
          >
            Show details
          </button>
        </li>
      ))}
    </ul>
  );
};
