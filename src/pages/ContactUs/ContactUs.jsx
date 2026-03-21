import './ContactUs.css';
import { useState } from "react";
import { FiMessageSquare } from 'react-icons/fi';
import { RiTelegram2Line } from 'react-icons/ri';
import { MdMailOutline } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { MdAccessTime } from 'react-icons/md';
import { GrCircleQuestion } from 'react-icons/gr';
import { FaChevronDown } from 'react-icons/fa';

const faqsData = [
  {
    question: "What is Billionaire Auction?",
    answer:
      "Billionaire Auction is an all-in-one platform to list and sell products using Marketplace, Buy Now, Auctions, and To-Let in one place. We focus on real estate, cars, antiques, furniture, art, jewellery, collectibles, and premium goods.",
  },
  {
    question: "What is the Marketplace?",
    answer:
      "The Marketplace allows sellers to list products and connect directly with buyers. Buyers can contact sellers and negotiate freely. Buyers do not pay any platform fee till March 1st, 2027.",
  },
  {
    question: "What are Auctions?",
    answer:
      {
    intro: "The Auctions feature allows sellers to list items for offline bidding by setting:",
    sections: [
      {
        points: [
          "Starting bid price",
          "Optional reserve price",
        ],
      },
    ],
    notes: [
      "Auction date, time, and venue are managed and announced by the company.",
      "No online bidding – all auctions are conducted offline.",
    ],
  },
  },
  {
    question: "What is Buy Now?",
    answer:
      {
    intro: "Buy Now is a managed selling service.",
    sections: [
      {
        title: "In Buy Now:",
        points: [
          "Buyers cannot directly contact sellers",
          "Buyers contact our team",
          "We handle enquiries, promotion, and coordination",
          "We arrange site visits or product viewings",
          "Final deal is completed between buyer and seller",
        ],
      },
    ],
    notes: [
      "We act on behalf of sellers and ensure a smooth process.",
      "We charge commission only on successful deals.",
      "No payments are processed on the website.",
    ],
  },
  },
  {
    question: "What is To-Let?",
    answer:
      {
    intro: "To-Let allows users to list rental properties",
    sections: [
      {
        title: "Pricing:",
        points: [
          "Till September 1st → Unlimited free listings",
          "Till March 1st → 3 free listings per month",
          "After that → ₹499 + GST per listing",
        ],
      },
    ],
    notes: [
      "Tenants can directly contact property owners or agents",
      "No commission is charged on To-Let listings",
    ],
  },
  },
  {
    question: "What is a Verified Listing?",
    answer:
      "A Verified Listing means the seller has been checked and verified by our team. This improves trust, reduces fake listings, and increases buyer enquiries.",
  },
  {
    question: "What is Direct Verification?",
    answer:
      {
    intro: "Direct Verification is available only through our Digital Media Package.",
    sections: [
      {
        title: "It includes:",
        points: [
          "Identity verification",
          "Mobile number verification",
          "Location verification",
          "Listing authenticity check",
        ],
      },
    ],
    notes: [
      "Verified listings receive a premium trust badge",
    ],
  },
  },
  {
    question: "Is verification mandatory?",
    answer:
      "No, verification is optional. However, verified listings get better visibility and higher trust.",
  },
  {
    question: "Are listings free?",
    answer:
      {
    intro: "Yes, during launch:",
    sections: [
      {
        title: "Marketplace / Buy Now / Auctions:",
        points: [
          "First 6 months → Unlimited free listings",
          "Next 6 months → 3 free listings per month",
        ],
      },
    ],
  },
  },
  {
    question: "What are Featured Listings?",
    answer:
      {
    intro: "Featured Listings appear at the top and get higher visibility.",
    sections: [
      {
        title: "Pricing (plus GST):",
        points: [
          "₹2,500 → 1 week",
          "₹4,500 → 2 weeks",
          "₹8,000 → 1 month",
        ],
      },
    ],
  },
  },
  {
    question: "What are Recommended Listings?",
    answer:
      {
    intro: "Recommended Listings are promoted by the platform based on:",
    sections: [
      {
        points: [
          "Listing quality",
          "User activity",
          "Verified users",
        ],
      },
    ],
    notes: [
      "We do not charge for recommendations. It is selected by the platform.",
    ],
  },
  },
  {
    question: "Do buyers pay any fees?",
    answer:
      {
    intro: "No. Buyers do not pay any platform fees till March 1st, 2027.",
    sections: [
      {
        title: "This applies to:",
        points: [
          "Marketplace",
          "Buy Now",
          "Auctions",
          "To-Let",
        ],
      },
    ],
  },
  },
  {
    question: "Do you charge commission?",
    answer:
      {
    sections: [
      {
        title: "Yes, only for::",
        points: [
          "Buy Now",
          "Auctions",
        ],
      },
    ],
    notes: [
      "Marketplace and To-Let are free from commission.",
    ],
  },
  },
  {
    question: "What regions do you operate in?",
    answer:
      {
    sections: [
      {
        title: "We are mainly focused on:",
        points: [
          "Telangana",
          "Andhra Pradesh",
          "Listings are open across India",
          "International listings are also allowed (USA, UK, Canada, Dubai, Singapore, etc.)",
        ],
      },
    ],
  },
  },
  {
  question: "How do you classify listings?",
  answer: {
    intro: "Our team reviews listings based on:",
    
    bulletPoints: [
      "Price",
      "Location",
      "Category",
      "Value"
    ],

    sections: [
      {
        title: "Listings are categorized as:",
        points: [
          "Luxury → High-value, premium and expensive items",
          "Classic → Mid-range valuable items",
          "General → Lower-priced regular listings",
        ]
      }
    ]
  }
},
{
    question: "Do you handle payments on the website?",
    answer:
      {
    sections: [
      {
        title: "No",
        points: [
        ],
      },
    ],
    notes: [
      "All payments are handled offline between buyer and seller.",
      "We only provide listing, promotion, and lead generation services.",
    ],
  },
  },
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

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
                <p className='email'>+91 78422 01879</p>
                <p className='email'>+91 78425 01879</p>
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
            <div className="accordion-items-container">
              {faqsData.map((item, index) => (
                <div key={index} className="accordion-item">
                  
                  <div
                    className="accordion-question"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <FaChevronDown
                      className={`dropdown-icon ${
                        activeIndex === index ? "rotate" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`accordion-answer ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    {item.answer.intro && <p>{item.answer.intro}</p>}
                    {item.answer.bulletPoints && (
                      <ul>
                        {item.answer.bulletPoints.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {item.answer.sections?.map((section, i) => (
                      <div key={i} className="faq-section">
                        <strong>{section.title}</strong>
                        <ul>
                          {section.points.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.answer.notes?.map((note, i) => (
                      <p key={i} className="faq-note">👉 {note}</p>
                    ))}
                  </div>

                </div>
              ))}
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
        <button className='contact-footer-btn' onClick={() =>
    (window.location.href ="mailto:Elite@billionaireauction.com?subject=Support Request")}>
          <MdMailOutline /> Contact Support
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
