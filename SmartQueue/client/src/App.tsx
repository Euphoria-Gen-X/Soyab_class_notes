import React from 'react'
//import type { User } from './types/User';
// import MyButton,{Button,Card} from "./components/Button"//goes to the default in that file
import Button from './components/Button';


const App = () => {
  // //javascript code here
  // console.log("App component rendered");
  // const a:string = "Hello Mern 73";
  // let user1 :User = {username: "John", password: 123456};
  // let user2 :User = {username: "Jane", password: 654321};
  // let user3 :User = {username: "Jim", password: 123456,age: 20};

  // const users:User[] = [
  //   {username: "John", password: 123456},
  //   {username: "Jane", password: 654321},
  //   {username: "Jim", password: 123456,age: 20}
  // ];
  /* jsx code here 
  return <p>Hello Mern 73</p>
  */
  //html code here
  return (
    <>
    <Button lable={"Login"} bgCol={"red"}></Button>
    <Button lable={"Register"} bgCol={"green"}></Button>
    <Button lable={"Contact us"} bgCol={"red"}></Button>



    {/*<Button/>   Auto self close */}
    {/* {users && users.map((item,index) => (
      <div key={index}>
        <p>username: {item.username}</p>
        <p>password: {item.password}</p>
        <p>age: {item.age?item.age: "data not found"}</p>
      </div>
    ))}{/*Each child in a list should have a unique "key" prop. because it is used to identify the item in the list*/}
    {/*<table border={1}>
      <thead>
        <tr>
          <th>username</th>
          <th>password</th>
          <th>age</th>
        </tr>
      </thead>
    <tbody>
        {users.map((item,index) => (
          <tr key={index}>{/* index is important to identify the item in the list */}
            {/*<td>{item.username}</td>
            <td>{item.password}</td>
            <td>{item.age?item.age: "data not found"}</td>
          </tr>
        ))}
      </tbody>
    </table> */}
    

      {/* <h1>Hello Mern 73</h1>
      <h2>Smart Queue</h2> */}
      {/* Day 1: <p>{a}</p>
      <p>username-1: {user1.username}</p>
      <p>password-1: {user1.password}</p>
      <p>username-2: {user2.username}</p>
      <p>password-2: {user2.password}</p>
      <p>username-3: {user3.username}</p>
      <p>password-3: {user3.password}</p>
      <p>age-3: {user3.age}</p>
      <p>age-2: {user2.age?user2.age: "data"}</p> {/* age-2 is optional so it is not required to be filled
     */}




    </>
  )
}
//export the component so that it can be used in other files
export default App;