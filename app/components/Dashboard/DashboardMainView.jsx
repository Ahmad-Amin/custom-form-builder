"use client";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  ChakraProvider,
  Button,
  Box,
  Flex,
  IconButton,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import { v4 as uuidv4 } from "uuid";
import { themes } from "../utils/themes";
import StylingPanel from "./StylingPanel";
import FormPreview from "./FormPreview";
import FieldSidebar from "./FieldSiderbar";
import { generateFormCode } from "../utils/generateCode";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import withAuth from "../withAuth";

const DashboardMainView = () => {
  const router = useRouter();
  const [formFields, setFormFields] = useState([{ id: uuidv4(), fields: [] }]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementIndex, setSelectedElementIndex] = useState(null);
  const [currentClasses, setCurrentClasses] = useState({
    label: "",
    input: "",
    button: "",
  });
  const [theme, setTheme] = useState("default");
  const [isStylingPanelOpen, setStylingPanelOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editFieldData, setEditFieldData] = useState({
    label: "",
    type: "text",
    placeholder: "",
    defaultValue: "",
    isRequired: false,
    labelPosition: "above",
    options: "", // Add options field for radio buttons
  });
  const [editFieldIndex, setEditFieldIndex] = useState(null);

  const openStylingPanel = () => setStylingPanelOpen(true);
  const closeStylingPanel = () => setStylingPanelOpen(false);

  const handleElementClick = (
    elementType,
    groupIndex,
    fieldIndex,
    currentStyles
  ) => {
    setSelectedElement(elementType);
    setSelectedElementIndex({ groupIndex, fieldIndex });
    setCurrentClasses(currentStyles);
    openStylingPanel();
  };

  const updateElementStyle = (classes) => {
    const updatedFields = [...formFields];
    if (selectedElement !== null && selectedElementIndex !== null) {
      const { groupIndex, fieldIndex } = selectedElementIndex;
      updatedFields[groupIndex].fields[fieldIndex].classes = {
        ...updatedFields[groupIndex].fields[fieldIndex].classes,
        ...classes,
      };
      updatedFields[groupIndex].fields[fieldIndex].key = `field-${Date.now()}`;
      setFormFields(updatedFields);
    }
  };

  const handleExport = () => {
    const code = generateFormCode(formFields);
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "GeneratedForm.js";
    document.body.appendChild(element);
    element.click();
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    // Reordering groups
    if (
      source.droppableId === "groups" &&
      destination.droppableId === "groups"
    ) {
      const updatedFields = Array.from(formFields);
      const [removed] = updatedFields.splice(source.index, 1);
      updatedFields.splice(destination.index, 0, removed);
      setFormFields(updatedFields);
      return;
    }

    // Handle drag and drop between sidebar and form builder
    if (source.droppableId === "sidebar") {
      if (destination.droppableId.startsWith("group-")) {
        const groupIndex = parseInt(destination.droppableId.split("-")[1], 10);
        const fieldType = result.draggableId;

        const newField = {
          id: uuidv4(),
          label: fieldType.charAt(0).toUpperCase() + fieldType.slice(1),
          type: fieldType,
          placeholder: "",
          defaultValue: "",
          isRequired: false,
          labelPosition: "above",
          options: [], // Initialize options as an array
          name: uuidv4(), // Add unique name for radio buttons
          classes: {
            label: themes[theme].label,
            input: themes[theme].input,
            button: themes[theme].button,
          },
        };

        const updatedFields = [...formFields];
        updatedFields[groupIndex].fields.splice(destination.index, 0, newField);
        setFormFields(updatedFields);
      } else if (destination.droppableId === "groups") {
        const fieldType = result.draggableId;

        const newField = {
          id: uuidv4(),
          label: fieldType.charAt(0).toUpperCase() + fieldType.slice(1),
          type: fieldType,
          placeholder: "",
          defaultValue: "",
          isRequired: false,
          labelPosition: "above",
          options: [], // Initialize options as an array
          name: uuidv4(), // Add unique name for radio buttons
          classes: {
            label: themes[theme].label,
            input: themes[theme].input,
            button: themes[theme].button,
          },
        };

        const newGroup = {
          id: uuidv4(),
          fields: [newField],
        };

        const updatedFields = [...formFields];
        updatedFields.splice(destination.index, 0, newGroup);
        setFormFields(updatedFields);
      }
      return;
    }

    // Handle drag and drop within or between groups
    if (
      source.droppableId.startsWith("group-") &&
      destination.droppableId.startsWith("group-")
    ) {
      const sourceGroupIndex = parseInt(source.droppableId.split("-")[1], 10);
      const destinationGroupIndex = parseInt(
        destination.droppableId.split("-")[1],
        10
      );

      const sourceFields = Array.from(formFields[sourceGroupIndex].fields);
      const [removed] = sourceFields.splice(source.index, 1);

      if (sourceGroupIndex === destinationGroupIndex) {
        sourceFields.splice(destination.index, 0, removed);
        const updatedFields = [...formFields];
        updatedFields[sourceGroupIndex].fields = sourceFields;
        setFormFields(updatedFields);
      } else {
        const destinationFields = Array.from(
          formFields[destinationGroupIndex].fields
        );
        destinationFields.splice(destination.index, 0, removed);

        const updatedFields = [...formFields];
        updatedFields[sourceGroupIndex].fields = sourceFields;
        updatedFields[destinationGroupIndex].fields = destinationFields;

        setFormFields(updatedFields);
      }
    }
  };

  const addGroup = () => {
    setFormFields([...formFields, { id: uuidv4(), fields: [] }]);
  };

  const removeGroup = (groupIndex) => {
    const updatedFields = [...formFields];
    updatedFields.splice(groupIndex, 1);
    setFormFields(updatedFields);
  };

  const removeFormField = (groupIndex, fieldIndex) => {
    const updatedFields = [...formFields];
    updatedFields[groupIndex].fields.splice(fieldIndex, 1);
    if (updatedFields[groupIndex].fields.length === 0) {
      updatedFields.splice(groupIndex, 1);
    }
    setFormFields(updatedFields);
  };

  const handleEditClick = (groupIndex, fieldIndex) => {
    const field = formFields[groupIndex].fields[fieldIndex];
    setEditFieldData({ ...field, options: field.options.join(", ") });
    setEditFieldIndex({ groupIndex, fieldIndex });
    setEditModalOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFieldData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = () => {
    const updatedFields = [...formFields];
    const { groupIndex, fieldIndex } = editFieldIndex;
    updatedFields[groupIndex].fields[fieldIndex] = {
      ...editFieldData,
      options: editFieldData.options.split(",").map((option) => option.trim()),
    };
    setFormFields(updatedFields);
    setEditModalOpen(false);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: "10px",
    margin: `0 0 10px 0`,
    border: "1px solid #ccc",
    borderRadius: "5px",
    background: isDragging ? "#e0e0e0" : "#f9f9f9",
    boxShadow: isDragging ? "0 2px 8px rgba(0, 0, 0, 0.2)" : "none",
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#f0f0f0" : "#ffffff",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  });

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

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Redirect to the login page after signing out
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <ChakraProvider>
      <div className=" p-3 md:p-8">
        <div className=" flex flex-row justify-between mb-8 ">
          <div className="text-[#2E4F4F] font-extrabold text-2xl items-center justify-center flex">
            Custom Form Builder
          </div>
          <div>
            <p className=" mb-2">{auth.currentUser.displayName}</p>
            <button
              onClick={handleLogOut}
              className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-1 px-5 w-auto shadow-lg"
            >
              Log Out
            </button>
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className=" flex flex-col md:flex-row">
            <Droppable droppableId="sidebar" type="field">
              {(provided) => (
                <div className=" md:w-60 w-full">
                  <FieldSidebar
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    provided={provided}
                  />
                </div>
              )}
            </Droppable>
            <div className=" flex-1 p-4">
              <Button
                onClick={addGroup}
                colorScheme="green"
                mb="20px"
                ml="10px"
              >
                Add Section
              </Button>

              <div className="max-h-[700px] overflow-y-auto">
                <Droppable
                  droppableId="groups"
                  type="group"
                  direction="vertical"
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        ...getListStyle(snapshot.isDraggingOver),
                        marginBottom: "10px",
                      }}
                    >
                      {formFields.map((group, groupIndex) => (
                        <div key={group.id}>
                          <Draggable
                            key={group.id}
                            draggableId={group.id}
                            index={groupIndex}
                          >
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                style={{
                                  ...getItemStyle(
                                    snapshot.isDragging,
                                    provided.draggableProps.style
                                  ),
                                  marginBottom: "10px",
                                }}
                              >
                                <Flex
                                  align="center"
                                  {...provided.dragHandleProps}
                                  marginBottom="10px"
                                >
                                  <IconButton
                                    icon={<HamburgerIcon />}
                                    aria-label="Drag group handle"
                                    variant="ghost"
                                  />
                                  <Box flex="1" ml="4">
                                    Section {groupIndex + 1}
                                  </Box>
                                  <Button
                                    onClick={() => removeGroup(groupIndex)}
                                    ml="10px"
                                    className="!bg-[#0E8388] !text-white !text-sm md:!text-base py-2 px-4 rounded"
                                  >
                                    Remove Section
                                  </Button>
                                </Flex>
                                <Droppable
                                  droppableId={`group-${groupIndex}`}
                                  type="field"
                                  direction="vertical"
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.droppableProps}
                                      className={`grid gap-4 ${getGridClass(
                                        group.fields.length
                                      )}`}
                                      style={{
                                        marginBottom: "10px",
                                        padding: "10px",
                                        border: "1px solid #ccc",
                                        borderRadius: "5px",
                                        backgroundColor: snapshot.isDraggingOver
                                          ? "#f0f0f0"
                                          : "#ffffff",
                                      }}
                                    >
                                      {group.fields.map((field, fieldIndex) => (
                                        <Draggable
                                          key={field.id}
                                          draggableId={field.id}
                                          index={fieldIndex}
                                        >
                                          {(provided, snapshot) => (
                                            <Box
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              mb="10px"
                                              border="1px solid #ccc"
                                              borderRadius="5px"
                                              bg="#f9f9f9"
                                            >
                                              <Flex align="center">
                                                <Box flex="1" ml="4">
                                                  <label className="block text-gray-700">
                                                    {field.label}
                                                  </label>
                                                  <input
                                                    type={field.type}
                                                    placeholder={
                                                      field.placeholder
                                                    }
                                                    defaultValue={
                                                      field.defaultValue
                                                    }
                                                    className={
                                                      field.classes.input
                                                    }
                                                  />
                                                </Box>
                                                <div className="flex flex-col">
                                                  <span
                                                    onClick={() =>
                                                      removeFormField(
                                                        groupIndex,
                                                        fieldIndex
                                                      )
                                                    }
                                                    className="!text-red-500 py-2 px-4 rounded-full cursor-pointer"
                                                  >
                                                    <TrashIcon width={20} />
                                                  </span>
                                                  <span
                                                    onClick={() =>
                                                      handleEditClick(
                                                        groupIndex,
                                                        fieldIndex
                                                      )
                                                    }
                                                    className="!text-blue-500 py-2 px-4 rounded cursor-pointer"
                                                  >
                                                    <PencilSquareIcon
                                                      width={20}
                                                    />
                                                  </span>
                                                  <span
                                                    onClick={() =>
                                                      handleElementClick(
                                                        "element",
                                                        groupIndex,
                                                        fieldIndex,
                                                        field.classes
                                                      )
                                                    }
                                                    className="!text-gray-500 py-2 px-4 rounded cursor-pointer"
                                                  >
                                                    <SettingsIcon />
                                                  </span>
                                                </div>
                                              </Flex>
                                            </Box>
                                          )}
                                        </Draggable>
                                      ))}
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              </div>
                            )}
                          </Draggable>
                        </div>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>

              <button
                className="bg-[#0E8388] hover:bg-[#246c6e] transform transition-all duration-150 text-white rounded-md py-2 px-5 w-auto shadow-lg"
                onClick={handleExport}
                mt="4"
              >
                Export Form Code
              </button>
            </div>
            <Box flex="1" p="4">
              <FormPreview formFields={formFields} />
            </Box>
          </div>
        </DragDropContext>

        <StylingPanel
          isOpen={isStylingPanelOpen}
          onClose={closeStylingPanel}
          onApplyStyle={updateElementStyle}
          currentStyles={currentClasses}
        />

        <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Field</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className=" flex flex-row items-center gap-2">
                <label className="w-16">Label:</label>
                <Input
                  name="label"
                  placeholder="Label"
                  value={editFieldData.label}
                  onChange={handleEditChange}
                  mb="10px"
                />
              </div>
              <div className=" flex flex-row items-center gap-2">
                <label className=" w-16">Type:</label>
                <Select
                  name="type"
                  value={editFieldData.type}
                  onChange={handleEditChange}
                  mb="10px"
                >
                  <option value="text">Text</option>
                  <option value="password">Password</option>
                  <option value="email">Email</option>
                  <option value="number">Number</option>
                  <option value="textarea">Textarea</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="radio">Radio</option>
                </Select>
              </div>
              <div className=" flex flex-row gap-2 items-center">
                <label className=" text-base flex-1 whitespace-nowrap">
                  Label Position
                </label>
                <Select
                  name="labelPosition"
                  value={
                    editFieldData.type === "checkbox"
                      ? "left"
                      : editFieldData.labelPosition
                  }
                  disabled={editFieldData.type === "checkbox"}
                  onChange={handleEditChange}
                  mb="10px"
                >
                  <option value="above">Label Above</option>
                  <option value="left">Label Left</option>
                </Select>
              </div>
              <Input
                name="placeholder"
                placeholder="Placeholder"
                value={editFieldData.placeholder}
                onChange={handleEditChange}
                mb="10px"
              />
              {editFieldData.type === "radio" && (
                <Input
                  name="options"
                  placeholder="Options (comma-separated)"
                  value={editFieldData.options}
                  onChange={handleEditChange}
                  mb="10px"
                />
              )}
              <Checkbox
                name="isRequired"
                isChecked={editFieldData.isRequired}
                onChange={(e) =>
                  setEditFieldData({
                    ...editFieldData,
                    isRequired: e.target.checked,
                  })
                }
                mb="10px"
              >
                Required
              </Checkbox>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={handleEditSubmit}>
                Save
              </Button>
              <Button
                variant="ghost"
                onClick={() => setEditModalOpen(false)}
                ml="10px"
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </ChakraProvider>
  );
};

export default withAuth(DashboardMainView);
