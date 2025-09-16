import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { BookOpen } from 'lucide-react'

type SectionProps = {
  title: string
  paragraphs?: string[]
  points?: string[]
  paragraphs2?: string[] 
}


const sections: SectionProps[] = [
  {
    title: '1. General Accounting and Bookkeeping Services',
    paragraphs: [
      'Preparation and maintenance of day-to-day bookkeeping and monthly or quarterly accounts, where we act as your accounting bookkeeper.'
    ],
    points: [
      'Real Estate Accounting',
      'Forensic Audit Services',
      'Write-up Services',
      'Financial Reporting',
      'Accounts Reconciliation Services',
      'Bank & Credit Reconciliation Services',
      'Cash Flow Management Services',
      'Preparing Financial Statements',
      'Customer Order Processing Services',
      'Manual Journal Entry Services',
      'Invoice Processing Services',
      'Virtual Accountant Services',
      'Project Accounting Services',
      'Financial Analysis Services',
      'Financial Analysis for Banking Industry',
      'Fixed Assets Management',
      'Financial Budgeting',
      'University Accounting Services'
    ],
    paragraphs2: [
      'Our experts utilize popular Bookkeeping and Accounting Software platforms like QuickBooks, Peachtree (Sage 50 US), Intuit, Bill.com etc. to ensure data correctness and faster results.'
    ]
  },
  {
    title: '2. Preparation of Tax Returns',
    paragraphs: [
      'Preparation of periodic tax, sales tax (VAT) and other returns. We also facilitate everything from tax processing and planning to filing, including tax returns preparation, up-to-date sales tax, quarterly returns, and multiple filings based on State, County or Cities.'
    ]
  },
  {
    title: '3. Payroll Services',
    paragraphs: [
      'Preparation of salary statements of employees, calculation of bonus payments, and administering of commissions. We offer tailor-made payroll accounting services to firms of all sizes, and ensure that you never miss a tax compliance deadline once you outsource payroll processing / payroll administration services to us.'
    ]
  },
  {
    title: '4. Cash Forecasting Services',
    paragraphs: [
      'Analysis of the cash requirements of the business and forecasting cash requirements.'
    ]
  },
  {
    title: '5. Debt Collection Services',
    paragraphs: [
      'Assistance for the recovery of debts and taking necessary legal action.'
    ]
  },
  {
    title: '6. Payments to Creditors',
    paragraphs: [
      'Assistance with making payments to creditors while leaving ultimate control with the management.'
    ]
  },
  {
    title: '7. Cash Handling Services',
    paragraphs: [
      'Assistance with treasury functions like operation and monitoring of high-interest deposits and current accounts.'
    ]
  },
  {
    title: '8. E-accounting services',
    paragraphs: [
      'We have expertise in this area and can help you with any of your e-accounting functions.'
    ]
  },
  {
    title: '9. Accounting Setup Services',
    paragraphs: [
      'We help you to set up new business objectives with our accounting setup services.'
    ]
  }
]

const Accounting: React.FC = () => {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <BookOpen className='w-16 h-16 mx-auto mb-6 text-gray-200' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
            OUR ACCOUNTING SERVICES (BOOKKEEPING SERVICES)
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
                <ul className='space-y-3 mb-4'>
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

              {/* Extra Paragraphs */}
              {'paragraphs2' in sec &&
                (sec as any).paragraphs2?.map((para: string, i: number) => (
                  <p key={i} className='mb-4'>
                    {para}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Accounting
