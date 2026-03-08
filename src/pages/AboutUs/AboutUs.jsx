import './AboutUs.css';

import starIcon from '../../assets/star-icon.png';

import { GoPerson } from 'react-icons/go';
import { RiGraduationCapLine } from 'react-icons/ri';
import { LuBriefcase } from 'react-icons/lu';

import { FaArrowTrendUp } from 'react-icons/fa6';
import { GoPeople } from 'react-icons/go';
import { FiShield } from 'react-icons/fi';
import { TbHammer } from 'react-icons/tb';
import { FiAward } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { FiHeadphones } from 'react-icons/fi';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { LuCrown } from 'react-icons/lu';
import { BsGlobe } from 'react-icons/bs';
import { LuHotel } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa6';
import { LuCircleCheckBig } from 'react-icons/lu';

const aboutData = [
  {
    id: 1,
    icon: <FaArrowTrendUp />,
    title: 'High-value assets',
  },
  {
    id: 2,
    icon: <GoPeople />,
    title: 'Serious buyers and sellers',
  },
  {
    id: 3,
    icon: <FiShield />,
    title: 'Exclusive access',
  },
  {
    id: 4,
    icon: <TbHammer />,
    title: 'Curated auction experiences',
  },
];

const data = [
  {
    id: 1,
    icon: <BsBoxSeam />,
    title: 'All-in-One Platform',
    text: 'Marketplace, Buy Now, and Offline Auctions under one roof.',
  },
  {
    id: 2,
    icon: <GoPerson />,
    title: 'Strict Verification',
    text: 'Seller verification through mobile, location, and identity checks.',
  },
  {
    id: 3,
    icon: <TbHammer />,
    title: 'Offline Luxury Auctions',
    text: 'Exclusive in-person auctions for serious buyers and collectors.',
  },
  {
    id: 4,
    icon: <FiHeadphones />,
    title: 'Fully Managed Sales',
    text: 'We handle advertising, buyer coordination, and support.',
  },
  {
    id: 5,
    icon: <MdOutlineCalendarToday />,
    title: 'No Buyer Fees',
    text: 'Buyers pay no platform fees until January 11, 2027.',
  },
  {
    id: 6,
    icon: <LuCrown />,
    title: 'Elite Community',
    text: 'Exclusive membership for high-net-worth individuals.',
  },
];

