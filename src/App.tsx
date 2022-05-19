import React, { useEffect } from 'react';
import './App.css';
import { Counter } from './Counter';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';


const App = () => {

  //используем кастомные хуки
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(()=> {
    //диспатчим ActionCreator
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="App">
      <Counter />
      <br/>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error 
        ? <h1>{error}</h1>
        : <p>{ JSON.stringify(users, null, 2) }</p>
      }
    </div>
  );
}

export default App;
