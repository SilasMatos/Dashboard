var ctx1 = document.getElementById('chart1').getContext('2d')
var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: data1,
  options: options
})

var ctx2 = document.getElementById('chart2').getContext('2d')
var myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: data2,
  options: options
})

var ctx3 = document.getElementById('chart3').getContext('2d')
var myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: data3,
  options: options
})

var ctx4 = document.getElementById('chart4').getContext('2d')
var myChart4 = new Chart(ctx4, {
  type: 'line',
  data: data4,
  options: options
})
var data1 = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [
    {
      label: 'Vendas',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
}

var data2 = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2],
      backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
    }
  ]
}

var data3 = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [
    {
      label: 'Pontuação',
      data: [65, 59, 90, 81, 56],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }
  ]
}

var data4 = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'Temperature (°C)',
      data: [23, 25, 22, 27, 24],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
  ]
}

// Configurações comuns para todos os gráficos
var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
