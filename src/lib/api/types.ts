// Form data types
export interface QueryFormData {
  name: string
  designation: string
  organization: string
  officeAddress: string
  city: string
  email: string
  telephone: string
  mobile: string
  updates: "yes" | "no"
  subject: string
  query: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export interface CareerFormData {
  firstName: string
  lastName: string
  email: string
  mobileNo: string
  gender: string
  position: string
  dateOfBirth: string
  qualification: string
  portfolio: string
  resume: File | null
  lastCompany: string
  experienceYear: string
  experienceMonth: string
  reference: string
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
}

export interface ApiError {
  success: false
  message: string
  error?: string
}
