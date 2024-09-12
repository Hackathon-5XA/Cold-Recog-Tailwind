import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

const AnimationComponent = () => {
    return (
        <div className="relative flex items-center justify-between h-32">
            <span className="absolute top-20 left-28 w-12 h-1.5 bg-gray-300 transform rotate-45"></span>
            <span className="absolute top-10 left-7 w-9 h-3 bg-gray-300 transform rotate-45 rounded-br-lg"></span>
            <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-white border-8 border-gray-300 overflow-hidden animate-cloudLoop">
                <div className="flex justify-between w-full h-full">
                    <div className="flex items-center justify-between animate-rowup1">
                        <FontAwesomeIcon icon={faPerson} className="text-teal-500 text-6xl mx-6" />
                        <FontAwesomeIcon icon={faPerson} className="text-teal-500 text-6xl mx-6" />
                    </div>
                    <div className="flex items-center justify-between animate-rowup2">
                        <FontAwesomeIcon icon={faPerson} className="text-teal-500 text-6xl mx-6" />
                        <FontAwesomeIcon icon={faPerson} className="text-teal-500 text-6xl mx-6" />
                    </div>
                </div>
            </div>
            <div className="absolute top-44 left-6 w-24 h-8 bg-gray-300 rounded-full opacity-40 animate-shadowLoop"></div>
        </div>
    );
};

export default AnimationComponent;