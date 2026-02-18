const items = document.querySelectorAll(".services-item");

items.forEach(item => {
    const header = item.querySelector(".services-header");

    header.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        // Fermer tous
        items.forEach(i => i.classList.remove("active"));

        if (!isActive) {

            item.classList.add("active");

            // 🔥 Petit délai pour laisser démarrer l'animation
            setTimeout(() => {

                const headerTop =
                    header.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                    top: headerTop - 20,
                    behavior: "smooth"
                });

            }, 120); // délai court et suffisant

        }

    });
});