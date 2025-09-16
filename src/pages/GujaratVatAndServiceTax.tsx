import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Calculator } from 'lucide-react'

type ServiceProps = {
  title: string
  description: string
  intro?: string[]
  points?: string[]
  sections?: {
    heading: string
    content: string
    points?: string[]
  }[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'GUJARAT VAT & SERVICE TAX',
  description:
    'We provide professional services related to Value Added Tax (VAT) and Service Tax, including registration, compliance, assessments, appeals, refunds, audits, and consultancy on legal and procedural aspects.',
  icon: Calculator,
  sections: [
    {
      heading: 'Value Added Tax (VAT)',
      content:
        'Value Added Tax (VAT) is a tax on value addition and a multi point tax, which is levied at every stage of sale. It is collected at the stage of manufacture/resale and contemplates rebating of tax paid on inputs and purchases.',
      points: [
        'Registration under VAT Act',
        'Compiling and calculating the net Output VAT payable after taking benefit of Input VAT Credits',
        'Classification of Goods',
        'Calculation of interest and penalty',
        'Assessment under VAT Act',
        'Revision and Appeal',
        'Refund of VAT',
        'Advice and Consulting on the legal aspects and issues relating to VAT',
        'Providing clarifications and opinions on issues',
        'Consultancy on the maintenance of prescribed records',
        'VAT Audit',
        'Issue of necessary forms'
      ]
    },
    {
      heading: 'Service Tax',
      content:
        'The firm provides services on the various aspects of Service Tax matters including applicability of the Act, filing of periodical returns, and representation before authorities in disputes. Service Tax is a central tax introduced through the Finance Act 1994, collected by the Central Excise Department, and is payable on taxable services rendered in India (except J&K).',
      points: [
        'Registration under Service Tax Act',
        'Compiling and calculating the net Service Tax payable on output services after taking benefit of CENVAT Credits',
        'Preparing & filing of Service Tax Returns',
        'Classification of services',
        'Calculation of interest and penalty',
        'Assessment under Service Tax Act',
        'Revision and Appeal',
        'Refund of Service Tax',
        'Advice and Consulting on the legal aspects and issues relating to Service Tax',
        'Providing updates on significant changes in law',
        'Providing clarifications and opinions on issues',
        'Consultancy on the maintenance of prescribed records',
        'Tax Planning as regards the minimization of Service Tax Liabilities'
      ]
    }
  ]
}

const GujaratVatAndServiceTax: React.FC = () => {
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
          {service.sections?.map((sec, index) => (
            <div key={index} className='mb-12'>
              <h2 className='text-2xl font-bold text-black mb-3'>
                {sec.heading}
              </h2>
              <p className='mb-6'>{sec.content}</p>

              {sec.points && (
                <ul className='space-y-3'>
                  {sec.points.map((point, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-2 text-black/80'
                    >
                      <span className='text-primary font-bold'>➜</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default GujaratVatAndServiceTax
