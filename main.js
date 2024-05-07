function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lDApFfZGl/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    } 
    else{
        console.log(results);

        r=Math.floor(Math.random()*255) + 1;
        g=Math.floor(Math.random()*255) + 1;
        b=Math.floor(Math.random()*255) + 1;

        document.getElementById("label").innerHTML="I can hear-" + results[0].label;

        document.getElementById("label").style.color="rgb("+r+", "+g+" , "+b+")";

        img1=document.getElementById("ear");
        if(results[0].label=="barking"){
            img1.src="img_dog.jpg";
        }
        else if(results[0].label=="mooing"){
            img1.src="img_cow.png";
        }
        else if(results[0].label=="meowing"){
            img1.src="img_cat.png";
        }
        else if(results[0].label="roar"){
            img1.src="img_lion.png";
        }
        else{
            img1.src="img_ear.png";
        }

    }
}
