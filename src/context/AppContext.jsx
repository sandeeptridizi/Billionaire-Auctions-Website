import { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/api';

const AppContext = createContext();

const WISHLIST_KEY = 'ba_wishlist';
const COUNTRY_KEY = 'ba_country';

export const COUNTRIES = [
  { value: "INDIA", label: "India" },
  { value: "UNITED STATES", label: "United States" },
  { value: "UNITED KINGDOM", label: "United Kingdom" },
  { value: "CANADA", label: "Canada" },
  { value: "AUSTRALIA", label: "Australia" },
  { value: "SINGAPORE", label: "Singapore" },
  { value: "DUBAI", label: "Dubai" },
  { value: "MALAYSIA", label: "Malaysia" },
  { value: "QATAR", label: "Qatar" },
  { value: "SAUDI ARABIA", label: "Saudi Arabia" },
  { value: "SWITZERLAND", label: "Switzerland" },
  { value: "KUWAIT", label: "Kuwait" },
];

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(() => {
    try {
      return localStorage.getItem(COUNTRY_KEY) || 'INDIA';
    } catch {
      return 'INDIA';
    }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');
    } catch {
      return [];
    }
  });

  const fetchProducts = async (country) => {
    try {
      setErrorMsg('');
      const response = await api.get('/api/product/public', {
        params: { country },
      });
      setProducts(response?.data?.data || []);
    } catch (error) {
      setErrorMsg(error?.response?.data?.message || error?.message || 'Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    localStorage.setItem(COUNTRY_KEY, selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isWishlisted = (id) => wishlist.includes(id);

  const countryLabel = COUNTRIES.find((c) => c.value === selectedCountry)?.label || selectedCountry;

  return (
    <AppContext.Provider value={{ products, wishlist, toggleWishlist, isWishlisted, selectedCountry, setSelectedCountry, countryLabel }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
