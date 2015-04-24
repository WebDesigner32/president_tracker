(function(){

var President = function(name, votes) {
  this.name = name;
  this.votes = votes;
}

var omalley = new President("OMalley", 8);
var cruz = new President("Cruz", 1);
var webb = new President("Webb", 2);
var rubio = new President("Rubio", 2);
var clinton = new President("Clinton", 5);
var paul = new President("Paul", 2);

function presChartVotes(pres1votes, pres2votes, pres3votes, pres4votes, pres5votes, pres6votes) {

var data = {
    labels: ["OMalley", "Cruz", "Webb", "Rubio", "Clinton", "Paul"],
    datasets: [
        {
            label: "Candidates",
            fillColor: "rgba(22,57,255,0.5)",
            strokeColor: "rgba(22,57,255,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [pres1votes, pres2votes, pres3votes, pres4votes, pres5votes, pres6votes]
        }
      ]
    };

 var options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

};

var ctx = document.getElementById("presChart").getContext("2d");
var myPresChart = new Chart(ctx).Bar(data,options);
}

   var img1 = $('<img>').attr({
    id: 'imgOne',
    src: "../Images/OMalley.jpg"
   });

   var img2 = $('<img>').attr({
    id: 'imgTwo',
    src: "../Images/Cruz.jpg"
   });

   var img3 = $('<img>').attr({
    id: 'imgThree',
    src: "../Images/Webb.jpg"
   });

   var img4 = $('<img>').attr({
    id: 'imgFour',
    src: "../Images/Rubio.jpg"
   });

   var img5 = $('<img>').attr({
    id: 'imgFive',
    src: "../Images/Clinton.jpg"
   });

   var img6 = $('<img>').attr({
    id: 'imgSix',
    src: "../Images/Paul.jpg"
   });

   var $presDiv = $('#presDiv').empty();
   $presDiv.append(img1, img2, img3, img4, img5, img6);

   $('#imgOne').on('click', function() {
      $(this).css("border", "5px solid yellow");

      omalley.votes++;

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
   $('#imgTwo').on("click", function() {
    $(this).css("border", "5px solid yellow");

      cruz.votes++;

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
   $('#imgThree').on("click", function() {
      $(this).css("border", "5px solid yellow");

      webb.votes++;

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
   $('#imgFour').on("click", function() {
      $(this).css("border", "5px solid yellow");

      rubio.votes++;

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
   $('#imgFive').on("click", function() {
      $(this).css("border", "5px solid yellow");

      clinton.votes++;

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
   $('#imgSix').on("click", function() {
      $(this).css("border", "5px solid yellow");

      paul.votes++;

      presChartVotes(omalley.votes, cruz.votes, webb.votes, rubio.votes, clinton.votes, paul.votes);
   });
}());
