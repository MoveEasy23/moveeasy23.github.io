let cartCount = 0;

// Updated Plans: Standard, Plus, Pro, Luxury (4 cards) with English content and prices in USD
const pricingPlans = [
    {
        title: "Standard",
        price: 65000,
        features: [
            "Level 5 autonomous driving",
            "Range of 400 km",
            "Premium interior",
            "Standard audio system",
            "12-inch touchscreen display",
            "24/7 roadside assistance",
            "3-year warranty"
        ],
        isSpecial: false,
        id: 1
    },
    {
        title: "Plus",
        price: 75000,
        features: [
            "All Standard features",
            "Extended range of 600 km",
            "Luxury real leather interior",
            "High-fidelity Bose audio system",
            "15-inch touchscreen display",
            "Electric panoramic roof",
            "Heated and ventilated seats",
            "5-year warranty"
        ],
        isSpecial: false,
        id: 2
    },
    {
        title: "Pro",
        price: 90000,
        features: [
            "All Plus features",
            "Sport performance package",
            "Extended range of 680 km",
            "8-way massaging seats",
            "Personal AI assistant",
            "Premium metallic paint",
            "Air purification system",
            "LED ambient lighting",
            "7-year warranty"
        ],
        isSpecial: false,
        id: 3
    },
    {
        title: "Luxury", // Special Luxury card
        price: 135000,
        features: [
            "All Pro features",
            "Unlimited range (750 km)",
            "Premium Nappa leather interior",
            "Mark Levinson audio system",
            "Built-in refrigerator",
            "Individual rear screens",
            "VIP community access",
            "Dedicated concierge service",
            "10-year warranty"
        ],
        isSpecial: true,
        id: 4
    }
];

/**
 * Displays a simple toast notification.
 * @param {string} message - The message to display.
 */
const showToast = (message) => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    toast.className = 'toast-message';
    toast.innerHTML = `
        <i class="fas fa-check-circle mr-3"></i> 
        <span>${message}</span>
    `;

    container.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
};

/**
 * Updates the cart count in the header.
 */
const updateCartCount = () => {
    document.getElementById('cart-count').textContent = cartCount;
};

/**
 * Adds a plan to the cart and shows a toast notification.
 * @param {string} planTitle - The plan title.
 */
window.handleAddToCart = (planTitle) => {
    cartCount += 1;
    updateCartCount();
    showToast(`Plan ${planTitle} added to cart!`); // English toast message
};

/**
 * Generates the HTML for a specific pricing card.
 * @param {Object} plan - Pricing plan data.
 * @param {number} index - Plan index for animation.
 * @returns {string} The HTML fragment of the card.
 */
const renderPricingCard = (plan, index) => {
    const isSpecial = plan.isSpecial;
    
    let buttonClasses = 'btn ';
    // The "Special" card has a default button style
    if (isSpecial) {
        buttonClasses += 'btn-default';
    } else {
        buttonClasses += 'btn-outline';
    }

    // Format price (in USD)
    const priceFormatted = plan.price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

    // Build the feature list
    const featureList = plan.features.map(feature => `
        <div class="feature-item">
            <!-- Check Icon (Pure SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span class="feature-text">${feature}</span>
        </div>
    `).join('');

    return `
        <div style="animation-delay: ${index * 0.1}s;">
            <div class="pricing-card">
                ${isSpecial ? '<div class="corner-ribbon"></div>' : ''}
                <div class="pricing-card-header">
                    <h3 class="pricing-card-title">${plan.title}</h3>
                    <div class="pricing-card-price">
                        <span class="gradient-text">${priceFormatted}</span>
                        <span class="pricing-card-currency">USD</span>
                    </div>
                </div>
                <div class="pricing-card-features">
                    ${featureList}
                </div>
                <div class="pricing-card-footer">
                    <button 
                        onclick="handleAddToCart('${plan.title}, ${plan.price}, ${plan.id}'); compteur()"
                        class="${buttonClasses}"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    `;
};

/**
 * Renders all pricing cards in the grid.
 */
const renderAllPricingCards = () => {
    const grid = document.getElementById('pricing-grid');
    if (grid) {
        grid.innerHTML = pricingPlans.map(renderPricingCard).join('');
    }
};

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', () => {
    renderAllPricingCards();
    updateCartCount();
});
