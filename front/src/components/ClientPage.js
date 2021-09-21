import React from 'react';

//Create SearchBar at top of page component
//Create Class Card Template to go into a Class Div
//Card also has button to reserve/cancel class

//I have not passed in some sort of current attendance number. Maybe I won't need that

function ClientPage({ name, type, time, day, duration, intensity, location, max_capacity,}) {
    //instantiating Elements
    const classCard = document.createElement('div');
    const className = document.createElement('h1');
    const classInfoContainer = document.createElement('div');
    const classInfo1 = document.createElement('div');
    const classType = document.createElement('p');
    const classIntensity = document.createElement('p');
    const classInfo2 = document.createElement('div');
    const classDate = document.createElement('p');
    const classDuration = document.createElement('p');
    const classInfoContainer2 = document.createElement('div');
    const classInfo3 = document.createElement('div');
    const classLocation = document.createElement('p');
    const classLocation1= document.createElement('p');
    const classInfo4 = document.createElement('div');
    const classCapacity = document.createElement('p');
    const classMassCapacity = document.createElement('p');
    const signUpBtn = document.createElement('button');

    {/* <div>
        <h1>{name}</h1>
        <div classInfoContainer> Flex
            <div classInfo1>
                <p>ClassType</p>
                <p>{intensity}{type}</p>
            </div>
            <div classInfo2>
                <p>{day}{time}</p>
                <p>Duration: {duration}</p>
            </div>
        </div>
        <div classInfoContainer2> Flex
            <div classInfo3>
                <p>Location:</p>
                <p>{location}</p>
            </div>
            <div classInfo4>
                <p>Max Capacity</p>
                <p> {max_capacity}</p>
            </div>
        </div>
        <button>Sign Up</button>
    </div> */}

    //Setting Class Names, attribute, and Text

    //Appending Elements and creating hierarchy
    
    
    
    return (
        <div>
            
        </div>
    );
}

export default ClientPage;