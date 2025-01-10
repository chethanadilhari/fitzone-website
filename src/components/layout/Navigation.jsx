import { NavLink } from 'react-router-dom';
import './Navigation.css'; 

const CustomNavLink = ({ to, text, className = "" }) => {
    return (
      <li className="flex">
        <NavLink to={to} className={`hover:text-bronze custom-underline px-3 py-2 ${className}`}>
          {text}
        </NavLink>
      </li>
    );
  };;

const Navigation = () => {
  return (
    <nav >
      <ul className=" flex font-koulen uppercase space-x-7 font-thin items-center justify-center tracking-[0.3em] ">
        <CustomNavLink to="/" text="Home" />
        <CustomNavLink to="/classes" text="Classes" />
        <CustomNavLink to="/packages" text="Packages" />
        <CustomNavLink to="/blog" text="Blog" />
        <CustomNavLink to="/contact" text="Contact" />
        <CustomNavLink to="/register" text="Register" className="border border-bronze text-bronze shadow-none hover:shadow-[0_0_0_2px_#b08d57]" />
      </ul>
    </nav>
  );
};

export default Navigation;
