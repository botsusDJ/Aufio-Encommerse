import { ProductItem } from '../../components/ProductItem/ProductItem';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { Ad } from '../../components/ProductItem/Ad';

export const CategoryPage = ({ title, products, onAdd }) => {
  return (
    <div>
      <div className="page-title-box">
        <div className="container">
          <div style={{ fontSize: '40px', fontWeight: 'bold', letterSpacing: '1.5px' }}>
            {title}
          </div>
        </div>
      </div>

      <div className="container products-container">
        {products.map((item, index) => (
          <ProductItem 
            key={item.id}
            image={item.image}
            product={item} 
            isReverse={index % 2 !== 0} 
            onAdd={onAdd}
          />
        ))}
      </div>

      <div className="container cat-grid">
        <CategoryCard image="src\\assets\\shared\desktop\\image-category-thumbnail-headphones.png" title="Headphones" link="/headphones" />
        <CategoryCard image="src\\assets\\shared\\desktop\\image-category-thumbnail-speakers.png" title="Speakers" link="/speakers" />
        <CategoryCard image="src\\assets\\shared\\desktop\\image-category-thumbnail-earphones.png" title="Earphones" link="/earphones" />
      </div>

      <div className="container products-container">
        <Ad/>
      </div>
    </div>
  );
};