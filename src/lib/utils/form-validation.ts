export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0
}

export const validateFileSize = (file: File, maxSizeMB: number): boolean => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024
  return file.size <= maxSizeBytes
}

export const validateFileType = (file: File, allowedTypes: string[]): boolean => {
  const fileExtension = file.name.split(".").pop()?.toLowerCase()
  return allowedTypes.includes(fileExtension || "")
}
