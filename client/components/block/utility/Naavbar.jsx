import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyImage } from '../../ui';
import { 
  Menu, 
  Book, 
  GraduationCap, 
  Users, 
  ChevronDown, 
  ChevronRight 
} from 'lucide-react';


const NaavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [

    {
      label: 'Admissions',
      icon: <GraduationCap />,
      subItems: [
        { label: 'Criteria', link: '/admissions/criteria' },
        { label: 'Application', link: '/admissions/application' }
      ]
    },
    {
      label: 'Login',
      icon: <Users />,
      subItems: [
        { label: 'Faculty', link: '/teacher' },
        { label: 'Students', link: '/student' }
      ]
    }
  ];

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b-slate-500 border-b">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <GraduationCap className="text-blue-600" size={30} /> */}
            <LazyImage src="./img/logo.jpg" placeholder="./img/logo.jpg" alt="Logo" className="h-10 w-10" title="Maitree Model Mission" />
            <Link className="text-xl font-bold text-blue-800 hover:text-blue-500" to={"/"}>Maitree Model Mission</Link>

        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => {setActiveDropdown(null)}}
            >
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition">
                {item.icon}
                <span className="ml-2">{item.label}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {activeDropdown === item.label && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md pb-2 min-w-[200px] ">
                  {item.subItems.map((subItem) => (
                    <Link 
                      key={subItem.label}
                      to={subItem.link}
                      className="block px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-600"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-white text-gray-700 hover:text-blue-600  p-2 rounded-md"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <div key={item.label} className="border-b">
              <button 
                onClick={() => toggleDropdown(item.label)}
                className="w-full flex justify-between items-center bg-white p-4 text-gray-700 hover:bg-blue-50"
              >
                    <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    </div>
                    {activeDropdown === item.label ? 
                    <ChevronDown size={16} /> : 
                    <ChevronRight size={16} />
                    }
              </button>
              
              {activeDropdown === item.label && (
                <div className="bg-blue-50 py-2 transition">
                  {item.subItems.map((subItem) => (
                    <Link 
                      key={subItem.label}
                      to={subItem.link}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>

  );
};

export default NaavBar;