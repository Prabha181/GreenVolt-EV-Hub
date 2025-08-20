import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faFax,
  faGlobe,
  faMapMarkerAlt,
  faClock,
  faCar,
  faCommentDots,
  faPaperPlane,
  faCheckCircle,
  faCalendarAlt,
  faRoute,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  MessageSquare,
  Send,
  CheckCircle,
  Calendar,
  User,
  Smartphone,
  Navigation
} from "lucide-react";
import Layout from "@/components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiry: 'general'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '', inquiry: 'general' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Showroom Address",
      details: [
        "GreenVolt EV Hub",
        "10 Dediyasan GIDC, Opp. Swagat Residency",
        "Modhera Road, Mahesana – 2",
        "Gujarat, India"
      ],
      action: "Get Directions",
      color: "bg-greenvolt-green"
    },
    {
      icon: Phone,
      title: "Call Us Directly",
      details: [
        { icon: faPhone, text: "+91 97123 04660" },
        { icon: faPhone, text: "+91 99044 51950" },
        { icon: faPhone, text: "+91 94266 13380" },
        { icon: faFax, text: "Fax: +91 02762 123456" }
      ],
      action: "Call Now",
      color: "bg-greenvolt-blue"
    },
    {
      icon: Mail,
      title: "Email & Online",
      details: [
        { icon: faEnvelope, text: "info@greenvolthub.com" },
        { icon: faEnvelope, text: "sales@greenvolthub.com" },
        { icon: faEnvelope, text: "support@greenvolthub.com" },
        { icon: faGlobe, text: "www.greenvolthub.com" }
      ],
      action: "Send Email",
      color: "bg-greenvolt-green"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 8:00 PM",
        "Sunday: 10:00 AM - 6:00 PM",
        "Public Holidays: 10:00 AM - 4:00 PM",
        "Emergency Support: 24/7"
      ],
      action: "Plan Visit",
      color: "bg-greenvolt-blue"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'purchase', label: 'Vehicle Purchase' },
    { value: 'test-drive', label: 'Test Drive Booking' },
    { value: 'service', label: 'Service & Support' },
    { value: 'finance', label: 'Financing Options' },
    { value: 'corporate', label: 'Corporate Sales' }
  ];

  const quickActions = [
    {
      icon: Car,
      title: "Schedule Test Drive",
      description: "Experience our vehicles firsthand",
      action: "Book Now",
      popular: true
    },
    {
      icon: MessageSquare,
      title: "Get Price Quote",
      description: "Detailed pricing with financing options",
      action: "Request Quote"
    },
    {
      icon: Calendar,
      title: "Showroom Visit",
      description: "Plan your visit to our showroom",
      action: "Schedule Visit"
    },
    {
      icon: Phone,
      title: "Speak to Expert",
      description: "Talk to our EV specialists",
      action: "Call Now"
    }
  ];

  const faqs = [
    {
      question: "What are your showroom timings?",
      answer: "We're open Monday-Saturday 9 AM to 8 PM, and Sundays 10 AM to 6 PM. We're also available for appointments outside these hours."
    },
    {
      question: "Do you offer test drives?",
      answer: "Yes! We encourage test drives. You can book online or call us. Just bring a valid driving license and we'll arrange everything."
    },
    {
      question: "What financing options are available?",
      answer: "We offer various financing solutions including bank loans, easy EMI options, and government subsidy assistance. Our team will help you find the best option."
    },
    {
      question: "Do you provide home delivery?",
      answer: "Yes, we offer doorstep delivery within Mahesana and surrounding areas. Additional charges may apply for distant locations."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-greenvolt-cream to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Contact & Visit Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-greenvolt-black mb-6 leading-tight">
              Ready to Go Electric?{" "}
              <span className="text-greenvolt-green">Let's Connect!</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Visit our state-of-the-art showroom in Mahesana or get in touch with our expert team. We're here to guide you through your electric vehicle journey with personalized service and comprehensive support.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              How Can We Help You Today?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from these quick options to get the assistance you need, or scroll down for detailed contact information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {quickActions.map((action, index) => (
              <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white ${action.popular ? 'ring-2 ring-greenvolt-green' : ''} h-full flex flex-col`}>
                {action.popular && (
                  <div className="bg-greenvolt-green text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center flex-grow">
                  <div className="w-16 h-16 bg-greenvolt-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <action.icon className="h-8 w-8 text-greenvolt-green" />
                  </div>
                  <CardTitle className="text-xl text-greenvolt-black mb-3">{action.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{action.description}</p>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-6">
                  <Button className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white w-full py-2.5 font-medium">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
                  Get in Touch
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
                  Visit Our Showroom
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Experience our electric vehicles up close. Our knowledgeable team is ready to answer all your questions and help you find the perfect EV solution.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${info.color}/10 rounded-lg flex items-center justify-center`}>
                          <info.icon className={`h-6 w-6 ${info.color === 'bg-greenvolt-blue' ? 'text-greenvolt-blue' : 'text-greenvolt-green'}`} />
                        </div>
                        <CardTitle className="text-xl text-greenvolt-black">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-4">
                        {info.details.map((detail, i) => (
                          <div key={i} className="flex items-center space-x-3 text-gray-600">
                            {typeof detail === 'object' ? (
                              <>
                                <FontAwesomeIcon icon={detail.icon} className="h-4 w-4 text-greenvolt-green flex-shrink-0" />
                                <span>{detail.text}</span>
                              </>
                            ) : (
                              <span>{detail}</span>
                            )}
                          </div>
                        ))}
                      </div>
                      <Button 
                        variant="outline" 
                        className={`${info.color === 'bg-greenvolt-blue' ? 'border-greenvolt-blue text-greenvolt-blue hover:bg-greenvolt-blue' : 'border-greenvolt-green text-greenvolt-green hover:bg-greenvolt-green'} hover:text-white`}
                      >
                        {info.action}
                        {info.icon === MapPin && <Navigation className="ml-2 h-4 w-4" />}
                        {info.icon === Phone && <Phone className="ml-2 h-4 w-4" />}
                        {info.icon === Mail && <Send className="ml-2 h-4 w-4" />}
                        {info.icon === Clock && <Calendar className="ml-2 h-4 w-4" />}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-greenvolt-black flex items-center">
                    <MessageSquare className="h-6 w-6 text-greenvolt-green mr-3" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-greenvolt-green mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-greenvolt-black mb-2">Message Sent!</h3>
                      <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-greenvolt-black font-semibold">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-2 border-gray-300 focus:border-greenvolt-green"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-greenvolt-black font-semibold">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-2 border-gray-300 focus:border-greenvolt-green"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-greenvolt-black font-semibold">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2 border-gray-300 focus:border-greenvolt-green"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="inquiry" className="text-greenvolt-black font-semibold">Inquiry Type</Label>
                        <select
                          id="inquiry"
                          name="inquiry"
                          value={formData.inquiry}
                          onChange={handleInputChange}
                          className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-greenvolt-green"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-greenvolt-black font-semibold">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-2 border-gray-300 focus:border-greenvolt-green min-h-[120px]"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white w-full py-3"
                      >
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Find Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Locate Our Showroom
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our showroom is conveniently located at Dediyasan GIDC, easily accessible from all parts of Mahesana and surrounding areas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-greenvolt-green/5 to-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-greenvolt-black mb-6">Directions to Our Showroom</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-greenvolt-green/10 rounded-full flex items-center justify-center mt-1">
                        <span className="text-greenvolt-green font-bold text-sm">1</span>
                      </div>
                      <p className="text-gray-600">
                        <strong>From Mahesana Railway Station:</strong> Take the Modhera Road exit and drive for approximately 5 km towards Dediyasan GIDC.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-greenvolt-green/10 rounded-full flex items-center justify-center mt-1">
                        <span className="text-greenvolt-green font-bold text-sm">2</span>
                      </div>
                      <p className="text-gray-600">
                        <strong>From Ahmedabad:</strong> Take NH27 towards Mahesana, then follow signs to Dediyasan GIDC area.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-greenvolt-green/10 rounded-full flex items-center justify-center mt-1">
                        <span className="text-greenvolt-green font-bold text-sm">3</span>
                      </div>
                      <p className="text-gray-600">
                        <strong>Landmark:</strong> Look for Swagat Residency - our showroom is directly opposite to it.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-greenvolt-black mb-4">Parking & Accessibility</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Free parking available</li>
                      <li>• Wheelchair accessible</li>
                      <li>• Public transport nearby</li>
                      <li>• EV charging point on-site</li>
                    </ul>
                  </div>

                  <Button className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white w-full mt-6">
                    Get Directions on Google Maps
                    <Navigation className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <Card className="border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-greenvolt-green/10 to-greenvolt-blue/10 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-greenvolt-green" />
                      <h3 className="text-2xl font-bold text-greenvolt-black mb-2">Interactive Map</h3>
                      <p className="text-lg">GreenVolt EV Hub Showroom</p>
                      <p className="text-sm mt-2">10 Dediyasan GIDC, Mahesana</p>
                      <Button className="bg-greenvolt-blue hover:bg-greenvolt-blue/80 text-white mt-4">
                        Open in Google Maps
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-greenvolt-blue/10 text-greenvolt-blue border-greenvolt-blue/20">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-greenvolt-black mb-6">
              Quick Answers to Common Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to the most commonly asked questions about visiting our showroom and our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-greenvolt-black">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-greenvolt-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-greenvolt-green/20 text-greenvolt-green border-greenvolt-green/30">
            Emergency Support
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our emergency support team is available 24/7 for existing customers who need immediate technical assistance or roadside support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4" />
              Emergency Hotline: +91 97123 04660
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-greenvolt-black px-8 py-3"
            >
              <FontAwesomeIcon icon={faMobileAlt} className="mr-2 h-4 w-4" />
              WhatsApp Support
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
