import React from 'react'
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button } from "../Button";
import './Table.css';


const Table = (props) => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://gentle-garden-58755.herokuapp.com/users');
            const json = await response.json();
            setUsers(json);
            console.log(setUsers);
        }catch(error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>
        <Button href="/new" className="add-new">Add a new medication</Button> 
          {/* <div className="table-header">
                <h2 className="medication">Medication</h2>
                <h2 className="dosage">Dosage</h2>
                <h2 className="uses">Uses</h2>
                <h2 className="time">Time</h2>
            </div> */}
           {users.map((user) => {
               console.log(users)
               return (
               <div className="table-group">
                 
                {user.prescriptions.map((medication, i) => (
                    <div className="table-content">
                        <h2>
                        <input type="checkbox" />
                        </h2>
                        <h2>{medication.medication}</h2>  
                        <h2>{medication.dosage}</h2>
                        <h2>{medication.uses}</h2>
                        <h2>{medication.time}</h2>
                        <img src={medication.photo}/>
                    </div>
                   ))}
               </div>
               )
            })}
        </>
    )
    
}

export default Table;
