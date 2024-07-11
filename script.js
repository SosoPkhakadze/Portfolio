// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('day-mode');
    updateThemeIcon();
});

function updateThemeIcon() {
    const sunIcon = themeToggleBtn.querySelector('.fa-sun');
    const moonIcon = themeToggleBtn.querySelector('.fa-moon');
    
    if (body.classList.contains('day-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navToggle.contains(event.target) || navLinks.contains(event.target);
        if (!isClickInside && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            navToggle.classList.remove('active');
        }
    });
});

// Sticky Navbar with smooth opacity change
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = `-${navbarHeight}px`;
    } else {
        // Scrolling up
        navbar.style.top = '0';
        if (scrollTop > navbarHeight) {
            navbar.style.backgroundColor = 'var(--navbar-bg)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Initialize theme icon on page load
updateThemeIcon();


document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Typing effect
    const typingElement = document.querySelector('.typing');
    const words = ['full-stack developer', 'data engineer', 'problem-solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 12
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.496,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 170.15484090522386,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  
    // Toggle light and dark modes
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', switchTheme, false);
  
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
      }
    }
  });


// Skills data
const skillsData = [
  { name: "HTML", icon: "fab fa-html5", category: "front-end", description: "I have extensive experience with HTML from my coursework and personal projects. I've developed numerous projects utilizing HTML.", level: 90 },
  { name: "CSS", icon: "fab fa-css3", category: "front-end", description: "Similar to HTML, I have a strong command of CSS from both coursework and personal projects, enabling me to create visually appealing and responsive web designs.", level: 85 },
  { name: "JavaScript", icon: "fab fa-js", category: "front-end", description: "I possess solid proficiency in JavaScript, leveraging it for creating interactive and dynamic web elements.", level: 80 },
  { name: "React", icon: "fab fa-react", category: "front-end", description: "While still in the learning phase, I have acquired basic knowledge of React and have been actively incorporating it into my coursework.", level: 70 },
  { name: "Java Core", icon: "fab fa-java", category: "back-end", description: "I have completed a comprehensive course in Java Core during my university studies and have honed my skills further through algorithmic problem-solving.", level: 85 },
  { name: "SQL", icon: "fas fa-database", category: "data-engineering back-end", description: "Through university courses, I have gained a deep understanding of SQL, enabling me to design and manage relational databases effectively.", level: 85 },
  { name: "Django", icon: "fab fa-python", category: "back-end", description: "Self-taught in Django, I have developed several projects, as detailed in my portfolio, showcasing my proficiency in building web applications with Python.", level: 80 },
  { name: "Basics of C", icon: "fas fa-code", category: "back-end", description: "Self-taught, I have grasped the fundamentals of C programming, which has provided me with a strong foundation in system-level programming.", level: 35 },
  { name: "Relational databases (MariaDB/MySQL)", icon: "fas fa-database", category: "data-engineering back-end", description: "Having completed a full course on MariaDB in university, I am proficient in working with relational databases, ensuring efficient data management.", level: 80 },
  { name: "BeautifulSoup", icon: "fab fa-python", category: "data-engineering", description: "Self-taught in BeautifulSoup, I have utilized this library in various projects, demonstrating my ability to scrape and manipulate data effectively.", level: 75 },
  { name: "Pandas", icon: "fab fa-python", category: "data-engineering", description: "Self-taught in Pandas, I have utilized this library in various projects, demonstrating my ability to manipulate and analyze data effectively.", level: 75 },
  { name: "Power BI", icon: "fas fa-chart-bar", category: "data-engineering", description: "Self-taught and proficient in Power BI, I have created insightful reports and visualizations, showcasing my ability to derive meaningful insights from data.", level: 70 },
  { name: "Tableau", icon: "fas fa-chart-bar", category: "data-engineering", description: "Self-taught and proficient in Tableau, I have created insightful reports and visualizations, showcasing my ability to derive meaningful insights from data.", level: 70 },
  { name: "Knowledge of ETL processes", icon: "fas fa-exchange-alt", category: "data-engineering", description: "With a foundational understanding of ETL processes, I am equipped to handle data extraction, transformation, and loading tasks efficiently.", level: 70 },
  { name: "Pygame", icon: "fab fa-python", category: "others", description: "Having explored the Pygame library, I have created several mini-games, demonstrating my aptitude for game development in Python.", level: 55 },
  { name: "Basics of Git", icon: "fab fa-git", category: "others", description: "I possess basic proficiency in Git, which I have utilized for version control in my projects, facilitating collaboration and code management.", level: 75 },
  { name: "Strong problem-solving skills", icon: "fas fa-brain", category: "others", description: "With a knack for analytical thinking and creative problem-solving, I excel in tackling complex challenges and finding effective solutions.", level: 95 },
  { name: "Algorithms and data structures", icon: "fas fa-code", category: "others", description: "Having completed a comprehensive course in algorithms and data structures, I am well-versed in implementing efficient solutions to various computational problems.", level: 80 },
  { name: "English B2", icon: "fas fa-language", category: "others", description: "Proficient in English at the B2 level, I possess effective communication skills, enabling me to collaborate seamlessly in multicultural environments.", level: 80 }
];

// Generate skill items
const skillsGrid = document.querySelector('.skills-grid');

