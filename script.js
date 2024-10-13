// Theme toggle functionality
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeSelect = document.getElementById('themeSelect');
const body = document.body;
let particleSystem;

const configurations = {
  default: {
    color: ["#7df9ff", "#54e346", "#ff6b6b", "#ffcccb"],
    line_color: "#7df9ff",
    shape: ["circle", "triangle"],
    number: 80,
    size: 3,
    speed: 4,
    opacity: 0.6,
    move: {
        direction: "top",
        out_mode: "out"
    },
    wobble: true
},
  "day-mode": {
      color: ["#4a90e2", "#3498db", "#2980b9"],
      line_color: "#3498db",
      shape: "circle",
      number: 70,
      size: 4,
      speed: 4,
      opacity: 0.7
  },
  "night-mode": {
      color: ["#bb86fc", "#3700b3", "#03dac6"],
      line_color: "#bb86fc",
      shape: ["circle", "triangle"],
      number: 70,
      size: 3,
      speed: 5,
      opacity: 0.8
  },
  "neon-cyberpunk": {
      color: ["#ff00ff", "#00ffff", "#00ff00", "#ff00cc"],
      line_color: "#ff00ff",
      shape: ["triangle", "polygon"],
      number: 100,
      size: 3,
      speed: 8
    },
    "forest-mystique": {
      color: ["#7fff00", "#ffd700", "#32cd32", "#228b22"],
      line_color: "#90ee90",
      shape: ["circle", "star"],
      number: 60,
      size: 4,
      speed: 3
    },
    "ocean-depths": {
      color: ["#00ffff", "#87ceeb", "#4682b4", "#1e90ff"],
      line_color: "#4682b4",
      shape: ["circle", "edge"],
      number: 70,
      size: 3,
      speed: 2
    },
    "sunset-vibes": {
      color: ["#ff7f50", "#ffd700", "#ff4500", "#ff6347"],
      line_color: "#ff7f50",
      shape: ["circle", "triangle"],
      number: 60,
      size: 4,
      speed: 5
    },
    "retro-wave": {
      color: ["#ff1493", "#00ffff", "#f0e68c", "#ff00ff"],
      line_color: "#ff1493",
      shape: ["star", "polygon"],
      number: 90,
      size: 3,
      speed: 7
    },
    "steampunk-scholar": {
      color: ["#b87333", "#ffd700", "#cd7f32", "#d2691e"],
      line_color: "#b87333",
      shape: ["circle", "polygon"],
      number: 50,
      size: 4,
      speed: 3
    },
    "cosmic-voyage": {
      color: ["#9370db", "#00fa9a", "#e6e6fa", "#7b68ee"],
      line_color: "#9370db",
      shape: ["circle", "polygon"],
      number: 90,
      size: 2,
      speed: 5
    },
    "ethereal-dream": {
      color: ["#ff69b4", "#dda0dd", "#ee82ee", "#da70d6"],
      line_color: "#ff69b4",
      shape: ["circle", "star"],
      number: 90,
      size: 3,
      speed: 4
    },
    "quantum-flux": {
      color: ["#00ffff", "#ff00ff", "#ffff00", "#00ff00"],
      line_color: "#00ffff",
      shape: ["circle", "triangle", "polygon"],
      number: 60,
      size: 2,
      speed: 7
    },
    "volcanic-inferno": {
      color: ["#ff4500", "#ff6347", "#ff7f50", "#ffa500"],
      line_color: "#ff4500",
      shape: ["circle", "triangle"],
      number: 80,
      size: 3,
      speed: 6
    }
};

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function updateParticles(theme) {
  const config = configurations[theme] || configurations.default;
  const maxParticles = 300;
  config.number = Math.min(config.number, maxParticles);

  const particlesConfig = {
    particles: {
      number: { value: config.number, density: { enable: true, value_area: 800 } },
      color: { value: config.color },
      shape: { 
        type: config.shape, 
        polygon: { nb_sides: 6 },
        character: { value: "★", font: "Verdana", style: "", weight: "400" },
        image: { src: "path/to/svg/hexagon.svg", width: 100, height: 100 }
      },
      opacity: { 
        value: config.opacity || 0.8, 
        random: true, 
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } 
      },
      size: { 
        value: config.size, 
        random: true, 
        anim: { enable: true, speed: 2, size_min: 0.1, sync: false } 
      },
      line_linked: { 
        enable: true, 
        distance: 150, 
        color: config.line_color, 
        opacity: 0.4, 
        width: 1,
        triangles: { enable: true, color: config.line_color, opacity: 0.1 }
      },
      move: { 
        enable: true, 
        speed: config.speed, 
        direction: "none", 
        random: true, 
        straight: false, 
        out_mode: "out", 
        bounce: false,
        attract: { enable: true, rotateX: 600, rotateY: 1200 }
      },
      wobble: { enable: config.wobble, distance: 10, speed: 10 },
      pulse: { enable: config.pulse, frequency: 0.05, opacity_min: 0, opacity_max: 1 },
      glow: { enable: config.glow, color: config.color, radius: 10 },
      spin: { enable: config.spin, clockwise: true, speed: 5 },
      trail: { enable: config.trail, length: 10, fillColor: config.color },
      warp: { enable: config.warp, warpSpeed: 0.5, warpRotate: 180 }
    },
    interactivity: {
      detect_on: "canvas",
      events: { 
        onhover: { enable: true }, 
        onclick: { enable: true }, 
        resize: true 
      },
      modes: { 
        grab: { 
          distance: 140, 
          line_linked: { opacity: 1 }
        },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  };

  if (particleSystem) {
    particleSystem.particles.array = [];
    particleSystem.fn.particlesCreate();
    particleSystem.particles.move.speed = config.speed;
    // Update other properties as needed
    Object.assign(particleSystem.particles, particlesConfig.particles);
  } else {
    particleSystem = particlesJS('particles-js', particlesConfig);
  }
}

const debouncedUpdateParticles = debounce(updateParticles, 300);

themeSelect.addEventListener('change', (event) => {
  const selectedTheme = event.target.value;
  body.className = ''; 
  if (selectedTheme !== 'default') {
    body.classList.add(selectedTheme);
  }
  debouncedUpdateParticles(selectedTheme);
});

function updateThemeSelect() {
  const currentTheme = body.className || 'default';
  themeSelect.value = currentTheme;
}

function animate() {
  if (particleSystem) {
    particleSystem.fn.particlesUpdate();
  }
  requestAnimationFrame(animate);
}

// Initial setup
updateThemeSelect();
updateParticles('default');
animate();

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

document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    updateParticles('default');

    // Typing effect
    const typingElement = document.querySelector('.typing');
    const words = ['full-stack developer', 'data engineer', 'QA tester', 'problem-solver'];
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
  { name: "NumPy", icon: "fab fa-python", category: "data-engineering", description: "Had some practices in university while learning Numerical and made few small projects with it.", level: 50 },  
  { name: "matplotlip", icon: "fab fa-python", category: "data-engineering", description: "Had some practices in university while learning Numerical and made few small projects with it.", level: 40 },
  { name: "opencv", icon: "fab fa-python", category: "data-engineering", description: "Had some practices in university while learning Numerical and made few small projects with it.", level: 40 },
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
const loadMoreBtn = document.getElementById('loadMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');
let currentCategory = 'all';
let visibleSkills = 8;

function generateSkillItems(category, limit) {
  skillsGrid.innerHTML = '';
  const filteredSkills = category === 'all'
      ? skillsData
      : skillsData.filter(skill => skill.category.includes(category));

  filteredSkills.slice(0, limit).forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = `skill-item category-${skill.category}`;
      skillItem.innerHTML = `
          <i class="${skill.icon}"></i>
          <h3>${skill.name}</h3>
      `;
      skillItem.addEventListener('click', () => openModal(skill));
      skillsGrid.appendChild(skillItem);
  });

  updateButtonVisibility(filteredSkills.length, limit);
}

