import './AuctionCardComponent.css';

import { HiOutlineArrowSmRight } from 'react-icons/hi';

import RealEstateComponentCard from '../RealEstateComponentCard/RealEstateComponentCard';
import AuctionCard from '../AuctionCard/AuctionCard';

const AuctionCardComponent = ({ data, name, totalCount, showViewAll, onViewAll }) => {
  return (
    <div className='real-estate-component-container'>
      <div className='featured-listings-header'>
        <div className='auction-card-heading-container'>
          <div className='auction-card-category-container'>
            <div className='auction-card-category'>{name}</div>
          </div>
          <h3 className='featured-listings-heading'>{name} Auctions</h3>
        </div>
        {showViewAll ? (
          <div className='real-estate-component-view-btn' onClick={onViewAll} style={{ cursor: 'pointer' }}>
            View All ({totalCount}) <HiOutlineArrowSmRight />
          </div>
        ) : totalCount != null ? (
          <div className='real-estate-component-view-btn'>
            {totalCount} {totalCount === 1 ? 'Item' : 'Items'} <HiOutlineArrowSmRight />
          </div>
        ) : null}
      </div>
      <div className='real-estate-component-grid-container'>
        {data.map((item) => (
          <AuctionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AuctionCardComponent;
