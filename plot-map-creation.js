  // Create a <style> element
  var style = document.createElement('style');
  style.type = 'text/css';

  // Add CSS rules to the <style> element
  style.appendChild(document.createTextNode(`
    .popup {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 8px;
      border-radius: 5px;
      font-size: 14px;
      pointer-events: none;
      z-index: 1000;
    }

    .plot_dot-fake { /* Updated class name */
      position: absolute;
      width: 1.25rem; /* Set a width for the dot */
      height: 1.25rem; /* Set a height for the dot */
      background-color: red; /* Example color for visibility */
      border: 2px solid white;
      border-radius: 50%; /* Make it circular */
      pointer-events: none; /* Ensure clicks go through the dot */
      z-index: 999; /* Ensure it appears above other elements */
    }
  `));

  // Append the <style> element to the <head> of the document
  document.head.appendChild(style);

  // Wait for the page to load fully
  window.onload = function() {
    // Get all images with the class .plot-drag-drop_image
    const images = document.querySelectorAll('.plot-drag-drop_image');

    images.forEach((image) => {
      // Add a click event listener to each image
      image.addEventListener('click', function(event) {
        // Remove any existing popup before creating a new one
        const existingPopup = document.querySelector('.popup');
        if (existingPopup) {
          existingPopup.remove();
        }

        // Remove all existing plot_dot-fake elements before creating a new one
        const existingDots = document.querySelectorAll('.plot_dot-fake'); // Updated class name
        existingDots.forEach(dot => dot.remove());

        // Get the image dimensions and the click coordinates
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left; // X coordinate of the click
        const y = event.clientY - rect.top;  // Y coordinate of the click

        // Calculate the percentages
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        // Create a popup div
        const popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerText = `Left: ${xPercent.toFixed(2)}% | Top: ${yPercent.toFixed(2)}%`;

        // Append the popup to the body
        document.body.appendChild(popup);

        // Position the popup above the click position
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;

        // Set the popup position near the click but above it
        let leftPos = event.pageX - popupWidth / 2; // Centered horizontally
        let topPos = event.pageY - popupHeight - 10; // Above the click with a 10px offset

        // Adjust the popup position if it overflows the viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Check if popup goes off the right edge
        if (leftPos + popupWidth > viewportWidth) {
          leftPos = viewportWidth - popupWidth - 10; // Move it to the left
        }

        // Check if popup goes off the left edge
        if (leftPos < 0) {
          leftPos = 10; // Move it to the right
        }

        // Check if popup goes off the top edge
        if (topPos < 0) {
          topPos = event.pageY + 10; // Move it below the click position
        }

        // Apply calculated positions to the popup
        popup.style.left = `${leftPos}px`;
        popup.style.top = `${topPos}px`;

        // Update the .absolute-positions text blocks
        const parentContainer = image.parentElement;
        const absolutePositionElements = parentContainer.querySelectorAll('.absolute-positions');
        
        if (absolutePositionElements.length >= 2) {
          absolutePositionElements[0].textContent = `${xPercent.toFixed(2)}%`;
          absolutePositionElements[1].textContent = `${yPercent.toFixed(2)}%`;
        }

        // Create a plot_dot-fake div
        const plotDot = document.createElement('div');
        plotDot.classList.add('plot_dot-fake'); // Updated class name

        // Center the plot_dot-fake around the click position
        // plotDot.style.left = `${event.pageX - 10=}px`; // Centered, adjust for dot size
       //  plotDot.style.top = `${event.pageY - 10}px`; // Centered, adjust for dot size

        // Append the plot_dot-fake to the body
        document.body.appendChild(plotDot);
      });
    });
  };