// Cache container and article elements
const container = document.querySelector('.container');
const article = document.querySelector('article');
// Create particle container
const particleContainer = document.createElement('div');
particleContainer.classList.add('particle-container');
// Insert particle container before article
container.insertBefore(particleContainer, article);
// Generate particles HTML
const particles = [];
for (let i = 0; i < 20; i++) {
    particles.push('<span class="particle">4</span>');
    particles.push('<span class="particle">0</span>');
}
const particlesHtml = particles.join('');
// Append particles HTML to particle container using DocumentFragment
const fragment = document.createRange().createContextualFragment(particlesHtml);
particleContainer.appendChild(fragment);