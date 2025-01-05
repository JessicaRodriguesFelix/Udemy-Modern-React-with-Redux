import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const reducer = (state, action) => {
  if (action.type === "increment-count")
    return {
      ...state,
      count: state.count + 1,
    };
  if (action.type === "decrement-count") 
    return {
    ...state,
    count: state.count - 1,
  
    }

  if (action.type === "change-value")
    return {
      ...state,
      valueToAdd: action.payload,
    }

    //default in case nothing is passed =make sure we always return state
    return state;
}

function CounterPage({ initialCount }) {
    
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    value: 0
  });

  const increment = () => {
    // setCount((prevCount) => prevCount + 1);
    dispatch({
      type: 'increment-count'
    });
  };

  const decrement = () => {
    // setCount((prevCount) => prevCount - 1);
    dispatch({
      type: "decrement-count",
    });

  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);

    dispatch({
      type: 'change-value',
      payload: value //optional payload
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // setCount((prevCount) => prevCount + valueToAdd);
    // setValueToAdd(0);
  }

    return (
      <Panel className={"m-3"}>
        <h1 className="text-lg">Current Count: {state.count}</h1>
        <div className="flex flex-row space">
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>

        <form>
          <label>Add a lot!</label>
          <input
            value={state.valueToAdd || ""}
            onChange={handleChange}
            type="number"
            className="p-1 m-3 bg-gray-50 border border-gray-300"
          />
          <Button onClick={handleSubmit}>Add it!</Button>
        </form>
      </Panel>
    );
}

export default CounterPage;