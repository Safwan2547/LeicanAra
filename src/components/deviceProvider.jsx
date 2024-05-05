// DeviceContext.js
"use client";
import React, { createContext, useState, useEffect, useContext } from 'react';

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        const determineDeviceType = () => {
            const { innerWidth } = window;
            if (innerWidth <= 640) {
                setDeviceType('phone');
            } else if (innerWidth <= 1024) {
                setDeviceType('tablet');
            } else {
                setDeviceType('large');
            }
        };

        determineDeviceType();
        window.addEventListener('resize', determineDeviceType);
        return () => window.removeEventListener('resize', determineDeviceType);
    }, []);

    return (
        <DeviceContext.Provider value={{ deviceType }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDeviceType = () => useContext(DeviceContext);
