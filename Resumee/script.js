function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
}
