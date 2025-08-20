import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Zap, 
  Star,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Shield,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Recycle,
  Battery
} from "lucide-react";
import Layout from "@/components/Layout";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above everything else, ensuring personalized service and support."
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Committed to reducing carbon footprint and promoting sustainable transportation solutions for a greener future."
    },
    {
      icon: Star,
      title: "Quality Excellence",
      description: "We maintain the highest standards in product quality, service delivery, and customer experience."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building long-term relationships through transparent practices, honest communication, and dependable products."
    }
  ];



  const achievements = [
    { icon: Users, number: "500+", label: "Happy Customers" },
    { icon: Star, number: "4.9/5", label: "Customer Rating" },
    { icon: Award, number: "3+", label: "Years of Excellence" },
    { icon: Globe, number: "15+", label: "Cities Served" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenvolt-cream to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              About GreenVolt EV Hub
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-greenvolt-black mb-6 leading-tight">
              Leading the Electric{" "}
              <span className="text-greenvolt-green">Revolution</span> in Gujarat
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              At GreenVolt EV Hub, we're not just selling vehicles – we're pioneering a sustainable future. Located in the heart of Mahesana, Gujarat, we're your trusted partner in the transition to clean, efficient, and stylish electric transportation.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
              >
                Visit Our Showroom
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-greenvolt-green/5 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-2xl text-greenvolt-black">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To accelerate the adoption of sustainable transportation by providing high-quality, reliable, and stylish electric vehicles that meet the diverse needs of modern India. We're committed to making electric mobility accessible, affordable, and attractive to every family.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-greenvolt-blue/5 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-greenvolt-blue" />
                </div>
                <CardTitle className="text-2xl text-greenvolt-black">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be Gujarat's most trusted EV hub, leading the way in sustainable mobility solutions while contributing to a cleaner, greener planet for future generations. We envision a world where electric transportation is the norm, not the exception.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-greenvolt-green/5 to-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-2xl text-greenvolt-black">Our Commitment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Excellence in service, quality in products, and innovation in solutions. We're committed to building lasting relationships with our customers through transparent practices, exceptional service, and continuous improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Our Core Values
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values are the foundation of everything we do, guiding our decisions and shaping our relationships with customers and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-greenvolt-green" />
                    </div>
                    <CardTitle className="text-2xl text-greenvolt-black">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-greenvolt-green to-greenvolt-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              These numbers represent our commitment to excellence and the trust our customers place in us.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{achievement.number}</div>
                <p className="text-lg opacity-90">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Our Expertise
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive expertise in electric vehicle technology, customer service, and sustainable solutions makes us your ideal EV partner in Gujarat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Electric Vehicle Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep expertise in EV systems, battery technology, charging solutions, and smart vehicle features to ensure optimal performance.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Battery Management</span>
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Smart Features</span>
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Performance Tuning</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-greenvolt-blue" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Customer Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Personalized consultation, comprehensive test drives, flexible financing options, and ongoing support throughout your EV journey.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Personal Consultation</span>
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Test Drives</span>
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">After-Sales Support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Sustainability Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive approach to sustainable transportation including eco-friendly practices, energy efficiency, and environmental impact reduction.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Zero Emissions</span>
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Energy Efficient</span>
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Eco-Friendly</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-greenvolt-blue" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Service & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Professional maintenance services, genuine parts, warranty support, and technical assistance to keep your EV running at peak performance.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Professional Service</span>
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Genuine Parts</span>
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">24/7 Support</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-greenvolt-green" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rigorous quality standards, comprehensive testing procedures, and reliable vehicle certifications to ensure you get the best EV experience.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Quality Testing</span>
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Certification</span>
                  <span className="px-3 py-1 bg-greenvolt-green/10 text-greenvolt-green text-sm rounded-full">Reliability</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-greenvolt-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-greenvolt-blue" />
                </div>
                <CardTitle className="text-xl text-greenvolt-black">Local Market Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deep understanding of Gujarat's transportation needs, local regulations, government incentives, and regional preferences for electric vehicles.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Gujarat Focus</span>
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Local Support</span>
                  <span className="px-3 py-1 bg-greenvolt-blue/10 text-greenvolt-blue text-sm rounded-full">Regional Expertise</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Why Electric Revolution */}
      <section className="py-20 bg-greenvolt-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-greenvolt-green/20 text-greenvolt-green border-greenvolt-green/30">
                The Electric Revolution
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why We Believe in Electric Future
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Zero Emissions</h4>
                    <p className="text-gray-300">Contributing to cleaner air and reduced carbon footprint for future generations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Cost Efficiency</h4>
                    <p className="text-gray-300">Significant savings on fuel costs and lower maintenance requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Advanced Technology</h4>
                    <p className="text-gray-300">Smart features and cutting-edge technology for enhanced user experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-greenvolt-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Energy Independence</h4>
                    <p className="text-gray-300">Reducing dependency on fossil fuels and supporting renewable energy adoption.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Recycle className="h-12 w-12 text-greenvolt-green mx-auto mb-4" />
                <h4 className="font-bold text-2xl mb-2">90%</h4>
                <p className="text-gray-300">Reduction in Carbon Emissions</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Battery className="h-12 w-12 text-greenvolt-blue mx-auto mb-4" />
                <h4 className="font-bold text-2xl mb-2">75%</h4>
                <p className="text-gray-300">Lower Operating Costs</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Zap className="h-12 w-12 text-greenvolt-green mx-auto mb-4" />
                <h4 className="font-bold text-2xl mb-2">100%</h4>
                <p className="text-gray-300">Clean Energy Powered</p>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl">
                <Globe className="h-12 w-12 text-greenvolt-blue mx-auto mb-4" />
                <h4 className="font-bold text-2xl mb-2">24/7</h4>
                <p className="text-gray-300">Sustainable Transportation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-greenvolt-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
            Ready to Join the Electric Revolution?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the future of transportation with GreenVolt EV Hub. Visit our showroom to explore our range of electric vehicles and speak with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vehicles">
              <Button 
                size="lg" 
                className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
              >
                Explore Vehicles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-greenvolt-green text-greenvolt-green hover:bg-greenvolt-green hover:text-white px-8 py-3"
              >
                Visit Showroom
                <MapPin className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
