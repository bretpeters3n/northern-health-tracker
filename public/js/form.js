const newFormHandler = async function (event) {
  event.preventDefault();

  const data = {
    day: document.querySelector('#day').value.trim(),
    calorie: document.querySelector('#calorie').value.trim(),
    exercise: document.querySelector('#exercise').value.trim(),
    sleep: document.querySelector('#sleep').value.trim(),
    water: document.querySelector('#water').value.trim(),
  }

  await fetch(`/api/form`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
};

document
  .querySelector('.log-form')
  .addEventListener('submit', newFormHandler);
