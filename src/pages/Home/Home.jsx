import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import { Ad } from '../../components/ProductItem/Ad';

export const Home = () => (
  <div>
    <div className="hero-section">
      <div className="container">
        <div className="overline" style={{color: 'rgba(255, 255, 255, 0.5)'}}>New Product</div>
        <div className="hero-title">
            XX99 Mark II
            <br></br>
            <br></br>
            Headphones</div>
        <div className="hero-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</div>
        <button className="btn-orange">See Product</button>
      </div>
    </div>
    
    <div className="container cat-grid">
      <CategoryCard title="Headphones" link="/headphones" />
      <CategoryCard title="Speakers" link="/speakers" />
      <CategoryCard title="Earphones" link="/earphones" />
    </div>

    <div className="container products-container">
      <Ad/>
    </div>
  </div>
);