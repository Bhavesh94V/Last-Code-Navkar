import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Briefcase } from 'lucide-react'

type ServiceProps = {
  title: string
  description: string
  services?: string
  intro?: string[]
  fullDetails?: string[]
  features?: string[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'Corporate Law',
  services: 'Provides following services in respect of companies',
  description:
    'The firm provides end-to-end corporate law services under the Companies Act, 1956, including company formation, capital structuring, mergers, and statutory compliance.',
  icon: Briefcase,
  intro: [
    'The firm is providing services on various matters under the Companies Act, 1956, including formation of companies, Capital Structuring and its public issue, Mergers and Amalgamations, Liquidation or Winding up operations etc.',
    'The firm has also represented various agencies in problems relating to Company Law Matters at highest levels of Department of Company Affairs, Company Law Board and other related Government Authorities. The firm is also engaged in providing service relating to local statutory compliance on the need base requirement of its clients.',
    'Company Law Matters Services — Companies are governed in India by Companies Act, 1956. Every Company is required to register themselves with the Registrar of Companies (ROC) and file the necessary documents for various statutory requirements.'
  ],
  fullDetails: [
    'Formation of Company in India, viz. Private Limited Company, Public Limited Company, Subsidiary Company, Holding Company, Foreign Company, Joint Ventures etc.',
    'Drafting of Memorandum and Articles of Association.',
    'Maintenance & compliance of Statutory Records.',
    'Conversion of a Private Company into a Public Company and vice versa.',
    'Change in the name of Company.',
    'Change in the address of registered office.',
    'Alteration of main objects of the Company.',
    'Inclusion of new business in the memorandum of the Company.',
    'Appointment of Directors and their remuneration.',
    'Inter Corporate Investments.',
    'Amalgamation, merger and acquisition of Companies.',
    'Corporate restructuring.',
    'Payment of dividend by companies.',
    'Buy back of shares.',
    "Assistance in drafting Director's Report covering statutory points.",
    'Assistance in holding Annual General Meeting and Statutory Compliance thereof.',
    'Statutory provisions relating to various meetings like Board Meetings, Statutory Meetings, their due dates and documents to be filed with Registrar of Companies.',
    'Representation before Company Law Board / Tribunal / ROC.',
    'Representation at highest levels of Department of Company Affairs, Company Law Board, and other related Government Authorities.'
  ]
}

const ServicePage: React.FC = () => {
  const Icon = service.icon

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <Icon className='w-16 h-16 mx-auto mb-6 text-gray-200' />
          <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
            {service.title}
          </h1>
          <p className='text-xl md:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto'>
            {service.description}
          </p>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-4xl'>
          {/* Intro paragraphs */}
          {service.intro && service.intro.length > 0 && (
            <div className='space-y-4 text-muted-foreground text-lg mb-8'>
              {service.intro.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          )}

          {/* Optional services subtitle */}
          {service.services && (
            <h2 className='text-lg font-bold text-black mb-6'>
              {service.services}
            </h2>
          )}

          {/* Full Details / Features */}
          {service.fullDetails && service.fullDetails.length > 0 ? (
            <ul className='space-y-4 text-muted-foreground text-lg cursor-pointer'>
              {service.fullDetails.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 bg-white/5 p-4 rounded-lg shadow-sm hover:shadow-md transition-all'
                >
                  <span className='text-primary font-bold'>➜</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            service.features && (
              <ul className='list-disc list-inside space-y-3 text-muted-foreground'>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicePage
