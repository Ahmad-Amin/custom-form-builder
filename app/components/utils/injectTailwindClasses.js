// src/utils/injectTailwindClasses.js

const injectTailwindClasses = (classes) => {
  if (!classes || !classes.length) return;

  const styleId = 'dynamic-tailwind-styles';
  let styleElement = document.getElementById(styleId);

  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .${classes.join(',.')} {}
  `;
};

export default injectTailwindClasses;
