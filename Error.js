// written by Bardia Asgari Ahi (☞ﾟヮﾟ)☞
// Cache container and article elements B.A
const container = document.querySelector('.container');
const article = document.querySelector('article');
// Create particle container B.A
const particleContainer = document.createElement('div');
particleContainer.classList.add('particle-container');
// Insert particle container before article B.A
container.insertBefore(particleContainer, article);
// Generate particles HTML B.A
const particles = [];
for (let i = 0; i < 20; i++) {
    particles.push('<span class="particle">4</span>');
    particles.push('<span class="particle">0</span>');
}
const particlesHtml = particles.join('');
// Append particles HTML to particle container using DocumentFragment B.A
const fragment = document.createRange().createContextualFragment(particlesHtml);
particleContainer.appendChild(fragment);
// written by Bardia Asgari Ahi (☞ﾟヮﾟ)☞