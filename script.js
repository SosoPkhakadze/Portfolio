// Sticky Navbar
var timeout; 

window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar');
    var logo = this.document.querySelector('.navbar.nav-brand');
    var tags = this.document.querySelector('.navbar.nav-links');

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
        navLinks.classList.toggle('show');
    });
});

// Skill Description Modal
var modal = document.getElementById("skillModal");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a skill item, open the modal with the skill name and description
var skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var skillName = this.querySelector('h3').textContent;
        var skillDescription = this.querySelector('.skill-description').textContent; 
        document.getElementById("modalSkillTitle").innerText = skillName;
        document.getElementById("modalSkillDescription").innerText = skillDescription;
        modal.style.display = "block";
    });
});

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
        } else {
            item.style.display = 'none';
        }
    });
}

// Close the modal when the user clicks on the close button
span.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when the user clicks anywhere outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


// When the user clicks on <span> (x) or outside the modal, close the modal
window.addEventListener("click", function(event) {
    if (event.target == modal || event.target.classList.contains("close")) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var workItems = document.querySelectorAll(".work-item");
  
    workItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var description = this.querySelector(".work-description");
        description.style.display = (description.style.display === "block") ? "none" : "block";
      });
    });
  });


// Filter Projects
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const searchInput = document.getElementById('searchInput');
const projectItems = document.querySelectorAll('.project-item');

filterBtn.addEventListener('click', function(event) {
    event.preventDefault();
    filterDropdown.classList.toggle('show');
});

filterDropdown.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        const filter = event.target.dataset.filter;
        filterProjects(filter);
        filterDropdown.classList.remove('show');
    }
});

searchInput.addEventListener('input', function(event) {
    event.preventDefault();
    const searchText = searchInput.value.toLowerCase();
    filterProjects('all', searchText);
});

function filterProjects(filter, searchText = '') {
    projectItems.forEach(item => {
        const technologies = item.dataset.technologies.toLowerCase().split(' ');
        const shouldShow =
            (filter === 'all' || technologies.includes(filter.toLowerCase())) &&
            (searchText === '' || technologies.some(tech => tech.includes(searchText)));

        if (shouldShow) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


window.addEventListener('click', function(event) {
    if (!event.target.matches('.filter-btn')) {
        const dropdowns = document.getElementsByClassName('filter-dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});




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
