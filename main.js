video = "";

function preload(){
    video = createCapture(VIDEO);
    video.size(275, 275);
    video.hide();
}

function setup(){
    canvas = createCanvas(275, 275);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 275, 275);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("!Model Loaded!");

    status = true;
}