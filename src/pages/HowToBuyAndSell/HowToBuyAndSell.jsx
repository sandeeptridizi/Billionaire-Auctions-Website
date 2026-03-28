import './HowToBuyAndSell.css';
import { useState } from "react";
import { GrCircleQuestion } from 'react-icons/gr';
import { GoPerson } from 'react-icons/go';
import { FiSearch } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { LuCamera } from 'react-icons/lu';
import { LuCircleCheckBig } from 'react-icons/lu';
import { FaChevronDown } from 'react-icons/fa';

const buyData = [
  {
    id: 1,
    icon: <GoPerson />,
    title: 'Sign Up & Verify',
    text: 'Create your account and complete verification for secure transactions',
  },
  {
    id: 2,
    icon: <FiSearch />,
    title: 'Browse & Search',
    text: 'Explore our curated collection of luxury items across multiple categories',
  },
  {
    id: 3,
    icon: <LuShoppingCart />,
    title: 'Purchase',
    text: 'Buy instantly or participate in auctions. Verified Sellers for a seamless experience.',
  },
];

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

const sellData = [
  {
    id: 1,
    icon: <GoPerson />,
    title: 'Register as Seller',
    text: 'Complete seller verification and choose your pricing plan',
  },
  {
    id: 2,
    icon: <LuCamera />,
    title: 'List Your Item',
    text: 'Add photos, description, and pricing. We offer professional photography services',
  },
  {
    id: 3,
    icon: <LuCircleCheckBig />,
    title: 'Sell your Product',
    text: 'Receive inquiries and Close Deals through our secure platform.',
  },
];

const HowToBuyAndSell = () => {
  const [activeIndex, setActiveIndex] = useState(null);
   const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};
  return (
    <div className='how-it-works-container'>
      <div className='how-it-works-background'>
        <h1 className='how-it-works-heading'>How to Buy & Sell</h1>
        <p className='how-it-works-text'>
          Your complete guide to luxury transactions
        </p>
      </div>
      <div className='how-to-buy-container'>
        <h2 className='how-to-buy-heading'>How to Buy</h2>
        <div className='how-to-buy-grid-container'>
          {buyData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='how-to-buy-item-container' key={id}>
                <div className='how-to-buy-item-icon-container'>{icon}</div>
                <h2 className='step'>Step {id}</h2>
                <h3 className='how-to-buy-item-title'>{title}</h3>
                <p className='how-to-buy-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='how-to-sell-container'>
        <h2 className='how-to-buy-heading'>How to Sell</h2>
        <div className='how-to-buy-grid-container'>
          {sellData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='how-to-sell-item-container' key={id}>
                <div className='how-to-sell-item-icon-container'>{icon}</div>
                <h2 className='sell-step'>Step {id}</h2>
                <h3 className='how-to-buy-item-title'>{title}</h3>
                <p className='how-to-buy-item-text'>{text}</p>
              </div>
            );
          })}
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
      
                        <div className={`accordion-answer ${activeIndex === index ? "open" : ""}`}>
                          
                          {/* ✅ Handle string answers */}
                          {typeof item.answer === "string" && <p>{item.answer}</p>}
      
                          {/* ✅ Handle object answers */}
                          {typeof item.answer === "object" && (
                            <>
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
                                  {section.title && <strong>{section.title}</strong>}
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
                            </>
                          )}
                        </div>
      
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
      <div className='safety-tips-container'>
        <h2 className='safety-tips-heading'>Safety Tips</h2>
        <div className='safety-tips-list-container'>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Always verify
            seller credentials and ratings
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Use our secure
            payment system - never transfer money outside the platform
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Request
            certificate of authenticity for high-value items
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Meet in public
            places for local pickups
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Report suspicious
            activity immediately
          </div>
          <div className='safety-tips-item-container'>
            <LuCircleCheckBig className='safety-tips-icon' /> Read item
            descriptions and terms carefully before purchasing
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyAndSell;
