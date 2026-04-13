import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import api from '../lib/api';
import { getToken } from '../lib/auth';

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
  const [platform, setPlatform] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(() => {
    try {
      return localStorage.getItem(COUNTRY_KEY) || 'INDIA';
    } catch {
      return 'INDIA';
    }
  });
  const [selectedTier, setSelectedTier] = useState("All");
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
    api.get('/api/platform')
      .then((res) => setPlatform(res?.data?.data || null))
      .catch(() => {});
  }, []);

  useEffect(() => {
    localStorage.setItem(COUNTRY_KEY, selectedCountry);
  }, [selectedCountry]);

  // Sync wishlist from server on login / app load
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    const syncFromServer = async () => {
      try {
        const localWishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '[]');

        // If there are local items, sync them to server first
        if (localWishlist.length > 0) {
          const res = await api.put('/api/wishlist/sync', { productIds: localWishlist });
          const serverIds = res?.data?.data || [];
          setWishlist(serverIds);
        } else {
          // Just fetch from server
          const res = await api.get('/api/wishlist');
          setWishlist(res?.data?.data || []);
        }
      } catch {
        // If API fails, keep using localStorage wishlist
      }
    };

    syncFromServer();
  }, []);

  // Persist to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = useCallback((id) => {
    const token = getToken();

    setWishlist((prev) => {
      const isCurrentlyWishlisted = prev.includes(id);
      const next = isCurrentlyWishlisted ? prev.filter((item) => item !== id) : [...prev, id];

      // Sync with backend if logged in (fire-and-forget)
      if (token) {
        if (isCurrentlyWishlisted) {
          api.delete(`/api/wishlist/${id}`).catch(() => {});
        } else {
          api.post(`/api/wishlist/${id}`).catch(() => {});
        }
      }

      return next;
    });
  }, []);

  const isWishlisted = (id) => wishlist.includes(id);

  const countryLabel = COUNTRIES.find((c) => c.value === selectedCountry)?.label || selectedCountry;

  return (
    <AppContext.Provider value={{ products, wishlist, toggleWishlist, isWishlisted, selectedCountry, setSelectedCountry, countryLabel, platform, selectedTier, setSelectedTier }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
