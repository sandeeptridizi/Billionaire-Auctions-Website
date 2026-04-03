import './SignIn.css';

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LuShield } from 'react-icons/lu';
import { TbDeviceMobile } from 'react-icons/tb';
import { MdOutlineEmail } from 'react-icons/md';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa6';
import companyLogo from '../../assets/company-logo.png';
import api from '../../lib/api';
import { setToken, setUser } from '../../lib/auth';

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [tab, setTab] = useState('email');
  const [phoneDigits, setPhoneDigits] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Password is required');
      return;
    }

    let payload;
    if (tab === 'phone') {
      const digits = phoneDigits.replace(/\D/g, '');
      if (digits.length !== 10) {
        setError('Enter a valid 10-digit mobile number');
        return;
      }
      payload = { phone: '91' + digits, password };
    } else {
      if (!email.trim()) {
        setError('Enter a valid email address');
        return;
      }
      payload = { email: email.trim().toLowerCase(), password };
    }

    setLoading(true);
    try {
      const { data } = await api.post('/api/user/login', payload);
      setToken(data.token);
      setUser(data.user);
      navigate(location.state?.from || '/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='fe-sign-in-container'>
      <div className='fe-sign-in-main'>
        <div className='fe-sign-in-header'>
          <img src={companyLogo} alt='Billionaire Auction' className='fe-auth-logo' />
          <div className='fe-sign-in-heading'>
            <LuShield className='fe-shield-icon' /> Log In
          </div>
        </div>

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

        <form className='fe-auth-form' onSubmit={handleSubmit}>
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

          <div className='fe-auth-field'>
            <label className='fe-auth-label'>Password</label>
            <div className='fe-auth-input-row'>
              <FiLock className='fe-auth-input-icon' />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
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

          {error && <p className='fe-auth-error'>{error}</p>}
          <p className='fe-forgot-password'>
            <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
          </p>
          <button type='submit' className='fe-auth-btn' disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'} <FaArrowRight />
          </button>
        </form>
        <p className='fe-auth-switch'>
          Don't have an account?{' '}
          <span onClick={() => navigate('/sign-up')}>Sign Up</span>
        </p>
        <p className='fe-auth-footer'>
          &copy; 2026 Billionaire Auction. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
