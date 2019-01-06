var soundA, soundB, soundC, soundD, soundE, soundF, soundG, soundH, soundI, soundJ, soundK, soundL, soundM, soundN,
    soundO, soundP, soundQ, soundR, soundS, soundT, soundU, soundV, soundW, soundX, soundY, soundZ;

var soundAAmp, soundBAmp, soundCAmp, soundDAmp, soundEAmp, soundFAmp, soundGAmp, soundHAmp, soundIAmp, soundJAmp,
    soundKAmp, soundLAmp, soundMAmp, soundNAmp,
    soundOAmp, soundPAmp, soundQAmp, soundRAmp, soundSAmp, soundTAmp, soundUAmp, soundVAmp, soundWAmp, soundXAmp,
    soundYAmp, soundZAmp;

var soundAFFT, soundBFFT, soundCFFT, soundDFFT, soundEFFT, soundFFFT, soundGFFT, soundHFFT, soundIFFT, soundJFFT,
    soundKFFT, soundLFFT, soundMFFT, soundNFFT,
    soundOFFT, soundPFFT, soundQFFT, soundRFFT, soundSFFT, soundTFFT, soundUFFT, soundVFFT, soundWFFT, soundXFFT,
    soundYFFT, soundZFFT;


var nrj1, x, y;

var b1 = false,
    b2 = false,
    b3 = false,
    b4 = false;
//FFT fréquence du son
//Amp son
function preload() {
    soundA = loadSound("asstes/Kaisa2.mp3");//fait//
    soundB = loadSound("asstes/Kaisa3.mp3");//fait//
    soundC = loadSound("asstes/Kaisa4.mp3");//fait//
    soundD = loadSound("asstes/Sona4.mp3");
    soundE = loadSound("asstes/Kaisa6.mp3");
    soundF = loadSound("asstes/Kaisa7.mp3");
    soundG = loadSound("asstes/Kaisa8.mp3");
    soundH = loadSound("asstes/Kaisa9.mp3");
    soundI = loadSound("asstes/Ahri1.mp3");
    soundJ = loadSound("asstes/Ahri2.mp3");
    soundK = loadSound("asstes/Ahri3.mp3");
    soundL = loadSound("asstes/Ahri4.mp3");
    soundM = loadSound("asstes/Ahri5.mp3");
    soundN = loadSound("asstes/Kaisa1.mp3");//fait//
    soundO = loadSound("asstes/Evelyn1.mp3");
    soundP = loadSound("asstes/Evelyn2.mp3");
    soundQ = loadSound("asstes/Evelyn3.mp3");
    soundR = loadSound("asstes/Evelyn4.mp3");
    soundS = loadSound("asstes/Kaisa5.mp3");
    soundT = loadSound("asstes/Evelyn5.mp3");
    soundU = loadSound("asstes/Evelyn6.mp3");
    soundV = loadSound("asstes/Evelyn7.mp3");
    soundW = loadSound("asstes/Ahri6.mp3");
    soundX = loadSound("asstes/Sona1.mp3");
    soundY = loadSound("asstes/Sona2.mp3");
    soundZ = loadSound("asstes/Sona3.mp3");
    
    
}


function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    //soundA.loop();//
    soundAFFT = new p5.FFT(0.8, 16);
    soundAFFT.setInput(soundA);
    
    soundCFFT = new p5.FFT(0.8, 16);
    soundCFFT.setInput(soundC);
    
    soundWAmp = new p5.Amplitude();
    soundWAmp.setInput(soundW);

    soundEFFT = new p5.FFT(0.8, 16);
    soundEFFT.setInput(soundE);

    soundNFFT = new p5.FFT(0.8, 16);
    soundNFFT.setInput(soundN);
    
    soundUFFT = new p5.FFT(0.8, 16);
    soundUFFT.setInput(soundU);
    background(0);

    
    

}

