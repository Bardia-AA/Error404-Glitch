// written by Bardia-AA (☞ﾟヮﾟ)☞
// Cache container and article elements Bardia-AA
const container = document.querySelector('.container');
const article = document.querySelector('article');
// Create particle container Bardia-AA
const particleContainer = document.createElement('div');
particleContainer.classList.add('particle-container');
// Insert particle container before article Bardia-AA
container.insertBefore(particleContainer, article);
// Generate particles HTML Bardia-AA
const particles = [];
for (let i = 0; i < 20; i++) {
    particles.push('<span class="particle">4</span>');
    particles.push('<span class="particle">0</span>');
}
const particlesHtml = particles.join('');
// Append particles HTML to particle container using DocumentFragment Bardia-AA
const fragment = document.createRange().createContextualFragment(particlesHtml);
particleContainer.appendChild(fragment);
// written by Bardia-AA (☞ﾟヮﾟ)☞