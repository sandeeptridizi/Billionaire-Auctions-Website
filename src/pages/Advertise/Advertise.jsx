import './Advertise.css';

import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdCurrencyRupee } from 'react-icons/md';
import { LuCircleCheckBig } from 'react-icons/lu';
import { RiErrorWarningLine } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa6';
import { FiCamera } from 'react-icons/fi';
import { BiGitBranch } from 'react-icons/bi';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { BsWindowSidebar } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import { LuCrown } from 'react-icons/lu';
import { BsPatchCheck } from 'react-icons/bs';
import { LuGlobe } from 'react-icons/lu';

const advertiseData = [
  {
    id: 1,
    icon: <LuCrown />,
    title: 'High-Net-Worth Audience',
    text: 'Connect with affluent collectors and luxury buyers',
  },
  {
    id: 2,
    icon: <BsPatchCheck />,
    title: 'Verified Community',
    text: 'Trusted network of serious buyers and sellers',
  },
  {
    id: 3,
    icon: <LuGlobe />,
    title: 'Global Presence',
    text: 'Audience spanning India, UK, USA and beyond',
  },
  {
    id: 4,
    icon: <FaRegStar />,
    title: 'Elite Positioning',
    text: 'Align with luxury and exclusivity',
  },
];

const Advertise = () => {
  return (
    <div className='advertise-container'>
      <div className='advertise-background'>
        <h1 className='advertise-heading'>
          <HiOutlineSpeakerphone className='speaker-icon' /> Advertise With Us
        </h1>
        <p className='advertise-text'>Digital Media Package</p>
        <p className='advertise-desc'>
          Our comprehensive digital media package to maximize your listing's
          visibility and reach
        </p>
      </div>
      <div className='package-container'>
        <div className='package-header'>
          <h2 className='package-heading'>Digital Media Package</h2>
          <h2 className='package-cost'>
            <MdCurrencyRupee />
            5,999<span>+GST</span>
          </h2>
          <button className='package-btn'>Get Started</button>
        </div>
        <div className='package-grid-container'>
          <div className='package-grid-item-container'>
            <LuCircleCheckBig className='package-item-icon' /> On-site visit for
            content creation
          </div>
          <div className='package-grid-item-container'>
            <LuCircleCheckBig className='package-item-icon' /> Professional
            photo and video shoot
          </div>
          <div className='package-grid-item-container'>
            <LuCircleCheckBig className='package-item-icon' /> Social media
            promotion
          </div>
          <div className='package-grid-item-container'>
            <LuCircleCheckBig className='package-item-icon' /> Paid advertising
            on Meta platforms
          </div>
          <div className='package-grid-item-container'>
            <LuCircleCheckBig className='package-item-icon' /> Listing promotion
            on our website
          </div>
        </div>
        <div className='package-footer-container'>
          <div className='package-footer-item-container'>
            <RiErrorWarningLine className='package-footer-icon' /> Applicable
            for Telangana and Andhra Pradesh cities
          </div>
          <div className='package-footer-item-container'>
            <RiErrorWarningLine className='package-footer-icon' /> Additional
            travel charges may apply for other locations
          </div>
        </div>
        <div className='package-tag-container'>
          <FaRegStar className='package-star-icon' /> Most Popular
        </div>
      </div>
      <div className='media-promotion-container'>
        <div className='media-promotion-header'>
          <h2 className='media-promotion-heading'>Digital Media Promotion</h2>
          <p className='media-promotion-text'>
            Our digital media service helps showcase your asset through
            professional content and targeted online promotion
          </p>
        </div>
        <div className='media-promotion-content-container'>
          <h3 className='includes-heading'>What's Included</h3>
          <div className='media-promotions-content-grid'>
            <div className='media-promotions-grid-item-container'>
              <div className='media-promotions-icon-container'>
                <FiCamera />
              </div>
              <p>On-site visit for content creation</p>
            </div>
            <div className='media-promotions-grid-item-container'>
              <div className='media-promotions-icon-container'>
                <FiCamera />
              </div>
              <p>Professional photo and short video shoot</p>
            </div>
            <div className='media-promotions-grid-item-container'>
              <div className='media-promotions-icon-container'>
                <BiGitBranch />
              </div>
              <p>Promotion across our social media platforms</p>
            </div>
            <div className='media-promotions-grid-item-container'>
              <div className='media-promotions-icon-container'>
                <FaArrowTrendUp />
              </div>
              <p>Paid promotion through Meta Ads (Facebook & Instagram)</p>
            </div>
            <div className='media-promotions-grid-item-container'>
              <div className='media-promotions-icon-container'>
                <BsWindowSidebar />
              </div>
              <p>Listing promotion on our website</p>
            </div>
            <div className='media-promotions-grid-item-container'>
              <div className='media-promotions-icon-container'>
                <BsCameraVideo />
              </div>
              <p>Content posted on YouTube and other digital platforms</p>
            </div>
          </div>
        </div>
      </div>
      <div className='banners-container'>
        <div className='banners-header'>
          <h2 className='banners-heading'>Website Advertising & Banners</h2>
          <p className='banners-text'>
            We also offer advertising opportunities directly on the Billionaire
            Auction website, including:
          </p>
        </div>
        <div className='banners-content-container'>
          <div className='banners-grid-container'>
            <div className='banners-grid-item-container'>
              <div className='banners-circle'></div> Homepage banners
            </div>
            <div className='banners-grid-item-container'>
              <div className='banners-circle'></div> Category page banners
            </div>
            <div className='banners-grid-item-container'>
              <div className='banners-circle'></div> Featured sections and
              promotional placements
            </div>
            <div className='banners-grid-item-container'>
              <div className='banners-circle'></div> Other on-platform
              advertising formats
            </div>
          </div>
          <div className='banners-footer-container'>
            <p className='banners-footer-text'>
              For website banner ads and other advertising placements, please
              contact us for pricing.
            </p>
            <button className='banners-btn'>Contact for Pricing</button>
          </div>
        </div>
      </div>
      <div className='why-advertise-container'>
        <div className='why-advertise-header'>
          <h2 className='why-advertise-heading'>Why Advertise With Us?</h2>
          <p className='why-advertise-text'>
            Join India's premier luxury marketplace
          </p>
        </div>
        <div className='why-advertise-grid-container'>
          {advertiseData.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div className='why-advertise-grid-item-container' key={id}>
                <div className='why-advertise-item-icon-container'>{icon}</div>
                <h3 className='why-advertise-item-title'>{title}</h3>
                <p className='why-advertise-item-text'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='important-notes-container'>
        <div className='important-notes-content-container'>
          <h2 className='important-notes-heading'>
            <RiErrorWarningLine className='important-notes-icon' /> Important
            Notes
          </h2>
          <div className='important-notes-list-container'>
            <div className='important-notes-list-item-container'>
              <div className='important-notes-circle'></div>
              Advertising services do not guarantee a sale
            </div>
            <div className='important-notes-list-item-container'>
              <div className='important-notes-circle'></div>
              Visibility depends on market demand, category, and audience reach
            </div>
            <div className='important-notes-list-item-container'>
              <div className='important-notes-circle'></div>
              Content usage rights remain with Billionaire Auction
            </div>
          </div>
        </div>
      </div>
      <div className='advertise-footer-container'>
        <h2 className='advertise-footer-heading'>
          Ready to Boost Your Listing?
        </h2>
        <p className='advertise-footer-text'>
          Get started with our Digital Media Package and maximize your asset's
          visibility
        </p>
        <div className='advertise-footer-btn-container'>
          <button className='purchase-btn'>Purchase Package</button>
          <button className='contact-team-btn'>Contact Our Team</button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
