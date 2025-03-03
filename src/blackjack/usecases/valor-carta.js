


/**
 * Funcion para obtener el valor numerico de una carta (string)
 * @param {string} carta Ejemplo '8C'
 * @returns Regresa el valor numerico de una carta
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}