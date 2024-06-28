// Sticky Navbar
var timeout;

window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');

    if (window.scrollY > 1) {
        header.style.opacity = '0.4';
        
        clearTimeout(timeout);
        
        timeout = setTimeout(function() {
            header.style.opacity = '1';
        }, 100); 
    } else {
        header.style.opacity = '1';
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show'); // Toggle the 'show' class on navLinks
    });
});



// Skill Description Modal
const modal = document.getElementById("skillModal");
const span = document.getElementsByClassName("close")[0];
const skillItems = document.querySelectorAll(".skill-item");

skillItems.forEach(function(item) {
    item.addEventListener("click", function() {
        const skillName = this.querySelector('h3').textContent;
        const skillDescription = this.querySelector('.skill-description').textContent;
        const skillProgress = Math.floor(Math.random() * 41) + 60; // Random progress between 60-100%

        document.getElementById("modalSkillTitle").innerText = skillName;
        document.getElementById("modalSkillDescription").innerText = skillDescription;
        document.getElementById("modalSkillProgress").style.width = `${skillProgress}%`;

        modal.style.display = "block";
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
});

span.addEventListener("click", closeModal);
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

// Skills filtering and search
const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => btn.addEventListener('click', filterByCategory));

function filterByCategory(e) {
    const filter = e.target.dataset.filter;
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    skillItems.forEach(item => {
        const categories = Array.from(item.classList).filter(cls => cls.startsWith('category-'));
        if (filter === 'all' || categories.includes(`category-${filter}`)) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Add animation to skill items on page load
window.addEventListener('load', () => {
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Work item description toggle
document.addEventListener("DOMContentLoaded", function() {
    var workItems = document.querySelectorAll(".work-item");
  
    workItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var description = this.querySelector(".work-description");
        description.style.display = (description.style.display === "block") ? "none" : "block";
      });
    });
});

// Project filtering
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const filterLinks = filterDropdown.querySelectorAll('a');
const projectItems = document.querySelectorAll('.project-item');
let swiper;

filterBtn.addEventListener('click', function(event) {
    event.preventDefault();
    filterBtn.classList.toggle('active');
    filterDropdown.classList.toggle('show');
});

filterLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const filter = this.dataset.filter;
        filterProjects(filter);
        updateActiveFilter(this);
        closeDropdown();
    });
});

function updateActiveFilter(clickedLink) {
    filterLinks.forEach(link => link.classList.remove('active'));
    clickedLink.classList.add('active');
    filterBtn.querySelector('span').textContent = clickedLink.textContent;
}

function closeDropdown() {
    filterBtn.classList.remove('active');
    filterDropdown.classList.remove('show');
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.filter-dropdown')) {
        closeDropdown();
    }
});

function filterProjects(filter) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';

    projectItems.forEach(item => {
        const technologies = item.dataset.technologies.toLowerCase();
        const shouldShow = filter === 'all' || technologies.includes(filter);
        
        if (shouldShow) {
            swiperWrapper.appendChild(item);
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });

    if (swiper) {
        swiper.destroy(true, true);
    }
    initSwiper();
}

function initSwiper() {
    swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

document.addEventListener('DOMContentLoaded', initSwiper);
// Theme toggle
const themeToggleBtn = document.getElementById('themeToggleBtn');
const link = document.querySelector('link[href="white.css"]');

themeToggleBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
  if (link.getAttribute('href') === 'white.css') {
    link.setAttribute('href', 'black.css');
    themeToggleBtn.textContent = 'Day Mode';
  } else {
    link.setAttribute('href', 'white.css');
    themeToggleBtn.textContent = 'Night Mode';
  }
}
