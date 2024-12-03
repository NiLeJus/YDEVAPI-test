import { requestComponent } from "./request-components.js";
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




// // Appeler toggleButtonVisibility au chargement initial
// toggleButtonVisibility();


// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))