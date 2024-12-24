iimport { useState } from 'react';
import './Navbar.css';

interface NavItem {
  name: string;
}

const navItems: NavItem[] = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Skills' },
  { name: 'Projects' },
  { name: 'Contact' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('Home'); // Default active tab

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <nav className="navbar">
      {navItems.map((item) => (
        <button
          key={item.name}
          className={`nav-item ${
            activeItem === item.name ? 'active' : 'inactive'
          }`}
          onClick={() => handleItemClick(item.name)}
        >
          {item.name}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
