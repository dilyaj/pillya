import React from 'react'
import './New.css';


const New = () => {
    return (
        <div>
        <form action="/new" method="POST" className="new-form">
            Medication: <input type="text" name="medication" /><br/>
            Dosage: <input type="text" name="dosage" /><br/>
            Time: <input type="text" name="time" /><br/>
            Uses: <input type="text" name="uses" /><br/>
            Photo Url: <input type="text" name="photo-url" /><br/>

            <input type="submit" id="createNew" name="" value="Add New"/>
        </form>            
        </div>
    )
}

export default New
