import React, { useReducer, useEffect } from 'react';
import TodoReducer from './components/TodoReducer';
import TodoList from './components/TodoList';
import Context from './components/Context';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);

  useEffect(() => {
    let state = JSON.parse(localStorage.getItem('data'));
    console.log(state)
    dispatch({ type: 'RESET', payload: { state } })
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state));
    console.log(state)
  }, [state]);

 

  return (
    <Context.Provider value={dispatch}>
      <div style={{ margin: 20, backgroundColor: '#CDCDCD' }}>
        <button onClick={() => dispatch({ type: "ADD" })}>ADD NEW ITEM</button>
        <TodoList items={state} />
      </div>
    </Context.Provider>
  );
}

export default App;
