import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Compass } from 'lucide-react'

type SectionProps = {
  title: string
  points?: string[]
  paragraphs?: string[]
}

const sections: SectionProps[] = [
  {
    title: 'Our Advisory Services includes following',
    points: [
      'Management Consultancy',
      'Reviewing And Improving Management Information Systems.',
      'Advice And Assistance With Start-Ups, Reconstructions, Mergers, Management Buy-Outs, Business Acquisitions And Disposals',
      'Business Valuations',
      'Capital Structures',
      'Design of Organisation Structure.',
      'Project Planning And Control.',
      'Business Management And Development.',
      'Financial Management And Control.',
      'Working Capital Management.',
      'Feasibility Studies, Investigations And Takeovers Evaluating And Designing Business Information Systems.',
      'Succession Planning And Staff Recruitment.',
      'Continuous Improvement Programs For Quality And Change.',
      'Management Assurance Services.',
      'Due diligence reviews.',
      'Business risk assessment studies.',
      'Fraud survey and investigations.',
      'Forensic Accounting Services.',
      'Payroll',
      'STPI Consultancy',
      'Litigation services',
      'Physical verification of Fixed Assets/Inventory/stock in trade.'
    ]
  },
  {
    title: 'Business Negotiations',
    paragraphs: [
      'We assist our clients in various across-the-board negotiations with the proposed business partner to arrive at a mutually beneficial agreement as also finalisation of the joint venture other arrangement.'
    ]
  },
  {
    title: 'Business Restructuring',
    paragraphs: [
      'Besides managing the business negotiations, we oversee all the restructuring arrangements- mergers, demergers, amalgamations.'
    ]
  },
  {
    title: 'Risk Assurance',
    paragraphs: [
      'We undertake studies to identify the possible risks (operational, financial, regulatory etc.) associated with specific business ventures/ arrangements analyse the likelihood and consequences of occurrence and suggest a suitable risk mitigation plan.'
    ]
  },
  {
    title: 'Settlement of Family Disputes',
    paragraphs: [
      'We have, as an arbitrator successfully arbitrated several disputes in case of family owned businesses and restructured businesses under family settlement deeds.'
    ]
  },
  {
    title: 'NRI Services ...',
    paragraphs: [
      'The Non Resident Indians (NRIs) need information and guidance in relation to legalities and procedures as to the assets held in India and taxation of income and profit / gains on sale of assets. We offer the following services to Non Resident Indians for their obligations in India. Client profile includes:'
    ],
    points: [
      'Non resident Indians who have / intend to have investments in India.',
      'Non resident Indians who inherit assets in India.',
      'Non resident Indians / Non-residents who have / intend to set up a business in India.',
      'Returning NRI.',
      'Emigrating Indian / New NRI.',
      'Non resident Indians who have / intend to have investments in India.',
      'Non resident Indians who inherit assets in India.',
      'Non resident Indians / Non-residents who have / intend to set up a business in India.',
      'Returning NRI.'
    ]
  }
]

const Advisory: React.FC = () => {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <Compass className='w-16 h-16 mx-auto mb-6 text-gray-200' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
            BUSINESS ADVISORY SERVICES – NRI SERVICES
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-5xl text-lg text-muted-foreground space-y-12'>
          {sections.map((sec, idx) => (
            <div key={idx}>
              <h2 className='text-xl font-bold text-black mb-4'>{sec.title}</h2>

              {/* Paragraphs */}
              {sec.paragraphs?.map((para, i) => (
                <p key={i} className='mb-4'>
                  {para}
                </p>
              ))}

              {/* Points */}
              {sec.points && (
                <ul className='space-y-3'>
                  {sec.points.map((point, i) => (
                    <li
                      key={i}
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

export default Advisory
