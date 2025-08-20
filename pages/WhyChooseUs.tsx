import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Zap, 
  Star,
  Shield,
  Users,
  Award,
  Clock,
  Heart,
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  ThumbsUp,
  TrendingUp,
  Wrench,
  IndianRupee,
  Globe,
  Battery
} from "lucide-react";
import Layout from "@/components/Layout";

export default function WhyChooseUs() {
  const mainReasons = [
    {
      icon: Leaf,
      title: "Environmental Friendliness",
      description: "Zero emissions, sustainable transport solution for a cleaner tomorrow. Join the green revolution and contribute to reducing air pollution in Gujarat.",
      stats: "90% reduction in carbon footprint",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Advanced EV Technology",
      description: "Cutting-edge electric vehicle technology with smart features, digital displays, and intelligent battery management systems.",
      stats: "Latest generation EV technology",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Star,
      title: "Stylish Yet Practical Design",
      description: "Modern aesthetics combined with practical everyday functionality. Our vehicles are designed for both form and function.",
      stats: "Award-winning design excellence",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Reliability & Safety",
      description: "Built to last with comprehensive safety features and quality assurance. Your safety is our top priority in every design decision.",
      stats: "5-star safety rating",
      color: "from-red-500 to-orange-600"
    }
  ];

  const additionalBenefits = [
    {
      icon: IndianRupee,
      title: "Cost-Effective Operation",
      description: "Save up to ₹50,000 annually on fuel costs",
      details: "With rising petrol prices, electric vehicles offer significant long-term savings on operational costs."
    },
    {
      icon: Wrench,
      title: "Low Maintenance",
      description: "75% lower maintenance costs than petrol vehicles",
      details: "Electric motors have fewer moving parts, resulting in reduced wear and tear and lower maintenance requirements."
    },
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "800+ charge cycles with smart battery management",
      details: "Our advanced battery technology ensures longevity and reliable performance throughout the vehicle's lifetime."
    },
    {
      icon: Globe,
      title: "Government Support",
      description: "Benefit from subsidies and tax incentives",
      details: "Take advantage of government policies promoting electric vehicle adoption through various financial incentives."
    },
    {
      icon: Clock,
      title: "Fast Charging",
      description: "Quick 6-8 hour charging for convenience",
      details: "Advanced charging technology ensures your vehicle is ready when you need it, fitting seamlessly into your daily routine."
    },
    {
      icon: TrendingUp,
      title: "Future-Ready Investment",
      description: "Higher resale value and growing market demand",
      details: "Electric vehicles maintain better resale value as the market increasingly shifts towards sustainable transportation."
    }
  ];

  const customerTestimonials = [
    {
      name: "Rajesh Patel",
      location: "Mahesana",
      text: "Switching to GreenVolt was the best decision. My monthly transportation costs have reduced by 80%, and the vehicle runs so smoothly!",
      rating: 5,
      savings: "₹4,000/month"
    },
    {
      name: "Priya Shah",
      location: "Gandhinagar",
      text: "The customer service is exceptional. The team guided me through everything and made the transition to electric so easy.",
      rating: 5,
      experience: "Excellent Service"
    },
    {
      name: "Amit Kumar",
      location: "Ahmedabad",
      text: "One year later, zero maintenance issues. The build quality is outstanding and it's so convenient to charge at home.",
      rating: 5,
      reliability: "100% Uptime"
    },
    {
      name: "Meera Desai",
      location: "Patan",
      text: "I love contributing to cleaner air in our city. Plus, the keyless entry and digital features make it feel so modern!",
      rating: 5,
      impact: "Eco-Friendly"
    }
  ];

  const comparisons = [
    {
      feature: "Fuel/Energy Cost",
      electric: "₹1.5 per km",
      petrol: "₹4.5 per km",
      savings: "67% savings"
    },
    {
      feature: "Maintenance Cost",
      electric: "₹500 per month",
      petrol: "₹2,000 per month",
      savings: "75% savings"
    },
    {
      feature: "Environmental Impact",
      electric: "Zero emissions",
      petrol: "High pollution",
      savings: "100% cleaner"
    },
    {
      feature: "Noise Level",
      electric: "Silent operation",
      petrol: "Engine noise",
      savings: "Noise-free"
    },
    {
      feature: "Government Benefits",
      electric: "Subsidies available",
      petrol: "No incentives",
      savings: "Up to ₹15,000"
    }
  ];

  const servicePromises = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified technicians and knowledgeable sales staff",
      commitment: "Professional guidance at every step"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
      commitment: "We're always here when you need us"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality checks and testing",
      commitment: "Only the best vehicles reach you"
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Personalized service and after-sales support",
      commitment: "Your satisfaction is our success"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenvolt-cream to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Why Choose GreenVolt EV Hub
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-greenvolt-black mb-6 leading-tight">
              Your Trusted Partner in{" "}
              <span className="text-greenvolt-green">Electric Mobility</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              When you choose GreenVolt EV Hub, you're not just buying a vehicle – you're investing in a sustainable future, cutting-edge technology, and unparalleled service quality. Discover why thousands of customers trust us for their electric vehicle needs.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
              >
                Experience the Difference
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Four Pillars of Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is built on these fundamental principles that set us apart in the electric vehicle industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainReasons.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${reason.color}`}></div>
                <CardHeader className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center">
                      <reason.icon className="h-8 w-8 text-greenvolt-green" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-greenvolt-black">{reason.title}</CardTitle>
                      <Badge className="mt-2 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
                        {reason.stats}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Electric vs Petrol Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Electric vs Petrol
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              See the Clear Difference
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare electric vehicles with traditional petrol vehicles and see why electric is the smart choice for the future.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-4 bg-greenvolt-green text-white p-6">
              <div className="font-bold text-lg">Feature</div>
              <div className="font-bold text-lg text-center">Electric Vehicle</div>
              <div className="font-bold text-lg text-center">Petrol Vehicle</div>
              <div className="font-bold text-lg text-center">Your Advantage</div>
            </div>
            
            {comparisons.map((comparison, index) => (
              <div key={index} className={`grid md:grid-cols-4 p-6 border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-semibold text-greenvolt-black">{comparison.feature}</div>
                <div className="text-center text-greenvolt-green font-semibold">{comparison.electric}</div>
                <div className="text-center text-gray-600">{comparison.petrol}</div>
                <div className="text-center">
                  <Badge className="bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
                    {comparison.savings}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Additional Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              More Reasons to Go Electric
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond the core benefits, electric vehicles offer numerous practical advantages that make them the ideal choice for modern transportation needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-greenvolt-green/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-greenvolt-green" />
                  </div>
                  <CardTitle className="text-xl text-greenvolt-black">{benefit.title}</CardTitle>
                  <p className="text-greenvolt-green font-semibold">{benefit.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-greenvolt-green/5 to-greenvolt-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Customer Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Real Experiences from Real Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their GreenVolt EV Hub experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {customerTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-greenvolt-green/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-greenvolt-green" />
                      </div>
                      <div>
                        <p className="font-semibold text-greenvolt-black">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    {(testimonial.savings || testimonial.experience || testimonial.reliability || testimonial.impact) && (
                      <Badge className="bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
                        {testimonial.savings || testimonial.experience || testimonial.reliability || testimonial.impact}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Promises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Our Service Promise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Committed to Your Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment extends beyond the sale. We're dedicated to ensuring your complete satisfaction throughout your electric vehicle journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicePromises.map((promise, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <promise.icon className="h-8 w-8 text-greenvolt-green" />
                  </div>
                  <CardTitle className="text-xl text-greenvolt-black">{promise.title}</CardTitle>
                  <p className="text-gray-600">{promise.description}</p>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
                    {promise.commitment}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-greenvolt-green to-greenvolt-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Proven Track Record
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <p className="text-lg opacity-90">Happy Customers</p>
              <p className="text-sm opacity-75 mt-2">Across Gujarat and beyond</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9/5</div>
              <p className="text-lg opacity-90">Customer Rating</p>
              <p className="text-sm opacity-75 mt-2">Based on verified reviews</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">3+</div>
              <p className="text-lg opacity-90">Years Excellence</p>
              <p className="text-sm opacity-75 mt-2">Consistent quality service</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
              <p className="text-lg opacity-90">Satisfaction Rate</p>
              <p className="text-sm opacity-75 mt-2">Customer success stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-greenvolt-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-greenvolt-green/20 text-greenvolt-green border-greenvolt-green/30">
            Ready to Experience the Difference?
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Join the GreenVolt Family Today
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Visit our showroom, meet our team, and experience firsthand why GreenVolt EV Hub is Gujarat's most trusted electric vehicle partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-greenvolt-blue text-greenvolt-blue hover:bg-greenvolt-blue hover:text-white px-8 py-3"
              >
                Explore Vehicles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-greenvolt-black px-8 py-3"
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
