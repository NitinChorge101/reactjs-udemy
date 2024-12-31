import { useState } from "react";
import Header from "./header";
import UserInput from "./userInput";
import Results from "./results";

const Wrapper = () => {
    const [userInput, setUserInput] = useState({
        initialInvestment: 500,
        annualInvestment: 20,
        expectedReturn: 30,
        duration: 10,
    })
    const inputIsValid = userInput.duration >= 1;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput(prevValue => {
            return { ...prevValue, [name]: +value }
        })
    }


    return (
        <>
            <Header />
            <UserInput
                userInputValue={userInput}
                onChangeInput={handleChange} />
            {inputIsValid ? <Results userInputValue={userInput} /> : <p>Please enter valid input data</p>}

        </>
    );
}

export default Wrapper;