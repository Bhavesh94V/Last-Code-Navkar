"use client"

import { useState } from "react"
import { validateEmail, validatePhone, validateRequired } from "@/lib/utils/form-validation"

interface ValidationErrors {
  [key: string]: string
}

export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationErrors>({})

  const validateField = (name: string, value: string, rules: string[]): string => {
    for (const rule of rules) {
      switch (rule) {
        case "required":
          if (!validateRequired(value)) {
            return `${name} is required`
          }
          break
        case "email":
          if (value && !validateEmail(value)) {
            return "Please enter a valid email address"
          }
          break
        case "phone":
          if (value && !validatePhone(value)) {
            return "Please enter a valid phone number"
          }
          break
      }
    }
    return ""
  }

  const validateForm = (formData: Record<string, any>, validationRules: Record<string, string[]>): boolean => {
    const newErrors: ValidationErrors = {}

    Object.entries(validationRules).forEach(([field, rules]) => {
      const error = validateField(field, formData[field] || "", rules)
      if (error) {
        newErrors[field] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const clearErrors = () => {
    setErrors({})
  }

  const clearFieldError = (field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  return {
    errors,
    validateForm,
    clearErrors,
    clearFieldError,
    setErrors,
  }
}
