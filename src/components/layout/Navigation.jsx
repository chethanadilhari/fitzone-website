import { Link } from 'react-router-dom';
import './Navigation.css'; 

const NavLink = ({ to, text, className = "" }) => {
    return (
      <li className="flex">
        <Link to={to} className={`hover:text-bronze custom-underline px-3 py-2 ${className}`}>
          {text}
        </Link>
      </li>
    );
  };;

const Navigation = () => {
  return (
    <nav >
      <ul className=" flex font-koulen uppercase space-x-7 font-thin items-center justify-center tracking-[0.3em] ">
        <NavLink to="/" text="Home" />
        <NavLink to="/classes" text="Classes" />
        <NavLink to="/packages" text="Packages" />
        <NavLink to="/blog" text="Blog" />
        <NavLink to="/contact" text="Contact" />
        <NavLink to="/register" text="Register" className="border border-bronze text-bronze shadow-none hover:shadow-[0_0_0_2px_#b08d57]" />
      </ul>
    </nav>
  );
};

export default Navigation;
