const newFormHandler = async function (event) {
  event.preventDefault();

  const monEl = document.querySelector('#monday');
  const tuesEl = document.querySelector('#tuesday');
  const wedEl = document.querySelector('#wednesday');
  const thursEl = document.querySelector('#thursday');
  const friEl = document.querySelector('#friday');
  const satEl = document.querySelector('#saturday');
  const sunEl = document.querySelector('#sunday');

  await fetch(`/api/calories`, {
    method: 'POST',
    body: JSON.stringify({
      mon_amount: monEl.value,
      tues_amount: tuesEl.value,
      wed_amount: wedEl.value,
      thurs_amount: thursEl.value,
      fri_amount: friEl.value,
      sat_amount: satEl.value,
      sun_amount: sunEl.value
    }),
    headers: { 'Content-Type': 'application/json' },
  });
};

document
  .querySelector('#new-fitness-form')
  .addEventListener('submit', newFormHandler);
