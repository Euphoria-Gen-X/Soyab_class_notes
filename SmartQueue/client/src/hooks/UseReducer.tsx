import React, {useReducer} from 'react'
type State = number
type Action = {type: string, payload: State}//payload is the data that is sent to the reducer function. It can be of any type, but in this case, it is of type State which is a number. The payload is used to update the state in the reducer function.
const AddToCardReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "incrementByPayload":
            return state + action.payload
        default:
            return state
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(AddToCardReducer, 0)// useReducer is a hook that is used to manage state in a functional component. It is an alternative to useState and is used when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. It takes a reducer function and an initial state as arguments and returns an array with the current state and a dispatch function that can be used to update the state.
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({type: "increment", payload: 1})}>Increment</button>
      <button onClick={() => dispatch({type: "decrement", payload: 1})}>Decrement</button>
      <button onClick={() => dispatch({type: "incrementByPayload", payload: 10})}>Increment by 10</button>
    </div>
  )
}

export default UseReducer
