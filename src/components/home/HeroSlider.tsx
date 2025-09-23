import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import heroSlide1 from '@/assets/hero-slide-1.jpg'
import heroSlide2 from '@/assets/hero-slide-2.jpg'
import heroSlide3 from '@/assets/hero-slide-3.jpg'
import { Link } from 'react-router-dom'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [transitionType, setTransitionType] = useState<
    'horizontal' | 'vertical'
  >('horizontal')

  const slides = [
    {
      title: 'Excellence in Financial Advisory',
      subtitle: 'Your Trusted Chartered Accountant Partner',
      description:
        'Comprehensive financial solutions tailored for your business growth and success.',
      image: heroSlide1,
      cta: 'Discover Our Services',
      link: '/services'
    },
    {
      title: 'Strategic Tax Planning',
      subtitle: 'Maximize Your Savings Legally',
      description:
        'Expert tax strategies to optimize your financial position while ensuring full compliance.',
      image: heroSlide2,
      cta: 'Learn More',
      link: '/services/gujarat-vat-service-tax'
    },
    {
      title: 'Business Growth Solutions',
      subtitle: 'Scale Your Business Confidently',
      description:
        'Professional guidance for sustainable business growth and financial optimization.',
      image: heroSlide3,
      cta: 'Get Started',
      link: '/services/corporate-financial'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionType(Math.random() > 0.5 ? 'horizontal' : 'vertical')
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setTransitionType('horizontal')
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setTransitionType('horizontal')
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setTransitionType('vertical')
    setCurrentSlide(index)
  }

  return (
    <section className='relative h-screen overflow-hidden'>
      <div className='absolute inset-0'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 translate-y-0'
                : transitionType === 'horizontal'
                ? index < currentSlide
                  ? 'opacity-0 -translate-x-full translate-y-0'
                  : 'opacity-0 translate-x-full translate-y-0'
                : index < currentSlide
                ? 'opacity-0 translate-x-0 -translate-y-full'
                : 'opacity-0 translate-x-0 translate-y-full'
            }`}
          >
            <div className='absolute inset-0 bg-gradient-hero opacity-90'></div>
            <img
              src={slide.image}
              alt={slide.title}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='container mx-auto px-6 text-center text-white'>
                <div className='max-w-4xl mx-auto'>
                  <p className='text-lg font-medium text-white/80 mb-4 animate-fade-up'>
                    {slide.subtitle}
                  </p>
                  <h1 className='text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-up [animation-delay:200ms]'>
                    {slide.title}
                  </h1>
                  <p className='text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-up [animation-delay:400ms]'>
                    {slide.description}
                  </p>
                  <div className='flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:600ms]'>
                    {/* CTA Button */}
                    <Link
                      to={slide.link}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    >
                      <Button size='lg' className='btn-hero'>
                        {slide.cta}
                      </Button>
                    </Link>

                    {/* Contact Us Button */}
                    <Link
                      to='/contact'
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    >
                      <Button
                        size='lg'
                        variant='outline'
                        className='border-white text-black hover:bg-white hover:text-primary'
                      >
                        Contact Us
                      </Button>
                    </Link>
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className='absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110'
        aria-label='Previous slide'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110'
        aria-label='Next slide'
      >
        <ChevronRight className='w-6 h-6' />
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
