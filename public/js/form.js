let session ='<%= Session["VariableName"]%>';
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
    window.alert("New Day created!");
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add Day');
  }
};

const delButtonHandler = async function (event) {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/form/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to delete project");
    }
  }
};

document.querySelector('.log-form').addEventListener('submit', newFormHandler);