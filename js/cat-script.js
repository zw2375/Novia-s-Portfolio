/*
    Create Annotation diagram
*/

const interactCanvas = document.getElementById("robot-cat-interact");
const rcInteract  = rough.svg(interactCanvas);
const bellyLine1 = rcInteract.line(250,450,260,600,{
    stroke: '#6b6b6b',
    roughness: 3,
    strokeWidth: 3
});

const bellyLine2 = rcInteract.line(260,600,400,600,{
    stroke: '#6b6b6b',
    roughness: 3,
    strokeWidth: 3
});

const bellyCircle = rcInteract.circle(250,450,40,{
    stroke: '#617EFF',
    roughness: 2,
    fillWeight:5,
    strokeWidth: 4,
    fill:'rgba(97, 126, 255,0.8)',
    fillStyle:"solid"
});

const bubbleLine1 = rcInteract.line(470,520,470,570,{
    stroke: '#6b6b6b',
    roughness: 2,
    strokeWidth: 3
});

const bubbleLine2 = rcInteract.line(470,570,500,570,{
    stroke: '#6b6b6b',
    roughness: 3,
    strokeWidth: 3
});

const bubbleCircle = rcInteract.circle(460,490,70,{
    stroke: '#617EFF',
    roughness: 2,
    fillWeight:5,
    strokeWidth: 4,
    fill:'rgba(97, 126, 255,0.5)',
    fillStyle:"solid"
});

const ledCircle = rcInteract.circle(370,180,30,{
    stroke: '#617EFF',
    roughness: 2,
    fillWeight:5,
    strokeWidth: 4,
    fill:'rgba(97, 126, 255,0.5)',
    fillStyle:"solid"
});

const ledFrame = rcInteract.rectangle(530, 70, 370, 250, {
    strokeWidth: 3,
    roughness: 2,
  });

const ledLine1 = rcInteract.line(370,180,430,110,{
    stroke: '#6b6b6b',
    roughness: 2,
    strokeWidth: 3
});

const ledLine2 = rcInteract.line(430,110,530,110,{
    stroke: '#6b6b6b',
    roughness: 2,
    strokeWidth: 3
});

const bellyText = document.createElementNS("http://www.w3.org/2000/svg", "text");
bellyText.setAttribute("x", 410); 
bellyText.setAttribute("y", 605);
bellyText.textContent = "Hover to pet its belly";

const boubleText = document.createElementNS("http://www.w3.org/2000/svg", "text");
boubleText.setAttribute("x", 500); 
boubleText.setAttribute("y", 570);
boubleText.textContent = "Hover to help adding bubble soap";

const componentText = document.createElementNS("http://www.w3.org/2000/svg", "text");
componentText.setAttribute("x", 550); 
componentText.setAttribute("y", 100);
componentText.setAttribute("font-size", "24px");
componentText.textContent = "LED Panel Display";

const indicationText = document.createElementNS("http://www.w3.org/2000/svg", "text");
indicationText.setAttribute("x", 550); 
indicationText.setAttribute("y", 260);
indicationText.textContent = "Indication:";
indicationText.setAttribute("id","indication-text");

const emotionText = document.createElementNS("http://www.w3.org/2000/svg", "text");
emotionText.setAttribute("x", 550); 
emotionText.setAttribute("y", 290);
emotionText.textContent = "I am feeling unhappy, can you pet me?";
emotionText.setAttribute("id","emotion-text");

const emotionImg = document.createElementNS("http://www.w3.org/2000/svg", "image");
emotionImg.setAttributeNS(null, "href", "/materials/sad-face.png"); 
emotionImg.setAttributeNS(null, "x", "660"); 
emotionImg.setAttributeNS(null, "y", "130");
emotionImg.setAttributeNS(null, "width", "100px"); 
emotionImg.setAttributeNS(null, "height", "100px"); 
emotionImg.setAttribute("id","emotion-indicator");

bellyText.style.fontSize = "18px";
bellyText.style.fill = "black";
boubleText.style.fontSize = "18px";
boubleText.style.fill = "black";
interactCanvas.appendChild(bellyText);
interactCanvas.appendChild(boubleText);
interactCanvas.appendChild(bellyLine1);
interactCanvas.appendChild(bellyLine2);
interactCanvas.appendChild(bellyCircle);
interactCanvas.appendChild(bubbleLine1);
interactCanvas.appendChild(bubbleLine2);
interactCanvas.appendChild(bubbleCircle);
interactCanvas.appendChild(ledLine1);
interactCanvas.appendChild(ledLine2);
interactCanvas.appendChild(ledCircle);
interactCanvas.appendChild(ledFrame);
interactCanvas.appendChild(emotionImg);
interactCanvas.appendChild(emotionText);
interactCanvas.appendChild(componentText);
interactCanvas.appendChild(indicationText);

bellyCircle.setAttribute("id","bellyCircle");
bubbleCircle.setAttribute("id","bubbleCircle");

/*
    Transition between interactions
*/
let emotionStatus = 'unhappy';

/*
 belly circle interaction 
*/

