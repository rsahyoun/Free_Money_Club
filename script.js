// Game variables
let score = 0;
let moneyPerClick = 1;

// DOM elements
const scoreDisplay = document.getElementById('score');
const moneyClicker = document.getElementById('money-clicker');
const moneyPerClickDisplay = document.getElementById('money-per-click');

// Click event for the money icon
moneyClicker.addEventListener('click', () => {
    // Increase score
    score += moneyPerClick;
    
    // Update display
    scoreDisplay.textContent = score;
    
    // Add animation class
    moneyClicker.classList.add('money-animation');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        moneyClicker.classList.remove('money-animation');
    }, 300);
    
    // Create floating money text
    createFloatingText();
});

// Function to create floating text effect when clicking
function createFloatingText() {
    const floatingText = document.createElement('div');
    floatingText.textContent = `+$${moneyPerClick}`;
    floatingText.style.position = 'absolute';
    
    // Position near the money icon
    const rect = moneyClicker.getBoundingClientRect();
    const randomOffsetX = Math.random() * 60 - 30;
    
    floatingText.style.left = `${rect.left + rect.width/2 + randomOffsetX}px`;
    floatingText.style.top = `${rect.top + 20}px`;
    
    // Styling
    floatingText.style.color = '#4CAF50';
    floatingText.style.fontWeight = 'bold';
    floatingText.style.fontSize = '1.5rem';
    floatingText.style.pointerEvents = 'none';
    floatingText.style.transition = 'all 1s ease-out';
    floatingText.style.opacity = '1';
    
    document.body.appendChild(floatingText);
    
    // Animate and remove
    setTimeout(() => {
        floatingText.style.opacity = '0';
        floatingText.style.transform = 'translateY(-50px)';
        
        setTimeout(() => {
            document.body.removeChild(floatingText);
        }, 1000);
    }, 50);
}

// You could add upgrades here in the future
// For example:
/*
function buyUpgrade(cost, moneyPerClickIncrease) {
    if (score >= cost) {
        score -= cost;
        moneyPerClick += moneyPerClickIncrease;
        scoreDisplay.textContent = score;
        moneyPerClickDisplay.textContent = moneyPerClick;
    }
}
*/ 