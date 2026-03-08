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
          At Billionaire Auction, we are committed to protecting your privacy
          and ensuring the secure handling of your personal data. We recognise
          the importance of transparency in how personal information is
          collected, used, stored, and shared.
        </p>
        <p className='last-updated'>Last Updated: 19/01/2026</p>
      </div>
      <div className='privacy-policy-content-container'>
        <div className='introduction-container'>
          <h2 className='introduction-heading'>
            <MdOutlineRemoveRedEye className='eye-icon' /> Introduction
          </h2>
          <p className='introduction-text'>
            The Privacy Policy , mobile applications (if any), and related
            services (collectively, the "Platform").
          </p>
          <p className='introduction-desc'>
            This Policy applies to all users, including buyers, sellers,
            advertisers, service partners, and visitors accessing the Platform
            or availing services offered by Billionaire Auction.
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
                <span>"Personal Data"</span>means any data relating to an
                identifiable individual.
              </p>
            </div>
            <div className='introduction-item-container'>
              <div className='introduction-circle'></div>
              <p>
                <span>"User"</span>includes buyers, sellers, advertisers,
                partners, or visitors.
              </p>
            </div>
            <div className='introduction-item-container'>
              <div className='introduction-circle'></div>
              <p>
                <span>"Services"</span>include Marketplace listings, Buy Now
                listings, Auction listings, verification services, advertising
                services, and other related offerings.
              </p>
            </div>
          </div>
          <div className='introduction-footer-container'>
            By accessing or using the Platform or Services, or by providing your
            consent through the Platform or other means, you agree to the
            collection and processing of your Personal Data in accordance with
            this Policy.
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
            We collect Personal Data that you voluntarily provide when you:
          </p>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Register or create an account</p>
            <p className='personal-data-point'>Post or manage listings</p>
            <p className='personal-data-point'>
              Apply for verification or advertising services
            </p>
            <p className='personal-data-point'>
              Contact us via phone calls, emails, chats, or forms
            </p>
            <p className='personal-data-point'>
              Participate in surveys, promotions, or feedback activities
            </p>
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
            <p>
              Details of assets listed such as real estate, vehicles, jewellery,
              watches, art, antiques, furniture, collectibles, or other items
            </p>
            <div className='personal-details-points-container'>
              <span>Descriptions, pricing, reserve price (if applicable)</span>
              <span>Images and videos of listed items</span>
              <span>Location of the asset</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              iii. Verification Information
            </h3>
            <p>To ensure trust and prevent fake listings, we may collect:</p>
            <div className='personal-details-points-container'>
              <span>Mobile number verification</span>
              <span>Location confirmation</span>
              <span>Video or in-person verification details</span>
              <span>Any other information necessary for platform safety</span>
            </div>
            <p className='note'>
              Note: We do not mandate document uploads unless required by law.
            </p>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              iv. Payment Information
            </h3>
            <p>
              Payments are processed through third-party payment gateways such
              as Razorpay.
            </p>
            <h4 className='sub-heading'>
              We do not store your card details, bank details, or UPI
              credentials.
            </h4>
            <p>We may receive limited transaction details such as:</p>
            <div className='personal-details-points-container'>
              <span>Payment confirmation</span>
              <span>Transaction ID</span>
              <span>Amount paid</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              v. Communication Records
            </h3>
            <div className='personal-details-points-container'>
              <span>Calls, emails, chats, or messages exchanged with us</span>
              <span>Customer support interactions</span>
              <span>Feedback, complaints, or queries</span>
            </div>
          </div>
          <h3 className='personal-data-sub-heading'>
            B. Information Collected Automatically
          </h3>
          <p className='personal-data-text'>
            When you use the Platform, we may automatically collect:
          </p>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>i. Usage Data</h3>
            <div className='personal-details-points-container'>
              <span>Pages viewed</span>
              <span>Searches and filters applied</span>
              <span>Listings viewed or saved</span>
              <span>Time spent on the Platform</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>ii. Technical Data</h3>
            <div className='personal-details-points-container'>
              <span>IP address</span>
              <span>Browser type</span>
              <span>Device type</span>
              <span>Operating system</span>
              <span>Language preference</span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>iii. Location Data</h3>
            <div className='personal-details-points-container'>
              <span>
                Approximate location (city/state) derived from IP address
              </span>
            </div>
          </div>
          <div className='personal-details-container'>
            <h3 className='personal-details-heading'>
              iv. Cookies & Tracking Technologies
            </h3>
            <p>We use cookies and similar technologies to:</p>
            <div className='personal-details-points-container'>
              <span>Improve user experience</span>
              <span>Remember preferences</span>
              <span>Analyse traffic and usage patterns</span>
            </div>
            <p className='note'>
              You may manage cookies through your browser settings. Disabling
              cookies may affect Platform functionality.
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>
            C. Information from Third Parties
          </h3>
          <p className='sub-text'>We may receive information from:</p>
          <div className='personal-details-container'>
            <div className='personal-details-points-container'>
              <span>Advertising and marketing partners</span>
              <span>Analytics providers</span>
              <span>
                Social media platforms (if you interact with our pages)
              </span>
              <span>Publicly available sources</span>
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPerson className='eye-icon' /> 3. How We Use Your Personal Data
          </h2>
          <p className='sub-text'>
            We process Personal Data for the following purposes:
          </p>
          <h3 className='personal-data-sub-heading'>
            A. Information You Provide to Us
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Creating and managing user accounts
            </p>
            <p className='personal-data-point'>
              Publishing and managing listings
            </p>
            <p className='personal-data-point'>
              Enabling buyer–seller communication
            </p>
            <p className='personal-data-point'>
              Providing verification and advertising services
            </p>
            <p className='personal-data-point'>
              Coordinating Buy Now and Auction services (including offline
              auctions)
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>
            B. Marketing & Promotions
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Informing users about offers, updates, and new services
            </p>
            <p className='personal-data-point'>
              Promotional communications (subject to user consent)
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>C. Advertising Services</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Displaying banner advertisements
            </p>
            <p className='personal-data-point'>
              Promoting advertiser listings or businesses
            </p>
            <p className='personal-data-point'>
              Managing paid visibility services
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>D. Trust & Safety</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Preventing fraud, misuse, and fake listings
            </p>
            <p className='personal-data-point'>Verifying users and listings</p>
            <p className='personal-data-point'>Enforcing platform policies</p>
          </div>
          <h3 className='personal-data-sub-heading'>
            E. Platform Improvement & Analytics
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Analysing usage patterns</p>
            <p className='personal-data-point'>
              Improving features and user experience
            </p>
            <p className='personal-data-point'>Developing new services</p>
          </div>
          <h3 className='personal-data-sub-heading'>F. Legal & Compliance</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Complying with applicable laws and regulations
            </p>
            <p className='personal-data-point'>Responding to legal requests</p>
            <p className='personal-data-point'>
              Protecting the rights, safety, and property of users and the
              Platform
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>G. Communication</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Responding to user queries and complaints
            </p>
            <p className='personal-data-point'>
              Customer support and service-related communications
            </p>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPeople className='eye-icon' /> 4. Who We Share Your Personal Data
            With
          </h2>
          <p className='sub-text'>
            We may share Personal Data only as necessary with:
          </p>
          <h3 className='personal-data-sub-heading'>A. Service Providers</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Technology and hosting providers (including AWS)
            </p>
            <p className='personal-data-point'>
              Verification and customer support partners
            </p>
            <p className='personal-data-point'>
              Analytics and communication service providers
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>B. Other Platform Users</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Limited contact details may be shared between buyers and sellers
              to facilitate transactions
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>C. Payment Processors</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Third-party payment gateways such as Razorpay
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>D. Legal Authorities</h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              When required by law, regulation, court order, or governmental
              request
            </p>
          </div>
          <h3 className='personal-data-sub-heading'>
            E. Corporate Transactions
          </h3>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              In case of merger, acquisition, or restructuring of the business
            </p>
          </div>
          <div className='personal-data-footer-container'>
            We do not sell your Personal Data to third parties.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuDatabase className='eye-icon' /> 5. Data Storage & Retention
          </h2>
          <div className='database-container'>
            <div className='database-circle'></div>
            Personal Data is stored on secure cloud infrastructure, primarily
            hosted in India, with appropriate safeguards.
          </div>
          <div className='database-container'>
            <div className='database-circle'></div>
            Data is retained only as long as necessary to:
          </div>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Provide services</p>
            <p className='personal-data-point'>Comply with legal obligations</p>
            <p className='personal-data-point'>Prevent fraud and misuse</p>
          </div>
          <div className='database-container'>
            <div className='database-circle'></div>
            Aggregated and anonymised data may be retained for analytics and
            research purposes.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <BiLockAlt className='eye-icon' /> 6. Data Security Practices
          </h2>
          <p className='sub-text'>
            We implement reasonable security measures including:
          </p>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>Encryption</p>
            <p className='personal-data-point'>Access controls</p>
            <p className='personal-data-point'>Secure servers</p>
            <p className='personal-data-point'>Monitoring and logging</p>
          </div>
          <p className='note'>
            While we strive to protect your Personal Data, no system can be
            completely secure.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPerson className='eye-icon' /> 7. Your Rights
          </h2>
          <p className='sub-text'>You have the right to:</p>
          <div className='personal-data-points-container'>
            <p className='personal-data-point'>
              Access, correct, or update your Personal Data
            </p>
            <p className='personal-data-point'>
              Request deletion of your Personal Data (subject to legal
              obligations)
            </p>
            <p className='personal-data-point'>
              Withdraw consent for marketing communications
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
            The Platform may contain links to third-party websites or services.
          </p>
          <p className='sub-text'>
            We are not responsible for the privacy practices of such third
            parties.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <RiErrorWarningLine className='eye-icon' /> 9. Children's Privacy
          </h2>
          <p className='sub-text'>
            The Platform is not intended for individuals under 18 years of age.
          </p>
          <p className='sub-text'>
            We do not knowingly collect Personal Data from minors.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <CgFileDocument className='eye-icon' /> 10. Changes to This Privacy
            Policy
          </h2>
          <p className='sub-text'>
            We reserve the right to update or modify this Policy at any time.
          </p>
          <p className='sub-text'>
            Changes will be effective upon posting on the Platform.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <MdOutlineMail className='eye-icon' /> 11. Grievance Redressal
          </h2>
          <p className='sub-text'>
            In accordance with applicable laws, Billionaire Auction has
            appointed a Grievance Officer to address concerns related to
            Personal Data processing.
          </p>
        </div>
      </div>
      <div className='privacy-policy-footer-container'>
        <h2 className='privacy-footer-heading'>Grievance Officer</h2>
        <div className='privacy-footer-info-container'>
          <h3 className='privacy-footer-info-name'>
            Name:{' '}
            <span className='privacy-footer-name'>Sai Venkat Malempati</span>
          </h3>
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
