var dataset = [200, 100, 56, 120, 180, 30, 40, 120, 160];

let ancho = 700;
let alto = 400;
let padding = 5;
let anchobarra = (ancho / dataset.length);


let GBarras = d3.select('#barchart')
    .attr("width", ancho)
    .attr("height", alto);


GBarras.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function (d) {
        console.log(alto, d);
        return alto - d;
    })
    .attr("height", function (d) {
        return d;
    })
    .attr("width", anchobarra - padding)
    .attr("transform", function (d, i) {
        let translate = [anchobarra * i, 0]
        return "translate(" + translate + ")";
    })
    .attr("fill", "#0C4B80")


GBarras.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d;
    })
    .attr("y", function (d) {
        return alto - d - 2;
    })
    .attr("x", function (d, i) {
        return (anchobarra * i) + 20;
    })
    .attr("fill", "#A64C38")


