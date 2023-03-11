let mobilenet;
let bird;
let speech;
let button;
let classifyResult;


function preload() {
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function setup() {
    createCanvas(640, 480);
    bird = createImg('bird.jpg', imageReady);
    bird.hide();
    background(0);
    speech = new p5.Speech();
    button = createButton('click to calssify');
    button.position(700,500);
    button.mousePressed(modelReady);    
}

function modelReady() {
    console.log('Model is ready!');
    mobilenet.classify(bird, gotResults);    
}

function gotResults(error, results) { 
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let confidence = results[0].confidence;
        let p1 = createP(label);
        let p2 =createP(confidence);
        p1.style('font-size','25px');
        p1.position(10,550);
        p2.style('font-size','25px');
        p2.position (10,600); 
        speech.setLang('sk-SK');
        speech.speak(`This would be ${label}`);
    }
}

function imageReady() {
    console.log('image is ready!');
    image(bird, 0, 0, width, height); 
}

