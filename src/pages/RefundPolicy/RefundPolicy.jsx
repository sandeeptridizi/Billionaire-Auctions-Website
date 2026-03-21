import './RefundPolicy.css';

import { LuRefreshCcw } from 'react-icons/lu';
import { LuDollarSign } from 'react-icons/lu';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { IoWarningOutline } from 'react-icons/io5';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { RxCircleBackslash } from 'react-icons/rx';
import { LuShield } from 'react-icons/lu';
import { FiMail } from 'react-icons/fi';
import { PiWarningCircleBold } from 'react-icons/pi';

const RefundPolicy = () => {
  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-background'>
        <h1 className='privacy-policy-heading'>
          <LuRefreshCcw className='shield-icon' /> Refund & Cancellation Policy
        </h1>
        <p className='privacy-policy-text'>
          Billionaire Auction is a digital platform providing online services such as listings, To-Let services, advertising, and promotional services. No physical sales, transactions, or asset exchanges take place at the Company’s registered or operational address.
        </p>
        <p className='last-updated'>Last updated: January 2026</p>
      </div>
      <div className='privacy-policy-content-container'>
        <h2 className='personal-data-heading'>
          <LuDollarSign className='eye-icon' /> 1. General Refund Policy
        </h2>
        <div className='refund-policy-tag-container'>
          <p className='refund-policy-text'>
            All payments made on Billionaire Auction are final and
            non-refundable, except in limited cases explicitly mentioned in this
            policy.
          </p>
          <p className='refund-policy-text'>
            Payments are collected strictly for:
          </p>
          <div className='promotions-list-container'>
            <span>Digital listing services</span>
            <span>To-Let listing services</span>
            <span>Advertising and promotions</span>
            <span>Digital media and marketing services</span>
            <span>Platform visibility and lead generation</span>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FaRegCircleXmark className='circle-icon' />
            2. Non-Refundable Services
          </h2>
          <p className='sub-text'>
            The following services are strictly non-refundable once payment is successfully processed, regardless of usage or outcome:
          </p>
          <div className='promotions-list-container'>
            <span>Digital Media Package (includes verification & promotion)</span>
            <span>Featured Listings</span>
            <span>Advertising & Promotional Services</span>
            <span>Homepage / Banner Advertisements</span>
            <span>To-Let Paid Listings</span>
            <span>Digital Marketing Services (shooting, posting, ads, promotions)</span>
            <span>Subscription plans (once activated)</span>
            <span>Buy Now facilitation or commission fees</span>
            <span>Any service already delivered or initiated</span>
          </div>
          <div className='non-refundable-container'>
            👉 No refunds will be issued for dissatisfaction with:
             <div className='promotions-list-container'>
            <span>Leads</span>
            <span>Views</span>
            <span>Enquiries</span>
            <span>Engagement</span>
            <span>Sales outcomes</span>
          </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='circle-icon' />
            3. MARKETPLACE, BUY NOW & TO-LET DISCLAIMER
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Billionaire Auction does not sell any goods or assets directly.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            The platform acts only as a listing, promotion, and facilitation service
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            For:
            </div>
            <div className='promotions-list-container'>
            <span>Marketplace</span>
            <span>Buy Now</span>
            <span>Auctions</span>
            <span>To-Let</span>
          </div>
          
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            All transactions, negotiations, and payments happen directly between buyers, tenants, owners, or sellers
          </div>
          <div className='market-footer-container'>
            <h3 className='market-footer-heading'>Therefore:</h3>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              The Company is not responsible for refunds related to any deal, rental agreement, or purchase
            </div>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              Any disputes must be resolved between the respective parties
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FaRegCircleCheck className='check-circle' />
            4. Failed or Duplicate Transactions
          </h2>
          <p className='sub-text'>A refund may be considered only if:</p>
          <div className='promotions-list-container'>
            <span>Payment was successfully debited</span>
            <span>Service was not activated or delivered</span>
            <span>Issue is verified by the payment gateway (Razorpay)</span>
          </div>
          <div className='duplicate-transactions-tag-container'>
            <h3 className='duplicate-transactions-heading'>Timeline:</h3>
            <div className='duplicate-transaction-container'>
              <div className='duplicate-transaction-circle'></div>
              Approved refunds: 7–10 working days
            </div>
            <div className='duplicate-transaction-container'>
              <div className='duplicate-transaction-circle'></div>
              Credit time depends on bank/payment provider
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='eye-icon' />
            5. Auction-Related Payments
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Auctions are conducted offline
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Platform is used only for listing and promotion
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            If any bidder deposit is applicable:
          </div>
          <div className='promotions-list-container'>
            <span>It will be governed by auction-specific rules</span>
            <span>Refundability depends on auction terms announced separately</span>
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Listing, promotion, or service fees related to auctions are non-refundable
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <RxCircleBackslash className='circle-icon' />
            6. Advertising & Digital Media Services
          </h2>
          <p className='sub-text'>For "Advertise With Us" and Digital Media Packages:</p>
          <div className='promotions-list-container'>
            <span>
              Charges include content creation, video shoot, ads, and promotions
            </span>
            <span>
              Performance, reach, leads, or sales are not guaranteed
            </span>
            <span>
              Once service is booked or started, cancellation or refund is not allowed
            </span>
          </div>
          <p className='note'>
            Travel charges (outside Telangana & Andhra Pradesh) are additional and non-refundable
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='circle-icon' />
            7. Company Address Disclaimer
          </h2>
          <p className='disclaimer-heading'>
            Billionaire Auction’s registered or operational address is not a showroom or transaction point.
          </p>
          <div className='disclaimer-tag-container'>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              No buying, selling, rental agreements, delivery, or payments occur at this address
            </div>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              Address is used only for business and administrative purposes
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuShield className='eye-icon' />
            8. Discretionary Refunds
          </h2>
          <p className='sub-text'>
            Any exception to this policy is at the sole discretion of Billionaire Auction
          </p>
          <p className='sub-text'>
            Requests are reviewed case-by-case
          </p>
          <p className='sub-text'>
            The Company reserves full rights to approve or reject without obligation
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuShield className='check-circle' />
            9. Payment Security
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Payments are processed securely via Razorpay
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            We do not store card details, UPI IDs, or bank credentials
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Payment handling follows Razorpay’s security and compliance policies
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiMail className='eye-icon' />
            10. Contact for Refund Queries
          </h2>
          <p className='sub-text'>
            For eligible refund requests only:
          </p>
          <div className='queries-container'>
            <p className='queries-text'>
              ✉️ Email: <span>Elite@billionaireauction.com</span>
            </p>
            <p className='queries-desc'>
              📌 Subject: <span>Refund Request - Order ID</span>
            </p>
            <p className='queries-footer-text'>
              Incomplete, invalid, or ineligible requests may not receive a response.
            </p>
          </div>
        </div>
      </div>
      <div className='refund-policy-footer-container'>
        <h2 className='refund-policy-footer-heading'>
          <PiWarningCircleBold className='eye-icon' /> Key Points Summary
        </h2>
        <div className='refund-policy-footer-tag-container'>
          <div className='refund-policy-footer-circle'></div>
          <p>All platform service payments are final and non-refundable</p>
        </div>
        <div className='refund-policy-footer-tag-container'>
          <div className='refund-policy-footer-circle'></div>
          <p>
            Refunds only for failed/duplicate transactions verified by Razorpay
          </p>
        </div>
        <div className='refund-policy-footer-tag-container'>
          <div className='refund-policy-footer-circle'></div>
          <p>Processing time: 7–10 working days(if approved)</p>
        </div>
        <div className='refund-policy-footer-tag-container'>
          <div className='refund-policy-footer-circle'></div>
          <p>No responsibility for buyer-seller transactions</p>
        </div>
        <div className='refund-policy-footer-tag-container'>
          <div className='refund-policy-footer-circle'></div>
          <p>Company address is for registration only– not for transactions</p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
