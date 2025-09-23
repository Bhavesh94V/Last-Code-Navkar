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
    { title: 'Accounting Services', href: '/services/accounting-services' }
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
        { title: 'RBI SEBI', href: '/knowledge/bulletins/rbi-sebi' },
        { title: 'Notification', href: '/knowledge/bulletins/notification' },
        { title: 'Circular', href: '/knowledge/bulletins/circular' },
        { title: 'Income Tax', href: '/knowledge/bulletins/income-tax' },
        { title: 'Service Tax', href: '/knowledge/bulletins/service-tax' },
        {
          title: 'Central Sales Tax',
          href: '/knowledge/bulletins/central-sales-tax'
        },
        {
          title: 'Excise Matters',
          href: '/knowledge/bulletins/excise-matters'
        },
        { title: 'Customs', href: '/knowledge/bulletins/customs' },
        { title: 'Company Law', href: '/knowledge/bulletins/company-law' },
        { title: 'Labour Laws', href: '/knowledge/bulletins/labour-laws' },
        { title: 'FEMA', href: '/knowledge/bulletins/fema' },
        {
          title: 'The LLP Act 2008',
          href: '/knowledge/bulletins/llp-act-2008'
        },
        {
          title: 'Accounting Standard (INDAS)',
          href: '/knowledge/bulletins/indas'
        },
        { title: 'Others', href: '/knowledge/bulletins/others' },
        { title: 'GST', href: '/knowledge/bulletins/gst' },
        { title: 'VAT', href: '/knowledge/bulletins/vat' },
        { title: 'IGST', href: '/knowledge/bulletins/igst' },
        { title: 'UTGST', href: '/knowledge/bulletins/utgst' },
        {
          title: 'VAT',
          children: [
            { title: 'Delhi VAT', href: '/knowledge/bulletins/vat/delhi' },
            {
              title: 'Maharashtra VAT',
              href: '/knowledge/bulletins/vat/maharashtra'
            },
            {
              title: 'Gujarat VAT',
              href: '/knowledge/bulletins/vat/gujarat'
            },
            {
              title: 'Telangana VAT',
              href: '/knowledge/bulletins/vat/telangana'
            },
            {
              title: 'Tamil Nadu VAT',
              href: '/knowledge/bulletins/vat/tamilnadu'
            }
          ]
        },
        { title: 'IBC Regulation', href: '/knowledge/bulletins/ibc-regulation' }
      ]
    },
    {
      title: 'Utilities',
      children: [
        { title: 'Tax Calendar', href: '/knowledge/utilities/tax-calendar' },
        { title: 'Due Date Reminders', href: '/knowledge/utilities/reminders' },
        { title: 'Rates of TDS', href: '/knowledge/utilities/rates-tds' },
        {
          title: 'TDS Rates for N.R.I u/s 195',
          href: '/knowledge/utilities/tds-nri-195'
        },
        {
          title: 'Rates of Income Tax',
          href: '/knowledge/utilities/rates-income-tax'
        },
        {
          title: 'Depreciation Rates Companies Act',
          href: '/knowledge/utilities/depreciation-companies-act'
        },
        {
          title: 'Depreciation Rates Income Tax Act',
          href: '/knowledge/utilities/depreciation-income-tax'
        },
        {
          title: 'ROC Filing Fees (Cos Act, 2013)',
          href: '/knowledge/utilities/roc-filing-fees'
        },
        {
          title: 'ROC Fee Structure (Cos Act, 2013)',
          href: '/knowledge/utilities/roc-fee-structure'
        },
        {
          title: 'Cost Inflation Index',
          href: '/knowledge/utilities/cost-inflation-index'
        },
        { title: 'IFSC Codes', href: '/knowledge/utilities/ifsc-codes' },
        { title: 'MICR Codes', href: '/knowledge/utilities/micr-codes' },
        {
          title: 'Rates of NSC Interest',
          href: '/knowledge/utilities/nsc-interest'
        },
        {
          title: 'Gold and Silver Rates',
          href: '/knowledge/utilities/gold-silver'
        },
        {
          title: 'Rates of Stamp Duty',
          href: '/knowledge/utilities/stamp-duty'
        },
        { title: 'LLP Fees', href: '/knowledge/utilities/llp-fees' },
        {
          title: 'National Industries Classification',
          href: '/knowledge/utilities/nic'
        },
        { title: 'HSN Rate List', href: '/knowledge/utilities/hsn-rate-list' },
        {
          title: 'Deduction u/s 80TTA Vs 80TTB',
          href: '/knowledge/utilities/80tta-vs-80ttb'
        }
      ]
    },
    {
      title: 'Links',
      children: [
        { title: 'Quick Links', href: '/knowledge/links/quick-links' },
        { title: 'Important Links', href: '/knowledge/links/important-links' },
        { title: 'GST/VAT Links', href: '/knowledge/links/gst-vat-links' },
        {
          title: 'Ease Of Doing Business',
          href: '/knowledge/links/ease-of-doing-business'
        }
      ]
    },
    {
      title: 'Acts',
      children: [
        {
          title: 'Direct Tax',
          children: [
            {
              title: 'Income Tax Act',
              href: '/knowledge/acts/direct-tax/income-tax'
            },
            {
              title: 'Wealth Tax Act',
              href: '/knowledge/acts/direct-tax/wealth-tax'
            },
            {
              title: 'Income Declaration Scheme 2016',
              href: '/knowledge/acts/direct-tax/income-declaration-scheme'
            }
          ]
        },
        {
          title: 'Indirect Tax',
          children: [
            {
              title: 'Service Tax (Finance Act, 1944)',
              href: '/knowledge/acts/indirect-tax/service-tax'
            },
            {
              title: 'Central Sales Tax Act, 1956',
              href: '/knowledge/acts/indirect-tax/central-sales-tax'
            },
            {
              title: 'The Central Excise Act, 1944',
              href: '/knowledge/acts/indirect-tax/central-excise'
            },
            {
              title: 'Custom Act, 1962',
              href: '/knowledge/acts/indirect-tax/custom-act'
            },
            {
              title: 'Entry Tax Act',
              href: '/knowledge/acts/indirect-tax/entry-tax'
            }
          ]
        },
        {
          title: 'Corporate Laws',
          children: [
            {
              title: 'Companies Act, 2013',
              href: '/knowledge/acts/corporate/companies-act-2013'
            },
            {
              title: 'Companies Act, 1956',
              href: '/knowledge/acts/corporate/companies-act-1956'
            },
            {
              title: 'LLP Act',
              href: '/knowledge/acts/corporate/llp-act'
            },
            {
              title: 'SEBI Act, 1992',
              href: '/knowledge/acts/corporate/sebi-act'
            }
          ]
        },
        {
          title: 'VAT Laws',
          children: [
            {
              title: 'Delhi Value Added Tax Act, 2004',
              href: '/knowledge/acts/vat/delhi'
            },
            {
              title: 'MVAT Act, 2002',
              href: '/knowledge/acts/vat/maharashtra'
            },
            {
              title: 'West Bengal VAT Act, 2003',
              href: '/knowledge/acts/vat/west-bengal'
            },
            {
              title: 'Tamilnadu VAT ACT, 2006',
              href: '/knowledge/acts/vat/tamilnadu'
            },
            {
              title: 'Karnataka Value Added Tax Act, 2003',
              href: '/knowledge/acts/vat/karnataka'
            },
            {
              title: 'Gujarat Value Added Tax Act, 2003',
              href: '/knowledge/acts/vat/gujarat'
            },
            {
              title: 'UP VAT Act, 2008',
              href: '/knowledge/acts/vat/uttar-pradesh'
            },
            {
              title: 'Rajasthan Value Added Tax Act, 2003',
              href: '/knowledge/acts/vat/rajasthan'
            },
            {
              title: 'Punjab Value Added Tax Act',
              href: '/knowledge/acts/vat/punjab'
            },
            {
              title: 'Haryana Value Added Tax Act',
              href: '/knowledge/acts/vat/haryana'
            },
            {
              title: 'Telangana VAT Act 2005',
              href: '/knowledge/acts/vat/telangana'
            },
            {
              title: 'Andhra Pradesh VAT Act, 2005',
              href: '/knowledge/acts/vat/andhra-pradesh'
            },
            {
              title: 'Bihar Value Added Tax Act, 2005',
              href: '/knowledge/acts/vat/bihar'
            }
          ]
        },
        {
          title: 'Other Statutes',
          children: [
            { title: 'ESI Act, 1948', href: '/knowledge/acts/other/esi-1948' },
            { title: 'PF Act, 1952', href: '/knowledge/acts/other/pf-1952' },
            {
              title: 'Profession Tax Act',
              href: '/knowledge/acts/other/profession-tax'
            },
            {
              title: 'The Indian Partnership Act, 1932',
              href: '/knowledge/acts/other/partnership-1932'
            },
            {
              title: 'Societies Registration Act, 1860',
              href: '/knowledge/acts/other/societies-registration-1860'
            },
            {
              title: 'Competition Act, 2002',
              href: '/knowledge/acts/other/competition-2002'
            },
            {
              title: 'Reserve Bank of India Act, 1934',
              href: '/knowledge/acts/other/rbi-1934'
            },
            {
              title: 'MRTP Act, 1969',
              href: '/knowledge/acts/other/mrtp-1969'
            },
            {
              title: 'Equalisation Levy Act, 2016',
              href: '/knowledge/acts/other/equalisation-levy-2016'
            },
            {
              title: 'Right To Information Act, 2005',
              href: '/knowledge/acts/other/rti-2005'
            },
            { title: 'FEMA, 1999', href: '/knowledge/acts/other/fema-1999' },
            {
              title: 'Maharashtra RERA',
              href: '/knowledge/acts/other/maharashtra-rera'
            },
            { title: 'RERA, 2016', href: '/knowledge/acts/other/rera-2016' },
            {
              title: 'Insolvency & Bankruptcy Code, 2016',
              href: '/knowledge/acts/other/ibc-2016'
            },
            {
              title: 'Benami Property Act 1988',
              href: '/knowledge/acts/other/benami-property-1988'
            }
          ]
        },
        {
          title: 'GST Laws',
          children: [
            { title: 'IGST Act, 2017', href: '/knowledge/acts/gst/igst' },
            { title: 'CGST Tax Act, 2017', href: '/knowledge/acts/gst/cgst' },
            { title: 'UTGST Act', href: '/knowledge/acts/gst/utgst' },
            {
              title: 'GST (Compensation to States) Act',
              href: '/knowledge/acts/gst/Compensation-to-states'
            }
          ]
        }
      ]
    },
    {
      title: 'Rules',
      children: [
        {
          title: 'Direct Tax Rules',
          children: [
            {
              title: 'Income Tax Rules',
              href: '/knowledge/rules/direct-tax/income-tax'
            },
            {
              title: 'Wealth Tax Rules 1957',
              href: '/knowledge/rules/direct-tax/wealth-tax-1957'
            },
            {
              title: 'Income Declaration Scheme Rules 2016',
              href: '/knowledge/rules/direct-tax/income-declaration-2016'
            }
          ]
        },
        {
          title: 'Indirect Tax Rules',
          children: [
            {
              title: 'GST Valuation Rules, 2016',
              href: '/knowledge/rules/indirect-tax/gst-valuation-2016'
            },
            {
              title: 'Service Tax Rules',
              href: '/knowledge/rules/indirect-tax/service-tax'
            },
            {
              title: 'CST (Delhi) Rules, 2005',
              href: '/knowledge/rules/indirect-tax/cst-delhi-2005'
            },
            {
              title: 'CST (Maharashtra) Rules',
              href: '/knowledge/rules/indirect-tax/cst-maharashtra'
            },
            {
              title: 'Customs Valuation Rules',
              href: '/knowledge/rules/indirect-tax/customs-valuation'
            },
            {
              title: 'Cenvat Credit Rules, 2017',
              href: '/knowledge/rules/indirect-tax/cenvat-credit-2017'
            },
            {
              title: 'Entry Tax Rules',
              href: '/knowledge/rules/indirect-tax/entry-tax'
            }
          ]
        },
        {
          title: 'Corporate Laws Rules',
          children: [
            {
              title: 'Companies Rules, 2014',
              href: '/knowledge/rules/corporate-laws/comapnies-rule-2014'
            },
            {
              title: 'LLP Rules, 2009',
              href: '/knowledge/rules/corporate-laws/llp-rules-2009'
            },
            {
              title: 'LLP Winding Up Rules, 2012',
              href: '/knowledge/rules/corporate-laws/llp-winding-up-rules'
            },
            {
              title: 'Cos Unpaid Dividend Rules, 1978',
              href: '/knowledge/rules/corporate-laws/cos-unpaid-dividend-rules-1978'
            }
          ]
        },
        {
          title: 'VAT Laws Rules',
          children: [
            {
              title: 'Delhi VAT Rules, 2005',
              href: '/knowledge/rules/vat-laws/delhi-2005'
            },
            {
              title: 'Maharashtra VAT Rules, 2005',
              href: '/knowledge/rules/vat-laws/maharashtra-2005'
            },
            {
              title: 'West Bengal VAT Rules, 2005',
              href: '/knowledge/rules/vat-laws/west-bengal-2005'
            },
            {
              title: 'Tamilnadu VAT Rules, 2007',
              href: '/knowledge/rules/vat-laws/tamilnadu-2007'
            },
            {
              title: 'Karnataka VAT Rules, 2005',
              href: '/knowledge/rules/vat-laws/karnataka-2005'
            },
            {
              title: 'Gujarat VAT Rules, 2006',
              href: '/knowledge/rules/vat-laws/gujarat-2006'
            },
            {
              title: 'Uttar Pradesh VAT Rules, 2008',
              href: '/knowledge/rules/vat-laws/uttar-pradesh-2008'
            },
            {
              title: 'Rajasthan VAT Rules, 2006',
              href: '/knowledge/rules/vat-laws/rajasthan-2006'
            },
            {
              title: 'Punjab VAT Rules',
              href: '/knowledge/rules/vat-laws/punjab'
            },
            {
              title: 'Haryana VAT Rules, 2003',
              href: '/knowledge/rules/vat-laws/haryana-2003'
            },
            {
              title: 'Telangana VAT Rules 2005',
              href: '/knowledge/rules/vat-laws/telangana-2005'
            },
            {
              title: 'Andhra Pradesh VAT Rules, 2005',
              href: '/knowledge/rules/vat-laws/andhra-pradesh-2005'
            },
            {
              title: 'Bihar Value Added Tax Rules, 2005',
              href: '/knowledge/rules/vat-laws/bihar-2005'
            }
          ]
        },
        {
          title: 'Other Statutes',
          children: [
            {
              title: 'Profession Tax Rules',
              href: '/knowledge/rules/other/profession-tax'
            },
            {
              title: 'NBFC Deposits Directions, 1998',
              href: '/knowledge/rules/other/nbfc-deposits-1998'
            },
            {
              title: 'NBFC & Misc NBC (Advt) Rules, 1977',
              href: '/knowledge/rules/other/nbfc-misc-1977'
            },
            {
              title: 'NBFC Auditor Report Directions, 2008',
              href: '/knowledge/rules/other/nbfc-auditor-2008'
            },
            {
              title: 'Delhi Labour Welfare Fund Rules, 1997',
              href: '/knowledge/rules/other/delhi-labour-1997'
            },
            {
              title: 'Cost records and audit Rules, 2014',
              href: '/knowledge/rules/other/cost-audit-2014'
            },
            {
              title: 'Baggage Rules, 2016',
              href: '/knowledge/rules/other/baggage-2016'
            },
            {
              title: 'Equalisation Levy Rules, 2016',
              href: '/knowledge/rules/other/equalisation-levy-2016'
            },
            {
              title: 'NCLT And NCLAT Rules',
              href: '/knowledge/rules/other/nclt-nclat'
            },
            {
              title: 'Insolvency & Bankruptcy Rules',
              href: '/knowledge/rules/other/ibc-rules'
            },
            {
              title: 'Benami Property Rules, 2016',
              href: '/knowledge/rules/other/benami-property-2016'
            }
          ]
        },
        {
          title: 'GST Rules',
          children: [
            { title: 'CGST Rules 2017', href: '/knowledge/rules/gst/cgst' },
            { title: 'IGST Rules, 2017', href: '/knowledge/rules/gst/igst' }
          ]
        }
      ]
    },
    {
      title: 'Forms',
      children: [
        {
          title: 'Income Tax Forms',
          href: '/knowledge/forms/income-tax'
        },
        {
          title: 'ROC Forms (Cos Act, 2013)',
          href: '/knowledge/forms/roc-2013'
        },
        {
          title: 'ROC Forms (Cos Act, 1956)',
          href: '/knowledge/forms/roc-1956'
        },
        {
          title: 'Income Declaration Forms',
          href: '/knowledge/forms/income-declaration'
        },
        {
          title: 'Wealth Tax Forms',
          href: '/knowledge/forms/wealth-tax'
        },
        {
          title: 'Service Tax Forms',
          href: '/knowledge/forms/service-tax'
        },
        {
          title: 'Companies Unpaid Dividend Forms',
          href: '/knowledge/forms/unpaid-dividend'
        },
        {
          title: 'NBFCs Forms',
          href: '/knowledge/forms/nbfcs'
        },
        {
          title: 'LLP Winding up',
          href: '/knowledge/forms/llp-winding-up'
        },
        {
          title: 'FEMA Forms',
          href: '/knowledge/forms/fema'
        },
        {
          title: 'LLP Forms',
          href: '/knowledge/forms/llp'
        },
        {
          title: 'CGST Forms',
          children: [
            {
              title: 'Accounts and Records',
              href: '/knowledge/forms/cgst/accounts-and-records'
            },
            { title: 'GST Forms', href: '/knowledge/forms/cgst/gst-forms' },
            {
              title: 'Advance Ruling',
              href: '/knowledge/forms/cgst/advance-ruling'
            },
            {
              title: 'Appeals and Revision',
              href: '/knowledge/forms/cgst/appeals-and-revision'
            },
            {
              title: 'Assessment and Audit',
              href: '/knowledge/forms/cgst/assessment-and-audit'
            },
            { title: 'Composition', href: '/knowledge/forms/cgst/composition' },
            {
              title: 'Demands and Recovery',
              href: '/knowledge/forms/cgst/demands-and-recovery'
            },
            {
              title: 'Input Tax Credit',
              href: '/knowledge/forms/cgst/input-tax-credit'
            },
            {
              title: 'Inspection, Search and Seizure',
              href: '/knowledge/forms/cgst/inspection-search-seizure'
            },
            {
              title: 'Offences and Penalties',
              href: '/knowledge/forms/cgst/offences-and-penalties'
            },
            {
              title: 'Payment of Tax',
              href: '/knowledge/forms/cgst/payment-of-tax'
            },
            { title: 'Refund', href: '/knowledge/forms/cgst/refund' },
            {
              title: 'Registration',
              href: '/knowledge/forms/cgst/registration'
            },
            { title: 'Returns', href: '/knowledge/forms/cgst/returns' },
            {
              title: 'Transitional Provisions',
              href: '/knowledge/forms/cgst/transitional-provisions'
            },
            {
              title: 'Value of Supply',
              href: '/knowledge/forms/cgst/value-of-supply'
            }
          ]
        }
      ]
    }
  ]

  const adminItems = [
    { title: 'Login', href: '/admin/login' },
    { title: 'Email Login', href: '/admin/email-login' },
    { title: 'Timesheet', href: '/admin/timesheet' }
  ]

  const isExternal = (href: string) => /^https?:\/\//.test(href)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-md'>
      <nav className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-3 group'>
            <div className='w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300'>
              <span className='text-primary-foreground font-bold text-xl font-serif'>
                NB
              </span>
            </div>
            <div>
              <h1 className='text-2xl font-serif font-bold text-primary transition-colors duration-300'>
                Navkar Bhavsar
              </h1>
              <p className='text-sm font-medium text-muted-foreground transition-colors duration-300'>
                CA & CS
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
                  : 'text-black hover:text-accent'
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
                    : 'text-black hover:text-accent'
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
                  : 'text-black hover:text-accent'
              } ${isActivePath('/clients') ? 'text-accent' : ''}`}
            >
              Our Clients
            </Link>

            <Link
              to='/articles'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-black hover:text-accent'
              } ${isActivePath('/articles') ? 'text-accent' : ''}`}
            >
              Articles
            </Link>

            {/* Knowledge Bank with nested (sub) dropdowns */}
            {/* <DropdownMenu>
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
                      <DropdownMenuSubTrigger
                        className='flex items-center justify-between px-4 py-2 text-sm transition-colors 
            hover:bg-accent hover:text-white focus:bg-accent/80 focus:text-white'
                      >
                        <span>{item.title}</span>
                        <ChevronRight className='w-4 h-4' />
                      </DropdownMenuSubTrigger>

                      <DropdownMenuSubContent className='w-56 bg-popover border border-border shadow-md'>
                        {item.children.map((sub: any) =>
                          sub.children ? (
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
            </DropdownMenu> */}

            {/* Other links */}
            <Link
              to='/query'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-black hover:text-accent'
              } ${isActivePath('/query') ? 'text-accent' : ''}`}
            >
              Query
            </Link>

            <Link
              to='/careers'
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-black hover:text-accent'
              } ${isActivePath('/careers') ? 'text-accent' : ''}`}
            >
              Careers
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-black hover:text-accent'
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
                  : 'text-black hover:text-accent'
              } ${isActivePath('/contact') ? 'text-accent' : ''}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className={`lg:hidden rounded-md p-2 transition-colors duration-300 ${
              isMobileMenuOpen ? 'bg-primary text-white' : 'text-foreground'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className='w-10 h-10' />
            ) : (
              <Menu className='w-10 h-10' />
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
              {/* <Link
                to='/knowledge'
                className='text-sm font-medium text-foreground hover:text-accent'
              >
                Knowledge Bank
              </Link> */}
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
