const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    document.getElementById('year').textContent = new Date().getFullYear();