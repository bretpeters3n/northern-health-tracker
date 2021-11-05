$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
  //let actions = $("table td:last-child").html();
  // Append table with add row form on add new button click
 function  generateRow(ids){
  let tr = document.createElement("tr");
  

    // append class="material-icons" ???


   for(let i=0; i<ids.length; i++){
   
    let td = document.createElement("td");
    let inputEl = document.createElement("input");
    let divEl = document.createElement("div");
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
   iconEl.innerText = '>&#xE03B;';
   addEl.appendChild(iconEl);
   td.appendChild(addEl);
   tr.appendChild(td);
   addEl.addEventListener('click', newFormHandler);
   document.querySelector('tbody').appendChild(tr);
 } 
  $(".add-new").click(function () {
    $(this).attr("disabled", "disabled");
    let index = $("table tbody tr:last-child").index();
    // let row = '<tr>' +
    //   '<td><input class="form-input form-control" type="date" id="day"></td>' +
    //   '<td><input class="form-input form-control" type="text" id="calorie"></td>' +
    //   '<td><input class="form-input form-control" type="text" id="exercise"></td>' +
    //   '<td><input class="form-input form-control" type="text" id="sleep"></td>' +
    //   '<td><input class="form-input form-control" type="text" id="water"></td>' +
    //   '<td>'+ '</td>' +
    //   '</tr>';

    
    let idArray = ['day', 'calorie',' exercise', 'sleep', 'water'];
   generateRow(idArray);



   // $("table").append(row);
  // console.log( $("table tbody tr").eq(index + 1).find(".add, .edit").toggle());
    $('[data-toggle="tooltip"]').tooltip();

    // let add = `<a class="add" id="save" title="Add" data-toggle="tooltip"></a>`;
    // let addEl = document.createElement("a");
    // let iconEl = document.createElement("i");
    // iconEl.innerText = '>&#xE03B;' 
    // addEl.appendChild(iconEl);
    // addEl.addEventListener('click', newFormHandler);
    //console.log(row);
   // row.lastChild.appendChild(addEl);
    



    // let edit = `<a class="edit" id="update" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>`;
    // let del = `<a class="delete" id="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>`;

    
    // edit.addEventListener('click', updateFormHandler);
    // del.addEventListener('click', delFormHandler);

    
  });
  // Add row on add button click
  $(document).on("click", ".add", function () {
    let empty = false;
    let input = $(this).parents("tr").find('input[type="text"]');
    input.each(function () {
      if (!$(this).val()) {
        $(this).addClass("error");
        empty = true;
      } else {
        $(this).removeClass("error");
      }
    });
    $(this).parents("tr").find(".error").first().focus();
    if (!empty) {
      input.each(function () {
        $(this).parent("td").html($(this).val());
      });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").removeAttr("disabled");
    }
  });
  // Edit row on edit button click
  $(document).on("click", ".edit", function () {
    $(this).parents("tr").find("td:not(:last-child)").each(function () {
      $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
    });
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".add-new").attr("disabled", "disabled");
  });
  // Delete row on delete button click
  $(document).on("click", ".delete", function () {
    $(this).parents("tr").remove();
    $(".add-new").removeAttr("disabled");
  });
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
