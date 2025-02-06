const intro = document.querySelector(".drawings");
// generate the earth
const earthCanvas = document.getElementById('earth-canvas')
const rc = rough.svg(earthCanvas);
const earthBase = rc.path('M460,230c0,127.025-102.975,230-230,230S0,357.025,0,230S102.975,0,230,0S460,102.975,460,230z',{ 
    fill: '#457B9D',
    roughness: 6,
    fillWeight:5,
    strokeWidth: 4
});
const earthLand = rc.path(`M460,230c0,36.088-8.32,70.229-23.133,100.625h-38.381c-6.187,0-11.681-3.959-13.637-9.829l-37.966-113.897c-1.206-3.617-3.799-6.607-7.209-8.312l-15.478-7.739
c-4.87-2.435-7.946-7.413-7.946-12.857V164.08c0-3.812,1.515-7.469,4.21-10.165l34.704-34.704c2.696-2.696,6.352-4.21,10.165-4.21
h42.661c5.445,0,10.422,3.076,12.857,7.946l6.429,12.858c2.435,4.87,7.413,7.946,12.857,7.946h3.13
C454.047,170.387,460,199.496,460,230z M244.375,230v11.842c0,1.675-0.293,3.338-0.865,4.913l-53.194,146.283
c-2.066,5.681-7.465,9.462-13.51,9.462h-8.32c-6.187,0-11.681-3.959-13.637-9.829l-37.966-113.897
c-1.206-3.617-3.799-6.607-7.209-8.312l-15.478-7.739c-4.87-2.435-7.946-7.413-7.946-12.857V192.83
c0-3.813-1.515-7.469-4.21-10.165L60.315,160.94c-1.842-1.842-4.151-3.149-6.678-3.781l-38.404-9.601
C45.977,67.521,120.163,9.037,208.923,0.971l19.559,39.119c0.998,1.996,1.518,4.197,1.518,6.429v2.92
c0,5.008-2.606,9.655-6.879,12.266L211.348,68.9c-3.128,1.912-5.408,4.947-6.373,8.484l-15.211,55.775
c-1.706,6.254-7.386,10.593-13.868,10.593h-0.699c-1.782,0-3.549-0.331-5.21-0.977l-34.451-13.398v0.001l-26.069,21.469
c-5.173,4.261-6.716,11.531-3.719,17.525l5.28,10.559c2.435,4.87,7.413,7.946,12.857,7.946h25.356
c5.445,0,10.422,3.076,12.857,7.946l6.429,12.858c2.435,4.87,7.413,7.946,12.857,7.946H230
C237.939,215.625,244.375,222.061,244.375,230z M397.012,71.875h-45.73c-3.85,0-7.37,2.175-9.091,5.619l-8.756,17.512
c-1.722,3.444-5.241,5.619-9.091,5.619h-26.678c-5.614,0-10.165-4.551-10.165-10.165V71.875v-4.21
c0-5.614,4.551-10.165,10.165-10.165c2.696,0,5.281-1.071,7.188-2.977l8.421-8.421c1.906-1.906,2.977-4.492,2.977-7.187V16.736
C347.049,29.204,374.534,48.141,397.012,71.875z`,{
    fill: '#57CC99',
    roughness: 2,
    fillStyle:'solid',
    strokeWidth: 4
});
const earthGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
earthGroup.appendChild(earthBase);
earthGroup.appendChild(earthLand);
earthCanvas.appendChild(earthGroup).setAttribute("id","earth");
// Animation for earth
let angle = 0;
function rotateSVG() {
    angle = (angle + 0.2) % 360; 
    earthGroup.setAttribute("transform", `rotate(${angle}, 230, 230)`);
    requestAnimationFrame(rotateSVG); 
}
rotateSVG();

// generate stars
const starsCanvas = document.getElementById('stars-canvas')
const rcStars = rough.svg(starsCanvas);

