const form = document.querySelector('form');

// this useCase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Please enter valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      const body1 = document.querySelector('#underweight');
      body1.style.backgroundColor = 'yellow';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      const body1 = document.querySelector('#Normalweight');
      body1.style.backgroundColor = 'yellow';
    } else {
      const body1 = document.querySelector('#Overweight');
      body1.style.backgroundColor = 'yellow';
    }
  }
});
