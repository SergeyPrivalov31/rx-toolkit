//Slice -> обёртка над редьюсером, упрощает работу


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
}

//В тулкит редьюсеры называются Slice
export const userSlice = createSlice({
    //у каждого слайса уникальное название
    name: 'user',
    initialState,
    //поле reducers аналогично конструкции switch / case. Внутри него (функции , внутри которых как-то меняем сосояние) определяем как будем менять наше состояние
    reducers: {
        // usersFetching(state) {
        //     state.isLoading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = true
        //     state.error = action.payload
        // },
    },
    //когда используем createAsyncThunk уже создаётся три состояния
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        }, 
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

//После создания Slice можем вытащить из него отдельно reducer и отдельно actionCreators
export default userSlice.reducer;