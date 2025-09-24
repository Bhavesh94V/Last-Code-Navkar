import { useEffect, useRef } from 'react';
import { CheckCircle, Award, Users, Clock, BookOpen, Shield } from 'lucide-react';

const WhyChooseUsSection = () => {
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

    const features = [
        {
            icon: Award,
            title: "Certified and Experienced Professionals",
            description: "Our team consists of qualified Chartered Accountants and Company Secretaries with years of industry experience."
        },
        {
            icon: Users,
            title: "Client-Centric Approach with Customized Solutions",
            description: "We understand that every business is unique and provide tailored solutions to meet your specific requirements."
        },
        {
            icon: Clock,
            title: "Transparent Processes and Timely Deliverables",
            description: "We maintain complete transparency in our processes and ensure all deliverables are completed within agreed timelines."
        },
        {
            icon: BookOpen,
            title: "Up-to-Date Knowledge of Legal & Financial Regulations",
            description: "Our team stays current with the latest changes in regulations, ensuring compliance and optimal advisory services."
        },
        {
            icon: Shield,
            title: "Strong Commitment to Integrity and Confidentiality",
            description: "We maintain the highest standards of professional ethics and ensure complete confidentiality of client information."
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-gradient-subtle relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We combine professional expertise with personalized service to deliver exceptional results for your business
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card-professional p-8 animate-on-scroll group hover:shadow-elegant transition-all duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-6 h-6 text-primary-foreground" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-primary mb-3 font-serif">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-on-scroll">
                    <div className="inline-flex items-center space-x-2 text-accent">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">
                            Trusted by 500+ businesses across various industries
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;