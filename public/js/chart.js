const ctx = document.getElementById("myChart").getContext("2d");

const myLineChart = new Chart(ctx, {
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
