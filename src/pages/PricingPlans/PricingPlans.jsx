import './PricingPlans.css';

import { LuStar } from 'react-icons/lu';
import { LuCrown } from 'react-icons/lu';
import { TiFlashOutline } from 'react-icons/ti';
import { BsCurrencyRupee } from 'react-icons/bs';
import { LuShield } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { MdCurrencyRupee } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa6';
import { GoPeople } from 'react-icons/go';
import { FiCamera } from 'react-icons/fi';

const advertisementData = [
  {
    id: 1,
    icon: <HiOutlineSpeakerphone />,
    title: 'In Listings Banner',
    cost: '5,999',
  },
  {
    id: 2,
    icon: <HiOutlineSpeakerphone />,
    title: 'Pop-Up Banner',
    cost: '8,999',
  },
  {
    id: 3,
    icon: <HiOutlineSpeakerphone />,
    title: 'HomePage Banner',
    cost: '9,999',
  },
];

const PricingPlans = () => {
  return (
    <div className='pricing-page-container'>
      <div className='pricing-page-background'>
        <h1 className='pricing-page-heading'>Flexible Pricing Plans</h1>
        <p className='pricing-page-text'>
          Choose the perfect plan for your luxury marketplace needs
        </p>
        <p className='pricing-page-text'>
          * Plans applicable for Marketplace, Buy Now, and Auctions. For To-Let:
          Unlimited listings as of now
        </p>
      </div>
      <div className='pricing-page-plans-container'>
        <div className='pricing-page-grid-container'>
          <div className='pricing-page-grid-item-container'>
            <div className='pricing-page-header'>
              <LuStar className='pricing-star-icon' />
              <h3 className='pricing-heading'>Basic</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 0
              </h3>
              <p className='pricing-text'>Free</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>1 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>Standard</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>10 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Email</span>
              </div>
            </div>
            <button className='pricing-btn'>Get Started</button>
          </div>
          <div className='pricing-page-grid-item-container'>
            <div className='pricing-page-header'>
              <LuCrown className='pricing-star-icon' />
              <h3 className='pricing-heading'>Premium</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 4,999
              </h3>
              <p className='pricing-text'>+ GST</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <RxCross2 className='cross-icon' />
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>Medium</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>20 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Email</span>
              </div>
            </div>
            <button className='pricing-btn'>Get Started</button>
          </div>
          <div className='pricing-page-grid-item-two-container'>
            <div className='pricing-page-header'>
              <TiFlashOutline className='pricing-crown-icon' />
              <h3 className='pricing-heading'>PRO</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 6,999
              </h3>
              <p className='pricing-text'>+ GST</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>9 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <span className='pricing-time'>2 Listings</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <span className='pricing-time'>1 Listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>High</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>30 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Priority Line</span>
              </div>
            </div>
            <button className='pricing-popular-btn'>Get Started</button>
            <div className='most-poplular-container'>MOST POPULAR</div>
          </div>
          <div className='pricing-page-grid-item-container'>
            <div className='pricing-page-header'>
              <LuShield className='pricing-star-icon' />
              <h3 className='pricing-heading'>Enterprise</h3>
              <h3 className='plan-price'>
                <BsCurrencyRupee /> 19,999
              </h3>
              <p className='pricing-text'>+ GST</p>
            </div>
            <div className='pricing-page-list-container'>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Sep 1, 2026</p>
                <span className='pricing-time'>Unlimited</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Till Mar 1, 2027</p>
                <span className='pricing-time'>3 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>After Mar 1, 2027</p>
                <span className='pricing-time'>20 / Month</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Featured Listings</p>
                <span className='pricing-time'>5 Listings</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Recommended</p>
                <span className='pricing-time'>3 Listings</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Search Visibility</p>
                <span className='pricing-time'>Maximum</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Leads</p>
                <span className='pricing-time'>40 / listing</span>
              </div>
              <div className='pricing-page-list-item-container'>
                <p className='pricing-date'>Support</p>
                <span className='pricing-time'>Priority Line</span>
              </div>
            </div>
            <button className='pricing-btn'>Get Started</button>
          </div>
        </div>
      </div>
      <div className='website-advertising-container'>
        <div className='website-advertising-header'>
          <HiOutlineSpeakerphone className='speaker-icon' />
          <h2 className='website-advertising-heading'>
            Website Advertising & Banners
          </h2>
          <p className='website-advertising-text'>
            Maximize your brand visibility with premium advertising placements
          </p>
          <p className='website-advertising-desc'>
            * 4 Ads for each category banner, uploadable through super admin
            panel
          </p>
        </div>
        <div className='website-advertising-grid-container'>
          {advertisementData.map((item) => {
            const { id, icon, title, cost } = item;
            return (
              <div className='website-grid-item-container' key={id}>
                <div className='website-grid-item-icon-container'>{icon}</div>
                <h3 className='website-grid-item-title'>{title}</h3>
                <h2 className='website-grid-item-cost'>
                  <MdCurrencyRupee />
                  {cost}
                </h2>
                <p className='month'>/ month + GST</p>
                <button className='book-now-btn'>Book Now</button>
              </div>
            );
          })}
        </div>
      </div>
      <div className='packages-container'>
        <div className='packages-header'>
          <FiAward className='packages-award-icon' />
          <h2 className='packages-heading'>Featured Listing Packages</h2>
          <p className='packages-text'>
            Get 10x visibility and more leads with priority placement across
            relevant sections
          </p>
        </div>
        <div className='packages-grid-container'>
          <div className='packages-grid-item-container'>
            <div className='number-container'>1</div>
            <h3 className='package-item-heading'>1 week</h3>
            <h2 className='package-price'>
              <MdCurrencyRupee />
              2,500
            </h2>
            <p className='gst'>+ GST</p>
            <div className='package-list-container'>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> Priority Placement
              </div>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> 10x More Visibility
              </div>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> More Leads
              </div>
            </div>
            <button className='select-package-btn'>Select Package</button>
          </div>
          <div className='packages-grid-item-container'>
            <div className='number-container'>2</div>
            <h3 className='package-item-heading'>2 weeks</h3>
            <h2 className='package-price'>
              <MdCurrencyRupee />
              4,500
            </h2>
            <p className='gst'>+ GST</p>
            <div className='package-list-container'>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> Priority Placement
              </div>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> 10x More Visibility
              </div>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> More Leads
              </div>
            </div>
            <button className='select-package-btn'>Select Package</button>
          </div>
          <div className='packages-grid-item-container'>
            <div className='number-container'>3</div>
            <h3 className='package-item-heading'>1 month</h3>
            <h2 className='package-price'>
              <MdCurrencyRupee />
              8,000
            </h2>
            <p className='gst'>+ GST</p>
            <div className='package-list-container'>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> Priority Placement
              </div>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> 10x More Visibility
              </div>
              <div className='package-item-container'>
                <FaCheck className='package-check-icon' /> More Leads
              </div>
            </div>
            <button className='select-package-btn'>Select Package</button>
          </div>
        </div>
      </div>
      <div className='leads-container'>
        <div className='packages-header'>
          <GoPeople className='packages-award-icon' />
          <h2 className='packages-heading'>Lead Contacts Unlock</h2>
          <p className='packages-text'>
            Need more leads? Purchase additional contact unlocks
          </p>
        </div>
        <div className='leads-grid-container'>
          <div className='leads-grid-item-one-container'>
            <div className='free-container'>FREE</div>
            <p className='plan'>Basic</p>
            <h3 className='leads-heading'>10 Leads</h3>
            <h2 className='leads-cost'>Free</h2>
            <button className='included-btn'>Included</button>
          </div>
          <div className='leads-grid-item-container'>
            <p className='plan'>Extra</p>
            <h3 className='leads-heading'>10 Leads</h3>
            <h2 className='leads-item-cost'>
              <MdCurrencyRupee />
              299
            </h2>
            <p className='leads-gst'>+ GST</p>
            <button className='leads-purchase-btn'>Purchase</button>
          </div>
          <div className='leads-grid-item-container'>
            <p className='plan'>Plus</p>
            <h3 className='leads-heading'>29 Leads</h3>
            <h2 className='leads-item-cost'>
              <MdCurrencyRupee />
              499
            </h2>
            <p className='leads-gst'>+ GST</p>
            <button className='leads-purchase-btn'>Purchase</button>
          </div>
          <div className='leads-grid-item-container'>
            <p className='plan'>Premium</p>
            <h3 className='leads-heading'>50+ Leads</h3>
            <h2 className='leads-item-cost'>
              <MdCurrencyRupee />
              999
            </h2>
            <p className='leads-gst'>+ GST</p>
            <button className='leads-purchase-btn'>Purchase</button>
          </div>
        </div>
      </div>
      <div className='digital-media-container'>
        <div className='digital-media-icon-content-container'>
          <div className='digital-media-icon-container'>
            <FiCamera />
          </div>
          <div className='digital-media-content-container'>
            <h1 className='digital-media-heading'>Digital Media Package</h1>
            <h2 className='digital-media-price'>₹5,999 + GST</h2>
            <div className='digital-media-justify-container'>
              <div className='package-list-container'>
                <div className='package-item-container'>
                  <FaCheck className='package-check-icon' /> On-site visit for
                  content creation
                </div>
                <div className='package-item-container'>
                  <FaCheck className='package-check-icon' /> Social media
                  promotion
                </div>
                <div className='package-item-container'>
                  <FaCheck className='package-check-icon' /> Listing promotion
                  on our website
                </div>
              </div>
              <div className='package-list-container'>
                <div className='package-item-container'>
                  <FaCheck className='package-check-icon' /> Professional photo
                  and video shoot
                </div>
                <div className='package-item-container'>
                  <FaCheck className='package-check-icon' /> Paid advertising on
                  Meta platforms
                </div>
                <div className='package-item-container'>
                  <FaCheck className='package-check-icon' /> Valid for Telangana
                  & Andhra Pradesh; extra charges for other locations
                </div>
              </div>
            </div>
            <button className='digital-media-btn'>
              Book Digital Media Package
            </button>
          </div>
        </div>
      </div>
      <div className='pricing-page-footer-container'>
        <h2 className='pricing-page-footer-heading'>Ready to Get Started?</h2>
        <p className='pricing-page-footer-text'>
          Choose your plan and start listing on India's premier luxury
          marketplace
        </p>
        <div className='pricing-page-footer-btn-container'>
          <button className='pricing-footer-contact-btn'>Contact Sales</button>
          <button className='pricing-footer-features-btn'>
            View All Features
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
