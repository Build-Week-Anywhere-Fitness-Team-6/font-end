import React, { useEffect } from 'react';
import ClassList from "./ClassList"
import axiosWithAuth from '../tools/axiosWithAuth';

//Create SearchBar at top of page component
//Create Class Card Template to go into a Class Div
//Card also has button to reserve/cancel class

//I have not passed in some sort of current attendance number. Maybe I won't need that


function ClientPage() {
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
                      <ClassList key={classes.id} details={classes} />
                  )  
                })
                
            }
            
        </div>
        
    )
}

export default ClientPage;

