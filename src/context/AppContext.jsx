import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api';

const AppContext = createContext();

const WISHLIST_KEY = 'ba_wishlist';

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    } catch {
      return [];
    }
  });

  const fetchProducts = async () => {
    try {
      setErrorMsg('');
      const response = await api.get('/api/product/public');
      setProducts(response?.data?.data || []);
    } catch (error) {
      setErrorMsg(error?.response?.data?.message || error?.message || 'Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isWishlisted = (id) => wishlist.includes(id);

  return (
    <AppContext.Provider value={{ products, wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