const futureData = [
  {
    id: 1,
    icon: <TbHammer />,
    title: 'Exclusive Auctions',
    text: 'A marketplace for collectibles, fine art, supercars, and premium real estate.',
  },
  {
    id: 2,
    icon: <LuCrown />,
    title: 'Elite Membership',
    text: 'Every elite buyer gets exclusive access to high-value auctions.',
  },
  {
    id: 3,
    icon: <BsGlobe />,
    title: 'Global Hub',
    text: 'Connecting elite buyers, investors, and collectors worldwide.',
  },
];

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className='about-us-background'>
        <img src={starIcon} alt='star' className='about-star-icon' />
        <h1 className='about-us-heading'>About Billionaire Auction</h1>
        <p className='about-us-text'>
          India's premier luxury marketplace connecting discerning buyers with
          exclusive premium items
        </p>
      </div>
      <div className='about-us-founder-info-container'>
        <GoPerson className='person-icon' />
        <h1 className='founder-heading'>Founder Story</h1>
        <p className='founder-text'>The vision behind Billionaire Auction</p>
        <div className='about-us-founder-info-grid-container'>
          <div className='about-us-founder-info-grid-item-one-container'>
            <div className='founder-background-container'>
              <div className='founder-info-container'>
                <h2 className='founder-name'>Sai Venkat Malempati</h2>
                <p className='founder-desc'>Founder – Billionaire Auction</p>
              </div>
            </div>
            <div className='founder-education-container'>
              <RiGraduationCapLine className='graduate-icon' />
              <div className='founder-education-details'>
                <h3 className='education-heading'>Education</h3>
                <p className='education-text'>
                  Bachelor's degree in Computer Science & Engineering and a
                  Master's degree with advanced research in Data Science and
                  Analytics.
                </p>
              </div>
            </div>
            <div className='founder-education-container'>
              <LuBriefcase className='graduate-icon' />
              <div className='founder-education-details'>
                <h3 className='education-heading'>International Experience</h3>
                <p className='education-text'>
                  Lived in the United Kingdom for nearly five years, where he
                  studied, worked with multiple companies, and gained practical
                  experience in technology, analytics, operations, and digital
                  platforms.
                </p>
              </div>
            </div>
          </div>
          <div className='about-us-founder-info-grid-item-two-container'>
            <div className='journey-container'>
              <h3 className='journey-heading'>The Journey</h3>
              <p className='journey-text'>
                After working across different roles and industries, he decided
                to build something of his own — a platform that combines
                technology, trust, and exclusivity.
              </p>
            </div>
            <div className='vision-container'>
              <h3 className='vision-heading'>The Vision</h3>
              <div className='vision-quote'>
                "The motivation behind Billionaire Auction comes from a strong
                belief that luxury and classic assets deserve a dedicated,
                premium ecosystem, rather than being scattered across general
                listing platforms."
              </div>
              <div className='vision-author'>— Sai Venkat Malempati</div>
            </div>
            <div className='building-container'>
              <h3 className='building-heading'>Building Billionaire Auction</h3>
              <p className='building-text'>
                Founded in 2020, Billionaire Auction was born from a vision to
                create India's most trusted platform for luxury transactions. We
                recognized the need for a secure, transparent marketplace where
                high-net-worth individuals could buy and sell premium items with
                confidence.
              </p>
              <p className='building-desc'>
                Today, we've grown to become the leading luxury marketplace in
                India, facilitating transactions worth over ₹5000 Crores
                annually and serving more than 50,000 satisfied clients across
                the country.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-billionaire-auction-container'>
        <div className='billionaire-auction-header'>
          <img src={starIcon} alt='star icon' className='about-star-icon' />
          <h2 className='billionaire-heading'>
            Why the Name "Billionaire Auction"?
          </h2>
        </div>
        <div className='billionaire-auction-container'>
          <p className='billionaire-auction-text'>
            The name <span>Billionaire Auction</span> was chosen intentionally.
            The vision goes beyond online listings. The brand represents:
          </p>
          <div className='billionaire-auction-grid-container'>
            {aboutData.map((item) => {
              const { id, icon, title } = item;
              return (
                <div
                  className='billionaire-auction-grid-item-container'
                  key={id}
                >
                  <div className='billionaire-auction-grid-item-icon-container'>
                    {icon}
                  </div>
                  <h3 className='billionaire-auction-grid-item-title'>
                    {title}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className='billionaire-auction-footer'>
            The name suits the long-term goal of building, and reflects the
            aspiration, mindset, and community the platform is designed for.
          </div>
        </div>
      </div>
      <div className='why-choose-section'>
        <div className='why-choose-header'>
          <FiAward className='award-icon' />
          <h1 className='why-choose-heading'>Why Choose Billionaire Auction</h1>
          <p className='why-choose-text'>The advantages that set us apart</p>
        </div>
        <div className='why-choose-grid-container'>
          {data.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='why-choose-grid-item-container' key={id}>
                <div className='why-choose-item-icon-container'>{icon}</div>
                <h3 className='why-choose-item-title'>{title}</h3>
                <p className='why-choose-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='future-roadmap-container'>
        <h1 className='future-roadmap-heading'>Vision & Future Roadmap</h1>
        <p className='future-roadmap-text'>
          Building the future of luxury auctions and marketplace
        </p>
        <div className='future-roadmap-grid-container'>
          {futureData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='future-roadmap-grid-item-container' key={id}>
                <div className='future-roadmap-item-icon-container'>{icon}</div>
                <h3 className='future-roadmap-item-title'>{title}</h3>
                <p className='future-roadmap-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
        <div className='future-roadmap-grid-container'>
          <div className='offline-luxury-auctions-container'>
            <div className='offline-luxury-auctions-header'>
              <LuHotel className='hotel-icon' />
              <h2 className='offline-luxury-auctions-heading'>
                Offline Luxury Auctions
              </h2>
            </div>
            <p className='offline-luxury-auctions-text'>
              Our primary focus is to conduct offline luxury auctions in:
            </p>
            <div className='offline-location-container'>
              <div className='location-icon-container'>
                <GrLocation />
              </div>
              <h3 className='location-name'>Hyderabad</h3>
            </div>
            <div className='offline-location-container'>
              <div className='location-icon-container'>
                <GrLocation />
              </div>
              <h3 className='location-name'>Mumbai</h3>
            </div>
            <p className='offline-luxury-auctions-desc'>
              These auctions will be professionally curated and targeted at
              serious buyers and collectors, featuring the finest luxury assets.
            </p>
          </div>
          <div className='community-membership-container'>
            <div className='community-membership-header'>
              <LuCrown className='community-icon' />
              <h2 className='community-heading'>
                Elite Community & Membership
              </h2>
            </div>
            <h3 className='community-text'>lifetime membership for HNI</h3>
            <p className='community-desc'>
              (High Net-Worth Individuals), offering exclusive benefits
              including:
            </p>
            <div className='community-list-container'>
              <div className='community-list-item-container'>
                <LuCircleCheckBig className='check-icon' /> Exclusive access to
                premium auctions
              </div>
              <div className='community-list-item-container'>
                <LuCircleCheckBig className='check-icon' /> Members-only luxury
                listings
              </div>
              <div className='community-list-item-container'>
                <LuCircleCheckBig className='check-icon' /> Special auction
                privileges
              </div>
              <div className='community-list-item-container'>
                <LuCircleCheckBig className='check-icon' /> Priority access to
                rare assets
              </div>
              <div className='community-list-item-container'>
                <LuCircleCheckBig className='check-icon' /> Curated experiences
                and future perks
              </div>
            </div>
            <p className='community-footer-text'>
              Certain high-value auctions will be accessible only to members,
              creating a trusted and exclusive buying environment.
            </p>
          </div>
          <div className='offline-luxury-auctions-container'>
            <div className='offline-luxury-auctions-header'>
              <BsGlobe className='hotel-icon' />
              <h2 className='offline-luxury-auctions-heading'>
                Global Expansion
              </h2>
            </div>
            <p className='offline-luxury-auctions-text'>
              Billionaire Auction aims to expand beyond India into key global
              markets, including:
            </p>
            <div className='offline-location-container'>
              <FaArrowRight className='right-icon' />
              <h3 className='location-name'>Hyderabad</h3>
            </div>
            <div className='offline-location-container'>
              <FaArrowRight className='right-icon' />
              <h3 className='location-name'>Mumbai</h3>
            </div>
            <div className='offline-location-container'>
              <FaArrowRight className='right-icon' />
              <h3 className='location-name'>Mumbai</h3>
            </div>
            <div className='offline-location-container'>
              <FaArrowRight className='right-icon' />
              <h3 className='location-name'>Mumbai</h3>
            </div>
            <div className='offline-location-container'>
              <FaArrowRight className='right-icon' />
              <h3 className='location-name'>Mumbai</h3>
            </div>
            <div className='offline-luxury-auctions-desc-container'>
              global luxury auction and marketplace brand, starting from India
              and scaling internationally.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
