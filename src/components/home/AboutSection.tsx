import { useEffect, useRef } from 'react'
import { Award, Users, TrendingUp, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const AboutSection = () => {
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
              }, index * 200)
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

  const stats = [
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: Users, number: '99+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '100+', label: 'Projects Completed' },
    { icon: Shield, number: '98%', label: 'Compliance Rate' }
  ]

  return (
    <section ref={sectionRef} className='py-20 bg-gradient-secondary'>
      <div className='container mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div>
            <div className='animate-on-scroll'>
              <span className='text-muted-foreground font-semibold text-lg'>
                About Navkar Bhavsar & Co.
              </span>
              <h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6'>
                Your Trusted Financial Partner Since 1999
              </h2>
            </div>

            <div className='animate-on-scroll space-y-6'>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Founded on{' '}
                <strong>
                  1<sup>st</sup> April 1999
                </strong>{' '}
                by Mr. Navkar Bhavsar,
                <strong> M/s Navkar Bhavsar & Co.</strong> has been serving
                clients across diverse structures including Companies, Trusts,
                Firms, Proprietorships and Government Bodies. We are committed
                to delivering services of the highest standards while keeping
                client interests at the forefront.
              </p>

              <p className='text-lg text-muted-foreground leading-relaxed'>
                <strong>Navkar Bhavsar & Co.</strong> is a distinguished team of
                Chartered Accountants, advisors and tax consultants. We offer
                expertise in Tax Advisory, Legal Compliance and allied services,
                providing value-driven solutions to meet evolving business
                needs.
              </p>
            </div>

            <div className='animate-on-scroll mt-8'>
              <Link
                to='/about'
                className='btn-primary inline-block px-6 py-3 rounded-lg text-white text-lg font-medium'
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className='grid grid-cols-2 gap-8'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='animate-on-scroll card-professional p-8 text-center group hover:shadow-strong transition-all duration-300'
              >
                <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <stat.icon className='w-8 h-8 text-primary-foreground' />
                </div>
                <div className='text-3xl font-bold font-serif text-primary mb-2'>
                  {stat.number}
                </div>
                <div className='text-muted-foreground font-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className='mt-20 grid md:grid-cols-2 gap-12'>
          <div className='animate-on-scroll card-professional p-8'>
            <div className='w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-6'>
              <TrendingUp className='w-6 h-6 text-accent-foreground' />
            </div>
            <h3 className='text-2xl font-serif font-bold text-foreground mb-4'>
              Our Mission
            </h3>
            <p className='text-muted-foreground leading-relaxed'>
              To provide top-tier, client-focused financial and professional
              services, including accounting, auditing, taxation, and advisory,
              while ensuring integrity, confidentiality, and excellence in every
              engagement. We strive to empower clients with tailored solutions
              that optimize growth, compliance, and financial performance.
            </p>
          </div>

          <div className='animate-on-scroll card-professional p-8'>
            <div className='w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6'>
              <Shield className='w-6 h-6 text-primary-foreground' />
            </div>
            <h3 className='text-2xl font-serif font-bold text-foreground mb-4'>
              Our Vision
            </h3>
            <p className='text-muted-foreground leading-relaxed'>
              To be the most trusted and respected chartered accountancy and
              advisory firm, delivering excellence through client-focused,
              tailored solutions that optimize growth, ensure compliance, and
              enhance financial performance, while upholding the highest
              standards of integrity and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
