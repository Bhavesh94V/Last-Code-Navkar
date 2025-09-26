import axios from "axios"

const getApiBaseUrl = () => {
  // Prefer NEXT_PUBLIC var from server (compile/runtime) or a client-exposed global, but avoid ReferenceError
  const fromProcess =
    typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL
      : undefined

  const fromWindow =
    typeof window !== "undefined" && (window as any).NEXT_PUBLIC_API_URL
      ? (window as any).NEXT_PUBLIC_API_URL
      : undefined

  // Order of preference: process (when available) → window (if provided) → local dev fallback
  return fromProcess || fromWindow || "http://localhost:5000/api"
  // return fromProcess || fromWindow || "https://navkar-bhavsar.onrender.com/api"
}

const API_BASE_URL = getApiBaseUrl()

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`)
    return config
  },
  (error) => {
    console.error("[API] Request error:", error)
    return Promise.reject(error)
  },
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    console.log(`[API] Response:`, response.data)
    return response
  },
  (error) => {
    console.error("[API] Response error:", error.response?.data || error.message)
    return Promise.reject(error)
  },
)
