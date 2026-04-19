import React from 'react'
import Button from './components/Button';

const App = () => {
  return (
    //For React Components rendering
   
    <>
      {/*<MyButton />  self closing component 
      <Button />
      <Button></Button> {/* This is a standard way to use a React component, where you can include children elements if needed. 
      <Card /> */}


      <Button label={'Register'} bgCol={"red"}></Button>{/* This is how you can use the Button component with a label prop. The label prop is passed to the Button component, which will render it inside the button element. */}
      <Button label={'Login'} bgCol={"blue"}></Button>
      <Button label={'Contact Me'} bgCol={"green"}></Button>

      
      
    </>/* This is a React Fragment, which allows you to group multiple elements without adding extra nodes to the DOM. */
  )
}

export default App // This is the main App component that serves as the entry point for the React application. It currently displays a simple welcome message. You can expand this component to include routing, state management, and other features as needed for your MERN stack application.