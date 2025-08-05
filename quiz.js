function corrigerQuiz() {
    let score = 0;

    // Réponses correctes
    const bonnesReponses = {
        q1: "c",
        q2: "b",
        q3: "a"
    };

    // Désactiver le bouton Soumettre après clic
    document.getElementById("btnSubmit").disabled = true;

    // Parcourir toutes les questions
    for (let question in bonnesReponses) {
        const reponses = document.getElementsByName(question);
        let bonneValeur = bonnesReponses[question];

        reponses.forEach((input) => {
            const label = input.nextSibling; // texte après input (balise texte)
            if (input.checked) {
                if (input.value === bonneValeur) {
                    score++;
                    input.parentElement.style.color = "green"; // texte vert si bon
                } else {
                    input.parentElement.style.color = "red";   // texte rouge si faux
                }
            } else {
                // Montrer la bonne réponse en vert
                if (input.value === bonneValeur) {
                    input.parentElement.style.color = "green";
                }
            }
            // Désactiver tous les inputs après soumission
            input.disabled = true;
        });
    }

    // Afficher le résultat
    const resultat = document.getElementById("resultat");
    resultat.innerHTML = `Tu as obtenu ${score} / 3 👏`;

    if (score === 3) {
        resultat.style.color = "green";
    } else if (score === 2) {
        resultat.style.color = "orange";
    } else {
        resultat.style.color = "red";
    }

    // Afficher le bouton Recommencer
    document.getElementById("btnRestart").style.display = "inline-block";
}

function recommencerQuiz() {
    // Réactiver bouton Soumettre
    document.getElementById("btnSubmit").disabled = false;

    // Cacher bouton Recommencer
    document.getElementById("btnRestart").style.display = "none";

    // Réinitialiser le texte résultat
    document.getElementById("resultat").innerHTML = "";

    // Réactiver tous les inputs et remettre couleur texte par défaut
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.disabled = false;
        input.checked = false;
        input.parentElement.style.color = "black";
    });
}
