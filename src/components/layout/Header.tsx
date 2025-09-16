import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActivePath = (path: string) => location.pathname === path

  const servicesItems = [
    {
      title: 'Gujarat Vat & Service Tax',
      href: '/services/gujarat-vat-service-tax'
    },
    { title: 'Direct Taxation', href: '/services/direct-taxation' },
    { title: 'Corporate Financial', href: '/services/corporate-financial' },
    { title: 'BPO', href: '/services/bpo' },
    { title: 'Corporate Law', href: '/services/corporate-law' },
    { title: 'Auditing & Assurance', href: '/services/auditing-assurance' },
    { title: 'Business Advisory', href: '/services/advisory' },
    { title: 'Accounting Services', href: '/services/accounting-services' },
  ]

  const knowledgeBankItems = [
    {
      title: 'Calculators',
      children: [
        {
          title: 'GST Rate Calculator',
          href: '/knowledge/calculators/gst-rate'
        },
        {
          title: 'GST Calculator',
          href: '/knowledge/calculators/gst'
        },
        {
          title: 'Tax Calculator',
          href: '/knowledge/calculators/tax'
        },
        {
          title: 'TDS Calculator',
          href: '/knowledge/calculators/tds'
        },
        {
          title: 'Calculate Net Profit',
          href: '/knowledge/calculators/net-profit'
        },
        {
          title: 'Calculate Net Worth',
          href: '/knowledge/calculators/net-worth'
        },
        {
          title: 'Effective Capital',
          href: '/knowledge/calculators/effective-capital'
        },
        {
          title: 'HRA Calculator',
          href: '/knowledge/calculators/hra'
        },
        {
          title: 'NSC Calculator',
          href: '/knowledge/calculators/nsc'
        },
        {
          title: 'EMI Calculator',
          href: '/knowledge/calculators/emi'
        },
        {
          title: 'Auto Loan Calculator',
          href: '/knowledge/calculators/auto-loan'
        },
        {
          title: 'Home Loan Calculator',
          href: '/knowledge/calculators/home-loan'
        },
        {
          title: 'Get No. Of Installments',
          href: '/knowledge/calculators/installments'
        },
        {
          title: 'RERA Calculator',
          children: [
            {
              title: 'RERA Interest Calculator',
              href: '/knowledge/calculators/rera/interest'
            },
            {
              title: 'RERA Late Delivery Penalty',
              href: '/knowledge/calculators/rera/late-delivery'
            },
            {
              title: 'RERA Compensation Calculator',
              href: '/knowledge/calculators/rera/compensation'
            }
          ]
        }
      ]
    },
    {
      title: 'Bulletins',
      children: [
        { title: 'Latest News', href: '/knowledge/bulletins/news' },
        { title: 'Circulars', href: '/knowledge/bulletins/circulars' },
        { title: 'Notifications', href: '/knowledge/bulletins/notifications' }
      ]
    },
    {
      title: 'Utilities',
      children: [
        { title: 'Tax Calendar', href: '/knowledge/utilities/tax-calendar' },
        { title: 'Due Date Reminders', href: '/knowledge/utilities/reminders' }
      ]
    },
    {
      title: 'Links',
      children: [
        { title: 'Income Tax Dept.', href: 'https://incometaxindia.gov.in' },
        { title: 'GST Portal', href: 'https://www.gst.gov.in' }
      ]
    },
    {
      title: 'Acts',
      children: [
        { title: 'Income Tax Act', href: '/knowledge/acts/income-tax' },
        { title: 'GST Act', href: '/knowledge/acts/gst' }
      ]
    },
    {
      title: 'Rules',
      children: [
        { title: 'Company Law Rules', href: '/knowledge/rules/company-law' },
        { title: 'GST Rules', href: '/knowledge/rules/gst' }
      ]
    },
    {
      title: 'Forms',
      children: [
        { title: 'ITR Forms', href: '/knowledge/forms/itr' },
        { title: 'GST Forms', href: '/knowledge/forms/gst' },
        { title: 'ROC Forms', href: '/knowledge/forms/roc' }
      ]
    },
    // simple items
    { title: 'Tax Updates', href: '/knowledge/tax-updates' },
    { title: 'Compliance Calendar', href: '/knowledge/compliance' },
    { title: 'Case Studies', href: '/knowledge/case-studies' },
    { title: 'Downloads', href: '/knowledge/downloads' }
  ]

  const adminItems = [
    { title: 'Login', href: '/admin/login' },
    { title: 'Email Login', href: '/admin/email-login' },
    { title: 'Timesheet', href: '/admin/timesheet' }
  ]

  const isExternal = (href: string) => /^https?:\/\//.test(href)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-3 group'>
            <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300'>
              <span className='text-primary-foreground font-bold text-xl font-serif'>
                BS
              </span>
            </div>
            <div>
              <h1
                className={`text-2xl font-serif font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                Bihari Shah & Co.
              </h1>
              <p
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}
              >
                Chartered Accountant
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-8'>
            <Link
              to='/about'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-accent'
              } ${isActivePath('/about') ? 'text-accent' : ''}`}
            >
              About
            </Link>

            {/* Services */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                <span>Services</span>
                <ChevronDown className='w-4 h-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-60 bg-popover border border-border shadow-strong'>
                {servicesItems.map(s => (
                  <DropdownMenuItem key={s.title} asChild>
                    {isExternal(s.href) ? (
                      <a
                        href={s.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full px-4 py-2 text-sm hover:bg-accent/10 hover:text-accent transition-colors'
                      >
                        {s.title}
                      </a>
                    ) : (
                      <Link
                        to={s.href}
                        className='w-full px-4 py-2 text-sm hover:bg-accent/10 hover:text-accent transition-colors'
                      >
                        {s.title}
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Clients, Articles */}
            <Link
              to='/clients'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-accent'
              } ${isActivePath('/clients') ? 'text-accent' : ''}`}
            >
              Our Clients
            </Link>

            <Link
              to='/articles'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-accent'
              } ${isActivePath('/articles') ? 'text-accent' : ''}`}
            >
              Articles
            </Link>

            {/* Knowledge Bank with nested (sub) dropdowns */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                <span>Knowledge Bank</span>
                <ChevronDown className='w-4 h-4' />
              </DropdownMenuTrigger>

              <DropdownMenuContent className='w-60 bg-popover border border-border shadow-strong'>
                {knowledgeBankItems.map((item: any) =>
                  item.children ? (
                    <DropdownMenuSub key={item.title}>
                      {/* Main parent with submenu */}
                      <DropdownMenuSubTrigger
                        className='flex items-center justify-between px-4 py-2 text-sm transition-colors 
            hover:bg-accent hover:text-white focus:bg-accent/80 focus:text-white'
                      >
                        <span>{item.title}</span>
                        <ChevronRight className='w-4 h-4' />
                      </DropdownMenuSubTrigger>

                      {/* Submenu Content */}
                      <DropdownMenuSubContent className='w-56 bg-popover border border-border shadow-md'>
                        {item.children.map((sub: any) =>
                          sub.children ? (
                            // Nested submenu (for RERA Calculator type)
                            <DropdownMenuSub key={sub.title}>
                              <DropdownMenuSubTrigger
                                className='flex items-center justify-between px-4 py-2 text-sm transition-colors 
                    hover:bg-accent hover:text-white focus:bg-accent/80 focus:text-white'
                              >
                                <span>{sub.title}</span>
                                <ChevronRight className='w-4 h-4' />
                              </DropdownMenuSubTrigger>

                              <DropdownMenuSubContent className='w-56 bg-popover border border-border shadow-md'>
                                {sub.children.map((nested: any) => (
                                  <DropdownMenuItem
                                    key={nested.title}
                                    asChild
                                    className='px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-white'
                                  >
                                    {isExternal(nested.href) ? (
                                      <a
                                        href={nested.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='block w-full'
                                      >
                                        {nested.title}
                                      </a>
                                    ) : (
                                      <Link
                                        to={nested.href}
                                        className='block w-full'
                                      >
                                        {nested.title}
                                      </Link>
                                    )}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuSubContent>
                            </DropdownMenuSub>
                          ) : (
                            // Normal submenu item
                            <DropdownMenuItem
                              key={sub.title}
                              asChild
                              className='px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-white'
                            >
                              {isExternal(sub.href) ? (
                                <a
                                  href={sub.href}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='block w-full'
                                >
                                  {sub.title}
                                </a>
                              ) : (
                                <Link to={sub.href} className='block w-full'>
                                  {sub.title}
                                </Link>
                              )}
                            </DropdownMenuItem>
                          )
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  ) : (
                    // Normal single item
                    <DropdownMenuItem
                      key={item.title}
                      asChild
                      className='px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-white'
                    >
                      {isExternal(item.href) ? (
                        <a
                          href={item.href}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='block w-full'
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link to={item.href || '#'} className='block w-full'>
                          {item.title}
                        </Link>
                      )}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Other links */}
            <Link
              to='/query'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-accent'
              } ${isActivePath('/query') ? 'text-accent' : ''}`}
            >
              Query
            </Link>

            <Link
              to='/careers'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-accent'
              } ${isActivePath('/careers') ? 'text-accent' : ''}`}
            >
              Careers
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                <span>Admin</span>
                <ChevronDown className='w-4 h-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-48 bg-popover border border-border shadow-strong'>
                {adminItems.map(a => (
                  <DropdownMenuItem key={a.title} asChild>
                    <Link
                      to={a.href}
                      className='w-full px-4 py-2 text-sm hover:bg-accent/10 hover:text-accent transition-colors'
                    >
                      {a.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to='/contact'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-white hover:text-accent'
              } ${isActivePath('/contact') ? 'text-accent' : ''}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className='lg:hidden'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden mt-4 py-4 border-t border-border'>
            <div className='flex flex-col space-y-4'>
              <Link
                to='/about'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                About
              </Link>
              <Link
                to='/services'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Services
              </Link>
              <Link
                to='/clients'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Our Clients
              </Link>
              <Link
                to='/articles'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Articles
              </Link>
              <Link
                to='/knowledge'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Knowledge Bank
              </Link>
              <Link
                to='/query'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Query
              </Link>
              <Link
                to='/careers'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Careers
              </Link>
              <Link
                to='/admin'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Admin
              </Link>
              <Link
                to='/contact'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
