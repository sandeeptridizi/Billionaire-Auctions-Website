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
          Billionaire Auction is a digital platform providing online services
          such as listings, verification, advertising, and promotional services.
          No physical sales, transactions, or asset exchanges take place at the
          Company's registered or operational address.
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
          <p className='refund-policy-desc'>
            Payments are collected strictly for digital services, platform
            access, visibility, verification, advertising, and facilitation
            services.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FaRegCircleXmark className='circle-icon' />
            2. Non-Refundable Services
          </h2>
          <p className='sub-text'>
            once payment is successfully processed, regardless of usage or
            outcome:
          </p>
          <div className='promotions-list-container'>
            <span>Video Verification</span>
            <span>Direct Verification</span>
            <span>Featured Listings</span>
            <span>Advertising & Promotional Services</span>
            <span>Homepage / Banner Advertisements</span>
            <span>
              Digital Marketing Services (including shooting, posting, ads)
            </span>
            <span>Subscription fees (once activated)</span>
            <span>Buy Now facilitation or commission fees</span>
            <span>Any service already delivered or initiated</span>
          </div>
          <div className='non-refundable-container'>
            👉 No refunds will be issued for dissatisfaction with responses,
            views, leads, bids, or sales outcomes.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='circle-icon' />
            3. Marketplace & Transaction Disclaimer
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Billionaire Auction does not sell any goods or assets directly.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            The Company does not receive payments on behalf of buyers or sellers
            for asset purchases.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            All buying, selling, bidding, and payments for assets happen
            directly between buyers and sellers, outside the Platform.
          </div>
          <div className='market-footer-container'>
            <h3 className='market-footer-heading'>Therefore:</h3>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              The Company is not responsible for refunds related to asset
              purchases.
            </div>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              Disputes between buyers and sellers must be resolved between
              themselves.
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
            <span>Payment was debited, but</span>
            <span>The service was not activated or delivered, and</span>
            <span>
              The failure is verified by our payment gateway (Razorpay)
            </span>
          </div>
          <div className='duplicate-transactions-tag-container'>
            <h3 className='duplicate-transactions-heading'>Timeline:</h3>
            <div className='duplicate-transaction-container'>
              <div className='duplicate-transaction-circle'></div>
              Refunds (if approved) will be processed within 7–10 working days
            </div>
            <div className='duplicate-transaction-container'>
              <div className='duplicate-transaction-circle'></div>
              Actual credit time depends on the user's bank or payment provider
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
            Any bidder deposit (if applicable) is governed by auction-specific
            terms.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Deposits may be refundable or adjustable as per auction rules
            announced separately.
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Listing fees, verification fees, or promotional fees for auctions
            are non-refundable.
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <RxCircleBackslash className='circle-icon' />
            6. Advertising & Digital Marketing Services
          </h2>
          <p className='sub-text'>For "Advertise With Us" services:</p>
          <div className='promotions-list-container'>
            <span>
              Charges cover content creation, promotions, ad setup, and
              visibility
            </span>
            <span>
              Performance, reach, engagement, or sales are not guaranteed
            </span>
            <span>
              Once the service is scheduled or initiated, no refunds or
              cancellations are permitted
            </span>
          </div>
          <p className='note'>
            Travel-related costs (outside Telangana & Andhra Pradesh) are
            additional and non-refundable.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <IoWarningOutline className='circle-icon' />
            7. Company Address Disclaimer
          </h2>
          <p className='disclaimer-heading'>
            Billionaire Auction's registered or operational address is not a
            showroom, office for sales, or transaction location.
          </p>
          <div className='disclaimer-tag-container'>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              No buying, selling, delivery, inspection, or payment collection
              occurs at the Company address.
            </div>
            <div className='user-eligibility-container'>
              <div className='user-eligibility-circle'></div>
              The address is used strictly for business registration and
              administration purposes.
            </div>
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuShield className='eye-icon' />
            8. Discretionary Refunds
          </h2>
          <p className='sub-text'>
            Any exception to this policy is at the sole discretion of
            Billionaire Auction and will be evaluated case-by-case.
          </p>
          <p className='sub-text'>
            The Company reserves the right to approve or deny refund requests
            without obligation to provide justification.
          </p>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <LuShield className='check-circle' />
            9. Payment Security
          </h2>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Payments are processed via Razorpay
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Billionaire Auction does not store credit/debit card details, UPI
            IDs, or bank credentials
          </div>
          <div className='user-eligibility-container'>
            <div className='user-eligibility-circle'></div>
            Payment processing is subject to Razorpay's policies and terms
          </div>
        </div>
        <div className='personal-data-container'>
          <h2 className='personal-data-heading'>
            <FiMail className='eye-icon' />
            10. Contact for Refund Queries
          </h2>
          <p className='sub-text'>
            For refund-related queries (eligible cases only):
          </p>
          <div className='queries-container'>
            <p className='queries-text'>
              ✉️ Email: <span>Elite@billionaireauction.com</span>
            </p>
            <p className='queries-desc'>
              📌 Subject Line: <span>Refund Request - Order ID</span>
            </p>
            <p className='queries-footer-text'>
              Incomplete or ineligible requests may not receive a response.
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
