//Alphabetized Communities List 

document.addEventListener("DOMContentLoaded", function() {
    // Select the container of the nested collection list
    const nestedCollectionContainer = document.querySelector('.regions_communities-collection-list');
  
    // Select all the nested items within the container
    const items = Array.from(nestedCollectionContainer.querySelectorAll('.regions_community-wrapper'));
  
    // Sort items alphabetically based on the text inside .nested-item-title
    items.sort((a, b) => {
      const titleA = a.querySelector('.regions_community-name').textContent.trim().toLowerCase();
      const titleB = b.querySelector('.regions_community-name').textContent.trim().toLowerCase();
      return titleA.localeCompare(titleB);
    });
  
    // Remove all existing items from the container
    items.forEach(item => nestedCollectionContainer.removeChild(item));
  
    // Append sorted items back to the container
    items.forEach(item => nestedCollectionContainer.appendChild(item));
  });