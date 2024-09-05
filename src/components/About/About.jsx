import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://cdn.pixabay.com/photo/2019/10/06/12/15/box-4530067_1280.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Manchala Sai Kiran, Full stack Developer
                        </h2>
                        <p className="mt-6 text-gray-900">
                        Accumulated nearly 1.5 years of hands-on experience in crafting and shaping Web-based Applications and User Interfaces, leveraging a robust toolkit including HTML5, CSS3, ES6, Bootstrap, JavaScript, JSON, ReactJS, Redux. Proficiently handled React JS components, Forms, Events, Keys, Router, and mastered Redux concepts. Employed Responsive Web Design methodologies, showcasing expertise in media queries, Bootstrap, and Flexbox. Possess foundational knowledge of JavaScript server-side scripting with Node.js and its framework, Express.js. Utilized JIRA for streamlined project tracking and task management. Demonstrated prowess in Redux architecture and workflow management, ensuring optimal state maintenance. Skilled in debugging and troubleshooting, with a deep understanding of DOM (Document Object Model) functions. Known for effective problem-solving skills and adept time management. Thrives both independently and within collaborative team settings, consistently meeting deadlines and delivering robust.
                        </p>
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Experience
                        </h2>
                        <p className="mt-4 text-gray-900">
                        React Developer, OnPassive Technologies Private Limited Hyderabad, Ocreate (2023/Oct – Present).
Ocreate is an innovative application designed to simplify the process of creating web applications, much like Wix Studio. Leveraging the powerful GrapesJS framework for the frontend, combined with React.js for dynamic and responsive UI components, Ocreate offers users an intuitive drag-and-drop interface to design and deploy web applications seamlessly. The backend is robustly built using Java, ensuring high performance and scalability, while MongoDB serves as the database, providing flexible and efficient data management.   
                        </p>
                        <p className="mt-4 text-gray-900">
                        React Developer, OnPassive Technologies Private Limited Hyderabad, Oskill (2023/May - 2023/Oct)
Oskill is a web application designed to empower both learners and educators. It provides a user- friendly platform for creating and consuming online courses. Oskill is ideal for individuals seeking to expand their knowledge base through online courses. It also caters to educators and trainers who want to share their expertise and create impactful learning experiences.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}