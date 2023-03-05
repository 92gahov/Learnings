import './App.css';
import ClassCounter from './components/ClassCounter';
import ClassMouse from './components/ClassMouse';
import CounterReducerTwo from './components/CounterReducerTwo';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Counter3 from './components/Counter3';
import Counter4 from './components/Counter4';
import CounterReducer from './components/CounterReducer';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import CounterReducerThree from './components/CounterReducerThree';
import ComponentA from './context/ComponentA';
import ComponentB from './context/ComponentB';
import ComponentC from './context/ComponentC';
import { createContext, useReducer } from 'react';
import DataFatchingTwo from './components/DataFatchingTwo';
import DataFetchingThree from './components/DataFetchingThree';

export const CountContext = createContext()

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case "reset":
      return initialState
    default:
      return state
  }
};

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <Counter4 /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <CounterReducer /> */}
      {/* <CounterReducerTwo /> */}
      {/* <CounterReducerThree /> */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}
      {/* <DataFatchingTwo /> */}
      <DataFetchingThree />
    </div>
  );
}

export default App;
