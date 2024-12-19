const normalizeValues = () => {
  const playerValues = document.querySelectorAll(".stat");
  playerValues.forEach((element) => {
    const originalValue = parseFloat(element.textContent);
    if (!isNaN(originalValue)) {
      const newValue = Math.round((originalValue * 20) / 99);
      element.textContent = newValue;
    }
  });
};

normalizeValues();
