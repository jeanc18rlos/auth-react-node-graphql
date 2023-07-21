import { configureStore } from "@reduxjs/toolkit"
import { createEpicMiddleware } from "redux-observable"
import rootReducer from "./reducers"
import rootEpic from "./epics"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"

const epicMiddleware = createEpicMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(epicMiddleware),
})

epicMiddleware.run(rootEpic)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
