// 'use client'

// import type React from 'react'
// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue
// } from '@/components/ui/select'
// import Header from '@/components/layout/Header'
// import Footer from '@/components/layout/Footer'

// export default function CareersPage () {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNo: '',
//     gender: '',
//     position: '',
//     dateOfBirth: '',
//     qualification: '',
//     portfolio: '',
//     resume: null as File | null,
//     lastCompany: '',
//     experienceYear: '',
//     experienceMonth: '',
//     reference: ''
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log('Application submitted:', formData)
//     // Handle form submission here
//   }

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null
//     setFormData({ ...formData, resume: file })
//   }

//   return (
//     <div className='min-h-screen bg-gradient-hero flex flex-col mt-10'>
//       <Header />

//       {/* Main Content */}
//       <div className='pt-24 pb-16 px-4'>
//         <div className='max-w-4xl mx-auto'>
//           <div className='bg-white rounded-lg shadow-lg p-8'>
//             {/* Header */}
//             <div className='text-center mb-8'>
//               <h1 className='text-2xl font-semibold text-gray-800 tracking-wide'>
//                 -APPLY HERE-
//               </h1>
//               <p className='mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto'>
//                 We nurture and cultivate a sense of pride in the work and create
//                 team leaders. Your growth chart will be governed by well-defined
//                 transparent policies of the firm. Apply via the form given below
//                 and meet us for face to face interview
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className='space-y-6'>
//               {/* Row 1: First name and Last name */}
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='firstName'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     First name <span className='text-red-500'>*</span>
//                   </Label>
//                   <Input
//                     id='firstName'
//                     type='text'
//                     value={formData.firstName}
//                     onChange={e =>
//                       setFormData({ ...formData, firstName: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                     required
//                   />
//                 </div>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='lastName'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Last name <span className='text-red-500'>*</span>
//                   </Label>
//                   <Input
//                     id='lastName'
//                     type='text'
//                     value={formData.lastName}
//                     onChange={e =>
//                       setFormData({ ...formData, lastName: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Row 2: Email and Mobile No */}
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='email'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Email <span className='text-red-500'>*</span>
//                   </Label>
//                   <Input
//                     id='email'
//                     type='email'
//                     value={formData.email}
//                     onChange={e =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                     required
//                   />
//                 </div>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='mobileNo'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Mobile No <span className='text-red-500'>*</span>
//                   </Label>
//                   <Input
//                     id='mobileNo'
//                     type='tel'
//                     value={formData.mobileNo}
//                     onChange={e =>
//                       setFormData({ ...formData, mobileNo: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Row 3: Gender and Position */}
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='gender'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Gender <span className='text-red-500'>*</span>
//                   </Label>
//                   <Select
//                     value={formData.gender}
//                     onValueChange={value =>
//                       setFormData({ ...formData, gender: value })
//                     }
//                     required
//                   >
//                     <SelectTrigger className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'>
//                       <SelectValue placeholder='Select..' />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value='male'>Male</SelectItem>
//                       <SelectItem value='female'>Female</SelectItem>
//                       <SelectItem value='other'>Other</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='position'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Position you are applying for
//                   </Label>
//                   <Input
//                     id='position'
//                     type='text'
//                     value={formData.position}
//                     onChange={e =>
//                       setFormData({ ...formData, position: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                   />
//                 </div>
//               </div>

//               {/* Row 4: Date of Birth and Highest Qualification */}
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='dateOfBirth'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Date Of Birth (DD/MM/YYYY){' '}
//                     <span className='text-red-500'>*</span>
//                   </Label>
//                   <Input
//                     id='dateOfBirth'
//                     type='text'
//                     placeholder='DD/MM/YYYY'
//                     value={formData.dateOfBirth}
//                     onChange={e =>
//                       setFormData({ ...formData, dateOfBirth: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                     required
//                   />
//                 </div>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='qualification'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Highest Qualification
//                   </Label>
//                   <Input
//                     id='qualification'
//                     type='text'
//                     value={formData.qualification}
//                     onChange={e =>
//                       setFormData({
//                         ...formData,
//                         qualification: e.target.value
//                       })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                   />
//                 </div>
//               </div>

