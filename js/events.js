// Event-Daten: Array von Objekten mit title, date (ISO), description
// Einfach Events hinzufügen oder entfernen durch Bearbeiten dieses Arrays
window.eventsData = [
    {
        title: "Gemeinsames Frühstück",
        date: "2025-12-28T10:00:00",
        description: "Starten Sie den Tag mit einem gemeinsamen Frühstück nach dem Morgengebet. Alle sind willkommen!"
    },
    {
        title: "Spendenkampagne für neue Teppiche",
        date: "2025-12-30T14:00:00",
        description: "Unterstützen Sie unsere Kampagne zur Erneuerung der Gebetsteppiche. Spenden bis Ende Januar möglich."
    },
    {
        title: "Interreligiöser Dialogabend",
        date: "2026-01-05T18:00:00",
        description: "Ein Abend des Austauschs mit Vertretern anderer Glaubensgemeinschaften. Offen für alle Interessierten."
    },
    {
        title: "Winterhilfe für Bedürftige",
        date: "2026-01-10T11:00:00",
        description: "Sammeln Sie warme Kleidung und Lebensmittel für diejenigen, die Hilfe brauchen."
    }
];

// Funktion zum Rendern der Events
window.renderEvents = function() {
    const eventsContainer = document.getElementById('events-container');
    const now = new Date();

    // Filtere nur zukünftige Events
    const futureEvents = window.eventsData.filter(event => new Date(event.date) > now);

    // Sortiere nach Datum (früheste zuerst)
    futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Leere den Container
    eventsContainer.innerHTML = '';

    if (futureEvents.length === 0) {
        eventsContainer.innerHTML = '<p class="no-events">Derzeit keine anstehenden Events. Bleiben Sie dran!</p>';
        return;
    }

    // Rendere jedes Event
    futureEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('de-DE', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const eventCard = document.createElement('article');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-date">${formattedDate}</div>
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        `;
        eventsContainer.appendChild(eventCard);
    });
};
