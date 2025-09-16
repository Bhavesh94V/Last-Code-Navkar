import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { BarChart2 } from 'lucide-react'

type ServiceProps = {
  title: string
  description: string
  intro?: string[]
  points?: string[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'CORPORATE FINANCIAL SERVICES AND INVESTMENT',
  description:
    'We have a commendable track record of successfully arranging low-cost funds including long term / working capital loans in India and External Commercial Borrowings for startup and expansion projects from financial institutions, banks, and venture capitalists.',
  icon: BarChart2,
  intro: [
    'The services being provided by the firm include identification of project, preparation of project reports, appraisal of projects, advising on resource mobilization at all levels.',
    'We assist clients from establishing and commencing the project with due compliance in technical, statutory, financial and other legal matters.'
  ],
  points: [
    'Project Planning, Project Cost Estimations & Preparation of detailed project reports',
    'Preparation of Budgets',
    'Working Capital Estimation and Management',
    'Break Even Analysis',
    'Product Pricing',
    'Liaison with financial institutions/banks',
    'Loan arrangement - Cash credit limit, Term loan & Project loan',
    'Due diligence for finance',
    'Valuation of shares'
  ]
}

const CorporateFinancial: React.FC = () => {
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
                We assist in the entire process of raising finance including
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

export default CorporateFinancial
