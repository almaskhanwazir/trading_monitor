import { configureStore } from '@reduxjs/toolkit'

export function makeStore() {
  return configureStore({
    reducer: {},
  })
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore>