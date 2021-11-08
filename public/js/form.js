$(document).ready(function () {
  const
    $tbody = $("tbody"),
    $inputs = $tbody.find("input").closest("tr"),
    $day = $inputs.find("#day"),
    $calorie = $inputs.find("#calorie"),
    $exercise = $inputs.find("#exercise"),
    $sleep = $inputs.find("#sleep"),
    $water = $inputs.find("#water");

  function isoDate(date) {
    return (new Date(date)).toISOString().substring(0, 10);
  }

  function insert(data) {
    const row = `
  <tr>
    <td>${isoDate(data.day)}</td>
    <td>${data.calorie}</td>
    <td>${data.exercise}</td>
    <td>${data.sleep}</td>
    <td>${data.water}</td>
    <td>
      <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
      <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
    </td>
  </tr>`;

    let inserted = false;

    $("tbody > tr:not(:last)").each(function () {
      if (data.day < $(this).children().first().text()) {
        $(this).before(row);
        inserted = true;
        return false;
      }
    })
    if(!inserted) {
      $("tbody > tr:last").before(row);
    }
  }

  function reset() {
    const last = $tbody.find("tr:last-child");

    if (last.index() != $inputs.index()) {
      last.after($inputs);
    }

    $day.val("");
    $calorie.val("");
    $exercise.val("");
    $sleep.val("");
    $water.val("");

    $day.focus();
    $inputs.removeData("original");
  }

  async function add(data) {
    const res = await fetch(`/api/form`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    });

    if (!res.ok) {
      const err = await res.json();
      throw err.message;
    }
  }

  async function update(data) {
    const date = isoDate($day.val());
    const content = JSON.stringify(data);
    const options = {
      method: "PUT",
      body: content,
      headers: {"Content-Type": "application/json"},
    };
    const res = await fetch(`/api/form/${date}`, options);
    console.log("After fetch");

    if (!res.ok) {
      throw new Error(`Failed to update day {status: ${res.status}, text: "${res.statusText}"`);
    }
  }

  async function del($tr) {
    const date = isoDate($tr.children().first().text());
    const res = await fetch(`/api/form/${date}`, { method: "DELETE" });

    if (!res.ok) {
      throw new Error(`Failed to delete day {status: ${res.status}, text: "${res.statusText}"`);
    }
  }

  // new record -- save
  $(document).on("click", ".save", function () {
    const day = $day.val();
    const data = {
      calorie: $calorie.val(),
      exercise: $exercise.val(),
      sleep: $sleep.val(),
      water: $water.val(),
    }

    if ($inputs.data("original")) {
      update(data)
        .then(() => {
          data["day"] = day;
          insert(data);
          reset();
        }).catch(err => {
          alert(err);
        })
    } else {
      data["day"] = day;
      add(data)
        .then(() => {
          insert(data);
          reset();
        })
        .catch(err => {
          alert(err);
        })
    }
  });

  // new record -- cancel
  $(document).on("click", ".cancel", function () {
    const original = $inputs.data("original");
    console.log(original);
    
    if (original) {
      insert(original);
      $inputs.removeData();
    }
    reset();
  });

  // existing record -- edit
  $(document).on("click", ".edit", function () {
    if ($inputs.data("original")) {
      return;
    }

    const $tr = $(this).closest("tr");
    const $td = $tr.children();
    const original = {
      day: $td.eq(0).text(),
      calorie: $td.eq(1).text(),
      exercise: $td.eq(2).text(),
      sleep: $td.eq(3).text(),
      water: $td.eq(4).text(),
    };

    $tr.before($inputs);
    $tr.remove()

    $inputs.data("original", original);
    $day.val(original.day);
    $calorie.val(original.calorie);
    $exercise.val(original.exercise);
    $sleep.val(original.sleep);
    $water.val(original.water);

    $calorie.focus();
  });

  // existing record -- delete
  $(document).on("click", ".delete", function () {
    var $tr = $(this).parents("tr");
    del($tr)
      .then(() => {
        $tr.remove();
      })
      .catch(err => {
        alert(err);
      })
  });
})