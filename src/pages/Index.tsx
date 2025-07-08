
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Package, ChefHat, Shirt } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    {
      name: "Gowns",
      icon: <Shirt className="h-8 w-8" />,
      description: "Elegant gowns for special occasions",
      path: "/category/gowns"
    },
    {
      name: "Sneakers & Shoes",
      icon: <Package className="h-8 w-8" />,
      description: "Stylish footwear for every occasion",
      path: "/category/sneakers"
    },
    {
      name: "Kitchen",
      icon: <ChefHat className="h-8 w-8" />,
      description: "Essential kitchen tools and accessories",
      path: "/category/kitchen"
    },
    {
      name: "Shop",
      icon: <ShoppingBag className="h-8 w-8" />,
      description: "General merchandise and accessories",
      path: "/category/shop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-900">DAUBONE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/products" className="text-gray-600 hover:text-purple-900">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-purple-900">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-900">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/auth">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/admin">Admin</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-purple-600">DAUBONE</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover our curated collection of gowns, sneakers, kitchen essentials, and more. 
            Quality products for your lifestyle needs.
          </p>
          <Button size="lg" asChild>
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Shop by Category
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-purple-600">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" asChild>
                    <Link to={category.path}>Browse</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">DAUBONE</h4>
            <p className="text-gray-400 mb-4">Quality products for your lifestyle</p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