function updateButtonVisibility(totalSkills, visibleSkills) {
  loadMoreBtn.style.display = visibleSkills < totalSkills ? 'inline-block' : 'none';
  showLessBtn.style.display = visibleSkills > 8 ? 'inline-block' : 'none';
}

loadMoreBtn.addEventListener('click', () => {
  visibleSkills += 8;
  generateSkillItems(currentCategory, visibleSkills);
});

showLessBtn.addEventListener('click', () => {
  visibleSkills = 8;
  generateSkillItems(currentCategory, visibleSkills);
});

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

categoryBtns.forEach(btn => btn.addEventListener('click', filterSkills));

function filterSkills(e) {
  const filter = e.target.dataset.filter;
  categoryBtns.forEach(btn => btn.classList.remove('active'));
  e.target.classList.add('active');
  currentCategory = filter;
  visibleSkills = 8;
  generateSkillItems(filter, visibleSkills);
}

// Initialize the skills grid
generateSkillItems('all', visibleSkills);

// Add animation to skill items on page load
window.addEventListener('load', () => {
  const skillItems = document.querySelectorAll('.skill-item');
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
});

// Project data
const projectData = [
{
    title: "Job Aggregator Website",
    description: "Developed a full-stack web application utilizing Django for backend and React for frontend, enabling users to search for job listings based on title and location. Integrated with an external API to fetch real-time job data. Implemented features for displaying search results and viewing detailed job information. Successfully deployed and completed project, demonstrating proficiency in web development and API integration.",
    technologies: ["Django", "React", "Python"],
    category: ["python", "django", "hcj"]
},
{
    title: "Notes App",
    description: "Developed a dynamic notes application leveraging Django for the backend and React for the frontend. This application enables users to seamlessly create, update, and remove notes, providing a streamlined experience for organizing information effectively.",
    technologies: ["Django", "React", "Python"],
    category: ["python", "django", "hcj"]
},
{
    title: "Calculator",
    description: "Developed simple calculator with a responsive and very beautiful style.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: ["hcj"]
},
{
    title: "Tic-Tac-Toe",
    description: "Implemented Tic-Tac-Toe game with a responsive and very beautiful style.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: ["hcj"]
},
{
    title: "Guess The Word",
    description: "Developed game 'Wordle' with amazing style and structure.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: ["hcj"]
},
{
    title: "Timer",
    description: "Implemented Timer project with unique and dynamic style.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: ["hcj"]
},
{
    title: "Price Comparison",
    description: "Developed a price comparison web application using Django, integrating scraping scripts for major e-commerce websites like Amazon, eBay, Walmart, Target, Etsy, and Wayfair. Implemented sorting functionality to display search results from cheapest to most expensive.",
    technologies: ["Python", "Django", "BeautifulSoup"],
    category: ["python", "django"]
},
{
    title: "Weather Forecast",
    description: "Built a user-friendly weather forecast app using Django and the OpenWeatherMap API, offering accurate weather predictions for desired locations, enhancing user experience and enabling informed planning.",
    technologies: ["Python", "Django"],
    category: ["python", "django"]
},
{
    title: "Commerce",
    description: "Created eBay-style auction site with Django, featuring listing creation, bidding, commenting, and watchlists. Utilized Django models for database management and integrated admin interface.",
    technologies: ["Python", "Django", "MySQL"],
    category: ["python", "django", "bases"]
},
{
    title: "Finance",
    description: "Developed a simple web application, Finance, enabling users to manage stock portfolios.",
    technologies: ["Python", "Flask", "MySQL"],
    category: ["python", "flask", "bases"]
},
{
    title: "Sales Dashboard",
    description: "Developed an advanced sales dashboard using Power BI, leveraging data from SQL databases. Demonstrated expertise in data cleaning, exploratory data analysis, and predictive modeling to uncover actionable insights driving business decisions.",
    technologies: ["Power BI", "SQL"],
    category: ["tabi"]
},
{
    title: "Data Analysis Dashboard",
    description: "Designed a comprehensive data analysis dashboard for a Pizza Restaurant using Power BI and MariaDB, delivering key performance indicators and actionable insights, facilitating strategic decision-making and business optimization.",
    technologies: ["Power BI", "MariaDB"],
    category: ["tabi"]
},
{
    title: "COVID Insight Analysis Dashboard",
    description: "Leveraged Power BI to analyze COVID-19 data, providing insights into virus spread, vaccination rates, and their impact on public health and the economy. Integrated diverse data sources, crafted interactive visualizations, enabling users to discern trends for informed decision-making.",
    technologies: ["Power BI"],
    category: ["tabi"]
},
{
    title: "User Requirements Analysis Dashboard",
    description: "Developed a comprehensive Tableau dashboard project by analyzing user requirements, creating mockups, and deciding on chart types. Built the data model, prepared the data source, and created various charts. Designed the layout container and constructed the dashboard to deliver insightful visualizations and facilitate data-driven decision-making.",
    technologies: ["Tableau"],
    category: ["tabi"]
},
{
    title: "Wordle Game",
    description: "Implemented a simplified version of the popular game 'Wordle' in C, providing users with an engaging word-guessing experience.",
    technologies: ["C"],
    category: ["ccc"]
},
{
    title: "Group Chat Application",
    description: "Developed a dynamic and interactive group chat application in Java, employing socket programming and multithreading for seamless communication among users.",
    technologies: ["Java"],
    category: ["javaa"]
},
{
    title: "SpotiJy",
    description: "Song manager program organizing artists, albums, and songs. Add artists, track trending music, and manage their collections efficiently.",
    technologies: ["Java"],
    category: ["javaa"]
}
];