//               {/* Row 5: Portfolio website and Upload Resume */}
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='portfolio'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Portfolio website
//                   </Label>
//                   <Input
//                     id='portfolio'
//                     type='url'
//                     placeholder='http://'
//                     value={formData.portfolio}
//                     onChange={e =>
//                       setFormData({ ...formData, portfolio: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                   />
//                 </div>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='resume'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Upload Resume <span className='text-red-500'>*</span> ( Max
//                     size 1 mb )
//                   </Label>
//                   <Input
//                     id='resume'
//                     type='file'
//                     accept='.pdf,.doc,.docx'
//                     onChange={handleFileChange}
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100'
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Row 6: Last company and Years of Experience */}
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//                 <div className='space-y-2'>
//                   <Label
//                     htmlFor='lastCompany'
//                     className='text-sm font-medium text-gray-700'
//                   >
//                     Last company you worked for
//                   </Label>
//                   <Input
//                     id='lastCompany'
//                     type='text'
//                     value={formData.lastCompany}
//                     onChange={e =>
//                       setFormData({ ...formData, lastCompany: e.target.value })
//                     }
//                     className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'
//                   />
//                 </div>
//                 <div className='space-y-2'>
//                   <Label className='text-sm font-medium text-gray-700'>
//                     Years Of Experience
//                   </Label>
//                   <div className='grid grid-cols-2 gap-4'>
//                     <div>
//                       <Label
//                         htmlFor='experienceYear'
//                         className='text-xs text-gray-600'
//                       >
                        
//                       </Label>
//                       <Select
//                         value={formData.experienceYear}
//                         onValueChange={value =>
//                           setFormData({ ...formData, experienceYear: value })
//                         }
//                       >
//                         <SelectTrigger className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'>
//                           <SelectValue placeholder='Select Year' />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value='0'>0</SelectItem>
//                           <SelectItem value='1'>1</SelectItem>
//                           <SelectItem value='2'>2</SelectItem>
//                           <SelectItem value='3'>3</SelectItem>
//                           <SelectItem value='4'>4</SelectItem>
//                           <SelectItem value='5'>5</SelectItem>
//                           <SelectItem value='6'>6</SelectItem>
//                           <SelectItem value='7'>7</SelectItem>
//                           <SelectItem value='8'>8</SelectItem>
//                           <SelectItem value='9'>9</SelectItem>
//                           <SelectItem value='10+'>10+</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div>
//                       <Label
//                         htmlFor='experienceMonth'
//                         className='text-xs text-gray-600'
//                       >
                        
//                       </Label>
//                       <Select
//                         value={formData.experienceMonth}
//                         onValueChange={value =>
//                           setFormData({ ...formData, experienceMonth: value })
//                         }
//                       >
//                         <SelectTrigger className='border-gray-300 focus:border-gray-500 focus:ring-gray-500'>
//                           <SelectValue placeholder='Select Month' />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value='0'>0</SelectItem>
//                           <SelectItem value='1'>1</SelectItem>
//                           <SelectItem value='2'>2</SelectItem>
//                           <SelectItem value='3'>3</SelectItem>
//                           <SelectItem value='4'>4</SelectItem>
//                           <SelectItem value='5'>5</SelectItem>
//                           <SelectItem value='6'>6</SelectItem>
//                           <SelectItem value='7'>7</SelectItem>
//                           <SelectItem value='8'>8</SelectItem>
//                           <SelectItem value='9'>9</SelectItem>
//                           <SelectItem value='10'>10</SelectItem>
//                           <SelectItem value='11'>11</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Reference/Comments/Questions */}
//               <div className='space-y-2'>
//                 <Label
//                   htmlFor='reference'
//                   className='text-sm font-medium text-gray-700'
//                 >
//                   Reference / Comments / Questions
//                 </Label>
//                 <Textarea
//                   id='reference'
//                   value={formData.reference}
//                   onChange={e =>
//                     setFormData({ ...formData, reference: e.target.value })
//                   }
//                   className='border-gray-300 focus:border-gray-500 focus:ring-gray-500 min-h-[120px] resize-none'
//                   placeholder='Please provide any additional information, references, or questions...'
//                 />
//               </div>

