import React from 'react'

export const Button:React.FC<{lable:string, bgCol:string}> = ({lable,bgCol}) => {
  return (
  <button style={{backgroundColor: bgCol ,padding:"8px",border:"none", margin:"10px"}}>
    {lable}
    </button>
  );
};
export default Button

// export const Card:React.FC = () => {
//     return (
//     <button>Card me</button>
//     );
//   };
// export const MyMain:React.FC=()=>{
//     return <p>main component</p>
// }
// export default MyMain


