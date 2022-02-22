import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="flex justify-between border-b border-black h-24 px-5 w-full">
            <div className="flex items-center">
                <div className="w-16 h-16 border border-black">Logo</div>
                <p className="text-4xl ml-8">Website Name</p>
            </div>
            <div className="flex flex-col justify-end mb-3 ">
                <p>Search</p>
                <div className="flex border border-black px-2 py-1">
                    <input className="w-full bg-transparent" />
                    <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
                </div>
            </div>
        </header>
    );
};

export default Header;
