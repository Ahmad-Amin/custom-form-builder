// src/utils/generateCode.js

const getGridClass = (fieldCount) => {
  switch (fieldCount) {
    case 1:
      return 'grid-cols-1';
    case 2:
      return 'grid-cols-2';
    case 3:
      return 'grid-cols-3';
    case 4:
      return 'grid-cols-4';
    default:
      return 'grid-cols-1';
  }
};

export const generateFormCode = (formFields) => {
  console.log(formFields)
  const code = `
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
      ${formFields
        .map(
          (group, groupIndex) => `
        <div key={${groupIndex}} className="grid gap-4 mb-4 ${getGridClass(group.fields.length)}">
          ${group.fields
            .map(
              (field, fieldIndex) => `
            <div key={${fieldIndex}} className="flex flex-col">
              ${field.labelPosition === 'above' ? `
                <div className="flex flex-col text-left">
                  ${field.type !== 'checkbox' ? `<label className="${field.classes.label + ' mr-4'}">${field.label}</label>` : ''}
                  ${field.type === 'textarea' ? `
                    <textarea
                      name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                      placeholder="${field.placeholder}"
                      defaultValue="${field.defaultValue}"
                      className="${field.classes.input}"
                      onChange={handleChange}
                      rows='6'
                    />
                  ` : field.type === 'checkbox' ? `
                    <div className="flex flex-row gap-3 h-full items-start">
                      <input
                        type="checkbox"
                        name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                        className="mt-1"
                        onChange={handleChange}
                      />
                      <label className="${field.classes.label + ' text-left'}">${field.label}</label>
                    </div>
                  ` : field.type === 'radio' ? `
                    ${field.options.map(
                      (option, optIndex) => `
                        <label key={${optIndex}} className="ml-2">
                          <input
                            type="radio"
                            name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                            value="${option}"
                            defaultChecked={${field.defaultValue === option}}
                            className="mr-1"
                            onChange={handleChange}
                          />
                          ${option}
                        </label>
                      `
                    ).join('')}
                  ` : `
                    <input
                      type="${field.type}"
                      name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                      placeholder="${field.placeholder}"
                      defaultValue="${field.defaultValue}"
                      className="${field.classes.input}"
                      onChange={handleChange}
                    />
                  `}
                </div>
              ` : `
                <div className="flex items-center">
                ${field.type !== 'checkbox' ? `<label className="${field.classes.label + ' mr-4'}">${field.label}</label>`: ''}
                  ${field.type === 'textarea' ? `
                    <textarea
                      name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                      placeholder="${field.placeholder}"
                      defaultValue="${field.defaultValue}"
                      className="mt-1"
                      onChange={handleChange}
                      rows='6'
                    />
                  ` : field.type === 'checkbox' ? `
                    <div className="flex flex-row gap-3 h-full items-start">
                      <input
                        type="checkbox"
                        name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                        className="${field.classes.input}"
                        onChange={handleChange}
                      />
                      <label className="${field.classes.label + ' text-left'}">${field.label}</label>
                    </div>
                  ` : field.type === 'radio' ? `
                    ${field.options.map(
                      (option, optIndex) => `
                        <label key={${optIndex}} className="ml-2">
                          <input
                            type="radio"
                            name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                            value="${option}"
                            defaultChecked={${field.defaultValue === option}}
                            className="mr-1"
                            onChange={handleChange}
                          />
                          ${option}
                        </label>
                      `
                    ).join('')}
                  ` : `
                    <input
                      type="${field.type}"
                      name="${field.label.replace(/\s+/g, '').toLowerCase()}"
                      placeholder="${field.placeholder}"
                      defaultValue="${field.defaultValue}"
                      className="${field.classes.input}"
                      onChange={handleChange}
                    />
                  `}
                </div>
              `}
            </div>
          `
            )
            .join('')}
        </div>
      `
        )
        .join('')}
      <div class=" flex flex-row justify-end">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default GeneratedForm;
`;

  return code;
};
