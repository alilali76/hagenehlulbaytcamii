document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Schließe die Sidebar, wenn auf einen Link geklickt wird
    sidebar.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    });

    // Schließe die Sidebar, wenn auf den Overlay geklickt wird
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Rendere Events beim Laden der Seite
    if (typeof window.renderEvents === 'function') {
        window.renderEvents();
    }

    // Contact Form Toggle
    const questionButtons = document.querySelectorAll('.btn-secondary[data-action]');
    const questionsCards = document.getElementById('questions-cards');
    const contactForm = document.getElementById('contact-form');

    questionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Smooth ausblenden der Karten
            questionsCards.style.opacity = '0';
            questionsCards.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                questionsCards.style.display = 'none';
                contactForm.style.display = 'block';
                
                // Trigger reflow
                contactForm.offsetHeight;
                
                contactForm.classList.add('show');
            }, 300);
        });
    });

    // Contact Form Submit via Email
    document.getElementById('moschee-contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const subject = 'Kontaktformular Hagen Ehlulbayt Camii';
        const body = `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`;
        
        const mailto = `mailto:alialtan2002@outlook.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Öffne E-Mail-App
        window.location.href = mailto;
        
        // Formular ausblenden
        contactForm.classList.remove('show');
        setTimeout(() => {
            contactForm.style.display = 'none';
        }, 300);
        
        // Questions Cards wieder einblenden
        questionsCards.style.display = 'grid';
        questionsCards.style.opacity = '1';
        questionsCards.style.transform = 'translateY(0)';
        
        // Modal anzeigen
        document.getElementById('confirmation-modal').classList.add('show');
    });

    // Modal OK Button
    document.getElementById('modal-ok-btn').addEventListener('click', function() {
        // Modal ausblenden
        document.getElementById('confirmation-modal').classList.remove('show');
        
        // Karten wieder anzeigen
        questionsCards.style.display = 'grid';
        questionsCards.style.opacity = '1';
        questionsCards.style.transform = 'translateY(0)';
        
        // Formular reset
        document.getElementById('moschee-contact-form').reset();
    });
});