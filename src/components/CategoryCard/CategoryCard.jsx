import { Link } from 'react-router-dom';

export const CategoryCard = ({ title, link }) => {
  return (
    <div className="cat-item">
      <div style={{
        position: 'absolute', 
        top: '-60px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '150px',
        height: '150px',
        background: '#ccc', // image
        borderRadius: '50%'
      }}></div>
      
      <h3>{title}</h3>
      <Link to={link} className="shop-link">
        Shop <span>&gt;</span>
      </Link>
    </div>
  );
};