// const triangleBg = rcStars.polygon([[100, 130], [190, 40], [210, 240]],{
//     fill: '#000cff',
//     fillStyle:"cross-hatch",
//     roughness: 4,
//     fillWeight:5,
//     strokeWidth: 4
// });
// const circle1Bg  = rcStars.circle(190,200,30,{
//     fill: '#000CFF',
//     fillStyle:"solid",
//     stroke: '#000CFF',
//     roughness: 5,
//     fillWeight:5,
//     strokeWidth: 4
// });
// const circle2Bg  = rcStars.circle(90,300,70,{
//     fill: '#000CFF',
//     fillStyle:"solid",
//     stroke: '#000CFF',
//     roughness: 7,
//     fillWeight:5,
//     strokeWidth: 4
// });
// const circle3Bg  = rcStars.circle(50,70,90,{
//     fill: '#000CFF',
//     fillStyle:"solid",
//     stroke: '#000CFF',
//     roughness: 7,
//     fillWeight:5,
//     strokeWidth: 4
// });
// starsCanvas.appendChild(triangleBg);
// starsCanvas.appendChild(circle1Bg);
// starsCanvas.appendChild(circle2Bg);
// starsCanvas.appendChild(circle3Bg);
const starsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
starsGroup.setAttribute("id", "starsGroup");
starsCanvas.appendChild(starsGroup);
// helper function to generate text shown next to the star
function createTooltip(starId, tooltipText,cx,cy) {
    const star = document.getElementById(starId);
    let tooltipVisible = false;
    // Create a tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tags';
    tooltip.textContent = tooltipText;
    intro.appendChild(tooltip);
    // Function to toggle the tooltip visibility
    function toggleTooltip(event) {
        tooltipVisible = !tooltipVisible;
        if (tooltipVisible) {
            // const starRect = star.getBoundingClientRect();
            // const introRect = document.querySelector.getBoundingClientRect();
            // const x = event.pageX;
            // const y = event.pageY;
            tooltip.style.left = `${cx+75 }px`; 
            tooltip.style.top = `${cy -5 }px`;  
            tooltip.style.display = 'block';   
        } else {
            tooltip.style.display = 'none'; 
        }
    }
    // Add click event listener to the star to toggle tooltip
    star.addEventListener('click', toggleTooltip);
}

function generateStarPoints(cx, cy, spikes, outerRadius, innerRadius) {
    let points = [];
    let angle = Math.PI / spikes;
    for (let i = 0; i < 2 * spikes; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const x = cx + Math.cos(i * angle) * radius;
        const y = cy + Math.sin(i * angle) * radius;
        points.push([x, y]);
    }
    return points;
}
function drawStar(cx, cy, spikes, outerRadius, innerRadius, options = {},id,tagtxt) {
    const starPoints = generateStarPoints(cx, cy, spikes, outerRadius, innerRadius);
    var curStar = rcStars.polygon(starPoints, options);
    curStar.setAttribute("id",id)
    curStar.style.cursor = "pointer";
    curStar.style.zIndex = "40";
    starsGroup.appendChild(curStar);
    createTooltip(id,tagtxt,cx,cy);
}
drawStar(20, 150, 5, 20, 10, { fill: '#FFBC42', roughness: 1, stroke: '#FFBC42', strokeWidth: 4, fillStyle: 'solid'},"interactive","Interaction Design");
drawStar(530, 200, 5, 30, 10, { fill: '#FFBC42', roughness: 1, stroke: '#FFBC42', strokeWidth: 4, fillStyle: 'solid'},"web","Web Development");
drawStar(450, 50, 5, 25, 10, { fill: '#FFBC42', roughness: 1, stroke: '#FFBC42', strokeWidth: 4, fillStyle: 'solid'},"software","Software Engineering");


// switching between novia walking pictures
var curImg = 0;
function switchImg(){
    curImg = (curImg+1)%3; // 0 1 2 3
    const imgItem = document.getElementById("walking-novia");
    if(curImg == 1 ){
        imgItem.src = "materials/novia-walking2.png";
    }else if(curImg == 0){
        imgItem.src = "materials/novia-walking1.png";
    }else{
        imgItem.src = "materials/novia-walking3.png";
    }
}
setInterval(switchImg,500);

const lineCanvas = document.getElementById("line-canvas");
const rcLine = rough.svg(lineCanvas);
const landLine = rcLine.line(0,10,740,10,{
    roughness: 3, 
    stroke: 'black', 
    strokeWidth: 5,
})
lineCanvas.appendChild(landLine);
// draggable dec
// dragElement(document.getElementById("dec2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}