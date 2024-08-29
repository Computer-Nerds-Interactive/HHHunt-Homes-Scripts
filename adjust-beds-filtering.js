//Changes filtering to min beds if that's all that's present

document.addEventListener("DOMContentLoaded", function() {
    // Get all Webflow CMS collection items with class .regions_community-wrapper
    var communityWrappers = document.querySelectorAll(".regions_community-wrapper");

    communityWrappers.forEach(function(wrapper) {
        // Check the element with class .is-beds-max within each wrapper
        var bedsMax = wrapper.querySelector(".is-beds-max");
        
        if (bedsMax && bedsMax.classList.contains("w-condition-invisible")) {
            // Find the element with class .is-beds-min within the same wrapper
            var bedsMin = wrapper.querySelector(".is-beds-min");
            
            if (bedsMin) {
                // Add the attribute fs-cmsfilter-field="beds" to the beds-min element
                bedsMin.setAttribute("fs-cmsfilter-field", "beds");
            }
        }

        // Check the element with class .is-baths-max within each wrapper
        var bathsMax = wrapper.querySelector(".is-baths-max");
        
        if (bathsMax && bathsMax.classList.contains("w-condition-invisible")) {
            // Find the element with class .is-baths-min within the same wrapper
            var bathsMin = wrapper.querySelector(".is-baths-min");
            
            if (bathsMin) {
                // Add the attribute fs-cmsfilter-field="baths" to the baths-min element
                bathsMin.setAttribute("fs-cmsfilter-field", "baths");
            }
        }

        // Check the element with class .is-sq-ft-max within each wrapper
        var sqftMax = wrapper.querySelector(".is-sq-ft-max");
        
        if (sqftMax && sqftMax.classList.contains("w-condition-invisible")) {
            // Find the element with class .is-sq-ft-min within the same wrapper
            var sqftMin = wrapper.querySelector(".is-sq-ft-min");
            
            if (sqftMin) {
                // Change the attribute fs-cmsfilter-field="sq-ft-max" on the sqft-min element
                sqftMin.setAttribute("fs-cmsfilter-field", "sq-ft-max");
            }
            
            // Find the element with class .is-sq-ft-zero within the same wrapper
            var sqftZero = wrapper.querySelector(".is-sq-ft-zero");
            
            if (sqftZero) {
                // Add the attribute fs-cmsfilter-field="sq-ft-min" to the sq-ft-zero element
                sqftZero.setAttribute("fs-cmsfilter-field", "sq-ft-min");
            }
        }
    });
});
