import './App.css';
import {useState} from 'react'


function App() {
  const [kg, setKg] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender] =useState("male")
  const [promilles, setPromilles] = useState(0)
  const litres = bottles * 0.33
  const grams = litres * 8 * 4.5
  const burning = kg / 10
  const gramsLeft = grams - burning * hours
    
  let promillesMale = gramsLeft / (kg * 0.7)
  let promillesFemale = gramsLeft / (kg * 10)

  const calculate=(e) => 
    {e.preventDefault()   
    
    if (gender === 'male'){
      setPromilles(promillesMale)
        if(promillesMale < 0)
          {setPromilles(0)
          }
    }
    else{
      setPromilles(promillesFemale)
        if(promillesFemale < 0)
          {setPromilles(0)
          }
    }  
  }
  
  return (
    <form>
      <div>
        <h2> Calculating alcohol blood level</h2>
      </div>
      <div class="divi">
        <label> Weight </label>
        <input value={kg} onChange={e=> setKg(e.target.value)}></input>
      </div>

      <div class="divi">
        <label> Bottles </label>
        <input type= "number" value={bottles} onChange={e=> setBottles(e.target.value)}/>
      </div>
      <div class="divi">
        <label> Time </label>
        <input type= "number" value={hours} onChange={e=> setHours(e.target.value)}/>
      </div>
      <div class="divi"> 
        <label> Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked/><label> Male </label>
        <input type="radio" name="gender" value="female" /><label> Female</label>
      </div>
      <div class="divi">
        <output>{promilles.toFixed(6)}</output>
      </div> 
      <button class="button" type="button" onClick={calculate}> Calculate</button>
    </form>
  );
}
  
export default App
