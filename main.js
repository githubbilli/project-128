music_1 = "";
music_2 = "";

right_wrist_x = 0;
right_wrist_y = 0;

left_wrist_x = 0;
left_wrist_y = 0;

function preload() {
    music_1 = loadSound("music.mp3");
    music_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video.createCapture(VIDEO);
    video.hide();
    poseNet = ml5.posenet(video,modelloaded);
    poseNet.on('pose', gotPoses);
}

function gotposes(results) {
    if (results.length > 0){
        console.log(results);
        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("right wrist x = " + right_wrist_x + "right wrist y = " + right_wrist_y);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("left wrist x = " + left_wrist_x + "left wrist y = " + left_wrist_y);
    }
}

function modelloaded() {
    console.log("posenet is working");
}

function draw() {
    image(video,0,0,600,500);
}