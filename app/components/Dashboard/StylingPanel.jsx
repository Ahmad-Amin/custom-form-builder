// src/components/StylingPanel.js

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
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Style the Element</DrawerHeader>
        <DrawerBody>
          <Box mb="4">
            <Input
              placeholder="Label Classes"
              value={labelClasses}
              onChange={(e) => setLabelClasses(e.target.value)}
              mb="2"
            />
            <Input
              placeholder="Input Classes"
              value={inputClasses}
              onChange={(e) => setInputClasses(e.target.value)}
              mb="2"
            />
            <Input
              placeholder="Button Classes"
              value={buttonClasses}
              onChange={(e) => setButtonClasses(e.target.value)}
            />
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
