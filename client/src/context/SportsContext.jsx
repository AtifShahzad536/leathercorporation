import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const SportsContext = createContext(null);

export const SportsProvider = ({ children }) => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [quoteItems, setQuoteItems] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: '',
    minOrder: 'ALL',
    fabricType: 'ALL'
  });

  // Optimized Add to Quote list (useCallback prevents unnecessary re-renders)
  const addToQuote = useCallback((product, customDetails = {}) => {
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (customDetails.quantity || 1),
          details: { ...updated[existingIndex].details, ...customDetails }
        };
        return updated;
      }
      return [...prev, { ...product, quantity: customDetails.quantity || 1, details: customDetails }];
    });
  }, []);

  const removeFromQuote = useCallback((productId) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const clearQuote = useCallback(() => {
    setQuoteItems([]);
  }, []);

  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  // Memoized value avoids triggering consumers on unrelated state updates
  const contextValue = useMemo(() => ({
    selectedSport,
    setSelectedSport,
    quoteItems,
    addToQuote,
    removeFromQuote,
    clearQuote,
    filters,
    updateFilters
  }), [selectedSport, quoteItems, addToQuote, removeFromQuote, clearQuote, filters, updateFilters]);

  return (
    <SportsContext.Provider value={contextValue}>
      {children}
    </SportsContext.Provider>
  );
};

export const useSports = () => {
  const context = useContext(SportsContext);
  if (!context) {
    throw new Error('useSports must be used within a SportsProvider');
  }
  return context;
};

