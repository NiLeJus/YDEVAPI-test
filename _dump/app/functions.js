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