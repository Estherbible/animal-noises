// https://teachablemachine.withgoogle.com/models/pPYomPuLC/model.json
function start(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/pPYomPuLC/model.json",modelready)
}

function modelready(){
  console.log("model is ready");
  classifier.classify(gotresult)
}
function gotresult(error,result){
console.log(result);
}