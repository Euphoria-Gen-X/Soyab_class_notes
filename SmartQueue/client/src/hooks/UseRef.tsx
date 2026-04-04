import React,{use, useEffect, useRef, useState} from 'react'

const UseRef = () => {
    
    const [count, setCount] = useState<number>(0)
    const previousCount = useRef<number>(0)
    useEffect(() => {
        previousCount.current = count
        // setCount(count+1)
    },[count])
    
    // const MyRef = useRef<HTMLInputElement>(null)
    // useEffect(() => {
    //     if(MyRef.current){
    //         // inputRef.current.focus()// we can aslo use autoFocus attribute in input element to focus it when the component mounts. But using useRef gives us more control over the element and allows us to manipulate it in other ways as well.
    //         MyRef.current.style.color="red"
    //     }
    // },[])
    // The useRef hook is used to create a reference to a DOM element. In this example, we create a reference to an input element using useRef. We then use the useEffect hook to focus the input element when the component mounts. The empty array as the second argument to useEffect means that the effect will only run once, after the initial render. This is because the effect will only run when the values in the dependency array change, and since the array is empty, it will never change. Therefore, the effect will only run once, after the initial render.
  return (
    <div>
      {/* <input ref={MyRef} autoFocus/> */}
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCount.current}</p>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseRef
