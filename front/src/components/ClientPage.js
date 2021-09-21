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
    const classMaxCapacity = document.createElement('p');
    const signUpBtn = document.createElement('button');


    //Setting Class Names, attribute, and Text
    classCard.classList.add('text-blue-700');
    className.textContent = `${name}`;
    className.classList.add('text-blue-700');
    classInfoContainer.classList.add('text-blue-700');
    classInfo1.classList.add('text-blue-700');
    classType.textContent = 'Class Type: ';
    classType.classList.add('text-blue-700');
    classIntensity.textContent = `${intensity} ${type}`;
    classIntensity.classList.add('text-blue-700');
    classInfo2.classList.add('text-blue-700');
    classDate.textContent = `${day} ${time}`;
    classDate.classList.add('text-blue-700');
    classDuration.textContent = `Duration: ${duration}`;
    classDuration.classList.add('text-blue-700');
    classInfoContainer2.classList.add('text-blue-700');
    classInfo3.classList.add('text-blue-700');
    classLocation.textContent = 'Location: '
    classLocation.classList.add('text-blue-700');
    classLocation1.textContent = `${location}`
    classLocation1.classList.add('text-blue-700');
    classInfo4.classList.add('text-blue-700');
    classCapacity.textContent = 'Class Size: ';
    classCapacity.classList.add('text-blue-700');
    classMaxCapacity.textContent = `${max_capacity}`
    classMaxCapacity.classList.add('text-blue-700');
    signUpBtn.textContent = 'Sign Up';
    signUpBtn.classList.add('text-blue-700');
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

    //Appending Elements and creating hierarchy
    
    
    
    return (
        <div>
            
        </div>
    );
}

export default ClientPage;