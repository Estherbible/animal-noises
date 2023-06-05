
function start(){
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fqkmDhWd3/model.json",modelready)
}

function modelready(){
  console.log("model is ready");
  classifier.classify(gotresult)
}
function gotresult(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
    r = Math.floor(Math.random() * 255) + 1
    g = Math.floor(Math.random() * 255) + 1
    b = Math.floor(Math.random() * 255) + 1
    document.getElementById("label").innerHTML = "i can hear " + result[0].label
    document.getElementById("accuracy").innerHTML = "confidence " + (result[0].confidence * 100).toFixed(2) + "%"
    document.getElementById("label").style.color = "rgb(" + r + "," + g + "," + b + ")"
    document.getElementById("accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")"
    console.log("rgb(" + r + "," + g + "," + b + ")");
    img1=document.getElementById("picture");
    
    if (result[0].label=="dog") {
      img1.src="dog.png"

    } else if(result[0].label=="cat"){
      img1.src="cat.png"

    } else if(result[0].label=="Background Noise"){
      img1.src="ear.jpg"
      
    }
  }
}