export const scrollLeftHandler = (scrollLeft, setScrollLeft) => {
  const chartSelection = document.querySelector(".chart-selection");
  const chartSelectionWidth = chartSelection.offsetWidth;

  if (chartSelection) {
    setScrollLeft(scrollLeft - chartSelectionWidth);
    chartSelection.scrollLeft = scrollLeft - chartSelectionWidth;
  }
};

export const scrollRightHandler = (scrollLeft, setScrollLeft) => {
  const chartSelection = document.querySelector(".chart-selection");
  const chartSelectionWidth = chartSelection.offsetWidth;

  if (chartSelection) {
    setScrollLeft(scrollLeft + chartSelectionWidth);
    chartSelection.scrollLeft = scrollLeft + chartSelectionWidth;
  }
};