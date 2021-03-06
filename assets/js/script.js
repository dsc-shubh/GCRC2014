$(document).ready(function(){
  var chart = new CanvasJS.Chart("sexChartContainer", {

    title:{
      text: "Number of talk proposals by men / women"
    },
    data: [//array of dataSeries
      { //dataSeries object

       /*** Change type "column" to "bar", "area", "line" or "pie"***/
       type: "column",
       dataPoints: [
       { label: "women", y: 5 },
       { label: "men", y: 67 }
       ]
     }
     ]
   });

  chart.render();

  var country_chart = new CanvasJS.Chart("countryChartContainer", {
    title:{
      text: "Number of talk proposals by country"
    },
    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: [
    {
     indexLabelFontSize: 20,
     indexLabelFontFamily: "Monospace",
     indexLabelFontColor: "darkgrey",
     indexLabelLineColor: "darkgrey",
     indexLabelPlacement: "outside",
     type: "pie",
     showInLegend: true,
     dataPoints: [
     {  y: 1, legendText:"AUS", indexLabel: "Australia" },
     {  y: 3, legendText:"COL", indexLabel: "Colombia" },
     {  y: 1, legendText:"DEN", indexLabel: "Denmark" },
     {  y: 54, legendText:"IND", exploded: true, indexLabel: "India" },
     {  y: 1, legendText:"PHI", indexLabel: "Phillipines" },
     {  y: 3, legendText:"SIN" , indexLabel: "Singapore"},
     {  y: 1, legendText:"UK" , indexLabel: "United Kingdom"},
     {  y: 8, legendText:"USA" , indexLabel: "United States"}
     ]
   }
   ]
 });

  country_chart.render();

  var speaker_count_chart = new CanvasJS.Chart("speakerCountChartContainer", {
    title:{
      text: "Number of speakers per talk proposals"
    },
    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: [
    {
     indexLabelFontSize: 20,
     indexLabelFontFamily: "Monospace",
     indexLabelFontColor: "darkgrey",
     indexLabelLineColor: "darkgrey",
     indexLabelPlacement: "outside",
     type: "pie",
     showInLegend: true,
     dataPoints: [
     {  y: 69, legendText:"1 speaker", indexLabel: "One Speaker" },
     {  y: 3, legendText:"2 speaker", indexLabel: "Two Speakers" }
     ]
   }
   ]
 });

  speaker_count_chart.render();

  var city_chart = new CanvasJS.Chart("cityChartContainer", {
    title:{
      text: "Number of talk proposals by Indian City"
    },
    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: [
    {
     indexLabelFontSize: 20,
     indexLabelFontFamily: "Monospace",
     indexLabelFontColor: "darkgrey",
     indexLabelLineColor: "darkgrey",
     indexLabelPlacement: "outside",
     type: "pie",
     showInLegend: true,
     dataPoints: [
     {  y: 1, legendText:"Ajmer", indexLabel: "Ajmer" },
     {  y: 26, legendText:"BLR", exploded: true, indexLabel: "Bangalore" },
     {  y: 6, legendText:"CHE", indexLabel: "Chennai" },
     {  y: 2, legendText:"Kochi", indexLabel: "Kochi" },
     {  y: 3, legendText:"MUM", indexLabel: "Mumbai" },
     {  y: 1, legendText:"MYS" , indexLabel: "Mysore"},
     {  y: 1, legendText:"NCR" , indexLabel: "New Delhi"},
     {  y: 14, legendText:"Pune" , indexLabel: "Pune"}
     ]
   }
   ]
 });

  city_chart.render();

  var date_chart = new CanvasJS.Chart("dateChartContainer", {

    title:{
      text: "Number of talk proposals by submission date"
    },
    data: [//array of dataSeries
      { //dataSeries object

       /*** Change type "column" to "bar", "area", "line" or "pie"***/
       type: "column",
       dataPoints: [
       { label: "Oct 1", y: 1 },
       { label: "Oct 2", y: 0 },
       { label: "Oct 3", y: 0 },
       { label: "Oct 4", y: 4 },
       { label: "Oct 5", y: 3 },
       { label: "Oct 6", y: 1 },
       { label: "Oct 7", y: 8 },
       { label: "Oct 8", y: 1 },
       { label: "Oct 9", y: 0 },
       { label: "Oct 10", y: 6 },
       { label: "Oct 11", y: 0 },
       { label: "Oct 12", y: 0 },
       { label: "Oct 13", y: 0 },
       { label: "Oct 14", y: 1 },
       { label: "Oct 15", y: 1 },
       { label: "Oct 16", y: 0 },
       { label: "Oct 17", y: 2 },
       { label: "Oct 18", y: 2 },
       { label: "Oct 19", y: 0 },
       { label: "Oct 20", y: 3 },
       { label: "Oct 21", y: 3 },
       { label: "Oct 22", y: 0 },
       { label: "Oct 23", y: 7 },
       { label: "Oct 24", y: 5 },
       { label: "Oct 25", y: 23 }
       ]
     }
     ]
   });

  date_chart.render();


});

/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = '{{ site.disqus_shortname }}'; // required: replace example with your forum shortname

/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();

/* * * DON'T EDIT BELOW THIS LINE * * */
(function () {
    var s = document.createElement('script'); s.async = true;
    s.type = 'text/javascript';
    s.src = '//' + disqus_shortname + '.disqus.com/count.js';
    (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
}());

