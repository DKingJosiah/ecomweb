
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Filter, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Mock products data
  const products = [
    {
      id: 1,
      name: "Elegant Block Heel",
      category: "shoes",
      price: 7500,
      originalPrice: 9000,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 23,
      inStock: true,
      sizes: ["38", "39", "40", "41", "42", "43"]
    },
    {
      id: 2,
      name: "Ankara Maxi Gown",
      category: "gowns",
      price: 12000,
      originalPrice: 15000,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 45,
      inStock: true,
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Canvas Sneakers",
      category: "sneakers",
      price: 8500,
      image: "/placeholder.svg",
      rating: 4.3,
      reviews: 67,
      inStock: true,
      sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
      id: 4,
      name: "Non-Stick Fry Pan",
      category: "kitchen",
      price: 3500,
      originalPrice: 4500,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 34,
      inStock: true
    },
    {
      id: 5,
      name: "Crossbody Bag",
      category: "bags",
      price: 6000,
      image: "/placeholder.svg",
      rating: 4.4,
      reviews: 28,
      inStock: false
    },
    {
      id: 6,
      name: "Midi Dress",
      category: "gowns",
      price: 9500,
      originalPrice: 12000,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 56,
      inStock: true,
      sizes: ["S", "M", "L", "XL"]
    }
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "gowns", label: "Gowns" },
    { value: "shoes", label: "Shoes" },
    { value: "sneakers", label: "Sneakers" },
    { value: "bags", label: "Bags" },
    { value: "kitchen", label: "Kitchen" }
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-5000", label: "₦0 - ₦5,000" },
    { value: "5000-10000", label: "₦5,000 - ₦10,000" },
    { value: "10000-15000", label: "₦10,000 - ₦15,000" },
    { value: "15000+", label: "₦15,000+" }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    let priceMatch = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
      const minPrice = parseInt(min);
      const maxPrice = max ? parseInt(max) : Infinity;
      priceMatch = product.price >= minPrice && product.price <= maxPrice;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">DAUBONE</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-blue-900">Home</Link>
              <Link to="/products" className="text-blue-900 font-medium">Shop</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-900">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
              <Button>Login</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop All Products</h2>
          <p className="text-gray-600">From Fashion To Home – Style That Works</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium mb-2">Category</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category.value} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.value}
                          checked={selectedCategory === category.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="mr-2"
                        />
                        {category.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="font-medium mb-2">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <label key={range.value} className="flex items-center">
                        <input
                          type="radio"
                          name="price"
                          value={range.value}
                          checked={priceRange === range.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="mr-2"
                        />
                        {range.label}
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {product.originalPrice && (
                      <Badge className="absolute top-2 left-2 bg-yellow-500 text-black">
                        Save ₦{(product.originalPrice - product.price).toLocaleString()}
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        Out of Stock
                      </Badge>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-xl font-bold text-blue-900">
                          ₦{product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ₦{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>

                    {product.sizes && (
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">
                          Sizes: {product.sizes.join(', ')}
                        </p>
                      </div>
                    )}

                    <Button 
                      className="w-full bg-blue-900 hover:bg-blue-800"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
