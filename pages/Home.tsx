import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Zap, 
  Leaf, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock
} from "lucide-react";
import Layout from "@/components/Layout";

import HeroImage from '../assets/electric-vehicle1.jpg';
import PremiumElectricScooter
 from '../assets/sustain-the-future.jpg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Latest EV technology with smart features",
      color: "bg-greenvolt-blue"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Zero emissions for a cleaner environment",
      color: "bg-greenvolt-green"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive safety features included",
      color: "bg-greenvolt-blue"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "High-quality materials and craftsmanship",
      color: "bg-greenvolt-green"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Patel",
      location: "Mahesana",
      text: "Outstanding service and quality vehicles. My electric scooter has been running perfectly for over a year!",
      rating: 5
    },
    {
      name: "Priya Shah",
      location: "Gandhinagar",
      text: "GreenVolt EV Hub made my transition to electric so smooth. Highly recommend their professional team.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      location: "Ahmedabad",
      text: "Best investment I've made. Saving money on fuel while contributing to a cleaner environment.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenvolt-cream to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
                🌱 Eco-Friendly Electric Vehicles
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-greenvolt-black mb-6 leading-tight">
                Power Your Journey,{" "}
                <span className="text-greenvolt-green">Sustain the Planet</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the future of transportation at GreenVolt EV Hub - Mahesana's premier destination for stylish, sustainable, and reliable electric vehicles. Join the revolution that's transforming how we move, while preserving our planet for future generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
                  >
                    Visit Our Showroom
                    <MapPin className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/vehicles">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-greenvolt-green text-greenvolt-green hover:bg-greenvolt-green hover:text-white px-8 py-3"
                  >
                    Explore Vehicles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-greenvolt-green/20 rounded-3xl blur-3xl"></div>
                <img
                    src={HeroImage}   // ✅ works always
                    alt="Electric Vehicle"
                    className="relative rounded-3xl shadow-2xl w-full"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Why Choose Electric?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect combination of innovation, sustainability, and performance with our premium electric vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${feature.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`h-8 w-8 ${feature.color === 'bg-greenvolt-blue' ? 'text-greenvolt-blue' : 'text-greenvolt-green'}`} />
                  </div>
                  <CardTitle className="text-xl text-greenvolt-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-greenvolt-green to-greenvolt-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">3+</div>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg opacity-90">Customer Support</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicle Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Featured Vehicle
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Experience the Future Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our premium electric vehicles combine cutting-edge technology with elegant design for the ultimate riding experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={PremiumElectricScooter} 
                alt="Featured Electric Vehicle" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-greenvolt-black mb-6">
                Premium Electric Scooter
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green" />
                  <span className="text-gray-700">6-8 Hours Fast Charging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green" />
                  <span className="text-gray-700">170kg Loading Capacity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green" />
                  <span className="text-gray-700">Digital Speedometer & Battery Display</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green" />
                  <span className="text-gray-700">Keyless Entry & Mobile Charging</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/vehicles">
                  <Button 
                    size="lg" 
                    className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white"
                  >
                    View All Vehicles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-greenvolt-green text-greenvolt-green hover:bg-greenvolt-green hover:text-white"
                  >
                    Schedule Test Drive
                    <Clock className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have made the switch to electric with GreenVolt EV Hub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-greenvolt-green/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-greenvolt-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-greenvolt-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-greenvolt-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-greenvolt-green/20 text-greenvolt-green border-greenvolt-green/30">
            Ready to Go Electric?
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Visit Our Showroom Today
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the future of transportation firsthand. Our expert team is ready to help you find the perfect electric vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
              >
                Get Directions
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-greenvolt-blue text-greenvolt-blue hover:bg-greenvolt-blue hover:text-white px-8 py-3"
              >
                Call Us Now
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
