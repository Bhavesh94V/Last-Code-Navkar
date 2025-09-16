import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Shield } from 'lucide-react'

type ServiceProps = {
  title: string
  description: string[]
  statutoryAudits: string[]
  services: string[]
  icon: React.ElementType
}

const service: ServiceProps = {
  title: 'AUDITING & ASSURANCE SERVICES',
  description: [
    'The firm provides services of designing, developing and implementing the accrual / cash system of accounting for Corporate and Non-Corporate entities as well as for Government and Semi-Government agencies.',
    'It possesses the expertise to design Manuals on Accounting and various operational areas including Internal Control Systems and related records to be maintained by an organization.',
    'The firm also advises on various issues pertaining to treatment of transactions involving multiple complexities and legal implications.',
    'The firm has adequate infrastructure to impart conceptual as well as on-the-job training facilities for introduction and implementation of the accounting and internal control systems.'
  ],
  statutoryAudits: [
    'Internal Audit - both for managerial and statutory compliance.',
    'Audit under Income Tax Laws, Tax Audit, 80HHC, 80HHE and 80IA.',
    'Bank Audits - Concurrent, Revenue, Inspection, Internal and Statutory.',
    'EDP (Electronic Data Processing) Audit of Banks.',
    'IS (Information System) Audit of Banks.',
    'Migration Audit of Banks from Bank Master to Core Banking Solutions.',
    'Physical verification & Inspection Audit of Stock, Investment and Debtors and its certification.'
  ],
  services: [
    'Advice on various accounting issues including those related to Indian GAAPs, International GAAPs and US GAAPs',
    'Design, implementation and review of Business Processes, Internal Control Systems and Accounting Systems & Manuals',
    'Regular financial reporting and analysis',
    'Review and establishment of costing systems',
    'Accounting Assistance and Supervision',
    'Profit and Cash Flow budgeting and monitoring',
    'Costing and Pricing assistance',
    'Annual Profit and Loss Account and Balance Sheet with compliance of Accounting Standards',
    'Management Information Systems',
    'Regular or Periodic management accounts',
    'ERP implementation',
    'Statutory Audits under Indian Company Law and Other Statutes',
    'Tax Audit & VAT Audit',
    'Management Audit, Internal Audit, Operational Audit and System Audits',
    'Income & Expenditure Audit',
    'Bank Audit',
    'Stock Audit',
    'Certification Work',
    'Risk Based Audit',
    'STP / EOU compliance Audit',
    'Fraud Investigation',
    'Due Diligence Reviews',
    'Management Information System (MIS) development',
    'Designing and Developing of Internal Audit System and its Manual',
    'Concurrent Audit and Special Investigative Audit of Corporate and Non-Corporate entities, Govt. Companies/Corporations, Banks, Financial Institutions, Public Utilities, Insurance Companies, Co-operative Societies, Charitable Institutions, etc.'
  ],
  icon: Shield
}

const AuditingAssurance: React.FC = () => {
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
        </div>
      </section>

      {/* Content Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-5xl text-lg text-muted-foreground'>
          {/* Statutory Audits */}
          <h2 className='text-xl font-bold text-black mb-4'>
            Statutory Audits under the Provisions of Companies Act
          </h2>
          <ul className='space-y-3 mb-8'>
            {service.statutoryAudits.map((point, index) => (
              <li key={index} className='flex items-start gap-2 text-black/80'>
                <span className='text-primary font-bold'>➜</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Description Paragraphs */}
          {service.description.map((para, index) => (
            <p key={index} className='mb-6'>
              {para}
            </p>
          ))}

          {/* Services */}
          <div className='mt-8'>
            <h2 className='text-xl font-bold text-black mb-4'>
              We provide following service
            </h2>
            <ul className='space-y-3'>
              {service.services.map((point, index) => (
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
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AuditingAssurance
