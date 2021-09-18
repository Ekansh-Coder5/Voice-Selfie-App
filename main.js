SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById('textbox').innerHTML = "";
    recognition.start();
}
recognition.onresult = function run (event){
    console.log(event);
    

    var Context = event.results[0][0].transcript
    document.getElementById('textbox').innerHTML = Context
    console.log(Context)
    if(Context == "Take my selfie.") {
        console.log('Taking your selfie :D');
        Speak();
}}

function Speak() {
    synth = window.speechSynthesis;
    speak_data = "Taking you selfie D"
    utterThis = new SpeechSynthesisUtterance(speak_data);

   synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function() {
    take_snapshot();
    save();
    },1000);

}

camera = document.getElementById('camera');
Webcam.set( {
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
});

function take_snapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById('selfie').innerHTML = '<img id="take_selfie" src="'+data_uri+'"/>';
})
}

function save() {
    image=document.getElementById('take_selfie').src;
    link=document.getElementById('download');
    link.href=image;
    link.click();
}