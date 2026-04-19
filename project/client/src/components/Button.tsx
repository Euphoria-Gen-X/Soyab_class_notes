import React from "react";
type ButtonProps = {
  label: string, bgCol: string
}
export const Button : React.FC<ButtonProps> = ( props ) => {
  return (
    <button style={{backgroundColor: props.bgCol, color: 'white', padding: '10px 20px', border: 'none', margin: '5px', borderRadius: '5px', cursor: 'pointer'}}>
      {props.label}
    </button>
  )
}
export default Button;

// const MyMain: React.FC = () => {
//   return (
//       <button>Click Me</button>
//   );
// };
// export default MyMain;
