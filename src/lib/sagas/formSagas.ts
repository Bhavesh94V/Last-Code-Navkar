import { call, put, takeEvery, type PayloadAction } from "redux-saga/effects"
import { queryService, contactService, careerService } from "../api/services"
import {
  submitQueryRequest,
  submitQuerySuccess,
  submitQueryFailure,
  submitContactRequest,
  submitContactSuccess,
  submitContactFailure,
  submitCareerRequest,
  submitCareerSuccess,
  submitCareerFailure,
} from "../slices/formSlice"
import type { QueryFormData, ContactFormData, ApiResponse, CareerFormData } from "../api/types"

// Query form saga
function* handleSubmitQuery(action: PayloadAction<QueryFormData>) {
  try {
    console.log("Submitting query form:", action.payload)
    const response: ApiResponse = yield call(queryService.submitQuery, action.payload)
    console.log("Query submission response:", response)

    if (response.success) {
      yield put(submitQuerySuccess(response.message))
    } else {
      yield put(submitQueryFailure(response.message || "Query submission failed"))
    }
  } catch (error: any) {
    console.error("Query submission error:", error)
    const errorMessage = error.response?.data?.message || error.message || "Network error occurred"
    yield put(submitQueryFailure(errorMessage))
  }
}

// Contact form saga
function* handleSubmitContact(action: PayloadAction<ContactFormData>) {
  try {
    console.log("Submitting contact form:", action.payload)
    const response: ApiResponse = yield call(contactService.submitContact, action.payload)
    console.log("Contact submission response:", response)

    if (response.success) {
      yield put(submitContactSuccess(response.message))
    } else {
      yield put(submitContactFailure(response.message || "Contact submission failed"))
    }
  } catch (error: any) {
    console.error("Contact submission error:", error)
    const errorMessage = error.response?.data?.message || error.message || "Network error occurred"
    yield put(submitContactFailure(errorMessage))
  }
}

function* handleSubmitCareer(action: PayloadAction<CareerFormData>) {
  try {
    console.log("Submitting career application:", {
      ...action.payload,
      resume: action.payload.resume ? action.payload.resume.name : null,
    })
    const response: ApiResponse = yield call(careerService.submitCareer, action.payload)
    console.log("Career submission response:", response)

    if (response.success) {
      yield put(submitCareerSuccess(response.message))
    } else {
      yield put(submitCareerFailure(response.message || "Career submission failed"))
    }
  } catch (error: any) {
    console.error("Career submission error:", error)
    const errorMessage = error.response?.data?.message || error.message || "Network error occurred"
    yield put(submitCareerFailure(errorMessage))
  }
}

// Watcher sagas
export function* watchFormSubmissions() {
  yield takeEvery(submitQueryRequest.type, handleSubmitQuery)
  yield takeEvery(submitContactRequest.type, handleSubmitContact)
  yield takeEvery(submitCareerRequest.type, handleSubmitCareer)
}
