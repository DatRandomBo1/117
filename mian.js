Webcam.attach('#camera')
camera = document.getElementById("camera");

webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

function take_snapshot()
 {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
 }
 console.log('ml5 version:', ml5.version);

 //initialize the image Classifier method with MobileNet

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

 //when the model is loaded function moedlLoaded()
 {
    console.log('Model Loaded!');
 }

 function check()
 {
    img = document.getElementById('selfie_image');
    classifier.classify(img,gotResult);
 }

 //A function to run when we get any errors and the results function gotResult(error, result) 
 {
    // display error int he console
    if(error){
        console.error(error);
    } else {
        // the results are in the array ordered by the cofidence.
        console.log(results);
        document.getElementById("result_object_name").innerHTML= results[0].label;
        document.getElementById("result_object_accuracy").innerHTML= results[0].confidence.tofixed(3);
    }
 }