function generateSkillItems() {
  skillsData.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = `skill-item category-${skill.category}`;
      skillItem.innerHTML = `
          <i class="${skill.icon}"></i>
          <h3>${skill.name}</h3>
      `;
      skillItem.addEventListener('click', () => openModal(skill));
      skillsGrid.appendChild(skillItem);
  });
}

generateSkillItems();

// Modal functionality
const modal = document.getElementById("skillModal");
const span = document.getElementsByClassName("close")[0];

function openModal(skill) {
  document.getElementById("modalSkillTitle").innerText = skill.name;
  document.getElementById("modalSkillDescription").innerText = skill.description;
  document.getElementById("modalSkillProgress").style.width = `${skill.level}%`;
  document.getElementById("modalSkillLevel").innerText = `${skill.level}%`;
  modal.style.display = "block";
  setTimeout(() => {
      modal.classList.add('show');
  }, 10);
}

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
      modal.style.display = "none";
  }, 300);
}

span.addEventListener("click", closeModal);
window.addEventListener("click", function(event) {
  if (event.target === modal) {
      closeModal();
  }
});

// Skills filtering
const categoryBtns = document.querySelectorAll('.category-btn');
const skillItems = document.querySelectorAll('.skill-item');

categoryBtns.forEach(btn => btn.addEventListener('click', filterSkills));

function filterSkills(e) {
  const filter = e.target.dataset.filter;
  categoryBtns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');

  skillItems.forEach(item => {
      const categories = item.className.split(' ').filter(cls => cls.startsWith('category-'));
      if (filter === 'all' || categories.includes(`category-${filter}`)) {
          item.style.display = 'block';
          setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
          }, 10);
      } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px) rotateX(5deg) rotateY(5deg)';
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
          item.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      }, index * 100);
  });
});

// work read more
document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    
    readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const timelineBody = this.previousElementSibling;
        if (timelineBody.style.maxHeight) {
          timelineBody.style.maxHeight = null;
          this.textContent = 'Read More';
        } else {
          timelineBody.style.maxHeight = timelineBody.scrollHeight + "px";
          this.textContent = 'Read Less';
        }
      });
    });
  
    // Parallax effect for background
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      document.querySelector('.experience-bg').style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
  
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
  
    timelineItems.forEach(item => observer.observe(item));
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


document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const skill = this.dataset.skill;
        const progress = {
            'Frontend': 85,
            'Backend': 80,
            'Database': 75,
            'Tools': 70
        }[skill];
        
        document.querySelector('.skill-progress').style.width = `${progress}%`;
        document.querySelector('.skill-description').textContent = `${skill} proficiency: ${progress}%`;
    });

    card.addEventListener('mouseleave', function() {
        document.querySelector('.skill-progress').style.width = '0%';
        document.querySelector('.skill-description').textContent = 'Hover over skills to see details';
    });
});

// Typing effect
const typingText = "I'm a passionate computer science student and aspiring Full Stack Developer, driven by curiosity and a desire to create impactful digital experiences. I thrive on challenges and continuously expand my skill set, particularly excited about the intersection of finance and technology.";
let i = 0;
const typingSpeed = 30;

function typeWriter() {
    if (i < typingText.length) {
        document.querySelector('.typing-effect').innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

typeWriter();

// Terminal interaction
const terminalWindow = document.getElementById('terminalWindow');
const commands = {
    help: "Available commands: about, skills, projects, contact",
    about: "Soso Pkhakadze: A passionate computer science student and aspiring Full Stack Developer.",
    skills: "Skills: Full Stack Development, Data Analysis, Problem Solving, Continuous Learning",
    projects: "Check out my projects section for a list of my work!",
    contact: "Email: sosiko2004@gmail.com | LinkedIn: soso-pkhakadze-733428274"
};

terminalWindow.addEventListener('click', () => {
    const input = prompt("Enter a command (type 'help' for available commands):");
    if (input) {
        const output = commands[input.toLowerCase()] || "Command not recognized. Type 'help' for available commands.";
        terminalWindow.innerHTML += `<p class="line">> ${input}</p>`;
        terminalWindow.innerHTML += `<p class="line">${output}</p>`;
        terminalWindow.innerHTML += `<p class="line active">> <span class="cursor">|</span></p>`;
        terminalWindow.scrollTop = terminalWindow.scrollHeight;
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
});


document.addEventListener('DOMContentLoaded', () => {
  // Quantum particles
  const particlesContainer = document.getElementById('quantum-particles');
  
  function createParticle() {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = '2px';
      particle.style.height = '2px';
      particle.style.background = Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--secondary-color)';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.opacity = Math.random();
      particle.style.transition = 'all 5s linear';
      
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
          particle.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
          particle.style.opacity = 0;
      }, 100);
      
      setTimeout(() => {
          particlesContainer.removeChild(particle);
      }, 5000);
  }
  
  setInterval(createParticle, 100);


  // Quantum link hover effect
  const quantumLinks = document.querySelectorAll('.quantum-link');
  quantumLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
          link.style.color = 'var(--primary-color)';
          link.querySelector('.link-orbit').style.borderColor = 'var(--secondary-color)';
      });
      link.addEventListener('mouseout', () => {
          link.style.color = 'var(--text-color)';
          link.querySelector('.link-orbit').style.borderColor = 'var(--primary-color)';
      });
  });
});
