document.getElementById("contact-home-specialist").addEventListener("click", function() {
    // Get the text of the element with the class 'community_community-name'
    var communityName = document.querySelector(".community_community-name").textContent;

    // Get the select field
    var selectField = document.getElementById("community-select");

    // Loop through the options of the select field
    for (var i = 0; i < selectField.options.length; i++) {
        if (selectField.options[i].text === communityName) {
            // Select the option that matches the community name
            selectField.selectedIndex = i;
            break;
        }
    }
});