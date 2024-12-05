// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Content for each section with more information
const content = {
  home: `
    <section id="home">
      <h1>Welcome to TravelVista</h1>
      <p>Your gateway to exploring the world. At TravelVista, we bring you tailored vacation packages, detailed travel guides, and seamless booking experiences.</p>
      <div class="content-grid">
        <div>
          <h2>Why Choose Us?</h2>
          <p>Experience unmatched service, unique destinations, and unforgettable adventures designed just for you.</p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>To make your travel dreams a reality, creating memories that last a lifetime.</p>
        </div>
      </div>
    </section>
  `,
  about: `
    <section id="about">
      <h1>About Us</h1>
      <p>At TravelVista, we’re passionate about connecting people with new experiences. Our team of seasoned travel experts has over a decade of experience in curating unique journeys worldwide.</p>
      <div class="content-grid">
        <div>
          <h2>Our Vision</h2>
          <p>To be the leading travel partner for adventurers and dreamers alike.</p>
        </div>
        <div>
          <h2>Our Values</h2>
          <p>Integrity, innovation, and a commitment to customer satisfaction are at the heart of everything we do.</p>
        </div>
      </div>
    </section>
  `,
  services: `
    <section id="services">
      <h1>Our Services</h1>
      <div class="content-grid">
        <div>
          <h2>Custom Travel Plans</h2>
          <p>We design personalized itineraries to suit your preferences and budget.</p>
        </div>
        <div>
          <h2>24/7 Support</h2>
          <p>Travel worry-free with our round-the-clock customer support team.</p>
        </div>
        <div>
          <h2>Exclusive Offers</h2>
          <p>Enjoy amazing discounts on popular destinations and travel packages.</p>
        </div>
      </div>
    </section>
  `,
  blog: `
    <section id="blog">
      <h1>Our Blog</h1>
      <p>Dive into our latest articles for travel tips, destination highlights, and insider guides.</p>
      <div class="content-grid">
        <div>
          <h2>Top 10 Beaches in the World</h2>
          <p>Discover paradise on earth with our curated list of stunning beaches.</p>
        </div>
        <div>
          <h2>Tips for Budget Travel</h2>
          <p>Travel smarter and stretch your dollars with our expert advice.</p>
        </div>
        <div>
          <h2>Hidden Gems of Europe</h2>
          <p>Explore lesser-known treasures waiting to be uncovered in Europe.</p>
        </div>
      </div>
    </section>
  `,
  contact: `
    <section id="contact">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out to us for any travel-related inquiries or feedback.</p>
      <div class="content-grid">
        <div>
          <h2>Email</h2>
          <p>support@travelvista.com</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+1 (800) 555-1234</p>
        </div>
        <div>
          <h2>Office Hours</h2>
          <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </section>
  `,
};

 


// Toggle nav-links visibility
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Handle navigation clicks
navLinks.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  const section = event.target.getAttribute('data-section');
  if (section && content[section]) {
    mainContent.innerHTML = content[section];
    navLinks.classList.remove('active'); // Close menu after clicking
  }
});

// Search functionality
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  if (query === '') {
    mainContent.innerHTML = content.home; // Show home page by default
    return;
  }

  const searchResults = Object.keys(content)
    .map(key => {
      const sectionContent = content[key];
      if (sectionContent.toLowerCase().includes(query)) {
        return sectionContent;
      }
      return null;
    })
    .filter(result => result !== null);

  if (searchResults.length > 0) {
    mainContent.innerHTML = searchResults.join('');
  } else {
    mainContent.innerHTML = `<section><h1>No results found for "${query}"</h1></section>`;
  }
});
