import React from 'react'
import {useState, useEffect} from 'react';
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const Table = () => {
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
        <div>
           {/* <h1>hi</h1>  */}
           {users.map((user) => {
               console.log(users)
               return (
               <div>
                   {user.prescriptions.map((medication, i) => (
                   <h1>{medication.medication}</h1>  
                   ))}

                <DataTable title="People" columns={medication.medication} data={data} />


               </div>
               )
            })}
        </div>
    )
}

export default Table;
