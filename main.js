function setup() {
    Canvas = createCanvas(230, 230);
    Canvas.center();
    video = createCapture(VIDEO); 
    video.hide();
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bf1ukEVtK/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded !");
}

function draw() {
    image(video, 0, 0, 230, 230);

    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }  
}