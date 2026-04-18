export const ProductItem = ({ image, product, isReverse, onAdd }) => {
  return (
    <div className={`product-item-row ${isReverse ? 'reverse' : ''}`}>
      <div className="product-image-container">
        {/* <div className="img-placeholder"></div> */}
        <img src={image} width="500px" height="500px"></img>
      </div>
      
      <div className="product-content">
        {product.isNew && <div className="overline">New Product</div>}
        <h2>{product.name}</h2>
        <div className="product-description">{product.desc}</div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button className="btn-orange" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};