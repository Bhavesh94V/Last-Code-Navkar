import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { FileText } from 'lucide-react'

type ServiceProps = {
  title: string
  description: string
  intro?: string[]
  points?: string[]
  sections?: {
    heading: string
    content: string
  }[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'BUSINESS PROCESS OUTSOURCE (BPO)',
  description:
    'Outsourcing non-core processes enables businesses to not just access expertise at a low cost but to focus on areas critical to the success of business.',
  icon: FileText,
  intro: [
    'We handle the entire breadth of backend operations (as detailed below) for clients who do not have or wish to have an entire set up in India or intend to outsource non-core processes.'
  ],
  points: [
    'Accounting and MIS reporting',
    'Payroll processing',
    'Managing Bank accounts / Bank reconciliation statement',
    'Regulatory compliances',
    'Secretarial services',
    'Book-keeping for USA & UK clients',
    'Tax return for USA & UK clients (in bulk & under guidance)'
  ],
  sections: [
    {
      heading: 'Accounting Outsourcing',
      content:
        "In today's scenario of globalization and technology convergence, the process of doing business has been redefined. Outsourcing various processes makes a lot of business sense. Most businesses and large companies are outsourcing their accounting processes for better management of their finances, and time etc. These services are structured to suit an individual client's needs and requirements."
    },
    {
      heading: 'Book Keeping and General Accounting Service',
      content:
        'The service involves preparing and maintaining day to day bookkeeping and monthly or quarterly management accounts. These books are prepared as per the US GAAP accounting standards and can also be made as per specific client instructions.'
    },
    {
      heading: 'Preparation of Financial Statements',
      content:
        "The service involves preparing a company's annual accounts and schedules ready for the statutory annual Audit."
    }
  ]
}

const BPOPage: React.FC = () => {
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
          {/* Intro */}
          {service.intro?.map((para, index) => (
            <p key={index} className='mb-6'>
              {para}
            </p>
          ))}

          {/* Points */}
          {service.points && (
            <ul className='space-y-3 mb-10'>
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
          )}

          {/* Sections */}
          {service.sections?.map((sec, index) => (
            <div key={index} className='mb-8'>
              <h2 className='text-xl font-bold text-black mb-2'>
                {sec.heading}
              </h2>
              <p>{sec.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default BPOPage
