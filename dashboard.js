// dashboard.js

// Dummy data
const labels = ['January', 'February', 'March', 'April', 'May'];
const data = [12, 19, 3, 5, 2];

// Get the canvas element
const ctx = document.getElementById('myChart').getContext('2d');

// Create a bar chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Users',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
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