//               {/* Submit Button */}
//               <div className='flex justify-center pt-6'>
//                 <Button
//                   type='submit'
//                   className='px-8 py-2 bg-gray-600 hover:bg-gray-700 text-white'
//                 >
//                   Send Application
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { useToast } from "@/hooks/use-toast"
import { submitCareerRequest, resetCareerForm } from "@/lib/slices/formSlice"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    gender: "",
    position: "",
    dateOfBirth: "",
    qualification: "",
    portfolio: "",
    resume: null as File | null,
    lastCompany: "",
    experienceYear: "",
    experienceMonth: "",
    reference: "",
  })

  const dispatch = useAppDispatch()
  const { toast } = useToast()
  const careerState = useAppSelector((s) => s.forms.career)
  const { loading, success, error } = careerState

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Basic client-side guard
    if (!formData.resume) {
      toast({ title: "Resume required", description: "Please upload your resume (max 2 MB).", variant: "destructive" })
      return
    }
    dispatch(submitCareerRequest(formData))
  }

  useEffect(() => {
    if (success) {
      toast({
        title: "Application Submitted!",
        description: "Thank you! Our team will review your profile and get back to you.",
      })
      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNo: "",
        gender: "",
        position: "",
        dateOfBirth: "",
        qualification: "",
        portfolio: "",
        resume: null,
        lastCompany: "",
        experienceYear: "",
        experienceMonth: "",
        reference: "",
      })
      dispatch(resetCareerForm())
    }
    if (error) {
      toast({
        title: "Submission Failed",
        description: error,
        variant: "destructive",
      })
    }
  }, [success, error, dispatch, toast])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData({ ...formData, resume: file })
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col mt-10">
      <Header />

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 tracking-wide">-APPLY HERE-</h1>
              <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
                We nurture and cultivate a sense of pride in the work and create team leaders. Your growth chart will be
                governed by well-defined transparent policies of the firm. Apply via the form given below and meet us
                for face to face interview
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: First name and Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Email and Mobile No */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileNo" className="text-sm font-medium text-gray-700">
                    Mobile No <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="mobileNo"
                    type="tel"
                    value={formData.mobileNo}
                    onChange={(e) => setFormData({ ...formData, mobileNo: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Gender and Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData({ ...formData, gender: value })}
                    required
                  >
                    <SelectTrigger className="border-gray-300 focus:border-gray-500 focus:ring-gray-500">
                      <SelectValue placeholder="Select.." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position" className="text-sm font-medium text-gray-700">
                    Position you are applying for
                  </Label>
                  <Input
                    id="position"
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
              </div>

              {/* Row 4: Date of Birth and Highest Qualification */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                    Date Of Birth (DD/MM/YYYY) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qualification" className="text-sm font-medium text-gray-700">
                    Highest Qualification
                  </Label>
                  <Input
                    id="qualification"
                    type="text"
                    value={formData.qualification}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        qualification: e.target.value,
                      })
                    }
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
              </div>

              {/* Row 5: Portfolio website and Upload Resume */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-sm font-medium text-gray-700">
                    Portfolio website
                  </Label>
                  <Input
                    id="portfolio"
                    type="url"
                    placeholder="http://"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm font-medium text-gray-700">
                    Upload Resume <span className="text-red-500">*</span> ( Max size 2 mb )
                  </Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                    required
                  />
                </div>
              </div>

              {/* Row 6: Last company and Years of Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lastCompany" className="text-sm font-medium text-gray-700">
                    Last company you worked for
                  </Label>
                  <Input
                    id="lastCompany"
                    type="text"
                    value={formData.lastCompany}
                    onChange={(e) => setFormData({ ...formData, lastCompany: e.target.value })}
                    className="border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Years Of Experience</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Select
                        value={formData.experienceYear}
                        onValueChange={(value) => setFormData({ ...formData, experienceYear: value })}
                      >
                        <SelectTrigger className="border-gray-300 focus:border-gray-500 focus:ring-gray-500">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="10+">10+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select
                        value={formData.experienceMonth}
                        onValueChange={(value) => setFormData({ ...formData, experienceMonth: value })}
                      >
                        <SelectTrigger className="border-gray-300 focus:border-gray-500 focus:ring-gray-500">
                          <SelectValue placeholder="Select Month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">0</SelectItem>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="7">7</SelectItem>
                          <SelectItem value="8">8</SelectItem>
                          <SelectItem value="9">9</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="11">11</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reference/Comments/Questions */}
              <div className="space-y-2">
                <Label htmlFor="reference" className="text-sm font-medium text-gray-700">
                  Reference / Comments / Questions
                </Label>
                <Textarea
                  id="reference"
                  value={formData.reference}
                  onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                  className="border-gray-300 focus:border-gray-500 focus:ring-gray-500 min-h-[120px] resize-none"
                  placeholder="Please provide any additional information, references, or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button type="submit" className="px-8 py-2 bg-gray-600 hover:bg-gray-700 text-white" disabled={loading}>
                  {loading ? "Sending..." : "Send Application"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
