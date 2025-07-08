
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ShoppingBag, 
  Package, 
  ChefHat, 
  Shirt, 
  Star, 
  ShoppingCart, 
  ArrowRight,
  Quote,
  Gift,
  Truck,
  Shield,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      name: "Gowns",
      icon: <Shirt className="h-8 w-8" />,
      description: "Elegant gowns for every occasion",
      path: "/products?category=gowns",
      image: "/placeholder.svg"
    },
    {
      name: "Shoes",
      icon: <Package className="h-8 w-8" />,
      description: "Stylish footwear collection",
      path: "/products?category=shoes",
      image: "/placeholder.svg"
    },
    {
      name: "Sneakers",
      icon: <Package className="h-8 w-8" />,
      description: "Comfortable and trendy sneakers",
      path: "/products?category=sneakers",
      image: "/placeholder.svg"
    },
    {
      name: "Kitchen",
      icon: <ChefHat className="h-8 w-8" />,
      description: "Essential kitchen tools",
      path: "/products?category=kitchen",
      image: "/placeholder.svg"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Elegant Block Heel",
      price: 7500,
      originalPrice: 9000,
      image: "/placeholder.svg",
      rating: 4.5,
      category: "Shoes"
    },
    {
      id: 2,
      name: "Ankara Maxi Gown",
      price: 12000,
      originalPrice: 15000,
      image: "/placeholder.svg",
      rating: 4.8,
      category: "Gowns"
    },
    {
      id: 3,
      name: "Canvas Sneakers",
      price: 8500,
      image: "/placeholder.svg",
      rating: 4.3,
      category: "Sneakers"
    },
    {
      id: 4,
      name: "Non-Stick Fry Pan",
      price: 3500,
      originalPrice: 4500,
      image: "/placeholder.svg",
      rating: 4.6,
      category: "Kitchen"
    }
  ];

  const testimonials = [
    {
      name: "Adunni Okonkwo",
      location: "Lagos, Nigeria",
      rating: 5,
      text: "The quality of the gowns exceeded my expectations! Fast delivery and excellent customer service.",
      image: "/placeholder.svg"
    },
    {
      name: "Ibrahim Sani",
      location: "Abuja, Nigeria", 
      rating: 5,
      text: "Best kitchen utensils I've bought online. The frying pan is amazing and the prices are unbeatable!",
      image: "/placeholder.svg"
    },
    {
      name: "Blessing Eze",
      location: "Port Harcourt, Nigeria",
      rating: 4,
      text: "Love my new sneakers! Very comfortable and stylish. Will definitely order again.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">DAUBONE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-blue-900 font-medium">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-blue-900">Shop</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-900">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart (0)
              </Button>
              <Button className="bg-blue-900 hover:bg-blue-800">Login</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-black mb-4">New Collection</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                From Fashion To Home
                <span className="block text-yellow-400">Style That Works</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover quality essentials at prices that make sense. 
                Gowns, shoes, sneakers, kitchen items and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  View Categories
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="DAUBONE Products" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-yellow-500 text-black p-4 rounded-lg">
                <p className="font-semibold">Free Delivery</p>
                <p className="text-sm">On orders above ₦15,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-yellow-500 text-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            <Gift className="h-6 w-6" />
            <p className="text-lg font-semibold">
              🎉 Special Offer: Buy 2 Get ₦1000 Free! Limited Time Only
            </p>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked items that combine quality, style, and affordability
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.originalPrice && (
                    <Badge className="absolute top-2 left-2 bg-red-500">
                      Save ₦{(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">{product.category}</Badge>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-blue-900">
                        ₦{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₦{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Shop by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-blue-900">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" asChild className="border-blue-900 text-blue-900">
                    <Link to={category.path}>Browse</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-2">Nationwide Delivery</h4>
              <p className="text-blue-100">Fast and reliable delivery across Nigeria</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
              <p className="text-blue-100">3-day return policy on all items</p>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
              <p className="text-blue-100">WhatsApp and phone support available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from real customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <Quote className="h-8 w-8 text-yellow-500 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Stay Updated</h2>
          <p className="text-black mb-8">
            Subscribe to get exclusive offers, new arrivals, and style tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-black mt-4">
            Join 5,000+ happy subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-yellow-400">DAUBONE</h4>
              <p className="text-gray-400 mb-4">From Fashion To Home – Style That Works</p>
              <p className="text-sm text-gray-400">
                Quality and affordability accessible to everyone since 2016.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <div className="space-y-2">
                <Link to="/products" className="text-gray-400 hover:text-white block">Shop</Link>
                <Link to="/about" className="text-gray-400 hover:text-white block">About Us</Link>
                <Link to="/contact" className="text-gray-400 hover:text-white block">Contact</Link>
                <Link to="/faq" className="text-gray-400 hover:text-white block">FAQ</Link>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <div className="space-y-2">
                <Link to="/products?category=gowns" className="text-gray-400 hover:text-white block">Gowns</Link>
                <Link to="/products?category=shoes" className="text-gray-400 hover:text-white block">Shoes</Link>
                <Link to="/products?category=sneakers" className="text-gray-400 hover:text-white block">Sneakers</Link>
                <Link to="/products?category=kitchen" className="text-gray-400 hover:text-white block">Kitchen</Link>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <p>Phone/WhatsApp: +234 8156713366</p>
                <p>Email: daubonenterprise@gmail.com</p>
                <p>Instagram: @daubon_e</p>
                <p>Facebook: daubone1</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DAUBONE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-lg"
          onClick={() => window.open('https://wa.me/2348156713366', '_blank')}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
