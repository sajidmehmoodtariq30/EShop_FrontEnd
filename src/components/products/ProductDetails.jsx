import React, { useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './productGrid'

const selectedProduct = {
  name: "Stylish Pant",
  price: 900,
  orignalPrice: 1200,
  description: "A stylish pant perfect for any ocation",
  brand: "FashionBrand",
  material: "Jeans",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Blue", "Black", "Grey"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Pant 1"
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Pant 2"
    },
    {
      url: "https://picsum.photos/500/500?random=3",
      altText: "Stylish Pant 3"
    },
  ]
};

const similarProduct = [
  {
      _id: 1,
      name: "Stylish Pant",
      price: 900,
      images: [
          {
              url: "https://picsum.photos/500/500?random=5",
              altText: "Stylish Pant 1"
          }
      ]
  },
  {
      _id: 2,
      name: "Stylish Pant",
      price: 900,
      images: [
          {
              url: "https://picsum.photos/500/500?random=6",
              altText: "Stylish Pant 2"
          }
      ]
  },
  {
      _id: 3,
      name: "Stylish Pant",
      price: 900,
      images: [
          {
              url: "https://picsum.photos/500/500?random=7",
              altText: "Stylish Pant 3"
          }
      ]
  },
  {
      _id: 4,
      name: "Stylish Pant",
      price: 900,
      images: [
          {
              url: "https://picsum.photos/500/500?random=8",
              altText: "Stylish Pant 4"
          }
      ]
  },
];

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(selectedProduct.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(selectedProduct.colors[0]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    setIsButtonDisabled(true);
    const cartItem = {
      product: selectedProduct.name,
      price: selectedProduct.price,
      quantity,
      size: selectedSize,
      color: selectedColor,
      image: mainImage.url
    };
    toast.success("Product Added to cart", {
      duration: 1000,
    });
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <div className='p-6'>
      <div className='max-w-6xl bg-white mx-auto rounded-lg p-8'>
        <div className='flex flex-col md:flex-row '>
          <div className='hidden md:flex flex-col space-y-4 gap-4 mr-6'>
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText}
                className='w-20 h-20 object-cover rounded-lg cursor-pointer'
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          <div className='flex-1 flex gap-4'>
            <img src={mainImage.url} alt={mainImage.altText} className='w-[500px] h-[700px] object-cover rounded-lg' />
            <div className='flex flex-col gap-4'>
              <div className='md:hidden flex flex-row mt-3 gap-4 mr-6'>
                {selectedProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.altText}
                    className='w-20 h-20 object-cover rounded-lg cursor-pointer'
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
              <h1 className='text-2xl font-bold mt-4'>{selectedProduct.name}</h1>
              <p className='text-xl text-gray-700 mt-2'>${selectedProduct.price} <span className='line-through text-gray-500'>${selectedProduct.orignalPrice}</span></p>
              <p className='mt-4'>{selectedProduct.description}</p>
              <p className='mt-2'><strong>Brand:</strong> {selectedProduct.brand}</p>
              <p className='mt-2'><strong>Material:</strong> {selectedProduct.material}</p>
              <div className='mt-4'>
                <strong>Sizes:</strong>
                <ul className='flex space-x-2 mt-2'>
                  {selectedProduct.sizes.map((size, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 border rounded-lg cursor-pointer ${selectedSize === size ? 'bg-gray-200' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-4'>
                <strong>Colors:</strong>
                <ul className='flex space-x-2 mt-2'>
                  {selectedProduct.colors.map((color, index) => (
                    <li
                      key={index}
                      className={`w-8 h-8 rounded-full cursor-pointer border ${selectedColor === color ? 'border-black' : ''}`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </ul>
              </div>
              <div className='mt-4 flex items-center'>
                <strong>Quantity:</strong>
                <button onClick={decrementQuantity} className='px-4 py-2 border rounded-lg ml-2'>-</button>
                <span className='px-4'>{quantity}</span>
                <button onClick={incrementQuantity} className='px-4 py-2 border rounded-lg'>+</button>
              </div>
              <button
                onClick={addToCart}
                className={`mt-4 w-full px-4 py-2 rounded-lg ${isButtonDisabled ? "bg-gray-500 text-white cursor-not-allowed" : "bg-gray-800 text-gray-200"}`}
                disabled={isButtonDisabled}
              >
                {isButtonDisabled ? "Adding ..." : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
        <div className='mt-8 mx-3'></div>
          <h2 className='text-2xl font-bold mb-4 text-center'>You may also like</h2>
          <ProductGrid similarProduct= {similarProduct} />
        </div>
    </div>
  );
};

export default ProductDetails;
