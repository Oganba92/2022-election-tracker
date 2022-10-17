import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import * as electionsAPI from '../../utilities/elections-api';
import { useNavigate } from 'react-router-dom';


export default function NewElectionPage() {
  
  const navigate = useNavigate();


  //this use state keeps track of form inputs

   const [formData, setFormData] = useState({
       candidate1: '',
       candidate2: '',
       candidate3: '',
       candidate4: '',
       location: '',
       level: '',
       forecaset: ''
   });

  //handleChange updates use state as user types in form
  
  async function handleAddElection(formData){
    const election = await electionsAPI.add(formData);
    // setElections([...elections, election]);
  }



   const handleChange = (evt) => {
     setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      });
  };

  //on form submit, send payload to back end and save card to database
  //then reset formdata use state so that form "clears"

  
   function handleSubmit(evt) {
      evt.preventDefault();
      handleAddElection(formData);
      
  };


  return (
    <>
    <h1>New Election Page</h1>
      <div>
        <div className="form-container">
          <form onSubmit={handleSubmit} autoComplete="off" >
            <label>Candidate 1</label>
            <input type="text" name="candidate1" value={formData.candidate1} onChange={handleChange} />
            <label>Candidate 2</label>
            <input type="text" name="candidate2" value={formData.candidate2} onChange={handleChange} />
            <label>Candidate 3 (optional)</label>
            <input type="text" name="candidate3" value={formData.candidate3} onChange={handleChange}/>
            <label>Candidate 4 (optional)</label>
            <input type="text" name="candidate4" value={formData.candidate4} onChange={handleChange} />
            <label>Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange}/>
            <label>Level</label>
            <input type="text" name="level" value={formData.level} onChange={handleChange} />
            <label>Latest Opinion Poll</label>
            <input type="text" name="forecast" value={formData.forecast} onChange={handleChange} />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        
      </div>
    </>
  );
}


