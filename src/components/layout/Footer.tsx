import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Our Services', href: '/services' },
    { title: 'Our Clients', href: '/clients' },
    { title: 'Articles', href: '/articles' },
    { title: 'Contact Us', href: '/contact' }
  ]

  const services = [
    {
      title: 'Gujarat VAT & Service TAX',
      href: '/services/gujarat-vat-service-tax'
    },
    { title: 'Corporate Financial', href: '/services/corporate-financial' },
    { title: 'Auditing Assurance', href: '/services/auditing-assurance' },
    { title: 'Business Advisory', href: '/services/advisory' },
    { title: 'Accounting Services', href: '/services/accounting-services' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className='bg-primary text-primary-foreground'>
      {/* Main Footer */}
      <div className='container mx-auto px-6 py-16'>
        <div className='grid lg:grid-cols-4 gap-12'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-3 mb-6'>
              <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center'>
                <span className='text-accent-foreground font-bold text-xl font-serif'>
                  B
                </span>
              </div>
              <div>
                <h3 className='text-xl font-serif font-bold'>
                  Navkar Bhavsar & Co.
                </h3>
                <p className='text-sm text-muted-foreground'>
                  Chartered Accountant
                </p>
              </div>
            </div>

            <p className='text-primary-foreground/80 leading-relaxed mb-6'>
              Your trusted partner for comprehensive financial solutions. Over
              25 years of excellence in chartered accountancy services.
            </p>

            <div className='flex space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className='w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Quick Links</h4>
            <ul className='space-y-3'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className='text-primary-foreground/80 hover:text-accent transition-colors duration-300'
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Our Services</h4>
            <ul className='space-y-3'>
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className='text-primary-foreground/80 hover:text-accent transition-colors duration-300'
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Contact Information</h4>
            <div className='space-y-4'>
              {/* Address */}
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-accent mt-1 flex-shrink-0' />
                <div className='text-primary-foreground/80 text-sm leading-relaxed'>
                  Navkar Bhavsar & Co., <br />
                  Privillion East Wing, 2nd Floor, <br />
                  Behind Iskon Temple, SG Highway, <br />
                  Ahmedabad, Gujarat - 380054
                </div>
              </div>

              {/* Mobile */}
              <div className='flex items-start space-x-3'>
                <Phone className='w-5 h-5 text-accent mt-1 flex-shrink-0' />
                <div className='text-primary-foreground/80 text-sm leading-relaxed'>
                  +91 - 7567564286, +91 - 8989696886
                </div>
              </div>

              {/* Email */}
              <div className='flex items-start space-x-3'>
                <Mail className='w-5 h-5 text-accent mt-1 flex-shrink-0' />
                <div className='text-primary-foreground/80 text-sm leading-relaxed'>
                  Navkar@navkarbhavsarandco.com <br />
                  Contact@navkarbhavsarandco.com
                </div>
              </div>

              {/* Business Hours */}
              <div className='flex items-start space-x-3'>
                <Clock className='w-5 h-5 text-accent mt-1 flex-shrink-0' />
                <div className='text-primary-foreground/80 text-sm leading-relaxed'>
                  Mon - Fri: 9:00 AM - 7:00 PM <br />
                  Sat: 9:00 AM - 2:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='border-t border-primary-foreground/10'>
        <div className='container mx-auto px-6 py-12'>
          <div className='max-w-2xl mx-auto text-center'>
            <h3 className='text-2xl font-serif font-bold mb-4'>Stay Updated</h3>
            <p className='text-primary-foreground/80 mb-6'>
              Subscribe to our newsletter for the latest tax updates, regulatory
              changes, and business insights.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py- bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent'
              />
              <Button
                variant='secondary'
                className='bg-accent text-accent-foreground hover:bg-accent/90'
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='border-t border-primary-foreground/10'>
        <div className='container mx-auto px-6 py-6'>
          <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
            {/* Left Section: Copyright + Powered by */}
            <div className='text-primary-foreground/80 text-sm mt-4 md:mt-0 text-center md:text-left'>
              Copyright © {currentYear} Navkar Bhavsar & Co. | Powered by{' '}
              <span className='font-semibold'>Loopera</span>
            </div>

            {/* Right Section: Links */}
            <div className='flex flex-row flex-wrap justify-center md:justify-end space-x-6 text-sm mb-4 md:mb-0'>
              <Link
                to='/privacy'
                className='text-primary-foreground/80 hover:text-accent transition-colors'
              >
                Privacy Policy
              </Link>
              <Link
                to='/terms'
                className='text-primary-foreground/80 hover:text-accent transition-colors'
              >
                Terms of Service
              </Link>
              <Link
                to='/sitemap'
                className='text-primary-foreground/80 hover:text-accent transition-colors'
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer