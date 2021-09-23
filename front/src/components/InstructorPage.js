import React, { useEffect, useState } from 'react';
import InstructorClassList from "./InstructorClassList"
import { Link,} from 'react-router-dom'
import axiosWithAuth from '../tools/axiosWithAuth';

// const dummyData = [
//     {
//     id: 1,
//     name: 'Jareds class', 
//     type: 'Boxing', 
//     time: '12:30 am', 
//     day: 'Thursday', 
//     duration: '30 mins', 
//     intensity: 'Intermediate', 
//     location: 'Seattle, WA', 
//     max_capacity: '50'
//     },
//     {
//         id: 2,
//         name: 'Rocking KickBoxing', 
//         type: 'Boxing', 
//         time: '12:30 am', 
//         day: 'Thursday', 
//         duration: '30 mins', 
//         intensity: 'Intermediate', 
//         location: 'Seattle, WA', 
//         max_capacity: '50'
//         }
// ]



function InstructorPage() {
    const initialClasses = []
    const [classes, setClasses] = useState(initialClasses)


    const getClasses = () => {
        axiosWithAuth().get('https://fitness-bw.herokuapp.com/api/classes/')
        .then(res => {
            setClasses(res.data);
        }).catch(err => console.error(err))
    }
    
    useEffect(() => {
        getClasses()
      }, [])

    return (
        <div className="bg-purple-400">
            <h1 className= "text-gray-50 font-bold text-xl p-3" >All Available Classes</h1>

            {
                classes.map(classes => {
                return(
                    <InstructorClassList key={classes.id} details={classes} />
                )  
                })
                
            }
            <Link to="/dashboard-instructor/form">
            <button className="bg-blue-500 block hover:bg-blue-700 text-white font-bold m-auto py-2 my-6 px-4 rounded-full">Create Class</button>
            </Link>
        </div>
    )
}

export default InstructorPage;