let trace1 = {
    x: [80, 85, 90, 84, 87, 88, 84, 80, 75, 60, 50, 50],
    y: [500, 600, 560, 680, 480, 589, 400, 750, 804, 300],
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Temperature vs Yield (in thousand tons)'
};

Plotly.newPlot('plotArea', [trace1]);
