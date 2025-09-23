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
