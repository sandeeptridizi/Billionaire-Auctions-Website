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
                <span className='terms-conditions-heading'>Seller:</span>A User
                who lists assets on the Platform.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Buyer:</span>A User
                interested in purchasing or bidding on assets.
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
                Offline or hybrid auction listings facilitated by the Company.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Buy Now:</span>
                Commission-based service where the Company assists in selling
                assets.
              </p>
            </div>
            <div className='terms-conditions-list-item-container'>
              <div className='terms-conditions-circle'></div>
              <p className='terms-conditions-text'>
                <span className='terms-conditions-heading'>Services:</span>
                All services offered by the Platform including listings,
                verification, promotions, advertising, auctions, and digital
                marketing.
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
                <span></span> No buyer fees.
              </div>
              <div className='market-place-text-container'>
                <span></span> The Company does not participate in negotiations
                or payments.
              </div>
            </div>
            <div className='auctions-container'>
              <h3 className='market-place-heading'>B. Auctions</h3>
              <div className='market-place-text-container'>
                <span></span> Auctions are conducted offline or hybrid.
              </div>
              <div className='market-place-text-container'>
                <span></span> No real-time online bidding unless announced.
              </div>
              <div className='market-place-text-container'>
                <span></span> Auction date & venue will be announced separately.
              </div>
              <div className='market-place-text-container'>
                <span></span> Reserve price protection applies.
              </div>
              <div className='market-place-text-container'>
                <span></span> Bidders may be required to pay a 10% refundable
                deposit.
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
                <span></span> The Company assists with:
              </div>
              <div className='buynow-points-container'>
                <p>-Advertising</p>
                <p>-Buyer sourcing</p>
                <p>-Property visits / coordination</p>
              </div>
              <div className='market-place-text-container'>
                <span></span> Final ownership transfer and documentation remain
                between buyer and seller.
              </div>
            </div>
            <div className='terms-conditions-footer-link-container'>
              👉 The Company is not a broker, agent, or owner of listed assets
              unless explicitly stated in writing.
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
            By using the Platform, you confirm that all information provided is
            accurate and lawful.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='eye-icon' />
            5. Listings & Content Responsibility
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Sellers must have legal rights to list the asset.
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
            The Company may remove listings without notice if violations are
            found.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoShieldCheck className='eye-icon' />
            6. Verification Services
          </h2>
          <p className='sub-text'>
            Verification services are optional and paid:
          </p>
          <div className='terms-conditions-flex-container'>
            <p>Video Verification</p>
            <p>Direct Verification</p>
          </div>
          <p className='sub-text'>
            Verification includes identity checks, location confirmation, and
            basic authenticity checks.
          </p>
          <p className='verification-footer'>
            Verification does NOT guarantee ownership, valuation, or sale.
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
            <p>-Verifications</p>
            <p>-Featured Listings</p>
            <p>-Advertising</p>
            <p>-Buy Now commissions</p>
          </div>
          <div className='user-eligibility-footer-container'>
            Buyers pay no fees for Marketplace usage until 11 January 2027.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiGlobe className='eye-icon' />
            8. Advertising & Promotions
          </h2>
          <p className='sub-text'>The Company may offer:</p>
          <div className='promotions-list-container'>
            <span>Featured listings</span>
            <span>Homepage banners</span>
            <span>Digital marketing services</span>
            <span>Social media promotions</span>
          </div>
          <p className='note'>Advertising results are not guaranteed.</p>
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
            <span>Spam, scrape, or misuse data</span>
            <span>Violate Indian laws</span>
            <span>Use the Platform for unlawful purposes</span>
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
            The Platform may link to third-party services.
          </p>
          <p className='sub-text'>
            The Company is not responsible for third-party content or actions.
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
            No guarantee of sale, price, response, or uptime.
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
            <span>Losses between buyers and sellers</span>
            <span>Misrepresentation by users</span>
            <span>Indirect or consequential damages</span>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <MdNotInterested className='eye-icon' />
            14. Termination
          </h2>
          <p className='sub-text'>
            The Company may suspend or terminate accounts for violations without
            notice.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <GoShieldCheck className='eye-icon' />
            15. Indemnification
          </h2>
          <p className='sub-text'>
            Users agree to indemnify the Company against claims arising from
            misuse of the Platform.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LiaBalanceScaleSolid className='eye-icon' />
            16. Governing Law & Jurisdiction
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Governed by Indian law
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Courts of Hyderabad, Telangana shall have exclusive jurisdiction.
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
