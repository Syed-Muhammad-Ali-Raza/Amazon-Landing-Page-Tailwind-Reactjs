import React, { useState } from 'react';
import logo from './Images/amazon-dark-logo-png-transparent.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown); // Toggles dropdown visibility
    };

    return (
        <>
            <div className='wrapper bg-[#231f20] w-full  flex gap-4'>
                <div className='image hover:border-2 border-white'>
                    <img src={logo} width="99px" height="30px" alt="Amazon Logo" />
                </div>
                <div className='flex  flex-row text-white items-center gap-3 px-2  hover:border-2 border-white'>
                    <LocationOnIcon />
                    <div className='flex flex-col'>
                        <p className='text-sm'>Deliver to</p>
                        <p className='font-bold'>Pakistan</p>
                    </div>
                </div>
                <div className="input-grp flex items-center relative">
                    <p className="bg-gray-200 p-2" onClick={toggleDropdown}>All <ArrowDropDownIcon /></p>
                    {/* Dropdown list */}
                    {showDropdown && (
                        <ul className="absolute top-full left-0 bg-white shadow-md py-2 mt-1 rounded-md h-[20rem] overflow-auto">
                            <li className="px-3 py-1 hover:bg-gray-100 cursor-pointer">All Departments</li>
                            <li value="search-alias=arts-crafts-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Arts & Crafts</li>
                            <li value="search-alias=automotive-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Automotive</li>
                            <li value="search-alias=baby-products-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Baby</li>
                            <li value="search-alias=beauty-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Beauty & Personal Care</li>
                            <li value="search-alias=stripbooks-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Books</li>
                            <li value="search-alias=fashion-boys-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Boys' Fashion</li>
                            <li value="search-alias=computers-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Computers</li>
                            <li value="search-alias=deals-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Deals</li>
                            <li value="search-alias=electronics-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Electronics</li>
                            <li value="search-alias=fashion-girls-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Girls' Fashion</li>
                            <li value="search-alias=hpc-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Health & Household</li>
                            <li value="search-alias=kitchen-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Home & Kitchen</li>
                            <li value="search-alias=industrial-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Industrial & Scientific</li>
                            <li value="search-alias=luggage-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Luggage</li>
                            <li value="search-alias=fashion-mens-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Men's Fashion</li>
                            <li value="search-alias=movies-tv-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Movies & TV</li>
                            <li value="search-alias=music-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Music, CDs & Vinyl</li>
                            <li value="search-alias=pets-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Pet Supplies</li>

                            <li value="search-alias=software-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Software</li>
                            <li value="search-alias=sporting-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Sports & Outdoors</li>
                            <li value="search-alias=tools-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Tools & Home Improvement</li>
                            <li value="search-alias=toys-and-games-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Toys & Games</li>
                            <li value="search-alias=videogames-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Video Games</li>
                            <li value="search-alias=fashion-womens-intl-ship" className="px-3 py-1 hover:bg-gray-100 cursor-pointer">Women's Fashion</li>













                        </ul>
                    )}
                    <input type="text" className="font-normal w-96 h-11" />
                    <p className="bg-orange-300 text-2xl p-1.5">
                        <SearchIcon />
                    </p>
                </div>
            </div>
        </>
    );
};

export default Header;
