import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  // Calculate discounted price
  const discountedPrice = product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Section */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images?.map((image, index) => (
              <div key={index} className="aspect-square rounded-md overflow-hidden bg-gray-100">
                <img src={image} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-500">Brand: {product.brand}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.rating})</span>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <>
                  <span className="text-lg text-gray-500 line-through">${product.price}</span>
                  <span className="text-green-600">-{product.discountPercentage}%</span>
                </>
              )}
            </div>
            <p className={`text-sm ${product.stock < 10 ? "text-red-600" : "text-green-600"}`}>
              {product.stock < 10 ? "Low Stock" : "In Stock"} ({product.stock} available)
            </p>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
            Add to Cart
          </button>

          {/* Product Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Product Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">SKU: {product.sku}</p>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="text-gray-600">Weight: {product.weight}g</p>
              </div>
              <div>
                <p className="text-gray-600">Warranty: {product.warrantyInformation}</p>
                <p className="text-gray-600">Shipping: {product.shippingInformation}</p>
                <p className="text-gray-600">Return Policy: {product.returnPolicy}</p>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews?.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-medium">{review.reviewerName}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{review.comment}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;