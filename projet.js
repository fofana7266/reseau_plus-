// Tableau pour stocker les projets (en mémoire)
let projets = [];

// Récupération des éléments DOM
const formProjet = document.getElementById('form-projet');
const projetsContainer = document.getElementById('projets-container');

// Fonction pour afficher les projets
function afficherProjets() {
    projetsContainer.innerHTML = ''; // Vide le conteneur

    if(projets.length === 0) {
        projetsContainer.innerHTML = '<p>Aucun projet publié pour le moment.</p>';
        return;
    }

    projets.forEach((projet, index) => {
        const div = document.createElement('div');
        div.classList.add('projet');

        div.innerHTML = `
            <h4>${projet.titre}</h4>
            <p>${projet.description}</p>
            ${projet.lien ? `<a href="${projet.lien}" target="_blank" rel="noopener noreferrer">Voir le projet</a>` : ''}
        `;

        projetsContainer.appendChild(div);
    });
}

// Événement à l'envoi du formulaire
formProjet.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer valeurs
    const titre = formProjet.titre.value.trim();
    const description = formProjet.description.value.trim();
    const lien = formProjet.lien.value.trim();

    if(titre === '' || description === '') {
        alert('Merci de remplir le titre et la description.');
        return;
    }

    // Ajouter le projet au tableau
    projets.unshift({ titre, description, lien });

    // Réafficher les projets
    afficherProjets();

    // Réinitialiser le formulaire
    formProjet.reset();
});

// Afficher les projets au chargement de la page
afficherProjets();
