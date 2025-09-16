import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { TrendingUp } from 'lucide-react'

type ServiceProps = {
  title: string
  description: string
  intro?: string[]
  points?: string[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'DIRECT TAXATION',
  description:
    'We specialize in tax planning services by advising and counseling clients in selecting the proper form of business, structuring capital, and consolidating resources. Our expertise covers compliance, representation, and strategic tax planning for both individuals and corporates.',
  icon: TrendingUp,
  intro: [
    'The Firm has specialized in tax planning services by advising and counseling to clients in selecting proper form of business, organization of capital structuring, consolidation of resources etc.',
    'It is representing its individual and corporate clients before various authorities starting from the Assessing Officer to the Income Tax Tribunals, Settlement Commission and the Central Board of Direct Taxes.'
  ],
  points: [
    'Preparing Income Tax, Wealth Tax, TDS Returns and e-filing of the same',
    'Corporate Taxation',
    'Personal Taxation',
    'Cross-border tax issues',
    'Government approvals',
    'Structured Reviews to Maximize Tax Planning Opportunities',
    'Capital Formation & Tax Planning For Business Owners',
    'Tax Planning For Employees',
    'To get the clearance certificate for going abroad',
    'Certificate for claiming Export exemption',
    'Registration of trust for charitable purposes',
    'Advance tax computation',
    'Obtaining Advance Ruling',
    'Providing Updates on significant changes in law',
    'Providing clarifications and opinions on issues',
    'Tax Audit under income tax laws',
    'Appellate / Legal Services',
    'Certification Services under various statutes',
    'Expatriate Taxation'
  ]
}

const DirectTaxation: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <Icon className='w-16 h-16 mx-auto mb-6 text-gray-200' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
            {service.title}
          </h1>
          <p className='text-lg md:text-xl text-gray-100 leading-relaxed max-w-4xl mx-auto'>
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-5xl text-lg text-muted-foreground'>
          {/* Intro Paragraphs */}
          {service.intro?.map((para, index) => (
            <p key={index} className='mb-6'>
              {para}
            </p>
          ))}

          {/* Points */}
          {service.points && (
            <div className='mt-8'>
              <h2 className='text-xl font-bold text-black mb-4'>
                Some of the direct tax services provided by us include
              </h2>
              <ul className='space-y-3'>
                {service.points.map((point, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-2 text-black/80'
                  >
                    <span className='text-primary font-bold'>➜</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DirectTaxation
