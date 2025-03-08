import React from "react";

const getGridClass = (fieldCount) => {
  switch (fieldCount) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    default:
      return "grid-cols-1";
  }
};

const FormPreview = ({ formFields }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center">Live Form Preview</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        {formFields.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`grid gap-4 mb-4 ${getGridClass(group.fields.length)}`}
          >
            {group.fields.map((field, fieldIndex) => (
              <div
                key={fieldIndex}
                className={`${
                  field.type === "checkbox" ? "justify-center" : ""
                } flex flex-col`}
              >
                {field.labelPosition === "above" ? (
                  <div className="flex flex-col text-left">
                    {field.type !== "checkbox" && (
                      <label className={field.classes.label + " mr-4"}>
                        {field.label}
                      </label>
                    )}

                    {/* Dropdown Field */}
                    {field.type === "dropdown" ? (
                      <select className={field.classes.input}>
                        {field.options.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        className={field.classes.input}
                        rows={6}
                      />
                    ) : field.type === "checkbox" ? (
                      <div className="flex flex-row gap-3 h-full items-start">
                        <input
                          type="checkbox"
                          defaultChecked={field.defaultValue}
                          className="mt-1"
                        />
                        <label className={field.classes.label + " text-left"}>
                          {field.label}
                        </label>
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        className={field.classes.input}
                      />
                    )}
                  </div>
                ) : (
                  <div className="flex items-center">
                    {field.type !== "checkbox" && (
                      <label className={field.classes.label + " mr-4"}>
                        {field.label}
                      </label>
                    )}

                    {/* Dropdown Field for Label on the Left */}
                    {field.type === "dropdown" ? (
                      <select className={field.classes.input}>
                        {field.options.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        className={field.classes.input}
                        rows={6}
                      />
                    ) : field.type === "checkbox" ? (
                      <div className="flex flex-row gap-3 h-full items-start">
                        <input
                          type="checkbox"
                          defaultChecked={field.defaultValue}
                          className="mt-1"
                        />
                        <label className={field.classes.label + " text-left"}>
                          {field.label}
                        </label>
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        defaultValue={field.defaultValue}
                        className={field.classes.input}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-row justify-end">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormPreview;
