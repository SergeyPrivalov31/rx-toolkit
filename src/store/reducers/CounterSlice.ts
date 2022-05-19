//Slice -> обёртка над редьюсером, упрощает работу


import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface counterState {
    count: number;
}

const initialState: counterState = {
    count: 0,
}

//В тулкит редьюсеры называются Slice
export const counterSlice = createSlice({
    //у каждого слайса уникальное название
    name: 'counter',
    initialState,
    //поле reducers аналогично конструкции switch / case. Внутри него (функции , внутри которых как-то меняем сосояние) определяем как будем менять наше состояние
    reducers: {
        increment(state, action: PayloadAction<number>) {
            //В тулкит мы можем взять и изменить конкретное поля у состояния. imerJs под капотом
            state.count += action.payload;
        }
    }
})

//После создания Slice можем вытащить из него отдельно reducer и отдельно actionCreators
export default counterSlice.reducer;