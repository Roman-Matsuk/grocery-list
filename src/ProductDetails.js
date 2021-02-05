export const ProductDetails = ({ productToShow, setProducts, setProductToShow }) => {
  const removeProduct = (item) => {
    setProducts(prevState => prevState.filter(prevItem => prevItem !== item));
    setProductToShow({});
  }

  return (
    <div>
      <h2>{productToShow.name}</h2>
      <p>{productToShow.status ? 'Have' : 'Ran out'}</p>
      <p>{productToShow.time.toLocaleTimeString()}</p>
      <button
        onClick={() => removeProduct(productToShow)}
      >
        Remove
      </button>
    </div>
  )
};
