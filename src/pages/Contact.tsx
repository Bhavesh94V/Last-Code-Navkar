import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us - Bihari Shah & Co. | Chartered Accountant";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "Bihari Shah & Co.",
        "123 Business District,",
        "Financial Center, Mumbai - 400001"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 22 1234 5678",
        "+91 98765 43210",
        "Emergency: +91 90123 45678"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@biharishahco.com",
        "contact@biharishahco.com",
        "ca@biharishahco.com"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    "Tax Planning & Compliance",
    "Audit & Assurance",
    "Business Advisory",
    "Company Registration", 
    "Legal & Regulatory",
    "Accounting Services",
    "HR & Payroll",
    "Training & Development",
    "Project Finance",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Get in touch with our professional team. We're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <span className="text-muted-foreground font-semibold text-lg">Get In Touch</span>
                <h2 className="text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                  Let's Discuss Your Requirements
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form below and our team will get back to you within 24 hours. 
                  For urgent matters, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="mt-2"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-2"
                      placeholder="Enter company name (optional)"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Service Required</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={5}
                    className="mt-2"
                    placeholder="Please describe your requirements in detail..."
                  />
                </div>

                <Button type="submit" size="lg" className="btn-primary">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <span className="text-muted-foreground font-semibold text-lg">Contact Information</span>
                <h2 className="text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                  Reach Out to Us
                </h2>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card-professional p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-6 bg-gradient-accent rounded-xl text-accent-foreground">
                <h3 className="font-semibold text-lg mb-2">Emergency Support</h3>
                <p className="text-sm mb-4">
                  For urgent tax compliance or audit matters, our emergency support is available 24/7.
                </p>
                <Button variant="secondary" size="sm" className="bg-white text-accent hover:bg-white/90">
                  Call Emergency Line
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Visit Our Office
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Mumbai's business district, our office is easily accessible 
              by public transport and has ample parking facilities.
            </p>
          </div>

          <div className="card-professional overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be integrated here</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Business District, Financial Center, Mumbai - 400001
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;