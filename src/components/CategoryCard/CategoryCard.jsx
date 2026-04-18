import { Link } from 'react-router-dom';

export const CategoryCard = ({ image, title, link }) => {
  return (
    <div className="cat-item">
      <img src={image} width="160px" height="150px" style={{
        position: 'absolute', 
        top: '-60px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        borderRadius: '50%'
      }}/>
      
      <h3>{title}</h3>
      <Link to={link} className="shop-link">
        Shop <span>&gt;</span>
      </Link>
    </div>
  );
};