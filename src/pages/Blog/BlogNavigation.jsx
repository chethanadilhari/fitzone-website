import React from 'react';
import { Link } from 'react-router-dom';

const BlogNavLink = ({ to, text, className = "" }) => {
    return (
        <li className="flex">
            <Link to={to} className={`hover:text-bronze px-3 py-2 ${className}`}>
                {text}
            </Link>
        </li>
    );
};

const BlogNavigation = () => {
    return (
        <nav className="bg-customDarkGrey bg-cover bg-center bg-no-repeat shadow-lg">
            <ul className="flex font-koulen uppercase space-x-7 font-thin items-center justify-center tracking-[0.1em] text-white pt-10 flex-wrap">
               
                    <BlogNavLink to="#all-blogs" text="All Blogs" className="transition duration-300 ease-in-out transform hover:scale-105" />
                    <BlogNavLink to="#fitness-training" text="Fitness & Training" className="transition duration-300 ease-in-out transform hover:scale-105" />
                    <BlogNavLink to="#motivational" text="Motivational" className="transition duration-300 ease-in-out transform hover:scale-105" />
                    <BlogNavLink to="#lifestyle" text="Lifestyle" className="transition duration-300 ease-in-out transform hover:scale-105" />
                    <BlogNavLink to="#nutrition-diet" text="Nutrition & Diet" className="transition duration-300 ease-in-out transform hover:scale-105" />
                    <BlogNavLink to="#health-wellness" text="Health & Wellness" className="transition duration-300 ease-in-out transform hover:scale-105" />
                    <BlogNavLink to="#gym-news-updates" text="Gym News & Updates" className="transition duration-300 ease-in-out transform hover:scale-105" />
               
            </ul>
        </nav>
    );
};

export default BlogNavigation;