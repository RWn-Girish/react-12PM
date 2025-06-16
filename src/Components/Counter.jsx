import { useEffect, useState } from "react";

const Counter = ({ name }) => {
  const [count, setCount] = useState(10);

  const handleInc = (a) => {
    console.log(a);
    setCount(count + 1);
  };

  const handleMouseEnter = () => {
    console.log("Mouse Enter Event called...");
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave Event Called");
    setCount(count - 1);
  };
  // every time
  // useEffect(()=> {
  //     console.log("Component Mouniting...");
  // })

  // once time
  // useEffect(()=> {
  //     console.log("Component only first time run");
  // }, [])

  // // update time
  // useEffect(()=> {
  //     console.log("Component update time run");
  // }, [count])

    const test = () => {
        if(count >= 10){
            return (
                <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {name}
            </h2>
            )
        }else{
            return ""
        }
    }


  return (
    <div>
      {/* {count >= 10 && name ? (
        <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {name}
        </h2>
      ) : (
        ""
      )} */}
      {test()}
      <h1>Counter App: {count}</h1>
      <button onClick={() => handleInc("hello")}>Increment</button>
    </div>
  );
};

export default Counter;
