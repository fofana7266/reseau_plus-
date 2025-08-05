// Tableau pour stocker les messages
let messages = [];

// Récupérer les éléments DOM
const formForum = document.getElementById('form-forum');
const messagesContainer = document.getElementById('messages-container');

// Fonction pour afficher les messages
function afficherMessages() {
    messagesContainer.innerHTML = '';

    if (messages.length === 0) {
        messagesContainer.innerHTML = '<p>Aucun message pour le moment.</p>';
        return;
    }

    messages.forEach((msg) => {
        const div = document.createElement('div');
        div.classList.add('message');

        div.innerHTML = `
            <div class="pseudo">${escapeHTML(msg.pseudo)}</div>
            <div class="texte">${escapeHTML(msg.message)}</div>
        `;

        messagesContainer.appendChild(div);
    });
}

// Fonction pour échapper le HTML (sécurité)
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}

// Événement à l’envoi du formulaire
formForum.addEventListener('submit', function(event) {
    event.preventDefault();

    const pseudo = formForum.pseudo.value.trim();
    const message = formForum.message.value.trim();

    if (pseudo === '' || message === '') {
        alert('Merci de remplir tous les champs.');
        return;
    }

    messages.unshift({ pseudo, message });

    afficherMessages();

    formForum.reset();
});

// Afficher les messages au chargement
afficherMessages();
