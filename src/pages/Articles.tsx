import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Hourglass } from 'lucide-react'

const Articles: React.FC = () => {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Header />

      {/* Hero Section */}
      <section className='pt-28 pb-20 bg-gradient-hero text-white text-center relative'>
        <div className='container mx-auto px-6 relative z-10'>
          <Hourglass className='w-16 h-16 mx-auto mb-6 text-gray-200 animate-pulse' />
          <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6'>
            Articles & Insights
          </h1>
          <p className='text-lg md:text-xl max-w-2xl mx-auto text-gray-200/90'>
            Valuable resources, professional insights and knowledge sharing —
            launching soon.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='flex-1 flex items-center justify-center py-20 bg-background'>
        <div className='text-center space-y-6'>
          <div className='inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 text-primary mx-auto'>
            <Hourglass className='w-12 h-12 animate-spin-slow' />
          </div>
          <h2 className='text-3xl font-bold text-gray-900'>Coming Soon</h2>
          <p className='text-muted-foreground max-w-md mx-auto'>
            We’re working hard to bring you detailed articles, industry updates,
            and thought leadership pieces. Stay tuned for fresh insights.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Articles
