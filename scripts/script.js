 let cartCount = 0;
        // Plans mis à jour : Standard, Plus, Pro, Luxury (4 cartes) avec contenu en Français et prix en CAD
        const pricingPlans = [
            {
                title: "Standard",
                price: 45000,
                features: [
                    "Conduite autonome niveau 5",
                    "Autonomie 400 km",
                    "Intérieur premium",
                    "Système audio standard",
                    "Écran tactile 12 pouces",
                    "Assistance routière 24/7",
                    "Garantie 3 ans"
                ],
                isSpecial: false
            },
            {
                title: "Plus", 
                price: 65000,
                features: [
                    "Toutes fonctionnalités Standard",
                    "Autonomie étendue 600 km",
                    "Intérieur luxe cuir véritable",
                    "Système audio haute-fidélité Bose",
                    "Écran tactile 15 pouces",
                    "Toit panoramique électrique",
                    "Sièges ventilés et chauffants",
                    "Garantie 5 ans"
                ],
                isSpecial: false 
            },
            {
                title: "Pro",
                price: 95000,
                features: [
                    "Toutes fonctionnalités Plus",
                    "Pack sportif performance",
                    "Autonomie étendue 680 km",
                    "Sièges massants 8 directions",
                    "Assistant IA personnalisé",
                    "Peinture métallisée premium",
                    "Système de purification d'air",
                    "Éclairage ambiance LED",
                    "Garantie 7 ans"
                ],
                isSpecial: false
            },
            {
                title: "Luxury", // Nouvelle carte Luxury
                price: 120000,
                features: [
                    "Toutes fonctionnalités Pro",
                    "Autonomie illimitée (750 km)",
                    "Intérieur cuir Nappa premium",
                    "Système audio Mark Levinson",
                    "Réfrigérateur intégré",
                    "Écrans arrière individuels",
                    "Accès VIP à la communauté",
                    "Service conciergerie dédié",
                    "Garantie 10 ans"
                ],
                isSpecial: true // Marque cette carte comme "spéciale"
            }
        ];

        /**
         * Affiche un message de notification simple (toast).
         * @param {string} message - Le message à afficher.
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

            // Retirer après 3 secondes
            setTimeout(() => {
                toast.remove();
            }, 3000);
        };

        /**
         * Met à jour le compteur du panier dans l'en-tête.
         */
        const updateCartCount = () => {
            document.getElementById('cart-count').textContent = cartCount;
        };

        /**
         * Ajoute un plan au panier et affiche un toast.
         * @param {string} planTitle - Le titre du plan.
         */
        // Rendu de la fonction handleAddToCart pour qu'elle soit accessible globalement
        window.handleAddToCart = (planTitle) => {
            cartCount += 1;
            updateCartCount();
            showToast(`Formule ${planTitle} ajoutée au panier !`); // Message toast en Français
        };
        
        /**
         * Génère le HTML pour une carte de prix spécifique.
         * @param {Object} plan - Les données du plan tarifaire.
         * @param {number} index - L'index du plan pour l'animation.
         * @returns {string} Le fragment HTML de la carte.
         */
        const renderPricingCard = (plan, index) => {
            const isSpecial = plan.isSpecial;
            
            let buttonClasses = 'btn ';
            // Le bouton de la carte "Spéciale" est de type "default"
            if (isSpecial) {
                buttonClasses += 'btn-default';
            } else {
                buttonClasses += 'btn-outline';
            }

            // Formatage du prix (en dollars USD)
            const priceFormatted = plan.price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

            // Construction de la liste de fonctionnalités (en Français)
            const featureList = plan.features.map(feature => `
                <div class="feature-item">
                    <!-- Icone Check (SVG pur) --><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="check-icon">
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
                                <span class="pricing-card-currency">$</span>
                            </div>
                        </div>
                        <div class="pricing-card-features">
                            ${featureList}
                        </div>
                        <div class="pricing-card-footer">
                            <button 
                                onclick="handleAddToCart('${plan.title}')"
                                class="${buttonClasses}"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            `;
        };

        /**
         * Rend toutes les cartes de prix dans la grille.
         */
        const renderAllPricingCards = () => {
            const grid = document.getElementById('pricing-grid');
            if (grid) {
                grid.innerHTML = pricingPlans.map(renderPricingCard).join('');
            }
        };

        // Exécuter l'initialisation au chargement de la page
        document.addEventListener('DOMContentLoaded', () => {
            renderAllPricingCards();
            updateCartCount();
        });