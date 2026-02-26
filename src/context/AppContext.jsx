import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://3nkfewwusk.ap-south-1.awsapprunner.com/api/product',
      );
      const data = await response.json();
      setProducts(data?.data);
    } catch (error) {
      setErrorMsg(error.msg);
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
