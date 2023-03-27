

import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { useNavigate } from 'react-router-dom';
const NewCard = () => {

let Navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    
    fetch('https://interview-api.onrender.com/v1/cards',{method:'Post',headers:{
      'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2M2YzI5ZmFmYTVkMTAwMWRlNDkwZjYiLCJpYXQiOjE2Nzk0Mjg5MzAsImV4cCI6MzQ3OTQyODkzMCwidHlwZSI6ImFjY2VzcyJ9.3GZU2CjalRjcOHRhqm-WCvCdWaHoD5Js32VvqO2j2uY'
    }},{
      number: state.number,
    expiry:state.expiry,
    cvc: state.cvc,
    // name:state.name,
    focus:state.focus,
    }).then((e)=>{console.log(e)}).catch(err=>console.log(err))
    
    alert("Data  Added But Top 5 will Show")
     Navigate('/card')
  }

  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div id='PaymentForm' style={{padding:"80px"}}>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form style={{padding:"30px"}} onSubmit={submit} >
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{padding:"10px"}}
        />
         
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{padding:"10px"}}
        />
         <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{padding:"10px"}}
        />
         <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={state.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          style={{padding:"10px"}}
        />
      <button type="submit" onClick={submit} className="btn btn-danger" style={{margin:"20px",marginLeft:"350px"}}>+ ADD CARD</button>
  
      </form>
    </div>
  );
}

export default NewCard;