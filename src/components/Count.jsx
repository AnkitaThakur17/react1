import { useEffect, useState } from 'react'

const Count = () => {
    const[count,setCount] = useState(0)

    useEffect(()=>{
        console.log(`Count ki current value : ${count}`) 
    },[count])

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click me to increment</button>
    </div>
  )
}

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[count]);

//   return <h1>I've rendered {count} times!</h1>;
// }
export default Count;