import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSlider from '@/components/home/HeroSlider'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhatsNewSection from '@/components/home/WhatsNewSection'
import CompanyProfileSection from '@/components/home/CompanyProfileSection'
import ClientsSection from '@/components/home/ClientsSection'
import { useEffect } from 'react'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection'

const Index = () => {
  useEffect(() => {
    document.title =
      'Navkar Bhavsar & Co. - Professional Chartered Accountant Services'
  }, [])

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      {/* <WhatsNewSection /> */}
      <CompanyProfileSection />
      <ClientsSection />
      <Footer />
    </div>
  )
}

export default Index