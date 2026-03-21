export const ProductItem = ({ product, isReverse }) => {
  return (
    <div className={`product-item-row ${isReverse ? 'reverse' : ''}`}>
      <div className="product-image-container">
        {/* <img src={product.image} alt={product.name} /> */}
        <div style={{color: '#999'}}>Product Image</div>
      </div>
      
      <div className="product-content">
        {product.isNew && <div className="overline">New Product</div>}
        <h2>{product.name}</h2>
        <div className="product-description">
          {product.desc}
        </div>
        <button className="btn-orange">See Product</button>
      </div>
    </div>
  );
};