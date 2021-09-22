import React, { useState } from "react";


export default function Class(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on getting class information...</h3>
    }

    return (
        <div className="border-2 max-w-md m-auto	 ">
            <h1 className= "text-gray-50  text-lg p-1.5 " >{details.name}</h1>
            <div className="flex">
                <div className=" justify-center p-1.5 m-auto my-4		">
                    <p className= "text-gray-50" >ClassType</p>
                    <p className= "text-gray-50" >{details.intensity} {details.type}</p>
                </div>
                <div className=" justify-center p-1.5 m-auto my-4		">
                    <p className= "text-gray-50" >{details.day}: {details.time}</p>
                    <p className= "text-gray-50" >Duration: {details.duration}</p>
                </div>
            </div>
            <div className="flex"> 
                <div className=" justify-center p-1.5 m-auto my-4	">
                    <p className= "text-gray-50" >Location:</p>
                    <p className= "text-gray-50" >{details.location}</p>
                </div>
                <div className="justify-center p-1.5 m-auto my-4		">
                    <p className= "text-gray-50" >Max Capacity:</p>
                    <p className= "text-gray-50" > {details.max_capacity}</p>
                </div>
            </div>
            <button className="border-4 p-1.5 text-gray-50 font-bold mb-5">Sign Up</button>
        </div> 
    )
}



    