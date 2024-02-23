import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const CalcBmi = (e) => {
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert("Please Enter Valid Weight and Height")
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
    }
    if (bmi <= 18.4) {
      setMessage('You are UnderWeight')
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setMessage('You are Normal')
    } else if (bmi >= 25) {
      setMessage('You are OverWeight')
    }
  }
  const reload = () => {
    window.location.reload()
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='heading'>
          <h2>BMI Calculator</h2>
        </div>
        <form onSubmit={CalcBmi}>
          <div>
            <label> Weight </label>
            <input type='text' placeholder='Enter Your Weight in (Kg)' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label> Height </label>
            <input type='text' placeholder='Enter Your Height in (m)' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className='Button'>
            <button className='btn' type='submit' >Submit</button>
            <button className='btn' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='Message'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
