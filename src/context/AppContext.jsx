import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

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

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
