import { useEffect, useRef } from "react";
import { Download, FileText, Award, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyProfileSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const profileDocuments = [
    {
      icon: FileText,
      title: "Company Profile",
      description: "Comprehensive overview of our firm's history, services, and expertise",
      size: "2.5 MB",
      format: "PDF",
      downloadLink: "#"
    },
    {
      icon: Award,
      title: "Certifications & Awards",
      description: "Our professional certifications, recognitions, and industry awards",
      size: "1.8 MB",
      format: "PDF", 
      downloadLink: "#"
    },
    {
      icon: Users,
      title: "Team Profiles",
      description: "Meet our experienced team of chartered accountants and professionals",
      size: "3.2 MB",
      format: "PDF",
      downloadLink: "#"
    },
    {
      icon: Shield,
      title: "Compliance Framework",
      description: "Our quality assurance processes and compliance methodologies",
      size: "1.5 MB", 
      format: "PDF",
      downloadLink: "#"
    }
  ];

  const handleDownload = (document: any) => {
    // In a real implementation, this would trigger a secure download
    console.log(`Downloading ${document.title}`);
    // You could implement authentication checks here
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <span className="text-muted-foreground font-semibold text-lg">Company Resources</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Company Profile & Documents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive company profile and professional documentation. 
              All downloads are secure and require verification.
            </p>
          </div>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {profileDocuments.map((doc, index) => (
            <div 
              key={index}
              className="animate-on-scroll card-professional p-8 group hover:shadow-strong transition-all duration-500"
            >
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <doc.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        {doc.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {doc.description}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground flex-shrink-0 ml-4">
                      <div className="bg-secondary px-2 py-1 rounded-md mb-1">
                        {doc.format}
                      </div>
                      <div>{doc.size}</div>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleDownload(doc)}
                    variant="outline"
                    size="sm"
                    className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                    Secure Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-secondary border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Secure Document Access
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              All company documents are protected with enterprise-grade security. 
              Downloads are monitored and logged for compliance purposes. 
              For sensitive information or custom reports, please contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Request Custom Report
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                Contact for Access
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="animate-on-scroll text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">ISO Certified</h4>
            <p className="text-sm text-muted-foreground">Quality management system certified</p>
          </div>

          <div className="animate-on-scroll text-center">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-accent-foreground" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">ICAI Member</h4>
            <p className="text-sm text-muted-foreground">Institute of Chartered Accountants of India</p>
          </div>

          <div className="animate-on-scroll text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Trusted by 500+</h4>
            <p className="text-sm text-muted-foreground">Businesses across industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;