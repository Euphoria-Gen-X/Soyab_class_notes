import React,{useCallback, useState} from 'react'

type Buttonprops = {
    onClick: () => void,
    text: string
}
const Button: React.FC<Buttonprops> = React.memo(({onClick, text}: Buttonprops) => {
    alert(`Child ${text} rendered`)
    return (
        <button onClick={onClick}>{text}</button>
    )
})

const UseCallback = () => {
    const [count1, setCount1] = useState<number>(0)
    const [count2, setCount2] = useState<number>(0)
    const Button1 = useCallback(() => {
        setCount1(count1 + 1)
        //alert("Button 1 clicked")
    }, [count1])
    const Button2 = useCallback(() => {
        setCount2(count2 + 1)
        //alert("Button 2 clicked")
    }, [count2])

    alert("Parent component rendered")
  return (
    <div>
        <h1>Without UseCallback Hook</h1>
        <Button onClick={Button1} text="Button 1" />
        <Button onClick={Button2} text="Button 2" />
        <p>Count 1: {count1}</p>
        <p>Count 2: {count2}</p>
    </div>
  )
}

export default UseCallback
