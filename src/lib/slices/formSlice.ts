import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { QueryFormData, ContactFormData } from "../api/types"

interface FormState {
  query: {
    loading: boolean
    success: boolean
    error: string | null
    data: QueryFormData | null
  }
  contact: {
    loading: boolean
    success: boolean
    error: string | null
    data: ContactFormData | null
  }
}

const initialState: FormState = {
  query: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
  contact: {
    loading: false,
    success: false,
    error: null,
    data: null,
  },
}

const formSlice = createSlice({
  name: "forms",
  initialState,
  reducers: {
    // Query form actions
    submitQueryRequest: (state, action: PayloadAction<QueryFormData>) => {
      state.query.loading = true
      state.query.success = false
      state.query.error = null
      state.query.data = action.payload
    },
    submitQuerySuccess: (state, action: PayloadAction<string>) => {
      state.query.loading = false
      state.query.success = true
      state.query.error = null
    },
    submitQueryFailure: (state, action: PayloadAction<string>) => {
      state.query.loading = false
      state.query.success = false
      state.query.error = action.payload
    },
    resetQueryForm: (state) => {
      state.query = initialState.query
    },

    // Contact form actions
    submitContactRequest: (state, action: PayloadAction<ContactFormData>) => {
      state.contact.loading = true
      state.contact.success = false
      state.contact.error = null
      state.contact.data = action.payload
    },
    submitContactSuccess: (state, action: PayloadAction<string>) => {
      state.contact.loading = false
      state.contact.success = true
      state.contact.error = null
    },
    submitContactFailure: (state, action: PayloadAction<string>) => {
      state.contact.loading = false
      state.contact.success = false
      state.contact.error = action.payload
    },
    resetContactForm: (state) => {
      state.contact = initialState.contact
    },
  },
})

export const {
  // Query actions
  submitQueryRequest,
  submitQuerySuccess,
  submitQueryFailure,
  resetQueryForm,
  // Contact actions
  submitContactRequest,
  submitContactSuccess,
  submitContactFailure,
  resetContactForm,
} = formSlice.actions

export const formReducer = formSlice.reducer
