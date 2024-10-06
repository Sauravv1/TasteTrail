
import { useState } from "react";
const User = ({name})=>{
  const [count] = useState(0);
  const [count2] = useState(2); 
return(
  <div className="user-card">
    <h1>count : {count}</h1>
    <h1>count2 : {count2}</h1>
  <h3>Name.{name}</h3>
  <h3>Location:Mumbai</h3>
  <h3>Contact:sauravyadav9284@gmail.com</h3>
  </div>
)
}

export default User;