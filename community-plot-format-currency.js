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

    priceDivs.forEach(div => {
      // Get the current text content
      let currentPrice = parseFloat(div.textContent.replace(/[^0-9.-]+/g, ''));
      if (!isNaN(currentPrice)) {
        // Format to currency and update the div's content
        div.textContent = formatCurrency(currentPrice);
      }
    });
  });