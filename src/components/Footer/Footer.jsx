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
    </div>
    <div className="container nav-content">
      <div className='nav-links'>
        <div>
          <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ea dolores quaerat dicta placeat commodi impedit totam, laborum dolorum ex ipsum. Beatae reprehenderit vitae accusantium totam nemo commodi, tempora id!</div>
          <br></br>
          <div>CopyRight 2021. All rights reserved</div>
        </div>
        <div>
          {/* <img src="" alt=""/> */}
        </div>
      </div>
    </div>
  </div>
);