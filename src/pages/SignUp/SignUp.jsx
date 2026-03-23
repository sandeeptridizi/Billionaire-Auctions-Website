import './SignUp.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuShield } from 'react-icons/lu';
import { TbDeviceMobile } from 'react-icons/tb';
import { FaArrowRight } from 'react-icons/fa6';
import { GoPerson } from 'react-icons/go';
import { MdOutlineEmail } from 'react-icons/md';
import { LuBuilding2 } from 'react-icons/lu';
import { FiLock } from 'react-icons/fi';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import companyLogo from '../../assets/company-logo.png';
import api from '../../lib/api';
import useAuthContext from '../../context/AuthContext';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    setOpenAuthenticationModal,
    setPendingOtpPhone,
    setPendingOtpEmail,
    setPendingOtpChannel,
    setPendingOtpPayload,
  } = useAuthContext();

  const [tab, setTab] = useState('phone');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (tab === 'phone') {
      const digits = phoneDigits.replace(/\D/g, '');
      if (digits.length !== 10) {
        setError('Enter a valid 10-digit mobile number');
        return;
      }
      const phone = '91' + digits;
      setLoading(true);
      try {
        await api.post('/api/user/otp/send', {
          phone,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
          businessName: businessName.trim() || undefined,
          channel: 'phone',
        });
        setPendingOtpPayload({
          phone,
          name: name.trim(),
          email: email.trim(),
          password,
          businessName: businessName.trim(),
          channel: 'phone',
        });
        setPendingOtpPhone(phone);
        setPendingOtpEmail(null);
        setPendingOtpChannel('phone');
        setOpenAuthenticationModal(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to send OTP');
      } finally {
        setLoading(false);
      }
    } else {
      const digits = phoneDigits.replace(/\D/g, '');
      const phone = digits.length === 10 ? '91' + digits : undefined;
      setLoading(true);
      try {
        await api.post('/api/user/otp/send', {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
          businessName: businessName.trim() || undefined,
          phone,
          channel: 'email',
        });
        setPendingOtpPayload({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
          businessName: businessName.trim(),
          phone,
          channel: 'email',
        });
        setPendingOtpEmail(email.trim().toLowerCase());
        setPendingOtpPhone(null);
        setPendingOtpChannel('email');
        setOpenAuthenticationModal(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to send OTP');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='fe-sign-up-container'>
      <div className='fe-sign-up-main'>
        <div className='fe-sign-up-header'>
          <img src={companyLogo} alt='Billionaire Auctions' className='fe-auth-logo' />
          <p className='fe-sign-up-text'>
            <LuShield className='fe-shield-icon' /> Create Your Account
          </p>
        </div>

        <div className='fe-auth-tabs'>
          <button
            className={`fe-auth-tab ${tab === 'phone' ? 'fe-auth-tab-active' : ''}`}
            onClick={() => { setTab('phone'); setError(''); }}
            type='button'
          >
            <TbDeviceMobile /> With Phone
          </button>
          <button
            className={`fe-auth-tab ${tab === 'email' ? 'fe-auth-tab-active' : ''}`}
            onClick={() => { setTab('email'); setError(''); }}
            type='button'
          >
            <MdOutlineEmail /> With Email
          </button>
        </div>

        <form className='fe-auth-form' onSubmit={handleSubmit}>
          <div className='fe-auth-field'>
            <label className='fe-auth-label'>Full Name *</label>
            <div className='fe-auth-input-row'>
              <GoPerson className='fe-auth-input-icon' />
              <input
                type='text'
                placeholder='Enter your full name'
                className='fe-auth-input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className='fe-auth-field'>
            <label className='fe-auth-label'>Email Address *</label>
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

          <div className='fe-auth-field'>
            <label className='fe-auth-label'>Password *</label>
            <div className='fe-auth-input-row'>
              <FiLock className='fe-auth-input-icon' />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password (min 6 characters)'
                className='fe-auth-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type='button'
                className='fe-password-toggle'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div className='fe-auth-field'>
            <label className='fe-auth-label'>
              Mobile Number {tab === 'phone' ? '*' : '(Optional)'}
            </label>
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

          <div className='fe-auth-field'>
            <label className='fe-auth-label'>Business Name (Optional)</label>
            <div className='fe-auth-input-row'>
              <LuBuilding2 className='fe-auth-input-icon' />
              <input
                type='text'
                placeholder='Your business or company name'
                className='fe-auth-input'
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
          </div>

          {error && <p className='fe-auth-error'>{error}</p>}

          <button type='submit' className='fe-auth-btn' disabled={loading}>
            {loading ? 'Sending...' : 'Send OTP'}{' '}
            {tab === 'phone' ? 'to Phone' : 'to Email'} <FaArrowRight />
          </button>
        </form>
        <p className='fe-auth-switch'>
          Already have an account?{' '}
          <span onClick={() => navigate('/sign-in')}>Log In</span>
        </p>
        <p className='fe-auth-footer'>
          &copy; 2026 Billionaire Auction. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
