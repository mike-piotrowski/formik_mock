import React, { useEffect, useState } from "react";
import axios from "axios";
import './pages/viewemployee/formstyle.css';


type Employee = { id: number; name: string; surname: string; salary: number, department: {
    id: number, name: string
  } };
  const Form = () => {
    const [formularz, setFormularz] = useState({
        id: "",
        surname: "",
        name: "",
        salary: "",
        department: "",
    })

    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, id } = event.target
        //bardzo przydatny fragment: przepisujesz wszystkie wartości z poprzedniego stanu
        // i nadpisujesz tylką tą która cię interesuje
        setFormularz({
            ...formularz,
            [id]: value
        })
    }
  }
  
    return (
        <div className="wrapper">
        <h1>Employee Details</h1>
        <form>
        
        <fieldset>
        <label>
             <p>Employee id</p>
             <input type="text" id="number" value={formularz.id} onChange={handleChange}></input> 
           </label>
           <label>
             <p>Employee surname</p>
             <input type="text" id="surname" value={formularz.name} onChange={handleChange}></input> 
           </label>
           <label>
             <p>Employee name</p>
             <input type="text" id="name" value={formularz.name} onChange={handleChange}></input>            ///////////////////Tutaj ogarnac te handle change !!!!!!!!!!!!!!! ///////////
           </label>
           <label>
             <p>Salary</p>
             <input type="text" id="name" value={formularz.number} onChange={handleChange}></input>
           </label>
           <label>
             <p>ID Department</p>
             <input type="text" id="number" value={formularz.id} onChange={handleChange}></input> 
           </label>
           <label>
             <p>Department Name</p>
             <input type="text" id="name" value={formularz.name} onChange={handleChange}></input> 
           </label>
         </fieldset>
         <button type="submit">Submit</button>
         <button type="submit">Edit</button>
        </form>
      </div>
    );
  }