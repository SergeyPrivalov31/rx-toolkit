import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducers/CounterSlice'
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers( {
    counterReducer,
    userReducer,
});

//внутри конфигурация redux хранилища
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
//определяем типы
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']