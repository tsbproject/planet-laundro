// Ensure DOM is fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const closeBtn = document.querySelector('.close-btn'); // Optional close button
    const navLinks = document.querySelectorAll('nav a'); // All menu links

    // Menu toggle functionality
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active'); // Add/remove 'active' class to show/hide menu
        menuToggle.classList.toggle('active'); // Optionally rotate the toggle
    });

    // Close button functionality (if exists)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('active'); // Remove 'active' class
            menuToggle.classList.remove('active'); // Reset toggle state
        });
    }

    // Close menu when clicking anywhere on the carpet background
    nav.addEventListener('click', (e) => {
        // Check if the click is not on a menu item
        if (!e.target.closest('a')) {
            nav.classList.remove('active'); // Close menu
            menuToggle.classList.remove('active'); // Reset toggle state
        }
    });

    // Optional: Close menu when clicking on a menu link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active'); // Close menu after selecting a link
            menuToggle.classList.remove('active'); // Reset toggle state
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                }
            });

            // Toggle the current item
            item.classList.toggle('open');
        });
    });
});




// // Ensure DOM is fully loaded before accessing elements
// document.addEventListener('DOMContentLoaded', () => {
//     // Select elements
//     const menuToggle = document.querySelector('.menu-toggle');
//     const nav = document.querySelector('nav');
//     const closeBtn = document.querySelector('.close-btn'); // Optional

//     // Menu toggle functionality
//     menuToggle.addEventListener('click', () => {
//         nav.classList.toggle('active'); // Add/remove 'active' class to show/hide menu
//         menuToggle.classList.toggle('active'); // Optionally rotate the toggle
//     });

//     // Close button functionality
//     if (closeBtn) {
//         closeBtn.addEventListener('click', () => {
//             nav.classList.remove('active'); // Remove 'active' class
//             menuToggle.classList.remove('active'); // Reset toggle state
//         });
//     }
// });






// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav');

// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });


