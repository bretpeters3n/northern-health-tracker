// Calorie chart
const ctx_calorie = document.getElementById("myChart-calorie").getContext("2d");

const myLineChart_calorie = new Chart(ctx_calorie, {
  type: "bar",
  data: {
    labels: ["Average Daily Calories"],
    datasets: [
      {
        label: "You",
        data: [1500],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Everone",
        data: [2000],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0, // minimum will be 0, unless there is a lower value.
            suggestedMax: 3000, // minimum will be 0, unless there is a lower value.
            // OR //
            beginAtZero: true, // minimum value will be 0.
          },
        },
      ],
    },
  },
});

// Steps chart
const ctx_steps = document.getElementById("myChart-steps").getContext("2d");

const myLineChart_steps = new Chart(ctx_steps, {
  type: "bar",
  data: {
    labels: ["Average Daily Steps"],
    datasets: [
      {
        label: "You",
        data: [8000],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Everone",
        data: [10000],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0, // minimum will be 0, unless there is a lower value.
            suggestedMax: 20000, // minimum will be 0, unless there is a lower value.
            // OR //
            beginAtZero: true, // minimum value will be 0.
          },
        },
      ],
    },
  },
});

// Water chart
const ctx_water = document.getElementById("myChart-water").getContext("2d");

const myLineChart_water = new Chart(ctx_water, {
  type: "bar",
  data: {
    labels: ["Average Daily Water (glasses)"],
    datasets: [
      {
        label: "You",
        data: [9],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Everone",
        data: [8],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0, // minimum will be 0, unless there is a lower value.
            suggestedMax: 20, // minimum will be 0, unless there is a lower value.
            // OR //
            beginAtZero: true, // minimum value will be 0.
          },
        },
      ],
    },
  },
});

// Sleep chart
const ctx_sleep = document.getElementById("myChart-sleep").getContext("2d");

const myLineChart_sleep = new Chart(ctx_sleep, {
  type: "bar",
  data: {
    labels: ["Average Daily Sleep (hours)"],
    datasets: [
      {
        label: "You",
        data: [6],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Everone",
        data: [8],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            suggestedMin: 0, // minimum will be 0, unless there is a lower value.
            suggestedMax: 12, // minimum will be 0, unless there is a lower value.
            // OR //
            beginAtZero: true, // minimum value will be 0.
          },
        },
      ],
    },
  },
});
