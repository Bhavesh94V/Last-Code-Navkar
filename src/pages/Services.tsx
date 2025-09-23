import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import {
  Calculator,
  FileText,
  TrendingUp,
  BarChart2,
  Shield,
  Compass,
  DollarSign,
  BookOpen,
  Briefcase
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Services = () => {
  useEffect(() => {
    document.title =
      'Our Services - Navkar Bhavsar & Co. | Chartered Accountant'
  }, [])

  const services = [
    {
      icon: Calculator, // Perfect for VAT & Service Tax
      title: 'Gujarat VAT & Service TAX',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Registration under VAT Act',
        'Classification of Goods',
        'Calculation of interest and penalty',
        'Assessment under VAT Act'
      ],
      link: '/services/gujarat-vat-service-tax'
    },
    {
      icon: TrendingUp, // Tax growth/advisory fit
      title: 'Direct Taxation',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Income Tax, Wealth Tax & TDS Returns Filing',
        'Corporate & Personal Tax Planning',
        'Cross-Border Tax Advisory',
        'Advance Tax & Capital Formation Planning'
      ],
      link: '/services/direct-taxation'
    },
    {
      icon: BarChart2, // Financial analytics/loans
      title: 'Corporate Financial',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Preparation of Budgets',
        'Working Capital Estimation and Management',
        'Break Even Analysis',
        'Product Pricing'
      ],
      link: '/services/corporate-financial'
    },
    {
      icon: FileText, // Process outsourcing docs
      title: 'BPO',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Accounting and MIS reporting',
        'Payroll processing',
        'Regulatory compliances',
        'Secretarial services'
      ],
      link: '/services/bpo'
    },
    {
      icon: Briefcase, // Corporate law/company work
      title: 'Corporate Law',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Inter Corporate Investments.',
        'Corporate restructuring.',
        'Payment of dividend by companies.',
        'Buy back of shares.'
      ],
      link: '/services/corporate-law'
    },
    {
      icon: Shield, // Audit & assurance = protection
      title: 'Auditing Assurance',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Bank Audit',
        'Stock Audit',
        'Certification Work',
        'Risk Based Audit'
      ],
      link: '/services/auditing-assurance'
    },
    {
      icon: Compass, // Guidance / advisory = direction
      title: 'Business Advisory',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Business Valuations',
        'Capital Structures',
        'Design of Organisation Structure.',
        'Project Planning And Control.'
      ],
      link: '/services/advisory'
    },
    {
      icon: BookOpen, // Accounting/bookkeeping = books
      title: 'Accounting Services',
      description:
        'We provide expert and reliable services covering registration, compliance, advisory, audits, planning, and consulting tailored to your business needs.',
      features: [
        'Real Estate Accounting',
        'Forensic Audit Services',
        'Write-up Services',
        'Financial Reporting'
      ],
      link: '/services/accounting-services'
    }
  ]

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      <section className='pt-24 pb-20 bg-gradient-hero text-white mt-10'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
              Our Professional Services
            </h1>
            <p className='text-xl md:text-2xl text-white/90 leading-relaxed'>
              Comprehensive financial and business solutions tailored to meet
              your unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <span className='text-muted-foreground font-semibold text-lg'>
              What We Offer
            </span>
            <h2 className='text-4xl font-serif font-bold text-foreground mt-4 mb-6'>
              Complete Business Solutions
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              From startups to established enterprises, we provide the expertise
              you need to succeed.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='card-professional p-8 group hover:shadow-strong transition-all duration-500'
              >
                <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <service.icon className='w-8 h-8 text-primary-foreground' />
                </div>

                <h3 className='text-xl font-serif font-bold text-foreground mb-4'>
                  {service.title}
                </h3>

                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  {service.description}
                </p>

                <ul className='space-y-2 mb-6'>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className='flex items-center text-sm text-muted-foreground'
                    >
                      <div className='w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0'></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                >
                  <Button className='w-full btn-primary'>Learn More</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='py-20 bg-gradient-secondary'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-serif font-bold text-foreground mb-6'>
              Why Choose Our Services ?
            </h2>
          </div>

          <div className='grid lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent-foreground'>
                  25+
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>
                Years Experience
              </h3>
              <p className='text-sm text-muted-foreground'>
                Proven expertise in diverse industries
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary-foreground'>
                  99+
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>
                Happy Clients
              </h3>
              <p className='text-sm text-muted-foreground'>
                Trusted by businesses across sectors
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-accent-foreground'>
                  98%
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>
                Compliance Rate
              </h3>
              <p className='text-sm text-muted-foreground'>
                Perfect track record of compliance
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl font-bold text-primary-foreground'>
                  24/7
                </span>
              </div>
              <h3 className='font-semibold text-foreground mb-2'>Support</h3>
              <p className='text-sm text-muted-foreground'>
                Round-the-clock assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='bg-gradient-primary rounded-2xl p-12 text-white text-center'>
            <h2 className='text-3xl font-serif font-bold mb-4'>
              Ready to Get Started?
            </h2>
            <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
              Let us help you choose the right services for your business needs.
              Contact us for a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/contact'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='bg-white text-primary hover:bg-white/90'
                >
                  Get Free Consultation
                </Button>
              </Link>
              <Link to='/query'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-black hover:bg-white hover:text-primary'
                >
                  Send Query
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services
