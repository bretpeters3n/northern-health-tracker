let session = '<%= Session["VariableName"]%>';
/* db.query('SELECT sid FROM sessions') */

const newFormHandler = async function (event) {
  event.preventDefault();

  const data = {
    /* user_id: '<%= Session["VariableName"]%>', */
    day: document.querySelector('#day').value.trim(),
    calorie: document.querySelector('#calorie').value.trim(),
    exercise: document.querySelector('#exercise').value.trim(),
    sleep: document.querySelector('#sleep').value.trim(),
    water: document.querySelector('#water').value.trim(),
  }

  const response = await fetch(`/api/form`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.alert("Day created!");
    document.location.replace('/form');
  } else {
    alert('Failed to add Day');
  }
};

const updateFormHandler = async function (event) {
  event.preventDefault();

  if (day && calorie && exercise && sleep && water) {
    const response = await fetch(`/api/form/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      window.alert('Day updated!');
      document.location.replace('/form');
    } else {
      alert('Failed to update day');
    }
  }
}

const delFormHandler = async function (event) {
  event.preventDefault();

  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/form/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      window.alert('Day deleted!');
      document.location.replace("/form");
    } else {
      alert("Failed to delete day");
    }
  }
};

document.querySelector('#save').addEventListener('click', newFormHandler);
document.querySelector('#update').addEventListener('click', updateFormHandler);
document.querySelector('#delete').addEventListener('click', delFormHandler);