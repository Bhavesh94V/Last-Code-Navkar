import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import {
  Award,
  Users,
  TrendingUp,
  Shield,
  Target,
  Eye,
  Heart
} from 'lucide-react'

const About = () => {
  useEffect(() => {
    document.title = 'About Us - Navkar Bhavsar & Co. | Chartered Accountant'
  }, [])

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We uphold the highest ethical standards in all our professional dealings.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'We strive for excellence in every service we provide to our clients.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description:
        "Our clients' success is our primary focus and driving motivation."
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description:
        'We embrace modern solutions while maintaining traditional values.'
    }
  ]

  const team = [
    {
      name: 'CS NAVKAR BHAVSAR',
      position: 'Co-Founder',
      // experience: '25+ Years',
      specialization: 'Corporate Finance & Tax Planning',
      image: img2,
      qualifications: ['CS', 'CA']
    },
    {
      name: 'CA Viral Shah',
      position: 'Co-Founder',
      // experience: '18+ Years',
      specialization: 'Audit & Assurance Services',
      image: img1,
      qualifications: ['CS', 'CA']
    },
    // {
    //   name: 'CA Rajesh Kumar',
    //   position: 'Partner',
    //   experience: '15+ Years',
    //   specialization: 'Business Advisory & Compliance',
    //   image: '/api/placeholder/300/300',
    //   qualifications: ['FCA', 'MBA']
    // }
  ]

  const stats = [
    { icon: Award, number: '25+', label: 'Years Experience' },
    { icon: Users, number: '99+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '100+', label: 'Projects Completed' },
    { icon: Shield, number: '98%', label: 'Compliance Rate' }
  ]

  return (
    <div className='min-h-screen bg-background'>
      <Header />

      {/* Hero Section */}
      <section className='pt-24 pb-20 bg-gradient-hero text-white mt-10'>
        <div className='container mx-auto px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6'>
              About Us
            </h1>
            <p className='text-xl md:text-2xl text-white/90 leading-relaxed'>
              A legacy of trust, excellence, and professional service in
              chartered accountancy spanning over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20'>
        <div className='container mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <span className='text-accent font-semibold text-lg'>
                Our Story
              </span>
              <h2 className='text-4xl font-serif font-bold text-foreground mt-4 mb-6'>
                Built on Trust, Driven by Excellence
              </h2>
              <div className='space-y-6 text-muted-foreground leading-relaxed'>
                <p>
                  Established in 1999 by CA Navkar Bhavsar, our firm was founded
                  with a clear vision – to deliver reliable and comprehensive
                  financial solutions that help businesses and individuals grow
                  with confidence. From a modest beginning, we have evolved into
                  a trusted name in the field of chartered accountancy.
                </p>
                <p>
                  Our growth has been driven by integrity, professionalism, and
                  a client-first approach. Over the years, we have expanded our
                  expertise across auditing, taxation, corporate advisory, and
                  compliance, while building a strong team of experienced
                  professionals committed to excellence.
                </p>
                <p>
                  Today, Navkar Bhavsar & Co. partners with clients from
                  startups to established enterprises across industries. With a
                  multidisciplinary approach and deep industry knowledge, we
                  provide solutions that address complex financial challenges
                  and create long-term value.
                </p>
              </div>
            </div>

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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20 bg-gradient-secondary'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-serif font-bold text-foreground mb-6'>
              Our Mission & Vision
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-12'>
            <div className='card-professional p-10 text-center'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Target className='w-8 h-8 text-primary-foreground' />
              </div>
              <h3 className='text-2xl font-serif font-bold text-foreground mb-4'>
                Our Mission
              </h3>
              <p className='text-muted-foreground leading-relaxed text-start'>
                To provide top-tier, client-focused financial and professional
                services, including accounting, auditing, taxation, and
                advisory, while ensuring integrity, confidentiality, and
                excellence in every engagement. We strive to empower clients
                with tailored solutions that optimize growth, compliance, and
                financial performance.
              </p>
            </div>

            <div className='card-professional p-10 text-center'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <Eye className='w-8 h-8 text-accent-foreground' />
              </div>
              <h3 className='text-2xl font-serif font-bold text-foreground mb-4'>
                Our Vision
              </h3>
              <p className='text-muted-foreground leading-relaxed text-start'>
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

      {/* Values */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-6'>
          {/* Vision Statement */}
          <div className='text-center mb-16'>
            <span className='text-muted-foreground font-semibold text-lg'>
              Vision Statement
            </span>
            <h2 className='text-4xl font-serif font-bold text-foreground mt-4 mb-6'>
              Partnering for Growth, Leading with Integrity
            </h2>
            <p className='text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed'>
              Our priority is to be a customer-oriented firm that delivers
              professional services with excellence. We aspire to become a
              trusted partner in our clients’ success by implementing strategic
              solutions faster, with greater efficiency, and with meaningful
              results.
            </p>
          </div>

          {/* Core Values */}
          <div className='text-center mb-12'>
            {/* <span className='text-muted-foreground font-semibold text-lg'>
              Core Values
            </span> */}
            <h3 className='text-3xl font-serif font-bold text-foreground mt-4 mb-6'>
              What Defines Our Work Culture
            </h3>
          </div>

          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
            {/* Teamwork */}
            <div className='card-professional p-8 text-center hover:shadow-strong transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-primary-foreground'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87M9 4a4 4 0 100 8 4 4 0 000-8zm6 0a4 4 0 100 8 4 4 0 000-8z' />
                </svg>
              </div>
              <h4 className='text-xl font-serif font-bold text-foreground mb-4'>
                Teamwork
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                Building a motivated and committed team of professionals working
                together to achieve a common goal.
              </p>
            </div>

            {/* Professionalism */}
            <div className='card-professional p-8 text-center hover:shadow-strong transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-primary-foreground'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h4 className='text-xl font-serif font-bold text-foreground mb-4'>
                Professionalism
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                Upholding integrity and confidentiality, ensuring transparency
                in client dealings, and proactively addressing client needs.
              </p>
            </div>

            {/* Personalized Service */}
            <div className='card-professional p-8 text-center hover:shadow-strong transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-primary-foreground'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 11c0 .341-.034.674-.1.993A4 4 0 1116 15h-1m-4 6a9 9 0 100-18 9 9 0 000 18z' />
                </svg>
              </div>
              <h4 className='text-xl font-serif font-bold text-foreground mb-4'>
                Personalized Service
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                Delivering solutions tailored to client-specific needs with
                sensitivity and care.
              </p>
            </div>

            {/* Specialization */}
            <div className='card-professional p-8 text-center hover:shadow-strong transition-all duration-300'>
              <div className='w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-8 h-8 text-primary-foreground'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                >
                  <path d='M9.75 17L15 12l-5.25-5' />
                </svg>
              </div>
              <h4 className='text-xl font-serif font-bold text-foreground mb-4'>
                Specialization
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                Assigning skilled and specialized professionals best suited to
                every assignment for superior results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className='py-20 bg-gradient-secondary'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <span className='text-muted-foreground font-semibold text-lg'>
              Our Team
            </span>
            <h2 className='text-4xl font-serif font-bold text-foreground mt-4 mb-6'>
              Meet Our Experienced Professionals
            </h2>
          </div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {team.map((member, index) => (
              <div
                key={index}
                className='card-professional overflow-hidden group hover:shadow-strong transition-all duration-500'
              >
                <div className='relative h-96 overflow-hidden'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h- object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300'></div>
                  <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='text-center text-white'>
                      <p className='font-semibold mb-2'>Specialization</p>
                      <p className='text-sm'>{member.specialization}</p>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <h3 className='text-xl font-serif font-bold text-foreground mb-2'>
                    {member.name}
                  </h3>
                  <p className='text-accent font-medium mb-2'>
                    {member.position}
                  </p>
                  {/* <p className='text-muted-foreground text-sm mb-4'>
                    {member.experience}
                  </p> */}

                  <div className='flex flex-wrap gap-2'>
                    {member.qualifications.map((qual, qualIndex) => (
                      <span
                        key={qualIndex}
                        className='bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs'
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
