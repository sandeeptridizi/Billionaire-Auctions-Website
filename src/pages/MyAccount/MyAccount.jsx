import './MyAccount.css';

import { useNavigate } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FiShoppingBag, FiTarget, FiMessageSquare } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { getToken, getUser, logout as doLogout } from '../../lib/auth';
import { getFile } from '../../lib/s3';

const USER_APP_URL = import.meta.env.VITE_USER_APP_URL || 'https://user.billionaireauction.com';

const menuItems = [
  {
    id: 1,
    icon: <LuLayoutDashboard />,
    title: 'Dashboard',
    description: 'View your account overview and analytics',
    path: '/',
  },
  {
    id: 2,
    icon: <FiShoppingBag />,
    title: 'Products',
    description: 'Manage your product listings',
    path: '/products',
  },
  {
    id: 3,
    icon: <FiTarget />,
    title: 'My Leads',
    description: 'Track and manage your leads',
    path: '/myleads',
  },
  {
    id: 4,
    icon: <FiMessageSquare />,
    title: 'Enquiry',
    description: 'View and respond to enquiries',
    path: '/enquiry',
  },
  {
    id: 5,
    icon: <IoSettingsOutline />,
    title: 'Settings',
    description: 'Manage your account settings',
    path: '/settings',
  },
];

const getInitials = (name) => {
  if (!name || typeof name !== 'string') return 'UP';
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const MyAccount = () => {
  const navigate = useNavigate();
  const user = getUser();
  const token = getToken();

  const handleMenuClick = (path) => {
    const url = `${USER_APP_URL}${path}?authtoken=${encodeURIComponent(token)}`;
    window.open(url, '_blank');
  };

  const handleLogout = () => {
    doLogout();
    navigate('/');
  };

  return (
    <div className='my-account-container'>
      <div className='my-account-main'>
        <div className='my-account-header'>
          <div className={`my-account-avatar ${user?.profilePic ? 'my-account-avatar-has-pic' : ''}`}>
            {user?.profilePic ? (
              <img src={getFile(user.profilePic)} alt='Profile' className='my-account-avatar-img' />
            ) : (
              getInitials(user?.name)
            )}
          </div>
          <div className='my-account-info'>
            <h2 className='my-account-name'>{user?.name || 'Welcome'}</h2>
            <p className='my-account-email'>{user?.email || ''}</p>
          </div>
        </div>

        <div className='my-account-menu'>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className='my-account-menu-item'
              onClick={() => handleMenuClick(item.path)}
            >
              <div className='my-account-menu-icon'>{item.icon}</div>
              <div className='my-account-menu-text'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className='my-account-menu-arrow'>&rsaquo;</span>
            </div>
          ))}
        </div>

        <button className='my-account-logout' onClick={handleLogout}>
          <MdLogout /> Logout
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
