$(document).ready(function () {
  /* $('[data-toggle="tooltip"]').tooltip(); */
  //let actions = $("table td:last-child").html();
  // Append table with add row form on add new button click
 function  generateRow(ids){
  let tr = document.createElement("tr");
  

    // append class="material-icons" ???


   for(let i=0; i<ids.length; i++){
   
    let td = document.createElement("td");
    let inputEl = document.createElement("input");
    inputEl.setAttribute("class", "form-input form-control" );
    if(i===0){
      inputEl.setAttribute("type", "date" );
    }
    else{
      inputEl.setAttribute("type", "text" );
    }
    inputEl.setAttribute("id", ids[i] );
    tr.appendChild(td);
    td.appendChild(inputEl);
       
    
   }
   let td = document.createElement("td");
   let addEl = document.createElement("a");
   let iconEl = document.createElement("i");
   addEl.setAttribute("class", "add")
   addEl.setAttribute("id", "save")
   iconEl.innerText = 'edit';
   iconEl.setAttribute("class", "material-icons-outlined")
   addEl.appendChild(iconEl);
   td.appendChild(addEl);
   tr.appendChild(td);
   addEl.addEventListener('click', newFormHandler);
   document.querySelector('tbody').appendChild(tr);
 } 
  $(".add-new").click(function () {
 
    let idArray = ['day', 'calorie',' exercise', 'sleep', 'water'];
   generateRow(idArray);
  });



const newFormHandler = async (event) => {
  event.preventDefault();
  console.log("BUTTON PRESSED")

  const data = {
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
  console.log("UPDATE PRESSED")

  const data = {
    day: document.querySelector('#day').value.trim(),
    calorie: document.querySelector('#calorie').value.trim(),
    exercise: document.querySelector('#exercise').value.trim(),
    sleep: document.querySelector('#sleep').value.trim(),
    water: document.querySelector('#water').value.trim(),
  }

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
  console.log("DELETE PRESSED")

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

document.querySelector('.add').addEventListener('click', newFormHandler);
document.querySelector('.edit').addEventListener('click', updateFormHandler);
document.querySelector('.delete').addEventListener('click', delFormHandler);
});

