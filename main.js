function dino(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    x=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jvnY8Z4-o/model.json', modelloaded);
}
function modelloaded(){
    x.classify(gotresults);
}
function gotresults(error,results){
if(error){
console.log(error);
}
else{
    console.log(results);
}
}