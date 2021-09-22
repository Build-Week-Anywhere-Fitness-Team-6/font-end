import React from 'react';
import ClassList from "./ClassList"

//Create SearchBar at top of page component
//Create Class Card Template to go into a Class Div
//Card also has button to reserve/cancel class

//I have not passed in some sort of current attendance number. Maybe I won't need that
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


function ClientPage() {

    return (
        <div className="bg-purple-400">
            <h1 className= "text-gray-50 font-bold text-xl p-3" >All Available Classes</h1>

            {
                dummyData.map(classes => {
                  return(
                      <ClassList key={classes.id} details={classes} />
                  )  
                })
                
            }
            
        </div>
        
    )
}

export default ClientPage;

