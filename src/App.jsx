import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import LandingPage from './pages/LandingPage/LandingPage';
import Marketplace from './pages/Marketplace/Marketplace';
import BuyNow from './pages/BuyNow/BuyNow';
import Auctions from './pages/Auctions/Auctions';
import ToLet from './pages/ToLet/ToLet';
import AboutUs from './pages/AboutUs/AboutUs';
import PricingPlans from './pages/PricingPlans/PricingPlans';
import OurServices from './pages/OurServices/OurServices';
import Advertise from './pages/Advertise/Advertise';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions/TermsConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import MobileFooter from './components/MobileFooter/MobileFooter';
import OurPartners from './pages/OurPartners/OurPartners';
import HowToBuyAndSell from './pages/HowToBuyAndSell/HowToBuyAndSell';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Wishlist from './pages/Wishlist/Wishlist';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import MyAccount from './pages/MyAccount/MyAccount';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AuthenticationModal from './components/AuthenticationModal/AuthenticationModal';
import PopupAd from './components/PopupAd/PopupAd';
import useAppContext from './context/AppContext';
import useAuthContext from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const { products } = useAppContext();
  const { openAuthenticationModal } = useAuthContext();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MobileNavbar />
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<HomePage />} />
          <Route path='marketplace' element={<Marketplace />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path='buy-now' element={<BuyNow />} />
          <Route path='auctions' element={<Auctions />} />
          <Route path='to-let' element={<ToLet />} />
          <Route path='browse/our-partners' element={<OurPartners />} />
          <Route path='browse/our-services' element={<OurServices />} />
          <Route path='browse/about-us' element={<AboutUs />} />
          <Route path='browse/pricing-plans' element={<PricingPlans />} />
          <Route path='browse/buy-sell' element={<HowToBuyAndSell />} />
          <Route path='browse/advertise' element={<Advertise />} />
          <Route path='products/:page/:category' element={<ProductPage />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms-conditions' element={<TermsConditions />} />
          <Route path='refund-policy' element={<RefundPolicy />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route
            path='my-account'
            element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
      </Routes>
      <Footer />
      <MobileFooter />
      {openAuthenticationModal && <AuthenticationModal />}
      <PopupAd />
    </BrowserRouter>
  );
};

export default App;
