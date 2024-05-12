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

// When the user clicks on a skill item, open the modal
var skillItems = document.querySelectorAll(".skill-item");
skillItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var skill = this.dataset.skill;
        var description = getSkillDescription(skill); 
        document.getElementById("modalSkillTitle").innerText = skill;
        document.getElementById("modalSkillDescription").innerText = description;
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x) or outside the modal, close the modal
window.addEventListener("click", function(event) {
    if (event.target == modal || event.target.classList.contains("close")) {
        modal.style.display = "none";
    }
});

function getSkillDescription(skill) {
    switch (skill) {
        case "HTML":
            return "I have extensive experience with HTML from my coursework and personal projects. I've developed numerous projects utilizing HTML.";
        case "CSS":
            return "Similar to HTML, I have a strong command of CSS from both coursework and personal projects, enabling me to create visually appealing and responsive web designs.";
        case "JS":
            return "I possess solid proficiency in JavaScript, leveraging it for creating interactive and dynamic web elements.";
        case "React":
            return "While still in the learning phase, I have acquired basic knowledge of React and have been actively incorporating it into my coursework.";
        case "Java Core":
            return "I have completed a comprehensive course in Java Core during my university studies and have honed my skills further through algorithmic problem-solving.";
        case "SQL":
            return "Through university courses, I have gained a deep understanding of SQL, enabling me to design and manage relational databases effectively.";
        case "Python (Django)":
            return "Self-taught in Django, I have developed several projects, as detailed in my portfolio, showcasing my proficiency in building web applications with Python.";
        case "Basics of C":
            return "Self-taught, I have grasped the fundamentals of C programming, which has provided me with a strong foundation in system-level programming.";
        case "Relational databases":
            return "Having completed a full course on MariaDB in university, I am proficient in working with relational databases, ensuring efficient data management.";
        case "Python (BeautifulSoup and Pandas)":
            return "Self-taught in BeautifulSoup and Pandas, I have utilized these libraries in various projects, demonstrating my ability to scrape and manipulate data effectively.";
        case "Power BI":
            return "Self-taught and proficient in Power BI, I have created insightful reports and visualizations, showcasing my ability to derive meaningful insights from data.";
        case "Knowledge of ETL processes":
            return "With a foundational understanding of ETL processes, I am equipped to handle data extraction, transformation, and loading tasks efficiently.";
        case "Python (Pygame library)":
            return "Having explored the Pygame library, I have created several mini-games, demonstrating my aptitude for game development in Python.";
        case "Basics of Git":
            return "I possess basic proficiency in Git, which I have utilized for version control in my projects, facilitating collaboration and code management.";
        case "Strong problem-solving skills":
            return "With a knack for analytical thinking and creative problem-solving, I excel in tackling complex challenges and finding effective solutions.";
        case "Algorithms and data structures":
            return "Having completed a comprehensive course in algorithms and data structures, I am well-versed in implementing efficient solutions to various computational problems.";
        case "English B2":
            return "Proficient in English at the B2 level, I possess effective communication skills, enabling me to collaborate seamlessly in multicultural environments.";
        default:
            return "Description not available.";
    }
}


// Work Experience Toggle
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
    }
});

searchInput.addEventListener('input', function(event) {
    event.preventDefault();
    const searchText = searchInput.value.toLowerCase();
    filterProjects('all', searchText);
});


function filterProjects(filter, searchText = '') {
    projectItems.forEach(item => {
        const technologies = item.dataset.technologies.toLowerCase();
        const shouldShow =
            (filter === 'all' || technologies.includes(filter)) &&
            (searchText === '' || technologies.includes(searchText));

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



document.addEventListener("DOMContentLoaded", function() {
    var filterDropdownSk = document.getElementById("filterDropdownSk");
    var skillItems = document.querySelectorAll(".skill-item");

    filterDropdownSk.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target.tagName === "A") {
            var category = event.target.dataset.filter;
            filterSkills(category);
        }
    });
});

function filterSkills(category) {
    skillItems.forEach(function(item) {
        var skillCategories = item.dataset.category.split(" ");
        if (category === "all" || skillCategories.includes(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}



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
