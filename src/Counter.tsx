import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/redux';
import { counterSlice } from './store/reducers/CounterSlice';


export const Counter = () => {
    //В useAppSelector видно какие есть поля у userReducer
  const {} = useAppSelector(state => state.counterReducer.count)

  //Slice содержит в себе actionCreators и Reducer
  //НЕ! создаём вручную Action, ActionCreators, ActionTypes. Всё делает ToolKit
  //Остаётся только задиспатчить созданный Тулкитом ActionCreatetor (ЗАДИСПАЧИТЬ)
  //Сам счётчик получаем с помощью хука useAppSelector
  const {count} = useAppSelector( state => state.counterReducer)
  const {increment} = counterSlice.actions;
  const dispatch = useDispatch();

  // console.log(increment(5))
    return (
        <div>
            <h1>{count}</h1>
         <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
        </div>
    )
}