bellyCircle.addEventListener('mouseenter', () => {
    if(emotionStatus==='unhappy'){
        const bellyCircle = document.getElementById("bellyCircle");
        bellyCircle.setAttribute('opacity', '0.5'); 
        bellyCircle.style.cursor = "grab";
        oscillateEyebrows(); 
    }else{
        bellyCircle.style.cursor = "not-allowed";
    }
});

bellyCircle.addEventListener('mouseout', () => {
    const bellyCircle = document.getElementById("bellyCircle");
    if(emotionStatus=='unhappy'){
        bellyCircle.setAttribute('opacity', '0.8');
        setTimeout(()=>{
            emotionStatus = 'happy';
            displayEmotion(emotionStatus);
            setTimeout(()=>{
                emotionStatus = 'bubble';
                displayEmotion('bubble')
            },4000); 
        },2000);
        
    }
});

/*
 bubble circle interaction 
*/
bubbleCircle.addEventListener('mouseenter', () => {
    const bubbleCircle = document.getElementById("bubbleCircle");
    if(emotionStatus=='bubble'){
        bubbleCircle.setAttribute('opacity', '0.5'); 
        showBubbles(); 
        emotionStatus = 'happy';
        bubbleCircle.style.cursor ="url('/materials/soap.cur'), auto";
    }else{
        bubbleCircle.style.cursor = "not-allowed";
    }
});
bubbleCircle.addEventListener('mouseout', () => {
    const bubbleCircle = document.getElementById("bubbleCircle");
    if(emotionStatus=='happy'){
        bubbleCircle.setAttribute('opacity', '0.8');
        setTimeout(()=>{
            displayEmotion(emotionStatus);
            setTimeout(()=>{
                emotionStatus = 'unhappy';
                displayEmotion(emotionStatus);
            },10000);
        },5000);
    }
});


function displayEmotion(emotionStatus){
    var imgSrc;
    var txtContent;
    switch (emotionStatus){
        case "unhappy":
            imgSrc = '/materials/sad-face.png';
            txtContent = "I am feeling unhappy, can you pet me?";
            break;
        case "happy":
            imgSrc = '/materials/happy-face.png';
            txtContent = "Hehehe, thank you!!";
            break;
        case "bubble":
            imgSrc = '/materials/bubble.png';
            txtContent = "Now I wanna blow some bubbles";
            break;
    }
    document.getElementById("emotion-indicator").setAttributeNS(null, "href", imgSrc); ;
    document.getElementById("emotion-text").textContent = txtContent;
}

function showBubbles(){
    const bubblesCanvas = document.getElementById("digital-cat-face");
    const bubbleInteract  = rough.svg(bubblesCanvas);
    const bubble1 = bubbleInteract.circle(310,420,20,{
        stroke: '#61D5FF',
        roughness: 2,
        fillWeight:5,
        strokeWidth: 5
    });
    const bubble2 = bubbleInteract.circle(350,370,30,{
        stroke: '#61D5FF',
        roughness: 2,
        fillWeight:5,
        strokeWidth: 5
    });
    const bubble3 = bubbleInteract.circle(400,360,40,{
        stroke: '#61D5FF',
        roughness: 2,
        fillWeight:5,
        strokeWidth: 5
    });
    
    function animateBubble(bubbles) {
        function makeBubblesAppear() {
            bubbles.forEach((bubble, index) => {
                setTimeout(() => {
                    bubblesCanvas.appendChild(bubble); // Add bubble to canvas
                    bubble.style.opacity = 0; // Initially hidden
                    bubble.style.transition = "opacity 0.5s"; // Smooth fade
                    bubble.style.opacity = 1; // Fade in
                }, index * 500); // Staggered appearance
            });
        }

        function makeBubblesDisappear() {
            bubbles.forEach(bubble => {
                bubble.style.opacity = 0; // Fade out all bubbles
            });
        }
        makeBubblesAppear();
        setTimeout(() => {
            makeBubblesDisappear();

            // Reappear all bubbles after 1 second of disappearance
            setTimeout(() => {
                makeBubblesAppear();
                setTimeout(() => {
                    makeBubblesDisappear();
                }, 2000);
            }, 1000); 
        }, 2000);

    }
    animateBubble([bubble1, bubble2, bubble3]);
}

function oscillateEyebrows() {
    const eyebrow1 = document.getElementById("eyebrow1");
    const eyebrow2 = document.getElementById("eyebrow2");

    let eyebrowMoveCount = 0; // Counter for animation iterations
    const maxEyebrowMoveCounts = 4; // Number of times the animation should repeat
    let time = 0; // Time variable to create oscillation

    function animate() {
    if (eyebrowMoveCount < maxEyebrowMoveCounts) {
        time += 0.07;

        const angle1 = Math.sin(time) * 30;
        const angle2 = - Math.sin(time) * 30;

        eyebrow1.setAttribute('transform', `rotate(${angle1}, 190, 212)`);
        eyebrow2.setAttribute('transform', `rotate(${angle2}, 338, 212)`);

        if (Math.sin(time) < 0 && Math.sin(time - 0.05) >= 0) {
            eyebrowMoveCount++;
        }
        requestAnimationFrame(animate);
    } 
    // else {
        
    // }
}
    animate();
}
