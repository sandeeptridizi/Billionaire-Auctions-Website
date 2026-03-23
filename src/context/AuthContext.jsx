import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [openVerificationModal, setOpenVerificationModal] = useState(false);
  const [openAuthenticationModal, setOpenAuthenticationModal] = useState(false);
  const [pendingOtpPhone, setPendingOtpPhone] = useState(null);
  const [pendingOtpEmail, setPendingOtpEmail] = useState(null);
  const [pendingOtpChannel, setPendingOtpChannel] = useState('phone');
  const [pendingOtpPayload, setPendingOtpPayload] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        openVerificationModal,
        setOpenVerificationModal,
        openAuthenticationModal,
        setOpenAuthenticationModal,
        pendingOtpPhone,
        setPendingOtpPhone,
        pendingOtpEmail,
        setPendingOtpEmail,
        pendingOtpChannel,
        setPendingOtpChannel,
        pendingOtpPayload,
        setPendingOtpPayload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