// Project filtering and Swiper initialization
const filterBtn = document.getElementById('filterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const filterLinks = filterDropdown.querySelectorAll('a');
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

  projectData.forEach(project => {
      if (filter === 'all' || project.category.includes(filter)) {
          const slide = createProjectSlide(project);
          swiperWrapper.appendChild(slide);
      }
  });

  if (swiper) {
      swiper.destroy(true, true);
  }
  initSwiper();
  
  // After initialization, update the swiper to account for the new slides
  swiper.update();
  swiper.slideToLoop(0); // Reset to the first slide
}

function createProjectSlide(project) {
  const slide = document.createElement('div');
  slide.className = 'swiper-slide project-item';
  slide.dataset.technologies = project.technologies.join(' ');

  const content = `
      <h3>${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
  `;

  slide.innerHTML = content;
  return slide;
}

function initSwiper() {
  if (swiper) {
      swiper.destroy();
  }
  swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      loopedSlides: 5,
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
      },
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

document.addEventListener('DOMContentLoaded', () => {
  filterProjects('all');
});

// skills
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

// Particles
document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize AOS
    AOS.init({
        duration: 100,
        once: false,
    });

    // Initialize particles.js
    updateParticles('default');
});

// Quantum particles
document.addEventListener('DOMContentLoaded', () => {
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
});
