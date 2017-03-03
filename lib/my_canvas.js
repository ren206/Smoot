export const getElement = () => {
  return document.getElementsByTagName("canvas")[0];
}

// const element = document.getElementsByTagName("canvas")[0];

export const getBorders = () => {
  const clientRect = getElement().getBoundingClientRect();
  return {
    left: clientRect.left,
    right: clientRect.right,
    top: clientRect.top,
    bottom: clientRect.bottom
  }
}

export const getTopBorder = () => {
  return getBorders().top;
}
