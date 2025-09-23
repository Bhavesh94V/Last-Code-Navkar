import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const WhatsNewSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedNews, setExpandedNews] = useState<number | null>(null);
  const [selectedNews, setSelectedNews] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up');
              }, index * 150);
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

  const news = [
    {
      id: 1,
      date: "March 15, 2024",
      category: "Tax Updates",
      title: "New GST Compliance Requirements for FY 2024-25",
      excerpt: "Important changes in GST filing procedures and compliance requirements that every business needs to know.",
      fullContent: `The Government has announced significant changes to GST compliance requirements for the financial year 2024-25. These changes aim to streamline the filing process while ensuring better compliance monitoring.

Key Changes Include:
• Monthly GSTR-1 filing mandatory for businesses with turnover > 5 crores
• New validation rules for input tax credit claims
• Enhanced e-invoice requirements for B2B transactions
• Revised late fee structure for delayed filings

Impact on Businesses:
These changes will require businesses to update their accounting systems and ensure timely compliance. We recommend reviewing your current GST processes and implementing necessary changes before the deadline.

Our team at Navkar Bhavsar & Co. is ready to help you navigate these changes smoothly. Contact us for a comprehensive compliance review.`,
      image: "/api/placeholder/400/250",
      tags: ["GST", "Compliance", "Tax"]
    },
    {
      id: 2,
      date: "March 10, 2024",
      category: "Business Advisory",
      title: "Strategic Planning for Small Business Growth in 2024",
      excerpt: "Essential strategies and financial planning tips for small businesses looking to scale operations in the current economic climate.",
      fullContent: `Small businesses face unique challenges in today's dynamic economic environment. Strategic financial planning has become more crucial than ever for sustainable growth.

Growth Strategies for 2024:
• Digital transformation and automation
• Diversification of revenue streams
• Strategic partnerships and collaborations
• Efficient cash flow management
• Investment in employee development

Financial Planning Considerations:
• Emergency fund maintenance (6-12 months expenses)
• Regular financial health assessments
• Tax-efficient growth strategies
• Investment in technology and infrastructure
• Risk management and insurance coverage

At Navkar Bhavsar & Co., we work closely with small businesses to develop customized growth strategies that align with their financial capabilities and market opportunities.`,
      image: "/api/placeholder/400/250",
      tags: ["Business Growth", "Strategy", "Planning"]
    },
    {
      id: 3,
      date: "March 5, 2024",
      category: "Regulatory Updates",
      title: "Income Tax Department's New Digital Initiatives",
      excerpt: "Overview of new digital services and online facilities introduced by the Income Tax Department to enhance taxpayer experience.",
      fullContent: `The Income Tax Department has launched several digital initiatives to modernize tax administration and improve taxpayer services.

New Digital Services:
• AI-powered chatbot for instant query resolution
• Mobile app with enhanced features
• Paperless assessment procedures
• Digital document submission portal
• Real-time status tracking for all applications

Benefits for Taxpayers:
• Reduced processing time for refunds
• 24/7 access to tax services
• Minimized physical interaction requirements
• Enhanced transparency in tax processes
• Improved grievance redressal mechanisms

How We Can Help:
Our team stays updated with all digital processes and can guide you through the new systems efficiently. We ensure seamless integration of these digital tools into your tax compliance routine.`,
      image: "/api/placeholder/400/250",
      tags: ["Digital", "Income Tax", "Technology"]
    }
  ];

  const handleNewsHover = (index: number) => {
    setExpandedNews(index);
  };

  const handleNewsLeave = () => {
    setExpandedNews(null);
  };

  const openModal = (newsItem: any) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <span className="text-accent font-semibold text-lg">Latest Updates</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              What's New
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest tax updates, regulatory changes, 
              and business insights from our experts.
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={item.id}
              className="animate-on-scroll news-container relative"
              onMouseEnter={() => handleNewsHover(index)}
              onMouseLeave={handleNewsLeave}
            >
              <div 
                className={`card-professional overflow-hidden cursor-pointer transition-all duration-700 ${
                  expandedNews === index ? 'shadow-strong transform -translate-y-2' : 'shadow-soft'
                }`}
                onClick={() => openModal(item)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Content (visible on hover) */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    expandedNews === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-border pt-4 mt-4">
                      <p className="text-sm text-muted-foreground mb-4">
                        {item.fullContent.substring(0, 200)}...
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="group hover:bg-primary hover:text-primary-foreground"
                      >
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>

                  {/* Default Read More (visible when not hovered) */}
                  {expandedNews !== index && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-accent hover:text-accent-hover p-0"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-on-scroll">
          <Button size="lg" className="btn-primary">
            View All Updates
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      {/* News Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedNews && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {selectedNews.category}
                    </span>
                    <DialogTitle className="text-2xl font-serif font-bold mt-4">
                      {selectedNews.title}
                    </DialogTitle>
                    <div className="flex items-center text-muted-foreground text-sm mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedNews.date}
                    </div>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="mt-6">
                <img 
                  src={selectedNews.image} 
                  alt={selectedNews.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {selectedNews.fullContent}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedNews.tags.map((tag: string, tagIndex: number) => (
                    <span 
                      key={tagIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default WhatsNewSection;