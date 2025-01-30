import React, { useState } from 'react';

const [result, setResult] = useState('');
calculated = false;

function Info() {
    // placeholders for extracted data to be returned later on
    body: JSON.stringify({
        num1: parseInt(num1, 10), 
        num2: parseInt(num2, 10)
        })
    
    return (
        <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
}

const App = () => {
    const [investment, setInvestment] = useState('');
    const [years, setYears] = useState('');

    const handleCalculate = async () => {
        try {
            const response = await fetch('/run-method', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        const data = await response.json();
            if (response.ok) {
                setResult(data.result);  // Store result from backend
                calculated = true;

            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error calling backend:", error);
        }
    };

    if (calculated) {
        content = <Info />;
    } else {
        content = None
    }
        
    return (
        <div>
            <StartPage />

            <h2>Enter investment ($) and years</h2>
            <input 
                type="number" 
                value={investment} 
                onChange={(e) => setInvestment(e.target.value)} 
                placeholder="Enter investment"
            />
            <input 
                type="number" 
                value={years} 
                onChange={(e) => setYears(e.target.value)} 
                placeholder="Enter years"
            />
            <button onClick={handleCalculate}>Calculate</button>
            {content}
        </div>
    );
}

export default App;