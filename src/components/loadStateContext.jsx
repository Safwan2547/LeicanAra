"use client";
import React, { createContext, useState, useContext } from 'react';

// Create the context
const LoaderContext = createContext();

// Create a custom provider component
export const LoaderProvider = ({ children }) => {
    const [loadState, setloadState] = useState(true);

    return (
        <LoaderContext.Provider value={{ loadState, setloadState }}>
            {children}
        </LoaderContext.Provider>
    );
};

// Custom hook to use the Loader context
export const useLoader = () => useContext(LoaderContext);
