import './ContactUs.css';

import { FiMessageSquare } from 'react-icons/fi';
import { RiTelegram2Line } from 'react-icons/ri';
import { MdMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { MdAccessTime } from 'react-icons/md';
import { GrCircleQuestion } from 'react-icons/gr';
import { FaChevronDown } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='contact-us-container'>
      <div className='contact-us-background'>
        <FiMessageSquare className='message-icon' />
        <h1 className='contact-us-heading'>Contact Us</h1>
        <p className='contact-us-text'>
          We're here to help. Reach out to us anytime
        </p>
      </div>
      <div className='contact-us-grid-container'>
        <div className='contact-us-form-container'>
          <h2 className='form-heading'>Send Us a Message</h2>
          <form className='form-container'>
            <div className='form-label-container'>
              <label className='label-text'>Name *</label>
              <input
                type='text'
                placeholder='Your full name'
                className='form-input'
              />
            </div>
            <div className='form-grid-container'>
              <div className='form-label-container'>
                <label className='label-text'>Email *</label>
                <input
                  type='text'
                  placeholder='your@email.com'
                  className='form-input'
                />
              </div>
              <div className='form-label-container'>
                <label className='label-text'>Phone</label>
                <input
                  type='text'
                  placeholder='+91 XXXXX XXXXX'
                  className='form-input'
                />
              </div>
            </div>
            <div className='form-label-container'>
              <label className='label-text'>Subject *</label>
              <input
                type='text'
                placeholder='How can we help?'
                className='form-input'
              />
            </div>
            <div className='form-label-container'>
              <label className='label-text'>Message *</label>
              <textarea
                type='text'
                placeholder='Tell us more about your inquiry...'
                className='form-input'
                rows={5}
              ></textarea>
            </div>
            <button type='submit' className='form-btn'>
              <RiTelegram2Line /> Send Message
            </button>
          </form>
        </div>
        <div className='contact-us-form-container'>
          <h2 className='form-heading'>Get in Touch</h2>
          <div className='contact-us-flex-container'>
            <div className='contact-us-icon-content-container'>
              <div className='contact-us-icon-container'>
                <MdMailOutline />
              </div>
              <div className='contact-us-content-container'>
                <h3 className='content-heading'>Email</h3>
                <p className='email'>elite@billionaireauction.com</p>
              </div>
            </div>
            <div className='contact-us-icon-content-container'>
              <div className='contact-us-icon-container'>
                <FiPhone />
              </div>
              <div className='contact-us-content-container'>
                <h3 className='content-heading'>Phone</h3>
                <p className='email'>+91 77310 01879</p>
              </div>
            </div>
            <div className='contact-us-icon-content-container'>
              <div className='contact-us-icon-container'>
                <GrLocation />
              </div>
              <div className='contact-us-content-container'>
                <h3 className='content-heading'>Address</h3>
                <p className='email'>Izzat Nagar, Kondapur</p>
                <p className='email'>Hyderabad, Telangana 500084</p>
              </div>
            </div>
            <div className='contact-us-icon-content-container'>
              <div className='contact-us-icon-container'>
                <MdAccessTime />
              </div>
              <div className='contact-us-content-container'>
                <h3 className='content-heading'>Business Hours</h3>
                <p className='email'>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className='email'>Saturday: 10:00 AM - 6:00 PM</p>
                <p className='email'>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-us-faqs-container'>
        <div className='faqs-header'>
          <GrCircleQuestion className='question-mark-icon' />
          <h2 className='faqs-heading'>Frequently Asked Questions</h2>
          <p className='faqs-text'>
            Find answers to common questions about Billionaire Auction
          </p>
        </div>
        <div className='contact-us-faqs-accordion-container'>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Getting Started</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                How do I create an account on Billionaire Auction?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                Is registration mandatory to browse listings?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                How do I list an item for sale?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Buying & Selling</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                How do I contact a seller about a listing?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                Are all items authenticated by Billionaire Auction?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                What payment methods are accepted?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                How do I verify the authenticity of luxury items?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Pricing & Fees</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                What are the listing fees?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                Do you charge commission on sales?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                Can I get a refund if my item doesn't sell?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Account & Security</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                How do I verify my account?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                What if I forget my password?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                How is my personal information protected?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Transactions & Delivery</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                How are transactions handled?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                Does Billionaire Auction arrange delivery?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                What if there's a dispute with a seller/buyer?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Listings & Visibility</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                How long does my listing stay active?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                How can I improve my listing's visibility?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                Can I edit my listing after publishing?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Policies & Legal</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                What items are prohibited from listing?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                What is your cancellation policy?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                How do refunds work? <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
          <div className='accordion-container'>
            <h3 className='accordion-heading'>Technical Support</h3>
            <div className='accordion-items-container'>
              <div className='accordion-item-container'>
                I'm having trouble uploading photos. What should I do?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                The website is not loading properly. How can I fix this?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
              <div className='accordion-item-container'>
                How do I report a suspicious listing or user?{' '}
                <FaChevronDown className='dropdown-icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-us-footer-container'>
        <h3 className='footer-heading'>Still have questions?</h3>
        <p className='contact-us-footer-text'>
          Can't find the answer you're looking for? Our support team is here to
          help.
        </p>
        <button className='contact-footer-btn'>
          <MdMailOutline /> Contact Support
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
