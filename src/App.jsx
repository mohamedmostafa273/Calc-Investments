import { useState } from "react";


import Header from "./component/Header"
import UserInput from "./component/UserInput";
import Result from "./component/Results";

function App() {

  const [initialInvestment, setInitialInvestment] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });


  const isInputValid = initialInvestment.duration >= 1;


  function handleChange(inputIdentifier, newValue) {
    setInitialInvestment((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (

    <>
      <Header />
      <UserInput inputs={initialInvestment} onNumberChange={handleChange} />

      


      {isInputValid ? <Result inputs={initialInvestment}/> : <p className="center">Invalid Value</p>}
    </>
    

    
  )
}

export default App;

