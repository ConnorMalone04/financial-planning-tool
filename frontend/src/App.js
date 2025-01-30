import React, { useState } from 'react';
import StartPage from "./StartPage.js"

const App = () => {
    const [investment, setInvestment] = useState('');
    const [years, setYears] = useState('');
    const [result, setResult] = useState('');
    const [calculated, setCalculated] = useState(false);

    function Info() {
        return (
            <>
                <h1>Calculation Result</h1>
                <p>The future value of your investment is: <strong>${result.toFixed(2)}</strong></p>
            </>
        );
    }

    const handleCalculate = async () => {
        console.log(investment);
        console.log(years);
        try {
            const response = await fetch('http://127.0.0.1:5000/run-method', {  
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    investment: parseInt(investment, 10), 
                    years: parseInt(years, 10)
                })
            });
    
            const data = await response.json();
            if (response.ok) {
                setResult(data.result);
                setCalculated(true);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error calling backend:", error);
        }
    };

    let content = null;
    if (calculated) {
        content = <Info />;
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