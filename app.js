var ctx = document.getElementById('traffic-chart').getContext('2d');

let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['16-22','23-29', '30-5', '6-12', '13-19', '20-26', '27-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(144, 180, 211)',
            borderColor: 'aqua',
            data: [ 550,1200,1000,2000,1500,1800,1300,1900,2200,1500,2500,]
        }]
    },

    // Configuration options go here
    options: {
    
    }
});

var ctx = document.getElementById('daily-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(144, 180, 211)',
            borderColor: 'aqua',
            data: [80,112,160,120,220,200,85,0 ]
        }]
    },

    // Configuration options go here
    options: trafficOptions
});

var ctx = document.getElementById('mobile-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Desktop','Tablet','Phones'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(144, 180, 211)','blue','green'],
            borderColor: 'aqua',
            data: [80,10,10]
        
        }]
    },

    // Configuration options go here
    options: {
    legend:{
        position:'right',
    }
        
    
    }
}); 


const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>
`

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
  alertBanner.style.display = "none"}
});



  

