
import React, { useState } from 'react';
import './productdetails.css'; 

const ProductDetailsPage = () => {
  const product = {
    title: "Nike Men's Running Shoes",
    price: {
      original: 5000,
      discounted: 3499,
      discountPercentage: 30,
    },
    rating: 4.5,
    reviews: 200,
    images: [
      'https://m.media-amazon.com/images/I/71r3W2+d-vL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/71JERTTBdYL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/71O15lVgy8L._SY741_.jpg',
    ],
    sizeOptions: ['S', 'M', 'L', 'XL'],
    description: "Premium running shoes with enhanced cushioning and flexibility for a comfortable experience.",
    fit: "Regular fit",
    material: "Synthetic",
    careInstructions: "Wipe with a clean, dry cloth to remove dust.",
    colors: ['Black', 'White', 'Red'],
    stock: true,
    deliveryLocation: "Check availability at your location",
    estimatedDelivery: "Delivery by 3-5 business days",
    offers: [
      "Flat 30% off",
      "10% cashback on ABC Bank credit cards",
    ],
    returnPolicy: "30-day return policy",
    seller: "ABC Retailers Pvt. Ltd.",
    recommendations: [
      "Product A",
      "Product B",
      "Product C",
    ]
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleImageSelection = (image) => {
    setSelectedImage(image);
  };

    return (
        <div className="product-details">
          {/* Left Section - Product Images */}
          <div className="left-section">
            {/* Main Product Image */}
            <div className="main-image">
              <img src={selectedImage} alt={product.title} />
            </div>
      
            {/* Thumbnail Images */}
            <div className="image-thumbnails">
              {product.images.map((img, index) => (
                <img 
                  key={index} 
                  src={img} 
                  alt={`Product Thumbnail ${index + 1}`} 
                  onClick={() => handleImageSelection(img)}
                  className={selectedImage === img ? 'selected-thumbnail' : ''}
                />
              ))}
            </div>
          </div>
      
          {/* Right Section - Product Details */}
          <div className="right-section">
            <h1 className="product-title">{product.title}</h1>
      
            <div className="rating-reviews">
              <p>Rating: {product.rating} / 5 ({product.reviews} reviews)</p>
            </div>
      
            <div className="price-details">
              <p className="original-price">₹{product.price.original}</p>
              <p className="discounted-price">₹{product.price.discounted}</p>
              <p className="discount">Flat {product.price.discountPercentage}% Off</p>
            </div>
      
            <div className="size-selection">
              <h3>Select Size:</h3>
              {product.sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelection(size)}
                  className={selectedSize === size ? 'selected' : ''}
                >
                  {size}
                </button>
              ))}
            </div>
      
            <div className="color-selection">
              <h3>Select Color:</h3>
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelection(color)}
                  className={selectedColor === color ? 'selected' : ''}
                >
                  {color}
                </button>
              ))}
            </div>
      
            <div className="product-description">
              <h3>Product Description:</h3>
              <p>{product.description}</p>
              <p><strong>Fit:</strong> {product.fit}</p>
              <p><strong>Material:</strong> {product.material}</p>
              <p><strong>Care Instructions:</strong> {product.careInstructions}</p>
            </div>
      
            <div className="delivery-info">
              {product.stock ? (
                <>
                  <p>{product.deliveryLocation}</p>
                  <p>Estimated Delivery: {product.estimatedDelivery}</p>
                </>
              ) : (
                <p>Out of stock</p>
              )}
            </div>
      
            <div className="offers">
              <h3>Available Offers:</h3>
              <ul>
                {product.offers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
            </div>
      
            <div className="return-policy">
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            </div>
      
            <div className="seller-info">
              <p><strong>Seller:</strong> {product.seller}</p>
            </div>
      
            <div className="purchase-options">
              <button className="add-to-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      );
      
  
};

export default ProductDetailsPage;
