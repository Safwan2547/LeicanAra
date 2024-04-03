import React, { useState } from 'react';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    Options
                </button>
            </div>

            {isOpen ? (
                <div className="h-screen w-screen flex flex-column shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-labelledby="options-menu">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                    </div>
                </div>
            ) : null }
        </div>
    );
}

export default DropdownMenu;
