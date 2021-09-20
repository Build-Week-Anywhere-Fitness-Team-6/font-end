import React from 'react';

function InstructorForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }


    return (
        <div className="formContainer">
            <div>
                <h2>Create a New Class</h2>
                <label>Class Name
                    <input 
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label> 
            </div>
            <div>
                <label> Class Type
                    <select 
                        value={values.type}
                        onChange={onChange}
                        name='type'
                    />
                    <option value=''>- Select a Class Type -</option>
                    <option value='yoga'>Yoga</option>
                    <option value='spin'>Spin</option>    
                    <option value='pilates'>Pilates</option>
                    <option value='kickboxing'>KickBoxing</option> 
                </label>
            </div>
            <div>
                 {/* Dropdown */}
                <label> Day 
                    <select 
                        value={values.day}
                        onChange={onChange}
                        name='day'
                    />
                    <option value=''>- Select a Class Type -</option>
                    <option value='monday'>Monday</option>
                    <option value='tuesday'>Tuesday</option>    
                    <option value='wednesday'>Wednesday</option>
                    <option value='thursday'>Thursday</option> 
                    <option value='friday'>Friday</option>
                    <option value='saturday'>Saturday</option> 
                </label>
            </div>
           <div>
                <label> Start Time
                    <input 
                        value={values.time}
                        onChange={onChange}
                        name='time'
                        type='text'
                    />
                </label>
           </div>
            <div>
                 {/* DropDown */}
                <label>Class Duration
                    <select 
                        value={values.duration}
                        onChange={onChange}
                        name='duration'
                    />
                    <option value=''>- Select an Option -</option>
                    <option value='30-min'>30 min</option>
                    <option value='60-min'>60 min</option>
                    <option value='90-min'>90 min</option>     
                </label>
            </div>
           <div>
                {/* Dropdown */}
                <label>Intensity
                    <select 
                        value={values.intensity}
                        onChange={onChange}
                        name='intensity'
                    />
                    <option value=''>- Select an Intensity -</option>
                    <option value='beginner'>Beginner</option>
                    <option value='intermediate'>Intermediate</option>
                    <option value='advanced'>Advanced</option>   
                </label>
           </div>
           <div>
            <label> Class Location
                    <select 
                        value={values.location}
                        onChange={onChange}
                        name='location'
                    />
                    <option value=''>- Select a room -</option>
                    <option value='gym-1'>Gym 1</option>
                    <option value='gym-2'>Gym 2</option>
                    <option value='studio-1'>Studio 1</option>
                    <option value='studio-2'>Studio 2</option>     
                </label>
           </div>
            <div>
                {/* Enter Text */}
                <label> Class Size Limit
                    <input 
                        value={values.max_capacity}
                        onChange={onChange}
                        name='max_capacity'
                        type='text'
                    />
                </label>
            </div>
            <div>
                 {/* Checkbox */}
                <label> Enable Punch Pass?
                    <input
                        type="checkbox"
                        name="punch_pass"
                        onChange={onChange}
                        checked={values.punch_pass}
                    />
                </label>
            </div>
        </div>
    );
}

export default InstructorForm;