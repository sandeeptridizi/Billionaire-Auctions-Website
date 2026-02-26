import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { LuCrown } from 'react-icons/lu';
import { BsPatchCheck } from 'react-icons/bs';
import { getPublicProductById } from '../../lib/products';
import './ProductDetails.css';
import { getFile } from '../../lib/s3';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const response = await getPublicProductById(id);
        setProduct(response || null);
      } catch (error) {
        console.error('Failed to load product details', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className='product-details-page'>Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className='product-details-page'>
        <p>Product not found.</p>
        <Link to='/marketplace' className='product-details-back'>
          Back to marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className='product-details-page'>
      <div className='product-details-card'>
        <img
          src={getFile(product.media?.[0]) || ''}
          alt={product.title}
          className='product-details-image'
        />
        <div className='product-details-content'>
          <div className='product-details-tags'>
            <span className='product-details-tag'>
              <BsPatchCheck /> Verified
            </span>
            <span className='product-details-tag'>
              <LuCrown /> {product.tier || 'GENERAL'}
            </span>
          </div>
          <h1 className='product-details-title'>{product.title}</h1>
          <p className='product-details-price'>
            {product.value ? `Rs ${product.value}` : 'Price on request'}
          </p>
          <p className='product-details-location'>
            <HiOutlineLocationMarker /> {product.meta?.location || 'Location not specified'}
          </p>
          <p className='product-details-description'>
            {product.description || 'No description available'}
          </p>
          <Link to='/marketplace' className='product-details-back'>
            Back to marketplace
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
