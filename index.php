<html>
</body>
<head>
<title></title>
<script src="RGraph/libraries/RGraph.common.core.js"></script>
<script src="RGraph/libraries/RGraph.common.csv.js"></script>
<script src="RGraph/libraries/RGraph.line.js"></script>
</head>
<canvas id="cvs" width="5000" height="2050">
    [No canvas support]
</canvas>
<script>
    // Create a new CSV connector object passing it the URL of the CSV file and a
    // function that creates the chart. Due to AJAX restrictions the URL must be
    // relative to the current website/domain.
    new RGraph.CSV('https://api.covid19india.org/csv/latest/case_time_series.csv', function (csv)
    {
        // Fetch the third column from the CSV file (the numbering is zero-indexed)
        var labels = csv.col(1,428);
        var data = csv.col(2,428);
       var r = labels.splice(0,6);

console.log(data)
console.log(labels)
 console.log(r)
        // Create the Line chart and give it the data that we just got from the
        // CSV file along with some hard-coded X axis labels.
        var line = new RGraph.Line({
            id: 'cvs',
            data: data,
            options: {
                xaxisLabels: ["1-6 April","7-12 April","13-18 April","19-24 April","25-30 April"],
                shadow: false,
                backgroundGridBorder: true,
                backgroundGridVlines: true,
                xaxis: false,
                yaxis: false,
                marginLeft: 100,
                tickmarksStyle: 'endcircle',
               
            }
        }).draw().responsive([
            {maxWidth: null, width:1500,height:800, options: {xaxisLabelsAngle: 0,textSize: 12},css: {marginBottom: 0,cssFloat: 'left'}},
            {maxWidth: 1800,width: 800,height: 300,options: {xaxisLabelsAngle: 45,textSize: 1},css: {marginBottom: '35px',cssFloat: 'none'}}
        ]);
    });
</script>
</body>
</html>
