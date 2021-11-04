$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input class="form-input form-control" type="date" id="day"></td>' +
            '<td><input class="form-input form-control" type="text" id="calorie"></td>' +
            '<td><input class="form-input form-control" type="text" id="exercise"></td>' +
            '<td><input class="form-input form-control" type="text" id="sleep"></td>'+
            '<td><input class="form-input form-control" type="text" id="water"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});


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