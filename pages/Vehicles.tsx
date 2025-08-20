import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Gauge, 
  Shield, 
  Battery,
  Zap,
  Smartphone,
  Key,
  Eye,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";
import Layout from "@/components/Layout";

import GreenVoltUrbanPro from '../assets/1.jpg';
import GreenVoltEcoMax from '../assets/2.jpg';
import GreenVoltCityRider from '../assets/3.jpg';

export default function Vehicles() {
  const [selectedVehicle, setSelectedVehicle] = useState(0);

  const vehicleFeatures = [
    { icon: Clock, title: "Charging Time", value: "6–8 Hours", color: "bg-greenvolt-blue", description: "Fast charging technology for quick turnaround" },
    { icon: Gauge, title: "Front Suspension", value: "Telescopic", color: "bg-greenvolt-green", description: "Superior comfort and stability on all terrains" },
    { icon: Shield, title: "Brakes", value: "Disk Brakes", color: "bg-greenvolt-blue", description: "Enhanced safety with responsive braking system" },
    { icon: Battery, title: "Loading Capacity", value: "170 kg", color: "bg-greenvolt-green", description: "Ample space for cargo and passenger comfort" },
    { icon: Zap, title: "LED Headlights", value: "Stylish Design", color: "bg-greenvolt-blue", description: "Bright, energy-efficient illumination" },
    { icon: Smartphone, title: "Mobile Charging Port", value: "Yes", color: "bg-greenvolt-green", description: "Convenient on-the-go device charging" },
    { icon: Key, title: "Keyless Entry", value: "Yes", color: "bg-greenvolt-blue", description: "Modern convenience with smart access" },
    { icon: Gauge, title: "Speedometer", value: "Digital", color: "bg-greenvolt-green", description: "Clear, accurate digital display" },
    { icon: Battery, title: "Battery Info Display", value: "Yes", color: "bg-greenvolt-blue", description: "Real-time battery monitoring" },
    { icon: Eye, title: "Dimensions", value: "1905 x 675 x 1104 mm", color: "bg-greenvolt-green", description: "Compact yet spacious design" },
    { icon: ArrowRight, title: "Reverse Gear", value: "Yes", color: "bg-greenvolt-blue", description: "Easy maneuvering in tight spaces" },
    { icon: Shield, title: "Water & Dust Resistant", value: "Yes", color: "bg-greenvolt-green", description: "Reliable performance in all weather conditions" },
  ];

  const vehicles = [
    {
      id: 1,
      name: "GreenVolt Urban Pro",
      category: "Premium Scooter",
      price: "₹85,000",
      image: GreenVoltUrbanPro,
      highlights: ["6-8 Hour Charging", "170kg Capacity", "Digital Display", "Keyless Entry"],
      description: "Perfect for city commuting with premium features and elegant design."
    },
    {
      id: 2,
      name: "GreenVolt Eco Max",
      category: "Efficient Scooter",
      price: "₹72,000",
      image: GreenVoltEcoMax,
      highlights: ["Long Range Battery", "Eco Mode", "LED Lighting", "Mobile Charging"],
      description: "Maximum efficiency and range for eco-conscious riders."
    },
    {
      id: 3,
      name: "GreenVolt City Rider",
      category: "Standard Scooter",
      price: "₹65,000",
      image: GreenVoltCityRider,
      highlights: ["Quick Charging", "Compact Design", "Safety Features", "Affordable"],
      description: "Reliable and affordable option for everyday urban transportation."
    }
  ];

  const specifications = {
    performance: [
      { label: "Top Speed", value: "65 km/h" },
      { label: "Range per Charge", value: "80-100 km" },
      { label: "Charging Time", value: "6-8 hours" },
      { label: "Motor Power", value: "2000W BLDC" },
      { label: "Acceleration", value: "0-40 in 8 seconds" }
    ],
    battery: [
      { label: "Battery Type", value: "Lithium-ion" },
      { label: "Battery Capacity", value: "60V 30Ah" },
      { label: "Battery Life", value: "800+ charge cycles" },
      { label: "Charging Voltage", value: "100-240V AC" },
      { label: "Charger Type", value: "Smart Charger" }
    ],
    features: [
      { label: "Display", value: "Digital Speedometer" },
      { label: "Lights", value: "LED Headlight & Tail" },
      { label: "Brakes", value: "Front & Rear Disc" },
      { label: "Suspension", value: "Telescopic Front" },
      { label: "Tyres", value: "Tubeless" }
    ],
    comfort: [
      { label: "Seat Type", value: "Comfortable Dual Seat" },
      { label: "Storage", value: "Under-seat compartment" },
      { label: "Load Capacity", value: "170 kg" },
      { label: "Ground Clearance", value: "155 mm" },
      { label: "Kerb Weight", value: "85 kg" }
    ]
  };

  const benefits = [
    {
      icon: Battery,
      title: "Cost Savings",
      description: "Save up to ₹50,000 annually on fuel costs compared to petrol vehicles"
    },
    {
      icon: Zap,
      title: "Zero Emissions",
      description: "Contribute to cleaner air with completely emission-free transportation"
    },
    {
      icon: Shield,
      title: "Low Maintenance",
      description: "Minimal moving parts mean significantly lower maintenance costs"
    },
    {
      icon: CheckCircle,
      title: "Government Incentives",
      description: "Benefit from government subsidies and tax benefits on electric vehicles"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenvolt-cream to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Our Electric Vehicles
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-greenvolt-black mb-6 leading-tight">
              Advanced Features for{" "}
              <span className="text-greenvolt-green">Modern Living</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the perfect blend of technology, style, and sustainability with our premium electric vehicles. Every feature is designed to enhance your journey while protecting our environment.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
              >
                Schedule Test Drive
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicle Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Choose Your Perfect Electric Vehicle
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of premium electric vehicles, each designed to meet different needs and preferences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {vehicles.map((vehicle, index) => (
              <Card key={vehicle.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
                      {vehicle.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-greenvolt-black">{vehicle.name}</CardTitle>
                  <CardDescription className="text-gray-600">{vehicle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {vehicle.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-greenvolt-green" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-greenvolt-green">{vehicle.price}</div>
                    {/* <Button 
                      className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white"
                      onClick={() => setSelectedVehicle(index)}
                    >
                      View Details
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Advanced Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Built for Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every feature is carefully designed to provide maximum comfort, safety, and convenience for your daily journeys.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vehicleFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${feature.color}/10 rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon className={`h-6 w-6 ${feature.color === 'bg-greenvolt-blue' ? 'text-greenvolt-blue' : 'text-greenvolt-green'}`} />
                  </div>
                  <CardTitle className="text-sm font-semibold text-gray-600">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-lg font-bold text-greenvolt-black mb-2">{feature.value}</p>
                  <p className="text-xs text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Technical Specifications
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Complete Technical Details
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive specifications to help you make an informed decision about your electric vehicle purchase.
            </p>
          </div>

          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="battery">Battery</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="comfort">Comfort</TabsTrigger>
            </TabsList>
            
            {Object.entries(specifications).map(([category, specs]) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specs.map((spec, index) => (
                    <Card key={index} className="border-0 shadow-lg bg-white">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">{spec.label}</span>
                          <span className="text-greenvolt-black font-bold">{spec.value}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-greenvolt-green/5 to-greenvolt-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Electric Vehicle Benefits
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Why Choose Electric?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond the environmental benefits, electric vehicles offer practical advantages that make them the smart choice for modern transportation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center">
                      <benefit.icon className="h-8 w-8 text-greenvolt-green" />
                    </div>
                    <CardTitle className="text-2xl text-greenvolt-black">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Financing Options
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Easy Financing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible financing options to make your electric vehicle purchase affordable and convenient.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-greenvolt-green/5 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Battery className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Easy EMI</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-greenvolt-green mb-2">₹2,500</div>
                <p className="text-gray-600 mb-4">per month starting</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Flexible tenure options</li>
                  <li>• Competitive interest rates</li>
                  <li>• Quick approval process</li>
                  <li>• Minimal documentation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-greenvolt-blue/5 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-greenvolt-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-greenvolt-blue" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Bank Loans</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-greenvolt-blue mb-2">7.5%</div>
                <p className="text-gray-600 mb-4">interest rate onwards</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• Partner bank network</li>
                  <li>• Pre-approved loans</li>
                  <li>• Instant loan processing</li>
                  <li>• Attractive interest rates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-greenvolt-green/5 to-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Government Schemes</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-greenvolt-green mb-2">₹15,000</div>
                <p className="text-gray-600 mb-4">subsidy available</p>
                <ul className="text-sm text-gray-600 space-y-2 text-left">
                  <li>• FAME II benefits</li>
                  <li>• State government incentives</li>
                  <li>• Tax exemptions</li>
                  <li>• Registration fee waiver</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-greenvolt-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-greenvolt-green/20 text-greenvolt-green border-greenvolt-green/30">
            Ready to Experience Electric?
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Schedule Your Test Drive Today
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the smooth, silent power of electric vehicles. Book a test drive and discover why thousands of customers have chosen GreenVolt EV Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
              >
                Book Test Drive
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-greenvolt-blue text-greenvolt-blue hover:bg-greenvolt-blue hover:text-white px-8 py-3"
              >
                Visit Showroom
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-greenvolt-black px-8 py-3"
              >
                Call Now
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
