import React from 'react';
import InstructorClassList from "./InstructorClassList"
import { Link, Route, Switch } from 'react-router-dom'

const dummyData = [
    {
    id: 1,
    name: 'Jareds class', 
    type: 'Boxing', 
    time: '12:30 am', 
    day: 'Thursday', 
    duration: '30 mins', 
    intensity: 'Intermediate', 
    location: 'Seattle, WA', 
    max_capacity: '50'
    },
    {
        id: 2,
        name: 'Rocking KickBoxing', 
        type: 'Boxing', 
        time: '12:30 am', 
        day: 'Thursday', 
        duration: '30 mins', 
        intensity: 'Intermediate', 
        location: 'Seattle, WA', 
        max_capacity: '50'
        }
]



function InstructorPage() {
    return (
        <div className="bg-purple-400">
            <h1 className= "text-gray-50 font-bold text-xl p-3" >All Available Classes</h1>

            {
                dummyData.map(classes => {
                return(
                    <InstructorClassList key={classes.id} details={classes} />
                )  
                })
                
            }
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold block w-1/3 m-auto my-4 py-2 px-4 rounded-full" 
            to="/dashboard-instructor/form">Add a New Class</Link>
            
        </div>
    )
}

export default InstructorPage;