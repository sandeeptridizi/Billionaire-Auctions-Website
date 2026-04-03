import './ForgotPassword.css';

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuShield } from 'react-icons/lu';
import { TbDeviceMobile } from 'react-icons/tb';
import { MdOutlineEmail } from 'react-icons/md';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import companyLogo from '../../assets/company-logo.png';
import api from '../../lib/api';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: enter email/phone, 2: verify OTP, 3: new password
  const [tab, setTab] = useState('email');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const otpRefs = useRef([]);

  const startResendCooldown = () => {
    setResendCooldown(60);
    const interval = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const getIdentifier = () => {
    if (tab === 'phone') {
      return { phone: '91' + phoneDigits.replace(/\D/g, ''), channel: 'phone' };
    }
    return { email: email.trim().toLowerCase(), channel: 'email' };
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError('');

    if (tab === 'phone') {
      const digits = phoneDigits.replace(/\D/g, '');
      if (digits.length !== 10) {
        setError('Enter a valid 10-digit mobile number');
        return;
      }
    } else {
      if (!email.trim()) {
        setError('Enter a valid email address');
        return;
      }
    }

    setLoading(true);
    try {
      await api.post('/api/user/forgot-password/send-otp', getIdentifier());
      setStep(2);
      startResendCooldown();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste
      const digits = value.replace(/\D/g, '').slice(0, 6);
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = digits[i] || '';
      }
      setOtp(newOtp);
      const focusIndex = Math.min(digits.length, 5);
      otpRefs.current[focusIndex]?.focus();
      return;
    }

    const digit = value.replace(/\D/g, '');
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);

    if (digit && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');

    const otpStr = otp.join('');
    if (otpStr.length !== 6) {
      setError('Enter the complete 6-digit OTP');
      return;
    }

    setLoading(true);
    try {
      const { data } = await api.post('/api/user/forgot-password/verify-otp', {
        ...getIdentifier(),
        otp: otpStr,
      });
      setResetToken(data.resetToken);
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    setError('');
    setLoading(true);
    try {
      await api.post('/api/user/forgot-password/send-otp', getIdentifier());
      setOtp(['', '', '', '', '', '']);
      startResendCooldown();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');

    if (!newPassword || newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      await api.post('/api/user/forgot-password/reset', {
        resetToken,
        newPassword,
      });
      navigate('/sign-in');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const maskedIdentifier = () => {
    if (tab === 'phone') {
      const digits = phoneDigits.replace(/\D/g, '');
      return `+91 ${digits.slice(0, 2)}****${digits.slice(-2)}`;
    }
    const parts = email.split('@');
    if (parts.length === 2) {
      const name = parts[0];
      return `${name.slice(0, 2)}***@${parts[1]}`;
    }
    return email;
  };

  return (
    <div className='fe-sign-in-container'>
      <div className='fe-sign-in-main'>
        <div className='fe-sign-in-header'>
          <img src={companyLogo} alt='Billionaire Auction' className='fe-auth-logo' />
          <div className='fe-sign-in-heading'>
            <LuShield className='fe-shield-icon' /> Forgot Password
          </div>
        </div>

        {step === 1 && (
          <>
            <p className='fe-fp-subtitle'>
              Enter your registered email or phone number to receive a verification code.
            </p>

            <div className='fe-auth-tabs'>
              <button
                className={`fe-auth-tab ${tab === 'email' ? 'fe-auth-tab-active' : ''}`}
                onClick={() => { setTab('email'); setError(''); }}
                type='button'
              >
                <MdOutlineEmail /> With Email
              </button>
              <button
                className={`fe-auth-tab ${tab === 'phone' ? 'fe-auth-tab-active' : ''}`}
                onClick={() => { setTab('phone'); setError(''); }}
                type='button'
              >
                <TbDeviceMobile /> With Phone
              </button>
            </div>

            <form className='fe-auth-form' onSubmit={handleSendOtp}>
              {tab === 'phone' ? (
                <div className='fe-auth-field'>
                  <label className='fe-auth-label'>Mobile Number</label>
                  <div className='fe-auth-input-row'>
                    <TbDeviceMobile className='fe-auth-input-icon' />
                    <p>+91</p>
                    <input
                      type='text'
                      placeholder='Enter 10-digit mobile number'
                      className='fe-auth-input'
                      value={phoneDigits}
                      onChange={(e) =>
                        setPhoneDigits(e.target.value.replace(/\D/g, '').slice(0, 10))
                      }
                      maxLength={10}
                    />
                  </div>
                </div>
              ) : (
                <div className='fe-auth-field'>
                  <label className='fe-auth-label'>Email Address</label>
                  <div className='fe-auth-input-row'>
                    <MdOutlineEmail className='fe-auth-input-icon' />
                    <input
                      type='email'
                      placeholder='your.email@example.com'
                      className='fe-auth-input'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              )}

              {error && <p className='fe-auth-error'>{error}</p>}
              <button type='submit' className='fe-auth-btn' disabled={loading}>
                {loading ? 'Sending OTP...' : 'Send OTP'} <FaArrowRight />
              </button>
            </form>

            <p className='fe-auth-switch'>
              Remember your password?{' '}
              <span onClick={() => navigate('/sign-in')}>Log In</span>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <p className='fe-fp-subtitle'>
              Enter the 6-digit code sent to <strong>{maskedIdentifier()}</strong>
            </p>

            <form className='fe-auth-form' onSubmit={handleVerifyOtp}>
              <div className='fe-otp-container'>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => (otpRefs.current[i] = el)}
                    type='text'
                    inputMode='numeric'
                    maxLength={6}
                    className='fe-otp-input'
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                  />
                ))}
              </div>

              <div className='fe-otp-actions'>
                <button
                  type='button'
                  className='fe-otp-resend'
                  onClick={handleResendOtp}
                  disabled={resendCooldown > 0}
                >
                  {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend OTP'}
                </button>
                <button
                  type='button'
                  className='fe-otp-back'
                  onClick={() => { setStep(1); setOtp(['', '', '', '', '', '']); setError(''); }}
                >
                  <FaArrowLeft /> Change {tab === 'phone' ? 'number' : 'email'}
                </button>
              </div>

              {error && <p className='fe-auth-error'>{error}</p>}
              <button type='submit' className='fe-auth-btn' disabled={loading}>
                {loading ? 'Verifying...' : 'Verify OTP'} <FaArrowRight />
              </button>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            <p className='fe-fp-subtitle'>
              Create a new password for your account.
            </p>

            <form className='fe-auth-form' onSubmit={handleResetPassword}>
              <div className='fe-auth-field'>
                <label className='fe-auth-label'>New Password</label>
                <div className='fe-auth-input-row'>
                  <FiLock className='fe-auth-input-icon' />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter new password'
                    className='fe-auth-input'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='fe-password-toggle'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                <p className='fe-auth-hint'>Must be at least 6 characters</p>
              </div>

              <div className='fe-auth-field'>
                <label className='fe-auth-label'>Confirm Password</label>
                <div className='fe-auth-input-row'>
                  <FiLock className='fe-auth-input-icon' />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm new password'
                    className='fe-auth-input'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type='button'
                    className='fe-password-toggle'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {error && <p className='fe-auth-error'>{error}</p>}
              <button type='submit' className='fe-auth-btn' disabled={loading}>
                {loading ? 'Resetting...' : 'Reset Password'} <FaArrowRight />
              </button>
            </form>
          </>
        )}

        <p className='fe-auth-footer'>
          &copy; 2026 Billionaire Auction. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
