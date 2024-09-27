  document.addEventListener("DOMContentLoaded", function() {
    // Function to format number to currency
    function formatCurrency(value) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    }

    // Find all divs with the class 'popup_spec-price'
    const priceDivs = document.querySelectorAll('div.popup_spec-price');

    //console.log(`Found ${priceDivs.length} price divs.`); // Debugging: log the number of found divs

    priceDivs.forEach((div, index) => {
      // Get the current text content
      let currentPrice = parseFloat(div.textContent.replace(/[^0-9.-]+/g, ''));
      //console.log(`Div ${index + 1}: Original content - "${div.textContent}", Parsed price - ${currentPrice}`); // Debugging

      if (!isNaN(currentPrice)) {
        // Format to currency and update the div's content
        div.textContent = formatCurrency(currentPrice);
        //console.log(`Div ${index + 1}: Updated content to - "${div.textContent}"`); // Debugging
      } else {
        //console.warn(`Div ${index + 1}: Price is not a valid number.`); // Warning for invalid prices
      }
    });
  });