// src/FieldSidebar.js

import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Box } from "@chakra-ui/react";

const fieldTypes = [
  { id: "text", label: "Text" },
  { id: "email", label: "Email" },
  { id: "password", label: "Password" },
  { id: "textarea", label: "Textarea" },
  { id: "checkbox", label: "Checkbox" },
  { id: "radio", label: "Radio" },
  { id: "number", label: "Number" },
];

const FieldSidebar = ({ innerRef, provided }) => {
  return (
    <div
      className="bg-[#CBE4DE] p-3 flex flex-row flex-wrap gap-3 rounded-md shadow-lg"
      ref={innerRef}
      {...provided.droppableProps}
    >
      {fieldTypes.map((field, index) => (
        <Draggable key={field.id} draggableId={field.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className=" inline-block p-3 rounded-md bg-[#0E8388]"
            >
              <p className=" text-white">{field.label}</p>
            </div>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
  );
};

export default FieldSidebar;
