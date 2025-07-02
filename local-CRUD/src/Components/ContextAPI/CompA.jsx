import { createContext } from "react";
import CompB from "./CompB";

export const dataContext = createContext();

const CompA = () => {
  let user = {
    name: "John Peter",
    age: 15,
    email: "john@test.in",
  };
  return (
    <>
      <dataContext.Provider value={{u: user, f: ()=> {
        console.log("Hello")
      }}}>
        <h2>Component A</h2>
        <h3>Name : {user.name}</h3>
        <p>Email : {user.email}</p>

        <CompB />
      </dataContext.Provider>
    </>
  );
};

export default CompA;
