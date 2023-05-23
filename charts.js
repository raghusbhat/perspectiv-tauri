import Chart from 'chart.js/auto';

const refresh_btn = document.getElementById('refresh_btn');

new Chart(barChart, {
    type: 'bar',
    data: {
      labels: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

const doughnutChart = document.getElementById('doughnutChart');

new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: [ 
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'Perspectiv Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
    },
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
}
    );