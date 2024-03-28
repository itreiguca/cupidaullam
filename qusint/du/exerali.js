function removeClass(elements, className) {
  if (elements) {
    Array.from(elements).forEach(element => {
      element.classList.remove(className);
    });
  }
}

// Example usage:
removeClass(document.getElementsByClassName("leader"), "selected");
