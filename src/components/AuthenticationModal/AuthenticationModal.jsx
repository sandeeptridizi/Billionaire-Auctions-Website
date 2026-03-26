import './AuthenticationModal.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import companyLogo from '../../assets/company-logo.png';
import { LuShield } from 'react-icons/lu';
import { CiMobile2 } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { FaRegCheckCircle } from 'react-icons/fa';
import useAuthContext from '../../context/AuthContext';
import api from '../../lib/api';
import { setToken, setUser } from '../../lib/auth';

const RESEND_COOLDOWN_SEC = 60;

const formatPhone = (phone) => {
  if (!phone) return '';
  const d = phone.replace(/\D/g, '').slice(-10);
  return d.length === 10 ? `+91 ${d.slice(0, 5)} ${d.slice(5)}` : phone;
};

const AuthenticationModal = () => {
  const navigate = useNavigate();
  const {
    setOpenAuthenticationModal,
    pendingOtpPhone,
    setPendingOtpPhone,
    pendingOtpEmail,
    setPendingOtpEmail,
    pendingOtpChannel,
    setPendingOtpChannel,
    pendingOtpPayload,
    setPendingOtpPayload,
  } = useAuthContext();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendSec, setResendSec] = useState(RESEND_COOLDOWN_SEC);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isOpen = pendingOtpPhone || pendingOtpEmail;

  useEffect(() => {
    if (!isOpen) return;
    const t = setInterval(() => {
      setResendSec((s) => (s <= 0 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(t);
  }, [isOpen]);

  const otpValue = otp.join('');
  const canResend = resendSec === 0 && pendingOtpPayload;

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      const digits = value.replace(/\D/g, '').slice(0, 6).split('');
      const next = [...otp];
      digits.forEach((d, i) => { if (index + i < 6) next[index + i] = d; });
      setOtp(next);
      return;
    }
    const d = value.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[index] = d;
    setOtp(next);
    if (d && index < 5) document.getElementById(`fe-otp-signup-${index + 1}`)?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`fe-otp-signup-${index - 1}`)?.focus();
    }
  };

  const handleResend = async () => {
    if (!canResend || !pendingOtpPayload) return;
    setError('');
    try {
      await api.post('/api/user/otp/send', {
        name: pendingOtpPayload.name,
        email: pendingOtpPayload.email,
        password: pendingOtpPayload.password,
        phone: pendingOtpPayload.phone || undefined,
        businessName: pendingOtpPayload.businessName || undefined,
        channel: pendingOtpPayload.channel,
      });
      setResendSec(RESEND_COOLDOWN_SEC);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend OTP');
    }
  };

  const handleVerify = async () => {
    if (otpValue.length !== 6) return;
    setError('');
    setLoading(true);
    try {
      const payload =
        pendingOtpChannel === 'phone'
          ? { phone: pendingOtpPhone, otp: otpValue, channel: 'phone' }
          : { email: pendingOtpEmail, otp: otpValue, channel: 'email' };
      const { data } = await api.post('/api/user/otp/verify', payload);
      setToken(data.token);
      setUser(data.user);
      setOpenAuthenticationModal(false);
      setPendingOtpPhone(null);
      setPendingOtpEmail(null);
      setPendingOtpChannel('phone');
      setPendingOtpPayload(null);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid or expired OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setOpenAuthenticationModal(false);
    setPendingOtpPhone(null);
    setPendingOtpEmail(null);
    setPendingOtpChannel('phone');
    setPendingOtpPayload(null);
  };

  if (!isOpen) return null;

  const sentTo =
    pendingOtpChannel === 'phone'
      ? formatPhone(pendingOtpPhone)
      : pendingOtpEmail;

  return (
    <div className='fe-modal'>
      <div className='fe-overlay'></div>
      <div className='fe-modal-content'>
        <div className='fe-modal-header'>
          <img src={companyLogo} alt='company' className='fe-modal-logo' />
          <div className='fe-modal-text'>
            <LuShield className='fe-modal-shield-icon' /> Create Your Account
          </div>
        </div>
        <div className='fe-modal-otp-container'>
          <div className='fe-modal-icon-circle'>
            {pendingOtpChannel === 'phone' ? <CiMobile2 /> : <MdOutlineEmail />}
          </div>
          <h3 className='fe-otp-heading'>Verify OTP</h3>
          <div>
            <p className='fe-otp-code-text'>Enter the 6-digit code sent to</p>
            <p className='fe-otp-sent-to'>{sentTo}</p>
          </div>
          <p className='fe-otp-change' onClick={handleBack}>
            {pendingOtpChannel === 'phone' ? 'Change number' : 'Change email'}
          </p>
          <div className='fe-otp-inputs'>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                id={`fe-otp-signup-${i}`}
                type='text'
                inputMode='numeric'
                maxLength={6}
                className='fe-otp-input'
                value={otp[i]}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
              />
            ))}
          </div>
          {error && <p className='fe-modal-error'>{error}</p>}
          <p className='fe-otp-timer'>
            {resendSec > 0 ? (
              <>Resend OTP in <span>{resendSec}</span>s</>
            ) : canResend ? (
              <span className='fe-resend-link' onClick={handleResend}>Resend OTP</span>
            ) : null}
          </p>
        </div>
        <button
          className='fe-modal-btn'
          onClick={handleVerify}
          disabled={otpValue.length !== 6 || loading}
        >
          <FaRegCheckCircle /> {loading ? 'Verifying...' : 'Verify & Create Account'}
        </button>
        <div className='fe-modal-footer'>
          &copy; 2026 Billionaire Auction. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AuthenticationModal;
