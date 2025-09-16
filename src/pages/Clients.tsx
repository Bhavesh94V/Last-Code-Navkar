import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'
import { Users } from 'lucide-react'

const clients = [
  'Foreign Companies having Subsidiary in India',
  'Foreign Companies having Branch in India',
  'Non-Resident Indians',
  'Automobiles and Auto Ancillaries',
  'Chemicals',
  'Consumer Durable',
  'Consultancy Support',
  'Education & Welfare',
  'Electronics',
  'Energy',
  'FMCG',
  'Food Processing',
  'Infrastructure',
  'Manufacturing',
  'Pharmaceuticals',
  'Real Estate & Construction',
  'Retailing & Distribution',
  'Software & Information Technology',
  'Telecommunications',
  'Trading',
  'Travel, Tourism & Leisure',
  'Advertising',
  'Banking',
  'Goods Transport',
  'Hotel',
  'Individual - Professionals',
  'Merchant Exporters',
  'Non Banking Finance',
  'NGOs, Trusts, Schools, Colleges',
  'Educational Institutes'
]

const ClientsPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <Users className='w-16 h-16 mx-auto mb-6 text-gray-200' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
            OUR CLIENTS
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-gray-200/90'>
            Serving domestic and international entities across diverse
            industries with confidentiality, professionalism, and client
            satisfaction at the core of everything we do.
          </p>
        </div>
      </section>

      {/* Clients Description + List Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6 max-w-5xl text-lg text-muted-foreground space-y-10'>
          {/* Two Intro Paragraphs */}
          <div className='space-y-6'>
            <p>
              Until the mid - nineteenth century the role of accountants and
              Wales was restricted to that of bookkeepers in that accountants
              merely maintained records of what other business people had
              purchased and sold.
            </p>
            <p>
              Our client list includes domestic and international entities of
              various sizes from different industries. Our team of experienced
              professionals provides financial solutions in a manner where
              client satisfaction is top priority. To ensure confidentiality and
              professional ethics, names and nature of business of clients are
              not provided on the website. We have serviced clients from
              following industries.
            </p>
          </div>

          {/* Industries List */}
          <div>
            <h2 className='text-xl font-bold text-black mb-6'>
              Industries We Serve
            </h2>
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {clients.map((client, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-2 cursor-pointer bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition'
                >
                  <span className='text-primary font-bold'>➜</span>
                  <span className='text-black/80'>{client}</span>
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

export default ClientsPage
