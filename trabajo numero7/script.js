// Paso 14: Obtener el formulario
const calorieCounter = document.getElementById('calorie-counter');

// Paso 15: Obtener el input del presupuesto
const budgetNumberInput = document.getElementById('budget');

// Paso 15: Obtener el dropdown de tipo de entrada
const entryDropdown = document.getElementById('entry-dropdown');

// Paso 16: Obtener el botón para agregar entradas
const addEntryButton = document.getElementById('add-entry');

// Paso 16: Obtener el botón de limpiar
const clearButton = document.getElementById('clear');

// Paso 16: Obtener el div de salida
const output = document.getElementById('output');

// Paso 17: Declarar la variable isError
let isError = false;

// Paso 18: Declarar la función para limpiar la entrada
function cleanInputString(str) {
  const regex = /[+-\s]/g; // Remueve caracteres "+", "-" y espacios
  return str.replace(regex, '');
}

// Paso 28: Función para verificar entradas inválidas
function isInvalidInput(str) {
  const regex = /\d+e\d+/i; // Para detectar la notación científica
  return str.match(regex);
}

// Paso 39: Función para agregar entradas
function addEntry() {
  const targetId = '#' + entryDropdown.value;
  const targetInputContainer = document.querySelector(targetId + ' .input-container');
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;

  const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber + 1} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber + 1} Calories</label>
    <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />
  `;

  targetInputContainer.innerHTML += HTMLString;
}

// Paso 53: Event listener para agregar una entrada
addEntryButton.addEventListener("click", addEntry);

// Paso 57: Función para obtener el total de calorías de las entradas del usuario
function getCaloriesFromInputs(inputs) {
  let totalCalories = 0;

  for (const input of inputs) {
    const currVal = cleanInputString(input.value); // Limpiar la entrada

    // Verificar si la entrada es inválida
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null; // Detener la ejecución si hay error
    }

    totalCalories += Number(currVal); // Sumar las calorías válidas
  }

  return totalCalories; // Devolver el total de calorías
}

// Paso 68: Función para calcular las calorías
function calculateCalories(e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  isError = false;

  // Obtener todas las entradas de tipo número (calorías)
  const breakfastInputs = document.querySelectorAll("#breakfast input[type='number']");
  const lunchInputs = document.querySelectorAll("#lunch input[type='number']");
  const dinnerInputs = document.querySelectorAll("#dinner input[type='number']");
  const snacksInputs = document.querySelectorAll("#snacks input[type='number']");
  const exerciseInputs = document.querySelectorAll("#exercise input[type='number']");

  // Obtener las calorías por comida
  const breakfastCalories = getCaloriesFromInputs(breakfastInputs);
  const lunchCalories = getCaloriesFromInputs(lunchInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerInputs);
  const snacksCalories = getCaloriesFromInputs(snacksInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseInputs);

  // Verificar si ocurrió un error
  if (isError) {
    return;
  }

  // Calcular el total de calorías y mostrar el resultado
  const totalCalories = (breakfastCalories || 0) + (lunchCalories || 0) + (dinnerCalories || 0) +
                        (snacksCalories || 0) - (exerciseCalories || 0);

  // Mostrar el resultado
  output.innerHTML = `Total Calories: ${totalCalories}`;
}

// Paso 69: Event listener para calcular las calorías cuando se envíe el formulario
calorieCounter.addEventListener("submit", calculateCalories);

// Paso 70: Función para limpiar todo (opcional si tienes un botón de limpiar)
clearButton.addEventListener("click", () => {
  // Limpiar los inputs y salidas
  const allInputs = document.querySelectorAll("input[type='text'], input[type='number']");
  allInputs.forEach(input => input.value = '');
  output.innerHTML = ''; // Limpiar el resultado mostrado
});

    // Paso 71
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
    
    }

    // Paso 72
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
        
    }

    // Paso 73
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    
    }

    // Paso 74
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    
    }

    // Paso 75
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    
    }

    // Paso 76
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
    
    }

    // Paso 77
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
    
    }

    // Paso 78
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    
    }

    // Paso 79
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    
    }

    // Paso 80
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    
    }
  
    // Paso 81
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = ``;
    }

    // Paso 82
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}"></span>
      `;
    }

    // Paso 83
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${remainingCalories} Calorie ${surplusOrDeficit}</span>
      `;
    }

    // Paso 84
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      
      `;
    }

    // Paso 85
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
    
      `;
    }

    // Paso 86
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
      <p>${budgetCalories} Calories Budgeted</p>
    
      `;
    }

    // Paso 87
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
      <p>${budgetCalories} Calories Budgeted</p>
      <p>${consumedCalories} Calories Consumed</p>
      <p>${exerciseCalories} Calories Burned</p>
      `;
    
    
    }

    // Paso 88
    function calculateCalories(e) {
      e.preventDefault();
      isError = false;
    
      const breakfastNumberInputs = document.querySelectorAll("#breakfast input[type='number']");
      const lunchNumberInputs = document.querySelectorAll("#lunch input[type='number']");
      const dinnerNumberInputs = document.querySelectorAll("#dinner input[type='number']");
      const snacksNumberInputs = document.querySelectorAll("#snacks input[type='number']");
      const exerciseNumberInputs = document.querySelectorAll("#exercise input[type='number']");
    
      const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
      const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
      const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
      const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
      const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
      const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    
      if (isError) {
        return;
      }
    
      const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
      const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
      const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
      output.innerHTML = `
      <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr>
      <p>${budgetCalories} Calories Budgeted</p>
      <p>${consumedCalories} Calories Consumed</p>
      <p>${exerciseCalories} Calories Burned</p>
      `;
    
      output.classList.remove('hide');
    }

    // Paso 89

    calorieCounter.addEventListener("submit", calculateCalories);

    // Paso 90
    function clearForm() {

    }

    // Paso 91

    function clearForm() {
      const inputContainers = document.querySelectorAll('.input-container');
    }

    // Paso 92
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
    
    }

    // Paso 93
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
    
    }

    // Paso 94
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
      budgetNumberInput.value = '';
    
    }

    // Paso 95
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
      budgetNumberInput.value = '';
      output.innerText = '';
    
    }
    // Paso 96
    function clearForm() {
      const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    
      for (const container of inputContainers) {
        container.innerHTML = '';
      }
    
      budgetNumberInput.value = '';
      output.innerText = '';
      output.classList.add('hide');
    }