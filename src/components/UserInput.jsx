import { useState } from "react";

export default function UserInput(){
    // Genero uno state solo combinato per tutti gli input
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    function handleChange(inputIdentifier, newValue){
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput, 
                [inputIdentifier]: newValue
            };
        });
    }

    // Genero uno state per ogni input
    // const [initialInvestmentValue, setInitialInvestmentValue] = useState(0);
    // function handleInitialInvestmentChange(event){
    //     setInitialInvestmentValue(event.target.value);
    // }
    // const [initialAnnualInvestmentValue, setAnnualInvestmentValue] = useState(0);
    // function handleAnnualInvestmentChange(event){
    //     setAnnualInvestmentValue(event.target.value);
    // }
    // const [initialExpetedReturnValue, setinitialExpetedReturnValue] = useState(0);
    // function handleExpetedReturnChange(event){
    //     setinitialExpetedReturnValue(event.target.value);
    // }
    // const [initialDurationValue, setinitialDurationValue] = useState(0);
    // function handleDurationChange(event){
    //     setinitialDurationValue(event.target.value);
    // }
    return(
        <>
            <section id="user-input">
                <div className="input-group">
                    <div>
                        <label htmlFor="initial-investment">Initial Investment</label>
                        <input id="initial-investment" type="number" required value={userInput.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="annual-investment">Annual Investment</label>
                        <input id="annual-investment" type="number" required value={userInput.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label htmlFor="expected-return">Expected Return</label>
                        <input id="expected-return" type="number" required value={userInput.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input id="duration" type="number" required value={userInput.duration} onChange={(event) => handleChange('duration', event.target.value)}/>
                    </div>
                </div>
            </section>
        </>
    )
}