'use client'
import React, { useState } from 'react';

const GeneratedForm = () => {
  const [formData, setFormData] = useState({});
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      
        <div key={0} className="grid gap-4 mb-4 grid-cols-1">
          
            <div key={0} className="flex flex-col">
              
                <div className="flex flex-col text-left">
                  <label className="text-gray-700 mr-4">Email</label>
                  
                    <input
                      type="email"
                      name="email"
                      placeholder=""
                      defaultValue=""
                      className="w-full px-3 py-2 border rounded-lg"
                      onChange={handleChange}
                    />
                  
                </div>
              
            </div>
          
        </div>
      
        <div key={1} className="grid gap-4 mb-4 grid-cols-2">
          
            <div key={0} className="flex flex-col">
              
                <div className="flex flex-col text-left">
                  <label className="text-gray-700 mr-4">Password 2</label>
                  
                    <input
                      type="password"
                      name="password2"
                      placeholder=""
                      defaultValue=""
                      className="w-full px-3 py-2 border rounded-lg"
                      onChange={handleChange}
                    />
                  
                </div>
              
            </div>
          
            <div key={1} className="flex flex-col">
              
                <div className="flex flex-col text-left">
                  <label className="text-gray-700 mr-4">Textarea</label>
                  
                    <textarea
                      name="textarea"
                      placeholder=""
                      defaultValue=""
                      className="w-full px-3 py-2 border rounded-lg"
                      onChange={handleChange}
                      rows='6'
                    />
                  
                </div>
              
            </div>
          
        </div>
      
      <div className=" flex flex-row justify-end">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default GeneratedForm;