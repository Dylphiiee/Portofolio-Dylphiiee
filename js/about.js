AOS.init({ offset: 0 });

function hamburg() {
    document.querySelector(".dropdown").style.transform = "translateY(0px)";
}

function cancel() {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}

function showProjects() { updateAboutContent("My Projects", generateProjectCards()); }
function showExperience() { updateAboutContent("My Experience", generateExperienceCards()); }
function showClients() { updateAboutContent("Client Success Stories", generateClientCards()); }
function showAwards() { updateAboutContent("Awards & Recognition", generateAwardCards()); }

function updateAboutContent(title, contentHtml) {
    const aboutContent = document.getElementById('aboutContent');
    aboutContent.innerHTML = `
        <a href="about.html" class="back-button" onclick="restoreInitialContent()">
            <i class="fas fa-arrow-left"></i> Back
        </a>
        <div class="about-header" data-aos="fade-down" data-aos-duration="1500">
            <h1>${title}</h1>
        </div>
        <div class="content-grid">${contentHtml}</div>
    `;
    AOS.refresh();
}

function restoreInitialContent() {
    location.reload();
}

// Generate cards
function generateProjectCards() {
    const projects = [
        {title: "E-Commerce Platform", image: "img/zoro.jpg", description: "A full-stack e-commerce solution with payment integration", technologies: ["React", "Node.js", "MongoDB"]},
        {title: "Portfolio Website", image: "img/zoro.jpg", description: "Responsive portfolio website with modern animations", technologies: ["HTML", "CSS", "JavaScript"]},
        {title: "Task Management App", image: "img/zoro.jpg", description: "Mobile-first task management application", technologies: ["Vue.js", "Firebase"]}
    ];
    return projects.map(p => `
        <div class="content-card" data-aos="fade-up">
            <div class="card-image"><img src="${p.image}" alt="${p.title}"></div>
            <div class="card-info">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="technologies">${p.technologies.map(t => `<span class="technology-tag">${t}</span>`).join('')}</div>
            </div>
        </div>
    `).join('');
}

function generateExperienceCards() {
    const exp = [
        {title: "Senior Web Developer", company: "Tech Solutions Inc.", period: "2021 - Present", description: "Leading frontend development team and implementing modern web solutions"},
        {title: "Frontend Developer", company: "Digital Agency", period: "2019 - 2021", description: "Developed responsive websites and web applications"}
    ];
    return exp.map(e => `
        <div class="content-card" data-aos="fade-up">
            <div class="card-info">
                <h3>${e.title}</h3>
                <h4>${e.company}</h4>
                <p class="period">${e.period}</p>
                <p>${e.description}</p>
            </div>
        </div>
    `).join('');
}

function generateClientCards() {
    const clients = [
        {name: "Ell Udin", company: "Innovation Corp", image: "img/zoro.jpg", testimonial: "Outstanding work on our company website redesign!"},
        {name: "Ell Ucup", company: "Tech Startup", image: "img/zoro.jpg", testimonial: "Delivered our app ahead of schedule with excellent quality"}
    ];
    return clients.map(c => `
        <div class="content-card" data-aos="fade-up">
            <div class="card-image"><img src="${c.image}" alt="${c.name}"></div>
            <div class="card-info">
                <h3>${c.name}</h3>
                <h4>${c.company}</h4>
                <p class="client-testimonial">"${c.testimonial}"</p>
            </div>
        </div>
    `).join('');
}

function generateAwardCards() {
    const awards = [
        {title: "Best Web Design", organization: "Design Awards 2023", description: "Recognition for exceptional web design and user experience"},
        {title: "Innovation Award", organization: "Tech Summit 2022", description: "Awarded for innovative use of emerging technologies"}
    ];
    return awards.map(a => `
        <div class="content-card" data-aos="fade-up">
            <div class="card-info">
                <div class="award-icon"><i class="fas fa-trophy"></i></div>
                <h3>${a.title}</h3>
                <h4>${a.organization}</h4>
                <p>${a.description}</p>
            </div>
        </div>
    `).join('');
}