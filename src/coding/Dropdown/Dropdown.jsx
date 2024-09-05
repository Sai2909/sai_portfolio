import React, { useState } from 'react';
import About from './About';

const Dropdown = () => {
  const [language, setLanguage] = useState("te");

  return (
    <div className="flex flex-col items-center mt-6">
      <select 
        className="p-2 border border-gray-300 rounded-md mb-4" 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="te">Telugu</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ru">Russian</option>
        <option value="sp">Spanish</option>
      </select>
      <About language={language} />
    </div>
  );
}

export default Dropdown;
