import React,{useState} from 'react'

const App = () => {
  //state management with useState
  const [chips, setChips] = useState<{quantity: number, price: number}>({
    quantity: 0,
    price: 100
  }) 
  const [coke, setCoke] = useState<{quantity: number, price: number}>({
    quantity: 0,
    price: 50
  })
  const [pastry, setPastry] = useState<{quantity: number, price: number}>({
    quantity: 0,
    price: 25
  })

  const [items, setItems] = useState<{TotalItem:number, price:number}>(
    {TotalItem: 0, price: 0}
  ) //items is an array of strings that will hold the names of the items in the cart. setItems is a function that updates the state variable items. useState([]) initializes items to an empty array.
  
  //const [total, setTotal] = useState<number>(0)

  //const [x, setX] = useState<number>(0) //setX is a function that updates the state variable x. useState(0) initializes x to 0.
  //useState is a hook that allows you to add state to functional components.
  //hooks are functions that let you use state and other React features without writing a class.
  //let x: number = 5
  const inc_chips=(): void => {
    setChips({...chips, quantity: chips.quantity + 1, price: chips.price + 100})
    setItems({...items, TotalItem: items.TotalItem + 1, price: items.price + 100})
    console.log(chips)
  }
  const decr_chips=(): void => {
    setChips({...chips, quantity: chips.quantity - 1, price: chips.price - 100})
    setItems({...items, TotalItem: items.TotalItem - 1, price: items.price - 100})
    console.log(chips)
  }
  const inc_coke=(): void => {
    setCoke({...coke, quantity: coke.quantity + 1, price: coke.price + 50})
    setItems({...items, TotalItem: items.TotalItem + 1, price: items.price + 50})
    console.log(coke)
  }
  const decr_coke=(): void => {
    setCoke({...coke, quantity: coke.quantity - 1, price: coke.price - 50})
    setItems({...items, TotalItem: items.TotalItem - 1, price: items.price - 50})
    console.log(coke)
  }
  const inc_pastry=(): void => {
    setPastry({...pastry, quantity: pastry.quantity + 1, price: pastry.price + 25})
    setItems({...items, TotalItem: items.TotalItem + 1, price: items.price + 25})
    console.log(pastry)
  }
  const decr_pastry=(): void => {
    setPastry({...pastry, quantity: pastry.quantity - 1, price: pastry.price - 25})
    setItems({...items, TotalItem: items.TotalItem - 1, price: items.price - 25})
    console.log(pastry)
  }
  return ( 
    <div>
      <div>
        <h1> Add to Cart </h1>
      </div>
      <div>
        <p>chips</p>
        <button onClick={inc_chips}>+</button>
        <input style={{ 
          width: '50px', textAlign: 'center' }} 
          type="text" 
          value={chips.quantity} readOnly/>
        <button onClick={decr_chips}>-</button>
      </div>
      <div>
        <p>coke</p>
        <button onClick={inc_coke}>+</button>
        <input style={{ width: '50px', textAlign: 'center' }} type="text" value={coke.quantity} readOnly/>
        <button onClick={decr_coke}>-</button>
      </div>
      <div>
        <p>pastry</p>
        <button onClick={inc_pastry}>+</button>
        <input style={{ width: '50px', textAlign: 'center' }} type="text" value={pastry.quantity} readOnly/>
        <button onClick={decr_pastry}>-</button>
      </div>
      <div>
        <h2>Items in Cart: {items.TotalItem}</h2>
        <h2>Total: {items.price}</h2>
      </div>

    </div>
  )
}

export default App