function draw() {
    // put drawing code here
    background(0);


    playSound(soundA, 65); //a
    if (soundA.isPlaying()) {

        push();
        soundAFFT.analyze();
        var temp = 0;

        if (soundA.currentTime() < 1.290) {
            nrj1 = soundAFFT.getEnergy("bass");

            var radius = map(soundA.currentTime(), 0, soundA.duration(), 50, min(width, height));
            fill(255, 220, 0);
            ellipse(width * 0.5, height * 0.5, radius / 1.7 + 2 * nrj1, radius / 1.7 + 2 * nrj1);
            temp = radius;
        } else {
            var radius = map((soundA.duration() - soundA.currentTime()), 0, soundA.duration(), temp, min(width, height));
            fill(255, 220, 0);
            ellipse(width * 0.5, height * 0.5, radius, radius);
        }
        pop();


    }

    playSound(soundB, 66);
    if (soundB.isPlaying() == true) {

        push();

        var rotation = map(soundB.currentTime(), 0, soundB.duration(), 0, PI);


        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(255, 180, 180);
        rect(0, 0, width * 0.5, width * 0.05);
        pop();
    }


    playSound(soundC, 67);
    if (soundC.isPlaying() == true) {
        
        push();
        
        soundCFFT.analyze();
    rectMode(CENTER);
    var nrj1 = soundCFFT.getEnergy("bass")
      
            
        stroke(225)
        var r1 = 200;
        var r2 = 300;
        fill(0, 200, 255, nrj1)
        beginShape()

        for (var i = 0; i < TWO_PI; i += PI / 2) {

            var xpos = width * 0.5 + r1 * cos(i)
            var ypos = height * 0.5 + r2 * sin(i)

            vertex(xpos, ypos)

        }
        endShape()
        
        pop()
    }
    


playSound(soundD,68); //TODO
 if(soundD.isPlaying()){
     
     
     
 }

playSound(soundE, 69); //e
if (soundE.isPlaying()) {
    push()
    soundEFFT.analyze();
    rectMode(CENTER);

    nrj1 = soundEFFT.getEnergy("bass");

    push()
    fill(0, 0, 255, nrj1)
    translate(width * 0.25, height * 0.5)
    rotate(PI / 4)
    rect(0, 0, width * 0.2, width * 0.2)
    pop()

    push()
    fill(58, 142, 186, 50)
    translate(width * 0.5, height * 0.5)
    rotate(PI / 4)
    rect(0, 0, nrj1, nrj1)
    pop()

    push()
    fill(44, 117, 255, nrj1)
    translate(width * 0.75, height * 0.5)
    rotate(PI / 4)
    rect(0, 0, width * 0.2, width * 0.2)
    pop()


    pop()
}

playSound(soundF,70);
 if(soundF.isPlaying()){ //TODO
     
     

 }

    playSound(soundG,71);
 if(soundG.isPlaying()){ //TODO

 }

 playSound(soundH,72);
 if(soundH.isPlaying()){ //TODO

 }

 playSound(soundI,73);
 if(soundI.isPlaying()){ //TODO

 }

 playSound(soundJ,74);
 if(soundJ.isPlaying()){ //TODO

 }

 playSound(soundK,75);
 if(soundK.isPlaying()){//TODO

 }

 playSound(soundL,76);
 if(soundL.isPlaying()){//TODO

 }

 playSound(soundM,77);
 if(soundM.isPlaying()){//TODO

 }

playSound(soundN, 78); //n
if (soundN.isPlaying()) {
    push()

    if (soundN.currentTime() > 0.05 && soundN.currentTime() < 0.80) {
        fill(255, 255, 0);
        x = 0.25 * width + (soundN.currentTime() - 0.05) * width * 0.6;
        y = height * 0.3;
        ellipse(x, y, 50, 50);

    } else if (soundN.currentTime() > 0.8 && soundN.currentTime() < 1.5) {

        fill(255, 255, 0);
        ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)


        x = 0.25 * width + (soundN.currentTime() - 0.8) * width * 0.6;
        y = height * 0.42;
        ellipse(x, y, 50, 50);

    } else if (soundN.currentTime() > 1.55 && soundN.currentTime() < 2.25) {
        fill(255, 255, 0);
        ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)
        ellipse(0.25 * width + width * 0.6, height * 0.42, 50, 50)

        fill(255, 255, 0);
        x = 0.25 * width + (soundN.currentTime() - 1.55) * width * 0.6;
        y = height * 0.54;
        ellipse(x, y, 50, 50);

    } else if (soundN.currentTime() > 2.3 && soundN.currentTime() < 3) {
        fill(255, 255, 0);
        ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)
        ellipse(0.25 * width + width * 0.6, height * 0.42, 50, 50)
        ellipse(0.25 * width + width * 0.6, height * 0.54, 50, 50)

        fill(255, 255, 0);
        x = 0.25 * width + (soundN.currentTime() - 2.3) * width * 0.6;
        y = height * 0.66;
        ellipse(x, y, 50, 50);
    } else if (soundN.currentTime() > 3.05 && soundN.currentTime() < 4.1) {
        soundNFFT.analyze();
        nrj1 = soundNFFT.getEnergy("bass");
        fill(255, 255, 0);
        ellipse(0.25 * width + width * 0.6, height * 0.3, 50, 50)
        ellipse(0.25 * width + width * 0.6, height * 0.42, 50, 50)
        ellipse(0.25 * width + width * 0.6, height * 0.54, 50, 50)
        ellipse(0.25 * width + width * 0.6, height * 0.66, 50, 50)
    }


    pop()
}

 playSound(soundO,79);
 if(soundO.isPlaying()){//TODO

}

 playSound(soundP,80);
 if(soundP.isPlaying()){//TODO

 }

 playSound(soundQ,81);
 if(soundQ.isPlaying()){//TODO

 }

 playSound(soundR,82);
 if(soundR.isPlaying()){
 push();

        var rotation = map(soundR.currentTime(), 0, soundR.duration(), 0, 2*PI);


        translate(width * 0.5, height * 0.5);
        rotate(rotation);

        fill(255, 180, 180);

    arc(0, 0, width * 0.5,  width * 0.5,-HALF_PI, HALF_PI);
    

    pop();
}

 

