import { useRef, useState } from "react";
import { useParams } from "react-router";

const ListComp = () => {
  const [items, setItems] = useState(["Home", "About", "Profile", "Service"]);
  let h2Ref = useRef("")

  const {name} = useParams();

  const handleClick = () => {
      console.log(h2Ref.current.innerHTML);
      h2Ref.current.innerHTML = "Hello World"
      h2Ref.current.style.color = "Red"
  }
  return (
    <>
    
      {/* <h2>Static List</h2>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>
            <li>{items[4]}</li> */}
        {/* <button onClick={handleClick}>Click</button> */}

      <h2 ref={h2Ref}>Dynamic List {name}</h2>
      {items.map((item, index) => (
        <li key={item} ref={h2Ref}>{item}</li>
      ))}
    </>
  );
};

export default ListComp;
