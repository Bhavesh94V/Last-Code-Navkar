import { useEffect, useRef } from 'react'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ClientsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up')
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const clientLogos = [
    { name: 'TechCorp Solutions', logo: '/api/placeholder/150/80' },
    { name: 'Global Manufacturing', logo: '/api/placeholder/150/80' },
    { name: 'Retail Dynamics', logo: '/api/placeholder/150/80' },
    { name: 'Financial Services Group', logo: '/api/placeholder/150/80' },
    { name: 'Healthcare Partners', logo: '/api/placeholder/150/80' },
    { name: 'Educational Foundation', logo: '/api/placeholder/150/80' },
    { name: 'Real Estate Ventures', logo: '/api/placeholder/150/80' },
    { name: 'Export Import Co.', logo: '/api/placeholder/150/80' }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO, TechCorp Solutions',
      company: 'Technology Sector',
      rating: 5,
      testimonial:
        "Navkar Bhavsar & Co. has been instrumental in our company's financial success. Their strategic tax planning saved us significant costs while ensuring complete compliance.",
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Priya Sharma',
      position: 'CFO, Global Manufacturing',
      company: 'Manufacturing Industry',
      rating: 5,
      testimonial:
        'The audit services provided by the team are thorough and professional. They helped us streamline our financial processes and improve operational efficiency.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Amit Patel',
      position: 'Founder, Retail Dynamics',
      company: 'Retail Business',
      rating: 5,
      testimonial:
        'Excellent business advisory services! They guided us through complex regulatory requirements and helped us expand our operations successfully.',
      image: '/api/placeholder/80/80'
    }
  ]

  const industries = [
    'Information Technology',
    'Manufacturing',
    'Healthcare',
    'Real Estate',
    'Financial Services',
    'Education',
    'Retail & E-commerce',
    'Import & Export',
    'Construction',
    'Hospitality',
    'Pharmaceuticals',
    'Textiles'
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-gradient-secondary'>
      <div className='container mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='animate-on-scroll'>
            <span className='text-accent font-semibold text-lg'>
              Our Clients
            </span>
            <h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6'>
              Trusted by Leading Businesses
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              We're proud to serve diverse businesses across industries, from
              startups to established corporations.
            </p>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className='mb-20'>
          <div className='animate-on-scroll grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center'>
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className='bg-background rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 group'
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className='w-full h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className='mb-20'>
          <div className='animate-on-scroll text-center mb-12'>
            <h3 className='text-3xl font-serif font-bold text-foreground mb-4'>
              Industries We Serve
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Our expertise spans across multiple industries, enabling us to
              provide specialized solutions for unique sector requirements.
            </p>
          </div>

          <div className='animate-on-scroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {industries.map((industry, index) => (
              <div
                key={index}
                className='bg-background border border-border rounded-lg p-4 text-center hover:border-accent hover:shadow-soft transition-all duration-300 group'
              >
                <span className='text-foreground font-medium group-hover:text-accent transition-colors duration-300'>
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className='mb-16'>
          <div className='animate-on-scroll text-center mb-12'>
            <h3 className='text-3xl font-serif font-bold text-foreground mb-4'>
              What Our Clients Say
            </h3>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Don't just take our word for it. Here's what our valued clients
              have to say about our services.
            </p>
          </div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='animate-on-scroll card-professional p-8 relative group hover:shadow-strong transition-all duration-500'
              >
                {/* Quote Icon */}
                <div className='absolute top-6 right-6 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center'>
                  <Quote className='w-4 h-4 text-accent' />
                </div>

                {/* Rating */}
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-accent text-accent' />
                  ))}
                </div>

                {/* Testimonial */}
                <p className='text-muted-foreground leading-relaxed mb-6 italic'>
                  "{testimonial.testimonial}"
                </p>

                {/* Client Info */}
                <div className='flex items-center'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-12 h-12 rounded-full object-cover mr-4'
                  />
                  <div>
                    <h4 className='font-semibold text-foreground'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-muted-foreground'>
                      {testimonial.position}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className='animate-on-scroll text-center'>
          <div className='bg-gradient-primary rounded-2xl p-12 text-white'>
            <h3 className='text-3xl font-serif font-bold mb-4'>
              Join Our Growing Family of Satisfied Clients
            </h3>
            <p className='text-xl mb-8 text-white/90 max-w-2xl mx-auto'>
              Experience the difference of working with a trusted chartered
              accountancy firm. Let us help you achieve your financial goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Button
                  size='lg'
                  variant='secondary'
                  className='bg-white text-primary hover:bg-white/90'
                >
                  Start Your Journey
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              </Link>

              <Link
                to='/clients'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-black hover:bg-white hover:text-primary'
                >
                  View All Clients
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
