import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Header.css';

interface HeaderProps {
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount }) => {
  return (
    <header className="header">
        
      <div className="logo">
        <Link to="/"><img src="image/logomarm.png" alt="" /></Link>
        
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count">{cartItemsCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

