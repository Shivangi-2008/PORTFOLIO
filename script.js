// ================================
// SKILLS DATA
// each skill just needs a name and a short category label
// ================================
var skills = [
  { name: "HTML / CSS", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "Java", category: "Backend" },
  { name: "SQL", category: "Database" },
  { name: "C", category: "Core" },
  { name: "C++", category: "Language" },
  { name: "AI / ML", category: "Currently learning" },
  { name: "Git / GitHub", category: "Tooling" }
];

// ================================
// BUILD SKILL CARDS
// ================================
var skillsGrid = document.getElementById("skillsGrid");

for (var s = 0; s < skills.length; s++) {
  var skill = skills[s];

  var skillCard = document.createElement("div");
  skillCard.className = "skill-card";
  skillCard.innerHTML =
    "<h3>" + skill.name + "</h3>" +
    "<p>" + skill.category + "</p>";

  skillsGrid.appendChild(skillCard);
}

// ================================
// PROJECT DATA
// I just kept all my project info in this array
// so it's easy to add/remove a project later
// ================================
var projects = [
  {
    title: "Resume Analyser",
    category: "React",
    shortDesc: "Analyse users resume and get ATS score and related Improvement.",
    tags: ["React.js"],
    demoLink: "https://shivangi-2008.github.io/RESUME-ANALYSER/",
    githubLink: "https://github.com/Shivangi-2008/RESUME-ANALYSER"
  },
    
  {
    title: "Advanced Sorting Visualizer",
    category: "DSA",
    shortDesc: "Visualizes how different sorting algorithms work step by step.",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://shivangi-2008.github.io/Advance-Sorting-Visualiser/",
    githubLink: "https://github.com/Shivangi-2008/Advance-Sorting-Visualiser"
  },
  {
    title: "Portfolio",
    category: "Frontend",
    shortDesc: "My personal portfolio with works, resume and Tech i use Too",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://shivangi-2008.github.io/PORTFOLIO/",
    githubLink: "https://github.com/Shivangi-2008/PORTFOLIO"
  },
  {
    title: "TO-DO-LIST",
    category: "Frontend",
    shortDesc: "List of daily works",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://shivangi-2008.github.io/TO-DO-LIST/",
    githubLink: "https://github.com/Shivangi-2008/TO-DO-LIST"
  },
  {
    title: "Tic-Tac-Toe",
    category: "Frontend",
    shortDesc: "Game",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://shivangi-2008.github.io/Tic-Tac-Toe/",
    githubLink: "https://github.com/Shivangi-2008/Tic-Tac-Toe"
  }
];

// ================================
// BUILD PROJECT CARDS
// ================================
var projectsGrid = document.getElementById("projectsGrid");

for (var i = 0; i < projects.length; i++) {
  var p = projects[i];

  // build the tag html
  var tagsHtml = "";
  for (var j = 0; j < p.tags.length; j++) {
    tagsHtml += "<span>" + p.tags[j] + "</span>";
  }

  var card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML =
    '<p class="project-category">' + p.category + '</p>' +
    '<h3 class="project-title">' + p.title + '</h3>' +
    '<p class="project-desc">' + p.shortDesc + '</p>' +
    '<div class="project-tags">' + tagsHtml + '</div>' +
    '<div class="project-links">' +
      '<a href="' + p.demoLink + '" target="_blank" rel="noopener noreferrer">Live demo &#8599;</a>' +
      '<a href="' + p.githubLink + '" target="_blank" rel="noopener noreferrer">GitHub &#8599;</a>' +
    '</div>';

  projectsGrid.appendChild(card);
}

// ================================
// MOBILE HAMBURGER MENU
// ================================
var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// close mobile menu when a link is clicked
var allNavLinks = document.querySelectorAll(".nav-link");
for (var k = 0; k < allNavLinks.length; k++) {
  allNavLinks[k].addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
}

// ================================
// CONTACT FORM
// sends the message to my email using FormSubmit (https://formsubmit.co)
// no backend server needed, it's just a POST request to their API
// ================================
var contactForm = document.getElementById("contactForm");
var formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the normal page refresh, we send it with fetch instead

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.style.color = "red";
    formStatus.textContent = "Please fill in all the fields!";
    return;
  }

  var submitBtn = contactForm.querySelector("button[type='submit']");
  submitBtn.disabled = true;
  formStatus.style.color = "#94a3b8";
  formStatus.textContent = "Sending...";

  // FormSubmit's ajax endpoint, needs the form data as FormData
  var formData = new FormData(contactForm);

  fetch("https://formsubmit.co/ajax/singhshivangi222203@gmail.com", {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: formData
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      formStatus.style.color = "#5eead4";
      formStatus.textContent = "Thanks " + name + "! Your message has been sent.";
      contactForm.reset();
    })
    .catch(function (error) {
      console.log("Form error:", error);
      formStatus.style.color = "red";
      formStatus.textContent = "Something went wrong, please email me directly instead.";
    })
    .finally(function () {
      submitBtn.disabled = false;
    });
});

// ================================
// BACK TO TOP BUTTON
// ================================
var backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================
// FOOTER YEAR (so I don't have to update it every year manually)
// ================================
document.getElementById("year").textContent = new Date().getFullYear();
