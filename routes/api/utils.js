// Fonction utilitaire pour effectuer le calcul
export default function Calculator(a, b, operation) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
  
    if (isNaN(numA) || isNaN(numB)) {
      return { error: 'Des chiffres stp frere' };
    }
  
    let result;
    switch (operation) {
      case 'add':
        result = numA + numB;
        break;
  
      case 'subtract':
        result = numA - numB;
        break;
  
      case 'multiply':
        result = numA * numB;
        break;
  
      case 'divide':
        if (numB === 0) {
          return { error: 'Division par zéro srx ? noob' };
        }
        result = numA / numB;
        break;
  
      case 'always42':
        result = 42;
        break;
  
      default:
        return { error: 'Erreur : opération non reconnue (must be add / subtract / multiply / divide ' };
    }
  
    return { result };
  }
  

  