const mainSection = document.querySelector('.bas');
        window.addEventListener('scroll', () => {
            const sectionTop = mainSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Si la section est visible (dans le viewport)
            if (sectionTop < windowHeight - 100 && sectionTop > 0) {
                mainSection.classList.add('visible');
            } else {
                mainSection.classList.remove('visible');
            }
        });