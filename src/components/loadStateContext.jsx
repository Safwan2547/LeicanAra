"use client";
import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
    const [loadState, setLoadState] = useState(true); // Renamed to setLoadState

    return (
        <LoaderContext.Provider value={{ loadState, setLoadState }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => {
    const context = useContext(LoaderContext);
    if (!context) {
        throw new Error('useLoader must be used within a LoaderProvider');
    }
    return context;
};

