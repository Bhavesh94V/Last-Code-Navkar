// import { configureStore } from "@reduxjs/toolkit"
// import createSagaMiddleware from "redux-saga"
// import { rootSaga } from "./sagas/rootSaga"
// import { formReducer } from "./slices/formSlice"

// const sagaMiddleware = createSagaMiddleware()

// export const store = configureStore({
//   reducer: {
//     forms: formReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: false,
//       serializableCheck: {
//         ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
//       },
//     }).concat(sagaMiddleware),
// })

// sagaMiddleware.run(rootSaga)

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch




import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { rootSaga } from "./sagas/rootSaga"
import { formReducer } from "./slices/formSlice"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    forms: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "forms/submitCareerRequest"],
      },
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
