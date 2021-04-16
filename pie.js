
let data = [
    { "OS": "Android", "percentage": 40.11 },
    { "OS": "Windows", "percentage": 36.69 },
    { "OS": "iOS", "percentage": 13.06 }
];

let pieAncho = 500
let pieAlto = 500
let radio = 220;
let PIE = d3.select('#piechart')
    .attr("width", pieAncho)
    .attr("height", pieAlto);


//FORMAS EN SVG
let g = PIE.append("g")
    .attr("transform", "translate(" + radio + "," + radio + ")");


//DEFINIENDO LA ESCALA DE COLORES
let color = d3.scaleOrdinal(d3.schemeDark2);


//CREANDO EL PIE O EL CIRCULO
let pie = d3.pie().value(function (d) {
    return d.percentage;
});

//CREANDO UN ARCO    
var arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");



//CREANDO FORMA DIBUJAR EL ARCO
var shape = d3.arc()
    .outerRadius(radio)
    .innerRadius(0);


//DIBUJAR EL ARCOO    
arc.append("path")
    .attr("d", shape)
    .attr("fill", function (d) { return color(d.data.percentage); });



var label = d3.arc()
    .outerRadius(radio)
    .innerRadius(0);

arc.append("text")
    .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function (d) { return d.data.platform + ":" + d.data.percentage + "%"; });




