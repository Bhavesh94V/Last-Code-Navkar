import { useEffect, useRef } from 'react'
import { Download, FileText, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CompanyProfileSection = () => {
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

  const companyProfile = {
    icon: FileText,
    title: 'Company Profile',
    description:
      "Comprehensive overview of our firm's history, services, and expertise.",
    size: '2.5 MB',
    format: 'PDF',
    downloadLink: '/docs/BSC_Firm_Profile_Presentation.pdf' // public/docs/... folder me file rakhi ho
  }

  // ✅ File Download Function
  const handleDownload = (file: any) => {
    const link = document.createElement('a')
    link.href = file.downloadLink
    // agar custom naam rakhna ho to file.title use karo, warna actual filename use karne do
    link.download = file.downloadLink.split('/').pop() || `${file.title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      ref={sectionRef}
      className='py-20 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden'
    >
      <div className='container mx-auto px-6 relative'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='animate-on-scroll'>
            <span className='text-accent font-medium tracking-wide uppercase text-sm'>
              Company Resources
            </span>
            <h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-4'>
              Company Profile
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Download our official company profile with just one click. Secure,
              verified, and always up-to-date.
            </p>
          </div>
        </div>

        {/* Single Profile Card */}
        <div className='max-w-2xl mx-auto mb-16'>
          <div className='animate-on-scroll group relative p-[2px] rounded-2xl bg-gradient-to-r from-primary/80 to-accent/80 hover:from-primary hover:to-accent transition-all duration-500 shadow-xl'>
            <div className='bg-background rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6'>
              {/* Icon */}
              <div className='w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md'>
                <companyProfile.icon className='w-10 h-10 text-white' />
              </div>

              {/* Content */}
              <div className='flex-1 text-center sm:text-left'>
                <h3 className='text-2xl font-serif font-bold text-foreground mb-2'>
                  {companyProfile.title}
                </h3>
                <p className='text-muted-foreground mb-4 leading-relaxed'>
                  {companyProfile.description}
                </p>

                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
                  <div className='flex items-center justify-center sm:justify-start gap-3 text-sm text-muted-foreground'>
                    <span className='px-2 py-1 bg-secondary rounded-md text-foreground text-xs font-medium'>
                      {companyProfile.format}
                    </span>
                    <span>{companyProfile.size}</span>
                  </div>

                  <Button
                    onClick={() => handleDownload(companyProfile)}
                    size='lg'
                    className='btn-primary w-full sm:w-auto group/btn relative overflow-hidden'
                  >
                    <Download className='w-5 h-5 mr-2 group-hover/btn:animate-bounce' />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className='animate-on-scroll'>
          <div className='bg-gradient-to-tr from-secondary/40 to-background border border-border rounded-2xl p-10 text-center shadow-inner'>
            <div className='w-16 h-16 bg-gradient-to-tr from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md'>
              <Shield className='w-8 h-8 text-white' />
            </div>
            <h3 className='text-2xl font-serif font-bold text-foreground mb-4'>
              Secure Access
            </h3>
            <p className='text-muted-foreground leading-relaxed max-w-xl mx-auto'>
              The company profile PDF is protected with enterprise-grade
              encryption and delivered via secure channels. Each download is
              logged for compliance purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyProfileSection
