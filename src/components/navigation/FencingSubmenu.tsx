import React from 'react';
import { Link } from 'react-router-dom';

interface FencingItem {
  name: string;
  path: string;
}

interface FencingSubmenuProps {
  items: FencingItem[];
  onClose: () => void;
}

const FencingSubmenu: React.FC<FencingSubmenuProps> = ({ items, onClose }) => {

  return (
    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default FencingSubmenu;
