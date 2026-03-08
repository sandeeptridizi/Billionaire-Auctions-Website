import './OurPartners.css';

import { GoPeople } from 'react-icons/go';
import { FiCheckCircle } from 'react-icons/fi';
import { FiGlobe } from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';
import { LuHandshake } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa6';

import justice from '../../assets/justice.png';
import bank from '../../assets/bank.png';
import star from '../../assets/star.png';

const OurPartners = () => {
  return (
    <div className='our-partners-container'>
      <div className='our-partners-background'>
        <GoPeople className='people-icon' />
        <h1 className='our-partners-heading'>Our Advisory Committee</h1>
        <p className='our-partners-text'>
          Meet our team of experts dedicated to serving your NRI needs
        </p>
      </div>
      <div className='our-partners-grid-container'>
        <div className='partners-grid-item-container'>
          <div className='partners-grid-item-header'>
            <div className='partners-icon-container'>
              <img src={bank} alt='bank' className='bank' />
            </div>
            <h2 className='partners-heading'>Banking & Loan Advisory</h2>
          </div>
          <div className='partners-item-content-container'>
            <h3 className='partner-name'>Ramesh Seethala</h3>
            <p className='partner-role'>Founder & CEO - NRI Bhooseva</p>
            <button className='partner-number'>📞 +91 98333 52066</button>
            <div className='partners-info-container'>
              <h3 className='partner-sub-heading'>Expert guidance on:</h3>
              <div className='partners-info-list-container'>
                <div className='partners-list-item-container'>
                  <FiCheckCircle className='partner-icon' /> Home Loans
                </div>
                <div className='partners-list-item-container'>
                  <FiCheckCircle className='partner-icon' /> Property-related
                  banking support
                </div>
                <div className='partners-list-item-container'>
                  <FiCheckCircle className='partner-icon' /> Financial
                  compliance for NRIs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='partners-grid-item-container'>
          <div className='partners-grid-item-header'>
            <div className='partners-icon-container'>
              <img src={justice} alt='bank' className='bank' />
            </div>
            <h2 className='partners-heading'>Legal Services</h2>
          </div>
          <div className='partners-item-content-container'>
            <h3 className='partner-name'>Jaya Subba Reddy Konda</h3>
            <p className='partner-role'>Head - Legal Team</p>
            <button className='partner-number'>📞 +91 96422 45442</button>
            <div className='partners-info-container'>
              <h3 className='partner-sub-heading'>Support includes:</h3>
              <div className='partners-info-list-container'>
                <div className='partners-list-item-container'>
                  <FiCheckCircle className='partner-icon' /> Property title
                  verification
                </div>
                <div className='partners-list-item-container'>
                  <FiCheckCircle className='partner-icon' /> Sale deed &
                  agreements
                </div>
                <div className='partners-list-item-container'>
                  <FiCheckCircle className='partner-icon' /> Legal compliance
                  for property transactions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='learn-more-about-partners-container'>
        <div className='learn-more-about-partners-child-container'>
          <img src={star} alt='star' className='star' />
          <h2 className='learn-more-partner-heading'>
            Learn More About Our Partner
          </h2>
          <p className='learn-more-text'>
            Watch our partner video to understand how NRI Bhooseva supports NRIs
            with real estate, banking, and legal services.
          </p>
          <div className='learn-more-partners-btn-container'>
            <button className='partner-video-btn'>
              ▶️ Watch Partner Video
            </button>
            <button className='partner-website-btn'>
              <FiGlobe /> Visit Partner Website
            </button>
          </div>
        </div>
      </div>
      <div className='why-this-matters-container'>
        <FiAward className='award-icon' />
        <h2 className='why-this-matters-heading'>
          Why This Matters for Billionaire Auction Users
        </h2>
        <div className='why-this-matters-grid-container'>
          <div className='why-this-matters-grid-item-container'>
            <div className='emoji'>🏆</div>
            <h3 className='why-this-matters-item-title'>
              Trusted Professionals
            </h3>
            <p className='why-this-matters-item-text'>
              Banking & legal support from experienced professionals
            </p>
          </div>
          <div className='why-this-matters-grid-item-container'>
            <div className='emoji'>🌍</div>
            <h3 className='why-this-matters-item-title'>
              NRI-Focused Services
            </h3>
            <p className='why-this-matters-item-text'>
              Dedicated services specifically designed for NRIs
            </p>
          </div>
          <div className='why-this-matters-grid-item-container'>
            <div className='emoji'>✨</div>
            <h3 className='why-this-matters-item-title'>Smooth Transactions</h3>
            <p className='why-this-matters-item-text'>
              Smooth property buying & selling experience
            </p>
          </div>
          <div className='why-this-matters-grid-item-container'>
            <div className='emoji'>💰</div>
            <h3 className='why-this-matters-item-title'>Safe Fund Transfers</h3>
            <p className='why-this-matters-item-text'>
              Safe and compliant fund repatriation
            </p>
          </div>
          <div className='why-this-matters-grid-item-container'>
            <div className='emoji'>🤝</div>
            <h3 className='why-this-matters-item-title'>End-to-End Support</h3>
            <p className='why-this-matters-item-text'>
              Complete support for all your real estate needs
            </p>
          </div>
          <div className='why-this-matters-grid-item-container'>
            <div className='emoji'>✔️</div>
            <h3 className='why-this-matters-item-title'>Full Compliance</h3>
            <p className='why-this-matters-item-text'>
              Legal and financial compliance guaranteed
            </p>
          </div>
        </div>
      </div>
      <div className='our-partners-footer-container'>
        <LuHandshake className='hand-icon' />
        <h2 className='our-partners-footer-heading'>Need Expert Assistance?</h2>
        <p className='our-partners-footer-text'>
          Connect with our advisory committee for professional banking and legal
          support for your luxury property transactions
        </p>
        <button className='our-partners-footer-btn'>
          <FaArrowRight /> Get In Touch
        </button>
      </div>
    </div>
  );
};

export default OurPartners;
