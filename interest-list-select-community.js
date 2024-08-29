//When users selects "Join Interet List" Select the correct community in the popoup form

$(document).ready(function() {
    // Use event delegation to handle dynamically generated elements
    $(document).on('click', '#regions-join-vip-list', function() {
      // Find the closest CMS item (adjust the selector to match your CMS item structure)
      var cmsItem = $(this).closest('.regions_community');
      
      // Get the name of the CMS item (assuming the name is within an element with class 'cms-item-name')
      var cmsItemName = cmsItem.find('.regions_community-name').text().trim();
      
      // Update the select field in the form
      $('#regions-select-community').val(cmsItemName);
    });
  });