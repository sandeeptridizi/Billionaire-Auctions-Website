import './TermsConditions.css';

import { CgFileDocument } from 'react-icons/cg';
import { LuBuilding } from 'react-icons/lu';
import { GoPeople } from 'react-icons/go';
import { LuCircleCheckBig } from 'react-icons/lu';
import { IoWarningOutline } from 'react-icons/io5';
import { GoShieldCheck } from 'react-icons/go';
import { FiGlobe } from 'react-icons/fi';
import { MdNotInterested } from 'react-icons/md';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { FaRegTimesCircle } from 'react-icons/fa';

const TermsConditions = () => {
  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-background'>
        <h1 className='privacy-policy-heading'>
          <CgFileDocument className='shield-icon' /> Terms & Conditions
        </h1>
        <p className='privacy-policy-text'>
          Please read these Terms & Conditions ("Terms") carefully before using
          www.billionaireauction.com, its mobile applications, or related
          services (collectively, the "Platform").
        </p>
        <p className='last-updated'>Last updated: January 2026</p>
      </div>
      <div className='privacy-policy-content-container'>
        <div className='terms-conditions-tag-container'>
          By accessing or using the Platform, you agree to be legally bound by
          these Terms. If you do not agree, please do not use the Platform.
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuBuilding className='eye-icon' /> 1. Introduction
          </h2>
          <p className='sub-text'>
            Billionaire Auction is owned and operated by Billionaire Auction
            Company, having its principal place of business at:
          </p>
          <div className='terms-conditions-address-container'>
            <p className='terms-conditions-address'>
              H No: 5-497, Izzath Nagar, Near Hitech City,
            </p>
            <p className='terms-conditions-address'>
              Kondapur, K.V. Rangareddy, Telangana – 500084, India
            </p>
          </div>
          <p className='sub-text'>
            These Terms, together with the Privacy Policy and Refund Policy,
            form a legally binding agreement between Billionaire Auction
            ("Company", "We", "Us") and the user ("User", "You").
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <CgFileDocument className='eye-icon' /> 2. Definitions
          </h2>
          <div className='terms-conditions-list-container'>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>User:</span>Any
                person accessing or using the Platform (buyer, seller,
                advertiser, visitor).
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Seller/Owner:</span>A User
                who lists assets or rental properties.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Buyer/Tenant:</span>A User
                interested in purchasing or renting.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Marketplace:</span>
                Direct listing platform where buyers contact sellers.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Auctions:</span>
                Offline auction listings facilitated by the Company.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Buy Now:</span>
                Managed selling service handled by the Company
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>To-Let:</span>
                Rental listing service connecting owners and tenants
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Services:</span>
                Listings, advertising, digital media, promotions, and facilitation services
              </p>
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoPeople className='eye-icon' /> 3. Nature of Platform & Role of
            the Company
          </h2>
          <p className='sub-text'>
            Billionaire Auction operates an all-in-one platform offering:
          </p>
          <div className='terms-conditions-links-container'>
            <div className='market-place-container'>
              <h3 className='market-place-heading'>A. Marketplace</h3>
              <div className='market-place-text-container'>
                <span></span> Sellers list assets independently.
              </div>
              <div className='market-place-text-container'>
                <span></span> Buyers contact sellers directly.
              </div>
              <div className='market-place-text-container'>
                <span></span> No buyer fees till March 1st, 2027
              </div>
              <div className='market-place-text-container'>
                <span></span> Company does not participate in negotiations or payments.
              </div>
            </div>
            <div className='auctions-container'>
              <h3 className='market-place-heading'>B. Auctions</h3>
              <div className='market-place-text-container'>
                <span></span> Auctions are conducted offline only.
              </div>
              <div className='market-place-text-container'>
                <span></span> No real-time online bidding unless announced.
              </div>
              <div className='market-place-text-container'>
                <span></span> Auction date, time, and venue will be announced separately.
              </div>
              <div className='market-place-text-container'>
                <span></span> Sellers may set starting bid and reserve price.
              </div>
              <div className='market-place-text-container'>
                <span></span> Bidders may be required to pay a 10% refundable deposit.
              </div>
              <div className='market-place-text-container'>
                <span></span> The Company facilitates auctions but does not
                guarantee sale.
              </div>
            </div>
            <div className='buynow-container'>
              <h3 className='market-place-heading'>C. Buy Now</h3>
              <div className='market-place-text-container'>
                <span></span> Commission-based service.
              </div>
              <div className='market-place-text-container'>
                <span></span> Buyers contact the Company (not sellers directly)
              </div>
              <div className='market-place-text-container'>
                <span></span> Company handles:
              </div>
              <div className='buynow-points-container'>
                <p>-Advertising</p>
                <p>-Buyer sourcing</p>
                <p>-Site visits / coordination</p>
              </div>
              <div className='terms-conditions-footer-link-container'>
              👉 Final ownership transfer and payments happen offline between buyer and seller
            </div>
            <div className='terms-conditions-footer-link-container'>
              👉 Company does not process transactions on the platform
            </div>
            </div>
            <div className='market-place-container'>
              <h3 className='market-place-heading'>D. To-Let</h3>
              <div className='market-place-text-container'>
                <span></span> Rental listing service
              </div>
              <div className='market-place-text-container'>
                <span></span> Tenants contact owners/agents directly
              </div>
              <div className='market-place-text-container'>
                <span></span> No commission charged by the platform
              </div>
              <div className='market-place-text-container'>
                <span></span> Company only provides listing and lead generation
              </div>
              <div className='terms-conditions-footer-link-container'>
              👉 The Company is not a broker, agent, or owner of listed assets unless explicitly stated in writing.
            </div>
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuCircleCheckBig className='eye-icon' /> 4. User Eligibility
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Users must be 18 years or older.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Users confirm that all information provided is accurate, lawful, and genuine
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='eye-icon' />
            5. Listings & Content Responsibility
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Sellers must have legal rights to list assets.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            No fake, misleading, illegal, or prohibited listings.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Images, videos, descriptions must be genuine.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Company reserves the right to remove listings without notice
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoShieldCheck className='eye-icon' />
            6. DIGITAL MEDIA & VERIFICATION SERVICES
          </h2>
          <p className='sub-text'>
            Verification is provided only through Digital Media Package
          </p>
          <p className='sub-text'>
            Includes:
          </p>
          <div className='terms-conditions-flex-container'>
            <p>Identity verification</p>
            <p>Mobile verification</p>
            <p>Location verification</p>
            <p>Basic authenticity checks</p>
          </div>
          <p className='verification-footer'>
            👉 This does not guarantee ownership, valuation, or sale
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <CgFileDocument className='eye-icon' />
            7. Fees & Payments
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Payments are processed via Razorpay or authorized gateways.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Fees may apply for:
          </div>
          <div className='buynow-points-container'>
            <p>-Digital Media Package</p>
            <p>-Featured listings</p>
            <p>-Advertising</p>
            <p>-Subscription plans</p>
            <p>-Buy Now commissions</p>
          </div>
          <div className='user-eligibility-footer-container'>
            Buyers do not pay any platform fees till March 1st, 2027.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiGlobe className='eye-icon' />
            8. Advertising & Promotions
          </h2>
          <p className='sub-text'>Services include:</p>
          <div className='promotions-list-container'>
            <span>Featured listings</span>
            <span>Homepage banners</span>
            <span>Digital marketing services</span>
            <span>Social media promotions</span>
          </div>
          <p className='note'>Results such as leads, reach, or sales are not guaranteed.</p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <MdNotInterested className='eye-icon' />
            9. Prohibited Activities
          </h2>
          <p className='sub-text'>Users shall not:</p>
          <div className='promotions-list-container'>
            <span>Post fake or illegal listings</span>
            <span>Misrepresent ownership</span>
            <span>Spam, or misuse data</span>
            <span>Violate any applicable laws</span>
            <span>Use the Platform for fraudulent activities</span>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LiaBalanceScaleSolid className='eye-icon' />
            10. Intellectual Property
          </h2>
          <p className='sub-text'>
            All logos, content, trademarks, and designs belong to Billionaire
            Auction. 
          </p>
          <p className='property-footer-text'>
            Unauthorized use is strictly prohibited.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiGlobe className='eye-icon' />
            11. Third-Party Links & Services
          </h2>
          <p className='sub-text'>
            Platform may include third-party integrations.
          </p>
          <p className='sub-text'>
            Company is not responsible for third-party services or actions.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FaRegTimesCircle className='eye-icon' />
            12. Disclaimer
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Platform provided on an "as-is" basis.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            No guarantee of sale, price, leads, response, or platform uptime.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Users must conduct their own due diligence.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='eye-icon' />
            13. Limitation of Liability
          </h2>
          <p className='sub-text'>The Company shall not be liable for:</p>
          <div className='promotions-list-container'>
            <span>Losses between buyers, sellers or tenants</span>
            <span>Misrepresentation by users</span>
            <span>Any indirect, incidental, or consequential damages</span>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <MdNotInterested className='eye-icon' />
            14. Termination
          </h2>
          <p className='sub-text'>
            The Company may suspend or terminate accounts without notice for violations of these Terms
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoShieldCheck className='eye-icon' />
            15. Indemnification
          </h2>
          <p className='sub-text'>
            Users agree to indemnify and hold the Company harmless from any claims arising due to misuse of the Platform.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LiaBalanceScaleSolid className='eye-icon' />
            16. Governing Law & Jurisdiction
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Governed by laws of India
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Courts of Hyderabad, Telangana shall have exclusive jurisdiction.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LiaBalanceScaleSolid className='eye-icon' />
            17. NO TRANSACTION LIABILITY (IMPORTANT)
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Company does not handle payments for assets or rentals
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            No responsibility for: Delivery, Ownership disputes, Rental agreements, and Payment disputes.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            All transactions are strictly between users.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LiaBalanceScaleSolid className='eye-icon' />
            18. LISTING CLASSIFICATION
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            The Company reserves the right to classify listings as: Luxury, Classic and General
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Based on: Price, Location, Category, and Value
          </div>
        </div>
      </div>
      <div className='terms-conditions-footer-container'>
        <h2 className='terms-footer-heading'>
          <LuCircleCheckBig className='terms-footer-icon' /> Acknowledgment
        </h2>
        <p className='terms-footer-text'>
          BY USING THE PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD,
          AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
