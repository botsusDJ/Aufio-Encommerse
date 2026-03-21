import { Link } from 'react-router-dom';

export const Footer = () => (
  <div className="nav-wrapper">
    <div className="container nav-content">
      <Link to="/" className="logo">audiophile</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/headphones">Headphones</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/earphones">Earphones</Link>
      </div>
      <div style={{color: 'white'}}>🛒</div>
    </div>
  </div>
);