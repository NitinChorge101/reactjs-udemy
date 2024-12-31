import { useState } from "react";

const UserInput = ({ onChangeInput, userInputValue }) => {

    return (<>
        <section>
            <div>
                <label>Initial Investment</label>
                <input
                    type="number"
                    name="initialInvestment"
                    value={userInputValue?.initialInvestment}
                    required onChange={onChangeInput} />
            </div>
            <div>
                <label>Annual Investment</label>
                <input
                    type="number"
                    name="annualInvestment"
                    value={userInputValue?.annualInvestment}
                    required
                    onChange={onChangeInput} />
            </div>
            <div>
                <label>Expected Return</label>
                <input
                    type="number"
                    name="expectedReturn"
                    value={userInputValue?.expectedReturn}
                    required
                    onChange={onChangeInput} />
            </div>
            <div>
                <label>Duration</label>
                <input
                    type="number"
                    name="duration"
                    value={userInputValue?.duration}
                    required
                    onChange={onChangeInput} />
            </div>
        </section>
    </>);
}

export default UserInput;