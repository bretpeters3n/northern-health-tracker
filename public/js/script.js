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