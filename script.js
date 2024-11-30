const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('#cancelBtn');
const mobileMenu = document.querySelector('#mobileMenu');
const vehicleDetails = document.querySelector('#vehicleDetails');

// Show the mobile menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Hide the mobile menu
cancelBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const vehicleArrow = document.querySelector('.mobile-menu-content ul li span + img');
    const backBtn = document.querySelector('.vehicle-header .back-btn');
    const exitBtn = document.querySelector('.vehicle-header .exit-btn');

    // Show vehicle details page
    vehicleArrow.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        vehicleDetails.classList.add('active');
    });

    // Go back to mobile menu
    backBtn.addEventListener('click', () => {
        vehicleDetails.classList.remove('active');
        mobileMenu.classList.add('active');
    });

    // Exit vehicle details and close mobile menu
    exitBtn.addEventListener('click', () => {
        vehicleDetails.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});
