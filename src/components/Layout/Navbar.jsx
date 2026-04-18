import { Link } from "react-router-dom"

export const Navbar = ({ onCartOpen, cartCount }) => (
  <div className="nav-wrapper">
    <div className="container nav-content">
      <Link to="/" className="logo">audiophile</Link>
      <div className="nav-links">
        <Link className="hover-links" to="/">Home</Link>
        <Link className="hover-links" to="/headphones">Headphones</Link>
        <Link className="hover-links" to="/speakers">Speakers</Link>
        <Link className="hover-links" to="/earphones">Earphones</Link>
      </div>
      <div className="cart-icon-trigger" onClick={onCartOpen} style={{cursor: 'pointer'}}>
        <img src="src/assets/shared/desktop/icon-cart.svg" width="24px" height="20px"></img>
        {cartCount > 0 && <div className="cart-badge">{cartCount}</div>}
      </div>
    </div>
  </div>
);