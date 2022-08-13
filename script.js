const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');
const btn = document.getElementById('calculate');
const result = document.querySelector('.imc-result');
const typeResult = document.querySelector('.type-result');

function calculateImc(weigth, height) {
  return (weigth / (height * height)).toFixed(2);
}

function handleBtn() {
  let weight = inputWeight.value;
  let height = inputHeight.value;
  let imc = calculateImc(weight, height);

  return result.innerHTML = `Seu IMC é ${imc}`;
}

function bodyType() {
  let weight = inputWeight.value;
  let height = inputHeight.value;
  let imc = calculateImc(weight, height);

  if (imc >= 16 && imc <= 16.9 || imc < 16) return typeResult.innerHTML = `Muito abaixo do peso.`
  if (imc >= 17 && imc <= 18.4) return typeResult.innerHTML = `Abaixo do peso.`
  if (imc >= 18.5 && imc <= 24.9) return typeResult.innerHTML = `Peso normal.`
  if (imc >= 25 && imc <= 29.9) return typeResult.innerHTML = `Acima do peso.`
  if (imc >= 30 && imc <= 34.9) return typeResult.innerHTML = `Obesidade grau I.`
  if (imc >= 35 && imc <= 40) return typeResult.innerHTML = `Obesidade grau II.`
  if (imc > 40) return typeResult.innerHTML = `Obesidade grau III.`
}


btn.addEventListener('click', handleBtn);
btn.addEventListener('click', bodyType);


