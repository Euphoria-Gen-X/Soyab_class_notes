import React,{use, useEffect, useState} from 'react'

const UseEffect = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

  useEffect(() => {
    setA(a+1)
  },[b])
  // []) - The empty array as the second argument to useEffect means that the effect will only run once, after the initial render. This is because the effect will only run when the values in the dependency array change, and since the array is empty, it will never change. Therefore, the effect will only run once, after the initial render.
  

  return (
    <div>
      a: {a}<br/>
      b: {b}<br/>
      <button onClick={() => setB(b+1)}>Increment B</button>
    </div>
  )
}

export default UseEffect
