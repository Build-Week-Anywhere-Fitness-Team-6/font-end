import React from 'react';
import InstructorClassList from "./InstructorClassList"

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
            
        </div>
    )
}

export default InstructorPage;