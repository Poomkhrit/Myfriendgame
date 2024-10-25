// Function to start the game
function enterGame() {
    document.querySelector('.main-menu').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';
}

// Helper function to hide all items in a given category
function hideItemsByCategory(categoryClass) {
    const items = document.querySelectorAll(`[id^="${categoryClass}"]`);
    items.forEach(item => {
        item.style.visibility = 'hidden';
    });
}

// Modified toggleItem function
function toggleItem(itemId, categoryClass) {
    const item = document.getElementById(itemId);

    // Special case for FaceL and FaceR - these items cannot be completely removed
    if (categoryClass === 'face-left' || categoryClass === 'face-right') {
        hideItemsByCategory(categoryClass); // Hide other face items
        item.style.visibility = 'visible';  // Ensure the clicked face is always shown
    } else {
        // For other categories (like backpack, shoes, etc.), we allow toggling on and off
        if (item.style.visibility === 'visible') {
            item.style.visibility = 'hidden';
        } else {
            hideItemsByCategory(categoryClass);
            item.style.visibility = 'visible';
        }
    }
}