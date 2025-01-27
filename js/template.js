// if (window.location.hostname === 'zw2375.github.io') {
//     document.querySelector('base').setAttribute('href', '/Novia-s-Portfolio/');
// } else {
//     document.querySelector('base').setAttribute('href', '/');
// }
if(document.getElementById("back-icon")){
    document.getElementById("back-icon").addEventListener("click",()=>{
        window.location.href = "../projects/work.html";
    })
}

if(document.getElementById('open-btn')){
    document.getElementById('open-btn').addEventListener('click', function() {
        document.getElementById('video-popup').classList.remove('hidden');
         // Stop the vision-video
         const visionVideo = document.getElementById('vision-video');
         if (visionVideo) {
             visionVideo.pause(); // Pause the video
             visionVideo.currentTime = 0; // Reset the video
         }
 
         // Display the replay button
         const replayButton = document.getElementById('replayButton');
         if (replayButton) {
             replayButton.style.display = 'inline-block';
         }
    });
}

if(document.getElementById('close-btn')){
    document.getElementById('close-btn').addEventListener('click', function() {
        console.log("clicked")
        document.getElementById('video-popup').classList.add('hidden');
    });
}
