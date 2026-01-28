/**
 * Style Toggle Script
 * Toggles between two CSS stylesheets (style1.css and style2.css)
 * Persists the user's preference using localStorage
 */

// Initialize the style on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStyle();
});

/**
 * Initialize the stylesheet based on stored preference or default
 */
function initializeStyle() {
    const stylesheet = document.getElementById('stylesheet');
    const savedStyle = localStorage.getItem('preferredStyle');
    
    // Set default to style1.css if no preference is saved
    const styleToUse = savedStyle || 'css/style1.css';
    stylesheet.href = styleToUse;
    
    // Set initial button text based on current style
    updateToggleButtonText(styleToUse);
}

/**
 * Toggle between the two available CSS stylesheets
 */
function toggleStyle() {
    const stylesheet = document.getElementById('stylesheet');
    const currentHref = stylesheet.href;
    
    // Determine which stylesheet to switch to
    let newStylesheet;
    if (currentHref.includes('style1.css')) {
        newStylesheet = 'css/style2.css';
    } else {
        newStylesheet = 'css/style1.css';
    }
    
    // Update the stylesheet
    stylesheet.href = newStylesheet;
    
    // Save the preference to localStorage
    localStorage.setItem('preferredStyle', newStylesheet);
    
    // Update button text
    updateToggleButtonText(newStylesheet);
}

/**
 * Update the toggle button text to reflect the current style
 * @param {string} currentStylesheet - The path to the current stylesheet
 */
function updateToggleButtonText(currentStylesheet) {
    const toggleButton = document.querySelector('.style-toggle');
    
    if (toggleButton) {
        if (currentStylesheet.includes('style2.css')) {
            toggleButton.textContent = 'Toggle Style';
        } else {
            toggleButton.textContent = 'Toggle Style';
        }
    }
}

// Optional: Smooth transition effect when changing styles
function toggleStyleWithTransition() {
    const body = document.body;
    
    // Add fade-out effect
    body.style.opacity = '0.5';
    body.style.transition = 'opacity 0.3s ease';
    
    // Toggle style after brief delay
    setTimeout(function() {
        toggleStyle();
        // Fade back in
        body.style.opacity = '1';
    }, 150);
}
