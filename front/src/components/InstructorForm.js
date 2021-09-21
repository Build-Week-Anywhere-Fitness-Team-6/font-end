import React from 'react';

function InstructorForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }


    return (
        <form className="bg-indigo-500	text-white p-1 max-w-7xl " onSubmit={onSubmit}>
            <div>
                <h2>Create a New Class</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.type}</div>
                    <div>{errors.time}</div>
                    <div>{errors.day}</div>
                    <div>{errors.duration}</div>
                    <div>{errors.intensity}</div>
                    <div>{errors.location}</div>
                    <div>{errors.max_capacity}</div>
                </div>
                <label >Class Name:
                    <input className= "bg-indigo-500 text-white p-1"
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label> 
            </div>
            <div>
                <label> Class Type:
                    <select className= "bg-indigo-500 text-white p-1"
                        value={values.type}
                        onChange={onChange}
                        name='type'
                    >
                    <option value=''>- Select a Class Type -</option>
                    <option value='yoga'>Yoga</option>
                    <option value='spin'>Spin</option>    
                    <option value='pilates'>Pilates</option>
                    <option value='kickboxing'>KickBoxing</option> 
                    </select>   
                </label>
            </div>
            <div>
                {/* Dropdown */}
                <label>Intensity:
                    <select className= "bg-indigo-500 text-white p-1"
                        value={values.intensity}
                        onChange={onChange}
                        name='intensity'
                    >
                    <option value=''>- Select an Intensity -</option>
                    <option value='beginner'>Beginner</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='advanced'>Advanced</option> 
                    </select>     
                </label>
           </div>
            <div>
                <h3>Schedule a Time and Day</h3>
                 {/* Dropdown */}
                <label> Day :
                    <select className= "bg-indigo-500 text-white p-1"
                        value={values.day}
                        onChange={onChange}
                        name='day'
                    >
                    <option value=''>- What day is the class? -</option>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>    
                    <option value='wednesday'>Wednesday</option>
                    <option value='thursday'>Thursday</option> 
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option> 
                    </select>   
                </label>
            </div>
           <div>
                <label> Start Time:
                    <input className= "bg-indigo-500 text-white p-1"
                        value={values.time}
                        onChange={onChange}
                        name='time'
                        type='text'
                    />
                </label>
           </div>
            <div>
                 {/* DropDown */}
                <label>Class Duration:
                    <select className= "bg-indigo-500 text-white p-1"
                        value={values.duration}
                        onChange={onChange}
                        name='duration'
                    >
                    <option value=''>- Select an Option -</option>
                    <option value='30-min'>30 min</option>
                    <option value='60-min'>60 min</option>
                    <option value='90-min'>90 min</option>  
                    </select>      
                </label>
            </div>
           
           <div>
            <label> Class Location:
                    <select className= "bg-indigo-500 text-white p-1"
                        value={values.location}
                        onChange={onChange}
                        name='location'
                    >
                    <option value=''>- Select a room -</option>
                    <option value='gym-1'>Gym 1</option>
                    <option value='gym-2'>Gym 2</option>
                    <option value='studio-1'>Studio 1</option>
                    <option value='studio-2'>Studio 2</option> 
                    </select>    
                </label>
           </div>
            <div>
                {/* Enter Text */}
                <label> Class Size Limit:
                    <input className= "bg-indigo-500 text-white p-1"
                        value={values.max_capacity}
                        onChange={onChange}
                        name='max_capacity'
                        type='number'
                    />
                </label>
            </div>
            <div>
                 {/* Checkbox */}
                <label> Enable Punch Pass?
                    <input className= "bg-indigo-500 text-white p-1"
                        type="checkbox"
                        name="punch_pass"
                        onChange={onChange}
                        checked={values.punch_pass}
                    />
                </label>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={disabled}>Create Class</button>
        </form>
    );
}

export default InstructorForm;