import { ProductItem } from '../../components/ProductItem/ProductItem';

export const CategoryPage = ({ title, products }) => {
  return (
    <div>
      <div className="page-title-box">
        <div className="container">
          <div style={{fontSize: '40px', fontWeight: 'bold'}}>{title}</div>
        </div>
      </div>
      
      <div className="container products-container">
        {products.map((item, index) => (
          <ProductItem 
            key={item.id} 
            product={item} 
            isReverse={index % 2 !== 0} 
          />
        ))}
      </div>
    </div>
  );
};