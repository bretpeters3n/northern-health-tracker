////////////////////////////  Tabs  ////////////////////////////////
// Functions
function tabOne() {
  $('.steps-graph').removeClass('hidden');
  $('.water-graph').addClass('hidden');
  $('.sleep-graph').addClass('hidden');
  $('.calorie-graph').addClass('active');
}

function tabTwo() {
  $('.steps-graph').addClass('hidden');
  $('.water-graph').removeClass('hidden');
  $('.sleep-graph').addClass('hidden');
  $('.calorie-graph').addClass('hidden');
}

function tabThree() {
  $('.steps-graph').addClass('hidden');
  $('.water-graph').addClass('hidden');
  $('.sleep-graph').removeClass('hidden');
  $('.calorie-graph').addClass('hidden');
}

function tabThree() {
  $('.steps-graph').addClass('hidden');
  $('.water-graph').addClass('hidden');
  $('.sleep-graph').removeClass('hidden');
  $('.calorie-graph').addClass('hidden');
}

function tabFour() {
  $('.steps-graph').addClass('hidden');
  $('.water-graph').addClass('hidden');
  $('.sleep-graph').addClass('hidden');
  $('.calorie-graph').removeClass('hidden');
}

// Event Listners
$('.tab-1').click(tabOne);
$('.tab-2').click(tabTwo);
$('.tab-3').click(tabThree);
$('.tab-4').click(tabFour);


//////////////////////////// Sign Up ////////////////////////////////
  $("#signup").click(function () {
  $(".pinkbox").css("transform", "translateX(80%)");
  $(".signin").addClass("nodisplay");
  $(".signup").removeClass("nodisplay");
});

$("#signin").click(function () {
  $(".pinkbox").css("transform", "translateX(0%)");
  $(".signup").addClass("nodisplay");
  $(".signin").removeClass("nodisplay");
});

//////////////////////////// Calorie Calc ////////////////////////////////
// The Harris–Benedict equations revised by Mifflin and St Jeor in 1990: 'A new predictive equation for resting energy expenditure in healthy individuals'
// https://codepen.io/Geffrey/pen/MWeNQGo
  $(".calculator input").on("input change", function (event) {
    var parameterName = $(this).attr("id").split("calc-")[1];
    var centimeters = $(this).val();
  
    switch (parameterName) {
      case "height":
        $("#calc-height_value").html("Height: " + centimeters + " cm");
        break;
      case "weight":
        var kg = $(this).val();
        $("#calc-weight_value").html("Weight: " + kg + " kg");
        break;
      case "age":
        $("#calc-age_value").html("Age: " + $(this).val());
        break;
      case "cardio":
        $("#calc-cardio_value").html(
          "Cardio: " + $(this).val() + " hours per week"
        );
        break;
      case "walking":
        $("#calc-walking_value").html(
          "Walking: " + $(this).val() + " hours per week"
        );
        break;
    }
  
    var height = parseInt($("#calc-height").val(), 10);
    var age = parseInt($("#calc-age").val(), 10);
    var weight = parseInt($("#calc-weight").val(), 10);
    var walking = parseInt($("#calc-walking").val(), 10);
    var cardio = parseInt($("#calc-cardio").val(), 10);
    var gender = $(".calculator input[name='gender']:checked").val();
  
    var bmr =
      parseInt(10 * weight + 6.25 * height - 5 * age, 10) +
      (gender === "male" ? 5 : -161);
    bmr = bmr * 1.2;
    bmr += (walking * 60 * ((0.03 * weight * 1) / 0.45)) / 7;
    bmr += (cardio * 60 * ((0.07 * weight * 1) / 0.45)) / 7;
    bmr = Math.floor(bmr);
  
    var targetGainWeight = Math.round((bmr + 300) / 100) * 100;
    var targetMaintain = Math.round(bmr / 100) * 100;
    var targetLoseWeight = Math.round((bmr - 500) / 100) * 100;
  
    $("#calc-target-gain span").html(targetGainWeight + " calories");
    $("#calc-target-maintain span").html(targetMaintain + " calories");
    $("#calc-target-lose span").html(targetLoseWeight + " calories");
  });





