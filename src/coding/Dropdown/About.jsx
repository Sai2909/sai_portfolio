import React from 'react'
import { Languages } from './Languages';

const About = ({ language }) => {
    console.log(language, "Its Coming")
    const data = Languages[language];

    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-lg mx-auto mt-4">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">{data.title}</h2>
            <p className="text-gray-700">{data.body}</p>
        </div>
    )
}

export default About;
