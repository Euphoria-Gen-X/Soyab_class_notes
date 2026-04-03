import React from 'react'

const App = () => {
  //javascript code here
  console.log("App component rendered");
  const a:string = "Hello Mern 73";
  type User = {username:string, password:number,age?:number};
  let user1 :User = {username: "John", password: 123456};
  let user2 :User = {username: "Jane", password: 654321};
  let user3 :User = {username: "Jim", password: 123456,age: 20};
  /* jsx code here 
  return <p>Hello Mern 73</p>
  */
  //html code here
  return (
    <React.Fragment>
      <h1>Hello Mern 73</h1>
      <h2>Smart Queue</h2>
      <p>{a}</p>
      <p>username-1: {user1.username}</p>
      <p>password-1: {user1.password}</p>
      <p>username-2: {user2.username}</p>
      <p>password-2: {user2.password}</p>
      <p>username-3: {user3.username}</p>
      <p>password-3: {user3.password}</p>
      <p>age-3: {user3.age}</p>
      <p>age-2: {user2.age?user2.age: "data"}</p> {/* age-2 is optional so it is not required to be filled */}
    
    </React.Fragment>
  )
}
//export the component so that it can be used in other files
export default App;