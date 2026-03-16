import './OurServices.css';
import React, { useState } from "react";
import EnquiryModal from "../../components/EnquiryModel/EnquiryModal";

import { LuBuilding } from 'react-icons/lu';
import { IoDocumentTextSharp } from "react-icons/io5";
import { LuBanknote } from 'react-icons/lu';
import { MdCurtainsClosed } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { RiAuctionFill } from "react-icons/ri";
import { BsBuildingCheck } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa";
import { LuBriefcase } from 'react-icons/lu';

const services = [
  {
    id: 1,
    icon: <LuBuilding />,
    title: 'Real Estate Advisory',
    text: 'Strategic guidance for buying, selling, renting, and auctioning high-value properties and assets, including pricing and deal structuring.',
  },
  {
    id: 2,
    icon: <LuBanknote />,
    title: 'Banking & Financial Services',
    text: 'Home loans, mortgage support, auction funding, escrow services, EMI assistance, and HNI banking coordination.',
  },
  {
    id: 3,
    icon: <IoDocumentTextSharp />,
    title: 'Legal & Documentation Services',
    text: 'Title verification, agreements, due diligence, auction legal compliance, registrations, and dispute support.',
  },
  {
    id: 4,
    icon: <MdCurtainsClosed />,
    title: 'Interior Designing Services',
    text: 'Luxury interiors, turnkey execution, villa & apartment interiors, staging services to increase asset value and buyer appeal.',
  },
  {
    id: 5,
    icon: <BsFillBuildingsFill />,
    title: 'Property Management Services',
    text: 'End-to-end property management including tenant handling, rent collection, maintenance, handover, and NRI property care.',
  },
  {
    id: 6,
    icon: <RiAuctionFill />,
    title: 'Auction Concierge Services',
    text: 'White-glove support for auction buyers & sellers: onboarding, reserve pricing, bidder coordination, venue support, and post-auction closure.',
  },
  {
    id: 7,
    icon: <FaTruckMoving />,
    title: 'Logistics & Transportation Services',
    text: 'Secure transport for luxury cars, art, antiques, furniture, collectibles, and relocation of high-value assets.',
  },
  {
    id: 8,
    icon: <BsBuildingCheck />,
    title: 'Property Valuation & Appraisal',
    text: 'Market valuation, auction reserve pricing, bank-approved valuation reports, and luxury asset appraisal.',
  },

];

const OurServices = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='our-services-container'>
      <div className='our-services-background'>
        <h1 className='our-services-heading'>Our Services</h1>
        <p className='our-services-text'>
          Comprehensive services designed to make your property investments and
          transactions seamless
        </p>
      </div>
      <div className='our-services-offer-container'>
        <div className='our-services-offer-header'>
          <h2 className='offer-heading'>What We Offer</h2>
          <p className='offer-text'>
            End-to-end solutions for all your real estate and financial needs
          </p>
        </div>
        <div className='our-services-offer-grid-container'>
          {services.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='our-services-grid-item-container' key={id}>
                <div className='our-services-grid-item-icon-container'>
                  {icon}
                </div>
                <h3 className='our-services-grid-item-title'>{title}</h3>
                <p className='our-services-grid-item-text'>{text}</p>
                <a href="tel:+917842201879" className="our-services-grid-item-btn">+91 78422 01879</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className='our-services-personalized-container'>
        <div className='personalized-content-container'>
          <h2 className='personalized-heading'>
            Need Personalized Assistance?
          </h2>
          <p className='personalized-text'>
            Our team of experts is ready to help you with tailored solutions for
            your unique requirements
          </p>
          <div className='personalized-btn-container'>
            <button className='schedule-btn' onClick={() => setShowModal(true)}>
              <LuBriefcase /> Get Consultation
            </button>
            {showModal && ( <EnquiryModal onClose={() => setShowModal(false)} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