playSound(soundS, 83); //s
if (soundS.isPlaying()) {
    push();
    var rotation = map(soundS.currentTime(), 0, soundS.duration(), 0, PI);
    translate(width * 0.5, height * 0.5);
    rotate(rotation);
    rectMode(CENTER);
    fill(255, 180, 180);
    rect(0, 0, width * 0.5, width * 0.1);


    pop();
}

 playSound(soundT,84);
 if(soundT.isPlaying()){ //TODO

 }

 playSound(soundU,85);
 if(soundU.isPlaying() == true){
     
    push()
    var waveform = soundUFFT.waveform();
     noFill();
    beginShape();
    stroke(150, 255, 225); // waveform is mint
    strokeWeight(10);
    for (var i = 0; i < waveform.length; i++) {
        var x = map(i, 0, waveform.length, 0, width);
        var y = map(waveform[i], -1, 1, 0, height);
        curveVertex(x, y);
    }
    endShape();
     
    pop()
}

 

playSound(soundV,86);
 if(soundV.isPlaying()){//TODO

 }

playSound(soundW, 87); //w
if (soundW.isPlaying()) {

    push();
    var lvl = soundWAmp.getLevel();
    var whitelvl = map(lvl, 0, 1, 0, 255);
    noStroke;
    fill(whitelvl);
    rect(0, 0, width, height);
    console.log(lvl);

    pop();
}

 playSound(soundX,88);
 if(soundX.isPlaying()){//TODO

 }

playSound(soundY,89);
if(soundY.isPlaying()){//TODO

 }

 playSound(soundZ,90);
if (soundZ.isPlaying() == true) {
    push()
    var rotation = map(soundZ.currentTime(), 0, soundZ.duration(), 0, 2*PI)    
    rectMode(CENTER);
    translate(width * 0.5, height * 0.5);
    rotate(rotation);
                                
    fill(255, 180, 180);
    ellipse(0, 0, width * 0.3, width * 0.3);
    fill(20, 180, 180);
    var coefX = 1;
    var coefY = 1;
    if(soundZ.currentTime < soundZ.duration /4 ) {
            coefX = -1;
            coefY = -1;

    }
    else if(soundZ.currentTime < soundZ.duration / 2) {
                    coefX = -1;
    }
    
    else if(soundZ.currentTime < (3 * soundZ.duration /4) ){

    }
    else {
            coefY = -1;

    }
    
    
    var x = coefX * (width * 0.11);
    var y = coefY * (width * 0.11);
    console.log(" x vaut : " + x + "   y vaut : "+ y + " width    "+ width );
    ellipse(x,y,width * 0.05,width * 0.05);
    pop();
}


}

function playSound(sound, keyId) {
    if (keyIsDown(keyId) == true) {
        if (sound.isPlaying() == false) {
            sound.play();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
