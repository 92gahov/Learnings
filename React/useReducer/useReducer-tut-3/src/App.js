import './App.css';
import { useReducer } from 'react';
import { INITIAL_STATE, postReducer } from './postReducer';

function App() {

  const [state, dispatch] = useReducer(postReducer, INITIAL_STATE)

  const handleFetch = () => {
    dispatch({ type: "FETCH_START" })
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data })
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" })
      })
  }

  return (
    <div className="App">
      <button onClick={handleFetch}>
        {state.loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Somethong went wrong!"}</span>
    </div>
  );
}

export default App;
