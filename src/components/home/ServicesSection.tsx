import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BarChart2, Briefcase, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: BarChart2,
      title: 'Corporate Financial & Investment',
      description: `We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.`,
      features: [
        'Project Planning & Cost Estimation',
        'Preparation of Detailed Project Reports',
        'Budgeting & Working Capital Management',
        'Break-even Analysis & Product Pricing',
        'Liaison with Banks and Financial Institutions',
        'Loan Arrangement: Cash Credit, Term Loans & Project Loans',
        'Due Diligence for Finance',
        'Valuation of Shares'
      ],
      link: '/services/corporate-financial'
    },
    {
      icon: Briefcase,
      title: 'Corporate Law',
      description: `We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.`,
      features: [
        'Company Formation & Registration',
        'Drafting Memorandum & Articles of Association',
        'Corporate Restructuring & Mergers',
        'Statutory Compliance & Record Maintenance',
        'Representation before ROC, CLB & Regulatory Authorities',
        'Directors Appointment & Remuneration',
        'Annual General Meeting Assistance',
        'Buy-back of Shares & Dividend Compliance'
      ],
      link: '/services/corporate-law'
    },
    {
      icon: TrendingUp,
      title: 'Direct Taxation',
      description: `We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.`,
      features: [
        'Income Tax, Wealth Tax & TDS Returns Filing',
        'Corporate & Personal Tax Planning',
        'Cross-Border Tax Advisory',
        'Advance Tax & Capital Formation Planning',
        'Tax Audit & Certification Services',
        'Appellate & Legal Representation',
        'Expatriate Taxation & Clearance Certificates',
        'Updates & Opinions on Tax Law Changes'
      ],
      link: '/services/direct-taxation'
    }
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='animate-on-scroll'>
            <span className='text-accent font-semibold text-lg'>
              Our Services
            </span>
            <h2 className='text-4xl md:text-5xl heading-professional mt-4 mb-6 text-gradient'>
              Comprehensive Financial Solutions
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We provide a full spectrum of professional services designed to
              meet your unique financial and business requirements.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid lg:grid-cols-3 gap-8 mb-12'>
          {services.map((service, index) => (
            <div
              key={index}
              className='animate-on-scroll card-service group relative p-8'
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Icon */}
              <div className='w-14 h-14 mb-6 bg-primary rounded-xl flex items-center justify-center shadow-md'>
                <service.icon className='w-7 h-7 text-primary-foreground' />
              </div>

              {/* Service Content */}
              <h3 className='text-xl font-serif font-bold text-foreground mb-4'>
                {service.title}
              </h3>
              <p className='text-muted-foreground mb-6 leading-relaxed'>
                {service.description}
              </p>
              <Link
                to={service.link}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Button
                  variant='outline'
                  className='group hover:bg-primary hover:text-primary-foreground transition-all duration-300'
                >
                  Learn More
                  <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className='text-center animate-on-scroll'>
          <Link
            to='/services'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Button size='lg' className='btn-accent'>
              View All Services
              <ArrowRight className='w-5 h-5 ml-2' />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
