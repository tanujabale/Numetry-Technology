// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const mainContent = document.getElementById('main-content');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Content for each section
const content = {
  home: `
    <section id="home">
      <h1>Welcome to TravelVista</h1>
      <p>Explore the world with us! Discover unique vacation packages, insightful travel guides, and seamless booking services.</p>
    </section>
  `,
  about: `
    <section id="about">
      <h1>About Us</h1>
      <p>TravelVista is a leader in providing exceptional travel solutions worldwide. Our mission is to inspire and enable travelers to explore the world.</p>
    </section>
  `,
  services: `
    <section id="services">
      <h1>Our Services</h1>
      <ul>
        <li>Vacation Packages</li>
        <li>Hotel Bookings</li>
        <li>Flight Reservations</li>
        <li>Travel Insurance</li>
      </ul>
    </section>
  `,
  blog: `
    <section id="blog">
      <h1>Our Blog</h1>
      <p>Stay updated with the latest travel tips, destinations, and stories from travelers around the world.</p>
    </section>
  `,
  contact: `
    <section id="contact">
      <h1>Contact Us</h1>
      <p>Email: contact@travelvista.com</p>
      <p>Phone: +123 456 7890</p>
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
