import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   score: 0,

 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
// This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5050/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/highscore");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="score">score</label>
         <input
           type="number"
           className="form-control"
           id="score"
           value={form.score}
           onChange={(e) => updateForm({ score: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Add High Score"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}