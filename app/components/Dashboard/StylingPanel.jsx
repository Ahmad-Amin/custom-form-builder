'use client'

import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";

const StylingPanel = ({ isOpen, onClose, onApplyStyle, currentStyles }) => {
  const [labelClasses, setLabelClasses] = useState("");
  const [inputClasses, setInputClasses] = useState("");
  const [buttonClasses, setButtonClasses] = useState("");

  useEffect(() => {
    if (currentStyles) {
      setLabelClasses(currentStyles.label);
      setInputClasses(currentStyles.input);
      setButtonClasses(currentStyles.button);
    }
  }, [currentStyles]);

  const handleApply = () => {
    onApplyStyle({ label: labelClasses, input: inputClasses, button: buttonClasses });
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size='xl'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Style the Element (Tailwind CSS)</DrawerHeader>
        <DrawerBody>
          <Box mb="4">
            <div className=" flex flex-row gap-3 items-center">
            <label className=" whitespace-nowrap">Label Classes</label>
            <Input
              placeholder="Label Classes"
              value={labelClasses}
              onChange={(e) => setLabelClasses(e.target.value)}
              mb="2"
            />
            </div>
            <div className=" flex flex-row gap-3 items-center">
            <label className=" whitespace-nowrap">Input Field Classes</label>
            <Input
              placeholder="Input Classes"
              value={inputClasses}
              onChange={(e) => setInputClasses(e.target.value)}
              mb="2"
            />
            </div>
            {/* <Input
              placeholder="Button Classes"
              value={buttonClasses}
              onChange={(e) => setButtonClasses(e.target.value)}
            /> */}
          </Box>
          <Button colorScheme="teal" onClick={handleApply}>
            Apply Styles
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default StylingPanel;
