import './PrivacyPolicy.css';

import { FiShield } from 'react-icons/fi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { CgFileDocument } from 'react-icons/cg';
import { FiDatabase } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { GoPeople } from 'react-icons/go';
import { LuDatabase } from 'react-icons/lu';
import { BiLockAlt } from 'react-icons/bi';
import { FiGlobe } from 'react-icons/fi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { MdOutlineMail } from 'react-icons/md';

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-background'>
        <h1 className='privacy-policy-heading'>
          <FiShield className='shield-icon' /> Privacy Policy
        </h1>
        <p className='privacy-policy-text'>
          At Billionaire Auction (“Billionaire Auction”, “we”, “our”, or “us”), we are committed to protecting your privacy and ensuring the secure handling of your personal data.
        </p>
        <p className='last-updated'>Last Updated: 19/01/2026</p>
      </div>
      <div className='privacy-policy-content-container'>
        <div className='introduction-container'>
          <h2 className='introduction-heading'>
            <MdOutlineRemoveRedEye className='eye-icon' /> Introduction
          </h2>
          <p className='introduction-text'>
            This Privacy Policy (“Policy”) governs your use of www.billionaireauction.com, mobile applications (if any), and related services (collectively, the “Platform”).
          </p>
          <p className='introduction-desc'>
            This Policy applies to all users including buyers, sellers, tenants, advertisers, partners, and visitors.
          </p>
        </div>
        <div className='introduction-container'>
          <h2 className='introduction-heading'>
            <CgFileDocument className='eye-icon' /> 1. Definitions
          </h2>
          <div className='introduction-list-container'>
            <div className='introduction-item-container'>
              <div className='introduction-circle'></div>
              <p>
                <span>"Personal Data"</span>Any data relating to an identifiable individual
              </p>
            </div>
            <div className='introduction-item-container'>
              <div className='introduction-circle'></div>
              <p>
                <span>"User"</span>Buyers, sellers, tenants, advertisers, or visitors
              </p>
            </div>
            <div className='introduction-item-container'>
              <div className='introduction-circle'></div>
              <p>
                <span>"Services"</span>Marketplace, Buy Now, Auctions, To-Let, digital media, advertising, and platform services
              </p>
            </div>
          </div>
          <div className='introduction-footer-container'>
            By using the Platform, you agree to the collection and processing of your data as per this Policy.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiDatabase className='eye-icon' /> 2. Personal Data We Collect
          </h2>
          <h3 className='personal-data-sub-heading'>
            A. Information You Provide to Us
          </h3>
          <p className='personal-data-text'>
            We collect data when you:
          </p>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Register or create an account</p>
            <p className='personal-data-point'>Post listings (Marketplace, Buy Now, Auctions, To-Let)</p>
            <p className='personal-data-point'>Opt for Digital Media Package</p>
            <p className='personal-data-point'>Contact us or submit enquiries</p>
          </div>
          <p className='includes-text'>This may include:</p>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>i. Personal Details</h3>
            <div className='personal-details-points-container'>
              <span>Name</span>
              <span>Mobile number</span>
              <span>Email address</span>
              <span>Location (city, state)</span>
              <span>Login credentials (username, password)</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              ii. Listing & Asset Information
            </h3>
            <div className='personal-details-points-container'>
              <span>Property, vehicle, product, or rental details</span>
              <span>Price, reserve price (if applicable)</span>
              <span>Images and videos</span>
              <span>Asset location</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              iii. Digital Media & Verification Data
            </h3>
            <p>We may collect:</p>
            <div className='personal-details-points-container'>
              <span>Mobile number verification</span>
              <span>Location confirmation</span>
              <span>Basic identity details</span>
              <span>Any other information necessary for platform safety</span>
            </div>
            <p className='note'>Note: This is collected only when opting for Digital Media Package</p>
            <p className='note'>No mandatory document upload unless required by law</p>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              iv. Payment Information
            </h3>
            <p>Payments are processed via Razorpay</p>
            <p>We do NOT store</p>
            <p>Card details</p>
            <p>Bank details</p>
            <p>UPI credentials</p>
            <h4 className='sub-heading'>We may receive: </h4>
            <div className='personal-details-points-container'>
              <span>Payment confirmation</span>
              <span>Transaction ID</span>
              <span>Amount paid</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              v. Communication Data
            </h3>
            <div className='personal-details-points-container'>
              <span>Calls, chats, emails</span>
              <span>Customer support interactions</span>
              <span>Feedback and complaints</span>
            </div>
          </div>
          <h3 className='personal-data-sub-heading'>
            B. Automatically Collected Data
          </h3>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>i. Usage Data</h3>
            <div className='personal-details-points-container'>
              <span>Pages visited</span>
              <span>Searches and filters</span>
              <span>Listings viewed/saved</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>ii. Technical Data</h3>
            <div className='personal-details-points-container'>
              <span>IP address</span>
              <span>Device and browser</span>
              <span>OS and language</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>iii. Location Data</h3>
            <div className='personal-details-points-container'>
              <span>
                Approximate location derived from IP address
              </span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              iv. Cookies Used for:
            </h3>
            <div className='personal-details-points-container'>
              <span>User experience</span>
              <span>Preferences</span>
              <span>Analytics</span>
            </div>
          </div>
          <h3 className='personal-data-sub-heading'>
            C. Third-Party Data
          </h3>
          <p className='sub-text'>We may receive data from:</p>
          <div className='personal-details-container'>
            <div className='personal-details-points-container'>
              <span>Marketing partners</span>
              <span>Analytics providers</span>
              <span>Social media platforms</span>
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPerson className='eye-icon' /> 3. How We Use Your Data
          </h2>
          <p className='sub-text'>
            We process Personal Data for the following purposes:
          </p>
          <h3 className='personal-data-sub-heading'>
            A. Platform Services
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Account Creation
            </p>
            <p className='personal-data-point'>
              Listing management
            </p>
            <p className='personal-data-point'>
              Buyer–seller/tenant communication
            </p>
            <p className='personal-data-point'>
              Buy Now coordination
            </p>
            <p className='personal-data-point'>
              Auction coordination (offline)
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>
            B. Marketing & Promotions
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Offers and updates
            </p>
            <p className='personal-data-point'>
              Campaign communications (with consent)
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>C. Advertising</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Banner Ads
            </p>
            <p className='personal-data-point'>
              Listing promotions
            </p>
            <p className='personal-data-point'>
              Paid visibility services
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>D. Trust & Safety</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Prevent fraud
            </p>
            <p className='personal-data-point'>Detect fake listings</p>
            <p className='personal-data-point'>Platform monitoring</p>
          </div>
          <h3 className='personal-data-sub-heading'>
            E. Analytics & Improvement
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Improve user experience</p>
            <p className='personal-data-point'>
              Develop features
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>F. Legal Compliance</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Legal obligations
            </p>
            <p className='personal-data-point'>Fraud prevention</p>
            <p className='personal-data-point'>
              Dispute handling
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>G. Communication</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Customer support
            </p>
            <p className='personal-data-point'>
              Notifications and updates
            </p>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPeople className='eye-icon' /> 4. Data Sharing
          </h2>
          <p className='sub-text'>
            We may share data with:
          </p>
          <h3 className='personal-data-sub-heading'>A. Service Providers</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              AWS / cloud hosting
            </p>
            <p className='personal-data-point'>
              Analytics tools
            </p>
            <p className='personal-data-point'>
              Communication services
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>B. Other Users</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Contact details shared to enable
            </p>
            <p className='personal-data-point'>
              Buyer–seller interaction
            </p>
            <p className='personal-data-point'>
              Tenant–owner communication
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>C. Payment Gateways</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Razorpay
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>D. Legal Authorities</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              If required by law
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>
            E. Business Transfers
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Mergers or acquisitions
            </p>
          </div>
          <div className='personal-data-footer-container'>
            We do not sell your Personal Data.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuDatabase className='eye-icon' /> 5. Data Storage & Retention
          </h2>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Data stored securely on cloud (primarily India-based infrastructure)</p>
            <p className='personal-data-point'>Retained only as long as required for:</p>
            <p className='personal-data-point'>Services</p>
            <p className='personal-data-point'>Legal compliance</p>
            <p className='personal-data-point'>Fraud prevention</p>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <BiLockAlt className='eye-icon' /> 6. Data Security
          </h2>
          <p className='sub-text'>
            We implement reasonable security measures including:
          </p>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Encryption</p>
            <p className='personal-data-point'>Access controls</p>
            <p className='personal-data-point'>Secure servers</p>
            <p className='personal-data-point'>Monitoring systems</p>
          </div>
          <p className='note'>
            No system is 100% secure
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPerson className='eye-icon' /> 7. Your Rights
          </h2>
          <p className='sub-text'>You Can:</p>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Access your data
            </p>
            <p className='personal-data-point'>
              Update or correct it
            </p>
            <p className='personal-data-point'>
              Request deletion
            </p>
            <p className='personal-data-point'>
              Opt out of marketing
            </p>
          </div>
          <p className='sub-text'>
            Requests may be sent to:{' '}
            <span className='sub-span'>Elite@billionaireauction.com</span>
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiGlobe className='eye-icon' /> 8. Third-Party Links
          </h2>
          <p className='sub-text'>
            We are not responsible for third-party websites or services linked on our Platform.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <RiErrorWarningLine className='eye-icon' /> 9. Children's Privacy
          </h2>
          <p className='sub-text'>
            Platform is only for users 18+
          </p>
          <p className='sub-text'>
            We do not knowingly collect Data from minors.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <CgFileDocument className='eye-icon' /> 10. POLICY UPDATES
          </h2>
          <p className='sub-text'>
            We may update this Policy anytime
          </p>
          <p className='sub-text'>
            Changes will be posted on the Platform
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <CgFileDocument className='eye-icon' /> 11. NO TRANSACTION LIABILITY (IMPORTANT)
          </h2>
          <p className='sub-text'>
            Platform does NOT handle payments for:
          </p>
          <p className='sub-text'>
            Property
          </p>
          <p className='sub-text'>
            Products
          </p>
          <p className='sub-text'>
            Rentals
          </p>
          <span className='privacy-footer-name'>All transactions happen directly between users</span>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <CgFileDocument className='eye-icon' /> 12. LISTING CLASSIFICATION
          </h2>
          <span className='privacy-footer-name'>We may classify listings as:</span>
          <p className='sub-text'>
            Luxury
          </p>
          <p className='sub-text'>
            Classic
          </p>
          <p className='sub-text'>
            General
          </p>

          <span className='privacy-footer-name'>Based on:</span>
          <p className='sub-text'>
            Price
          </p>
          <p className='sub-text'>
            Location
          </p>
          <p className='sub-text'>
            Value
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <MdOutlineMail className='eye-icon' /> 13. Grievance Redressal
          </h2>
        </div>
      </div>
      <div className='privacy-policy-footer-container'>
        <h2 className='privacy-footer-heading'>Grievance Officer</h2>
        <div className='privacy-footer-info-container'>
          <h3 className='privacy-footer-info-name'>
            Name:{' '}
            <span className='privacy-footer-name'>Sai Venkat Malempati</span>
          </h3>
          <span className='privacy-footer-name'>Founder & Managing Director</span>
          <h3 className='privacy-footer-info-name'>
            Organization:{' '}
            <span className='privacy-footer-name'>Billionaire Auction</span>
          </h3>
          <div className='privacy-footer-address-container'>
            <h3 className='privacy-footer-info-name'>Address:</h3>
            <div className='footer-info-address-container'>
              <p>H No: 5-497, Izzath Nagar, Near Hitech City,</p>
              <p>Kondapur, K.V. Rangareddy,</p>
              <p>Telangana – 500084, India</p>
            </div>
          </div>
          <div className='privacy-footer-address-container'>
            <h3 className='privacy-footer-info-name'>
              ✉️ Email:{' '}
              <span className='footer-email'>Elite@billionaireauction.com</span>
            </h3>
            <h3 className='privacy-footer-info-name'>
              📞 Contact: <span className='footer-email'>+91 7731001879</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
