  const frases = [
    "Hola, soy Jose Sandoval",
    "Ingeniero Informático",
    "Especialidad en Ciberseguridad",
    "Explorador de la Filosofía"
  ];

  const textElement = document.getElementById("dynamic-text");

  let i = 0;         // Índice de frase
  let j = 0;         // Índice de letra
  let current = "";
  let borrando = false;

  function escribirFrase() {
    const fraseActual = frases[i];

    if (!borrando) {
      // Escribiendo la frase
      current = fraseActual.substring(0, j++);
      textElement.textContent = current;

      if (j <= fraseActual.length) {
        setTimeout(escribirFrase, 100);
      } else {
        // Pausa antes de borrar
        setTimeout(() => { borrando = true; escribirFrase(); }, 1500);
      }
    } else {
      // Borrando la frase
      current = fraseActual.substring(0, j--);
      textElement.textContent = current;

      if (j >= 0) {
        setTimeout(escribirFrase, 50);
      } else {
        borrando = false;
        i = (i + 1) % frases.length;
        setTimeout(escribirFrase, 500);
      }
    }
  }

  escribirFrase();