document.addEventListener("DOMContentLoaded", function () {
  // Example data for charts
  const gastosData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Gastos",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const economiasData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Economias",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const investimentosData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Investimentos",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        data: [18, 48, 77, 9, 100, 27, 40],
      },
    ],
  };

  // Initialize charts
  const gastosCtx = document.getElementById("gastosChart").getContext("2d");
  new Chart(gastosCtx, {
    type: "line",
    data: gastosData,
    options: {},
  });

  const economiasCtx = document.getElementById("economiasChart").getContext("2d");
  new Chart(economiasCtx, {
    type: "line",
    data: economiasData,
    options: {},
  });

  const investimentosCtx = document.getElementById("investimentosChart").getContext("2d");
  new Chart(investimentosCtx, {
    type: "line",
    data: investimentosData,
    options: {},
  });
});
