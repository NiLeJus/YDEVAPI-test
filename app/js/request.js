/** Requête pour charger un composant et le rendre dans un conteneur spécifique
 * @param {string} url - URL de l'API ou du composant à charger
 * @param {string} outletID - ID de l'élément où rendre le composant
 */
export function requestComponent(url, outletID) {
  console.log("Requête envoyée pour :", url);

  fetch(url)
    .then(handleFetchResponse) // Gestion de la réponse
    .then((html) => renderComponentWithScripts(html, outletID)) // Rendu du composant avec exécution des scripts
    .catch(handleError); // Gestion des erreurs
}

/** Vérifie la réponse de la requête
 * @param {Response} response - Objet réponse de fetch
 * @returns {Promise<string>} - Le contenu de la réponse sous forme de texte
 */
export function handleFetchResponse(response) {
  if (!response.ok) {
    throw new Error(
      `Erreur HTTP : ${response.status} (${response.statusText})`
    );
  }
  return response.text(); // Renvoie le texte de la réponse
}

/** Rend un composant dans un conteneur spécifique et exécute ses scripts
 * @param {string} html - Contenu HTML à rendre
 * @param {string} outletID - ID du conteneur
 */
export function renderComponentWithScripts(html, outletID) {
  const outlet = document.getElementById(outletID);
  if (!outlet) {
    console.error(`Conteneur avec l'ID "${outletID}" introuvable.`);
    return;
  }

  outlet.innerHTML = html; // Injecter le HTML dans le conteneur

  const scripts = outlet.querySelectorAll("script"); // Rechercher les balises <script> incluses

  // Rechercher les balises <script> incluses
  scripts.forEach((script) => {

    if (script.src) {
      // Pour les scripts avec un attribut src, les recréer dynamiquement

      const newScript = document.createElement("script");
      newScript.src = script.src;
      newScript.defer = script.defer || false;
      document.body.appendChild(newScript);
    } else {
      // Pour les scripts inline, les exécuter directement
      eval(script.textContent);
    }
    script.remove(); // Supprimer l'ancien script
  });

  return outlet;
}

/** Gère les erreurs de requêtes
 * @param {Error} error - Objet d'erreur
 */
export function handleError(error) {
  console.error("Erreur lors de la requête :", error.message);
}
