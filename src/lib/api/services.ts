import { apiClient } from "./client"
import type { QueryFormData, ContactFormData,  ApiResponse } from "./types"

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