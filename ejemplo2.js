function calculate_sum(a, b) {
    if (a > b) 
    {
      return a + b;
    }
    else
    {
      return a - b;
    }
  }
  
  const result = calculate_sum(2, 3);
  console.log(result);
  /*
Convención de nomenclatura: El nombre de la función calculate_sum no sigue la convención de nomenclatura camelCase, donde la primera letra de cada palabra después de la primera se escribe en mayúscula.

Nombre de variables y funciones significativas: El nombre de la función calculate_sum no es muy descriptivo y podría ser mejorado para reflejar la funcionalidad de la resta en algunos casos.

Uso adecuado de bloques de código: No se utilizan llaves ({}) para delimitar los bloques de código dentro de las estructuras if y else.
*/