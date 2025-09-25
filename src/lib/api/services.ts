import { apiClient } from "./client"
import type { QueryFormData, ContactFormData, ApiResponse, CareerFormData } from "./types"

export const queryService = {
  submitQuery: async (data: QueryFormData): Promise<ApiResponse> => {
    const response = await apiClient.post("/query", data)
    return response.data
  },
}

export const contactService = {
  submitContact: async (data: ContactFormData): Promise<ApiResponse> => {
    const response = await apiClient.post("/contact", data)
    return response.data
  },
}

export const careerService = {
  submitCareer: async (data: CareerFormData): Promise<ApiResponse> => {
    const form = new FormData()
    form.append("firstName", data.firstName)
    form.append("lastName", data.lastName)
    form.append("email", data.email)
    form.append("mobileNo", data.mobileNo)
    form.append("gender", data.gender)
    form.append("position", data.position || "")
    form.append("dateOfBirth", data.dateOfBirth)
    form.append("qualification", data.qualification || "")
    form.append("portfolio", data.portfolio || "")
    form.append("lastCompany", data.lastCompany || "")
    form.append("experienceYear", data.experienceYear || "")
    form.append("experienceMonth", data.experienceMonth || "")
    form.append("reference", data.reference || "")
    if (data.resume) {
      form.append("resume", data.resume)
    }

    const response = await apiClient.post("/career", form, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    return response.data
  },
}
