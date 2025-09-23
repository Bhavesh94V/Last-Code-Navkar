// import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
// import type { QueryFormData, ContactFormData } from "../api/types"

// interface FormState {
//   query: {
//     loading: boolean
//     success: boolean
//     error: string | null
//     data: QueryFormData | null
//   }
//   contact: {
//     loading: boolean
//     success: boolean
//     error: string | null
//     data: ContactFormData | null
//   }
// }

// const initialState: FormState = {
//   query: {
//     loading: false,
//     success: false,
//     error: null,
//     data: null,
//   },
//   contact: {
//     loading: false,
//     success: false,
//     error: null,
//     data: null,
//   },
// }

// const formSlice = createSlice({
//   name: "forms",
//   initialState,
//   reducers: {
//     // Query form actions
//     submitQueryRequest: (state, action: PayloadAction<QueryFormData>) => {
//       state.query.loading = true
//       state.query.success = false
//       state.query.error = null
//       state.query.data = action.payload
//     },
//     submitQuerySuccess: (state, action: PayloadAction<string>) => {
//       state.query.loading = false
//       state.query.success = true
//       state.query.error = null
//     },
//     submitQueryFailure: (state, action: PayloadAction<string>) => {
//       state.query.loading = false
//       state.query.success = false
//       state.query.error = action.payload
//     },
//     resetQueryForm: (state) => {
//       state.query = initialState.query
//     },

//     // Contact form actions
//     submitContactRequest: (state, action: PayloadAction<ContactFormData>) => {
//       state.contact.loading = true
//       state.contact.success = false
//       state.contact.error = null
//       state.contact.data = action.payload
//     },
//     submitContactSuccess: (state, action: PayloadAction<string>) => {
//       state.contact.loading = false
//       state.contact.success = true
//       state.contact.error = null
//     },
//     submitContactFailure: (state, action: PayloadAction<string>) => {
//       state.contact.loading = false
//       state.contact.success = false
//       state.contact.error = action.payload
//     },
//     resetContactForm: (state) => {
//       state.contact = initialState.contact
//     },
//   },
// })

// export const {
//   // Query actions
//   submitQueryRequest,
//   submitQuerySuccess,
//   submitQueryFailure,
//   resetQueryForm,
//   // Contact actions
//   submitContactRequest,
//   submitContactSuccess,
//   submitContactFailure,
//   resetContactForm,
// } = formSlice.actions

// export const formReducer = formSlice.reducer





import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { QueryFormData, ContactFormData, CareerFormData } from "../api/types"

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
  career: {
    loading: boolean
    success: boolean
    error: string | null
    data: Omit<CareerFormData, "resume"> | null
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
  career: {
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

    submitCareerRequest: (state, action: PayloadAction<CareerFormData>) => {
      state.career.loading = true
      state.career.success = false
      state.career.error = null
      const { resume, ...rest } = action.payload
      state.career.data = rest
    },
    submitCareerSuccess: (state, action: PayloadAction<string>) => {
      state.career.loading = false
      state.career.success = true
      state.career.error = null
    },
    submitCareerFailure: (state, action: PayloadAction<string>) => {
      state.career.loading = false
      state.career.success = false
      state.career.error = action.payload
    },
    resetCareerForm: (state) => {
      state.career = initialState.career
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
  submitCareerRequest,
  submitCareerSuccess,
  submitCareerFailure,
  resetCareerForm,
} = formSlice.actions

export const formReducer = formSlice.reducer
