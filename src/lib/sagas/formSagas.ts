import { call, put, takeEvery, type PayloadAction } from "redux-saga/effects"
import { queryService, contactService } from "../api/services"
import {
  submitQueryRequest,
  submitQuerySuccess,
  submitQueryFailure,
  submitContactRequest,
  submitContactSuccess,
  submitContactFailure,
} from "../slices/formSlice"
import type { QueryFormData, ContactFormData, ApiResponse } from "../api/types"

// Query form saga
function* handleSubmitQuery(action: PayloadAction<QueryFormData>) {
  try {
    console.log("[v0] Submitting query form:", action.payload)
    const response: ApiResponse = yield call(queryService.submitQuery, action.payload)
    console.log("[v0] Query submission response:", response)

    if (response.success) {
      yield put(submitQuerySuccess(response.message))
    } else {
      yield put(submitQueryFailure(response.message || "Query submission failed"))
    }
  } catch (error: any) {
    console.error("[v0] Query submission error:", error)
    const errorMessage = error.response?.data?.message || error.message || "Network error occurred"
    yield put(submitQueryFailure(errorMessage))
  }
}

// Contact form saga
function* handleSubmitContact(action: PayloadAction<ContactFormData>) {
  try {
    console.log("[v0] Submitting contact form:", action.payload)
    const response: ApiResponse = yield call(contactService.submitContact, action.payload)
    console.log("[v0] Contact submission response:", response)

    if (response.success) {
      yield put(submitContactSuccess(response.message))
    } else {
      yield put(submitContactFailure(response.message || "Contact submission failed"))
    }
  } catch (error: any) {
    console.error("[v0] Contact submission error:", error)
    const errorMessage = error.response?.data?.message || error.message || "Network error occurred"
    yield put(submitContactFailure(errorMessage))
  }
}


// Watcher sagas
export function* watchFormSubmissions() {
  yield takeEvery(submitQueryRequest.type, handleSubmitQuery)
  yield takeEvery(submitContactRequest.type, handleSubmitContact)
}
