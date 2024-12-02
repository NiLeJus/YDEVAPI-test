import { requestComponent } from "./request.js";
// Rendre la fonction accessible car module ES6
window.requestComponent = requestComponent;

// // Ajout d'un gestionnaire d'événement au bouton principal
// document.getElementById('request-component-btn')?.addEventListener('click', () => {
//   requestComponent('/hello-discret', 'response-component');
// });

document.getElementById('dismiss-component-btn')?.addEventListener('click', () => {
  dismissComponentById('response-component');
});


/** Supprime le contenu d'un conteneur spécifique
 * @param {string} id - ID HTML du conteneur à vider
 */
export function dismissComponentById(id) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = "";
    console.log(`Contenu de l'élément "${id}" supprimé.`);
  }
}


// Affiche ou masque le bouton en fonction du contenu de l'élément `response`

export function toggleButtonVisibility() {
  if (!responseElement || !dynamicButton) {
    console.warn('L\'élément ou le bouton dynamique est introuvable.');
    return;
  }

  // Vérifie si l'élément est vide
  if (responseElement.innerHTML.trim() !== '') {
    dynamicButton.style.display = 'block'; // Affiche le bouton
  } else {
    dynamicButton.style.display = 'none'; // Masque le bouton
  }
}

// Configurer les éléments à surveiller
const responseElement = document.getElementById('response');
const dynamicButton = document.getElementById('dynamic-button');

// Observer les changements dans l'élément
const observer = new MutationObserver(() => {
  toggleButtonVisibility();
});

// Configurer l'observer pour surveiller les modifications de l'enfant
if (responseElement) {
  observer.observe(responseElement, { childList: true, subtree: true });
}

// Appeler toggleButtonVisibility au chargement initial
toggleButtonVisibility();


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))