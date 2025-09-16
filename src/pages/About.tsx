import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Award, Users, TrendingUp, Shield, Target, Eye, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Bihari Shah & Co. | Chartered Accountant";
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our professional dealings."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every service we provide to our clients."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Our clients' success is our primary focus and driving motivation."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We embrace modern solutions while maintaining traditional values."
    }
  ];

  const team = [
    {
      name: "CA Bihari Shah",
      position: "Managing Partner",
      experience: "25+ Years",
      specialization: "Corporate Finance & Tax Planning",
      image: "/api/placeholder/300/300",
      qualifications: ["FCA", "CPA"]
    },
    {
      name: "CA Priya Sharma",
      position: "Senior Partner",
      experience: "18+ Years", 
      specialization: "Audit & Assurance Services",
      image: "/api/placeholder/300/300",
      qualifications: ["FCA", "DISA"]
    },
    {
      name: "CA Rajesh Kumar",
      position: "Partner",
      experience: "15+ Years",
      specialization: "Business Advisory & Compliance",
      image: "/api/placeholder/300/300",
      qualifications: ["FCA", "MBA"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About Bihari Shah & Co.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              A legacy of trust, excellence, and professional service in chartered accountancy 
              spanning over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-lg">Our Story</span>
              <h2 className="text-4xl font-serif font-bold text-foreground mt-4 mb-6">
                Built on Trust, Driven by Excellence
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998 by CA Bihari Shah, our firm began with a simple yet powerful 
                  vision: to provide comprehensive financial solutions that empower businesses 
                  to achieve their full potential. What started as a small practice in the heart 
                  of the city has grown into one of the most trusted chartered accountancy firms 
                  in the region.
                </p>
                <p>
                  Over the years, we have built our reputation on the pillars of integrity, 
                  professionalism, and unwavering commitment to our clients' success. Our journey 
                  has been marked by continuous growth, both in terms of our service offerings 
                  and our team of dedicated professionals.
                </p>
                <p>
                  Today, Bihari Shah & Co. serves over 500 clients across diverse industries, 
                  from emerging startups to established corporations. Our multidisciplinary 
                  approach ensures that we can address the complex financial challenges of 
                  the modern business environment.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold font-serif text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold font-serif text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold font-serif text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="card-professional p-6 text-center">
                <div className="text-3xl font-bold font-serif text-primary mb-2">12</div>
                <div className="text-muted-foreground">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-professional p-10 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses and individuals with comprehensive financial solutions, 
                ensuring compliance while maximizing growth opportunities through innovative 
                strategies and personalized service excellence. We are committed to building 
                long-term relationships based on trust, integrity, and measurable results.
              </p>
            </div>

            <div className="card-professional p-10 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and sought-after chartered accountancy firm, 
                recognized for our expertise, integrity, and commitment to delivering 
                exceptional value to our clients across all financial services. We envision 
                a future where businesses thrive with our strategic guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-muted-foreground font-semibold text-lg">Our Values</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-professional p-8 text-center group hover:shadow-strong transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-muted-foreground font-semibold text-lg">Our Team</span>
            <h2 className="text-4xl font-serif font-bold text-foreground mt-4 mb-6">
              Meet Our Experienced Professionals
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-professional overflow-hidden group hover:shadow-strong transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="font-semibold mb-2">Specialization</p>
                      <p className="text-sm">{member.specialization}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{member.position}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.experience}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.qualifications.map((qual, qualIndex) => (
                      <span 
                        key={qualIndex}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;