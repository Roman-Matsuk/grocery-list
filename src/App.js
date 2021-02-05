import React, { useState } from 'react';
import './App.css';
import { GroceryList } from './GroceryList';
import { ProductDetails } from './ProductDetails';

const productsFromServer = [
  { name: 'Bread', status: true, priority: 1, id: 1, time: new Date()},
  { name: 'Milk', status: false, priority: 4, id: 2, time: new Date()},
  { name: 'Ice cream', status: true, priority: 4, id: 3, time: new Date()},
  { name: 'Potato', status: false, priority: 2, id: 4, time: new Date()},
  { name: 'Cookies', status: true, priority: 3, id: 5, time: new Date()},
  { name: 'Carrot', status: true, priority: 3, id: 6, time: new Date()},
  { name: 'Tomato', status: false, priority: 5, id: 7, time: new Date()},
  { name: 'Cake', status: true, priority: 5, id: 8, time: new Date()},
  { name: 'Coke', status: true, priority: 1, id: 9, time: new Date()},
  { name: 'Chocolate', status: false, priority: 2, id: 10, time: new Date()},
]

function App() {
  const [products, setProducts] = useState(productsFromServer);
  const [query, setQuery] = useState('All');
  const [productToShow, setProductToShow] = useState({});

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <select
        value={query}
        onChange={event => setQuery(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Ran out">Ran out</option>
        <option value="Have">Have</option>
      </select>
      <GroceryList
        products={products}
        query={query}
        setProductToShow={setProductToShow}
      />
      {productToShow.name
        && (
          <ProductDetails
            productToShow={productToShow}
            setProducts={setProducts}
            setProductToShow={setProductToShow}
          />
        )
      }
    </div>
  );
}

export default App;
