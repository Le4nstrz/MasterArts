// Sidebar start

let btn = document.querySelector('#btn'); //der Variabel btn wird der Wert vom Element mir der id btn zugewiesem
let sidebar = document.querySelector('.sidebar'); //der Variabel sidebar wird der Wert vom Element mir der id sidebar zugewiesem

btn.onclick = function () { // funktion, wenn der buttin gedrückt wird 
    sidebar.classList.toggle('active'); //der sidebar wird die klasse active hinzugefügt
};

// Sidebar end


// Palyer 1 start

var playBtn = document.getElementById("playBtn"); // Variable für de button wird erstellt
var symbol = document.getElementById("sybmol");
let temp = 1; // Vatiable um zwischen Play/Pause zu wechseln

var wavesurfer = WaveSurfer.create({ // nues Wavesurfer objekt wird erstellt 
    container: '#waveform',
    waveColor: 'grey',
    progressColor: 'white',
    responsive: true,
    height: 90,
    barHeight: 4,

});

wavesurfer.load('../audio/gunna.mp3');  // audio wird geladen 

playBtn.onclick = function () { // Fukntion, die beim clicken ausgeführt wird
    wavesurfer.playPause();
    changeImage();
}

wavesurfer.on('finish', function () { // Funktion, die ausgeführt wird wenn die audio vorbei ist
    wavesurfer.stop();
    document.getElementById("symbol").src = "../img/play.png"
    temp = 1;
})

function changeImage() { // Fukntion, um das bild zu wechseln
    if(temp == 1){
        document.getElementById("symbol").src = "../img/pause.png"
        temp = 2;
    } else if (temp == 2){
        document.getElementById("symbol").src = "../img/play.png"
        temp = 1;
    }
     
}

// Player 1 end

// Palyer 2 start

var playBtn2 = document.getElementById("playBtn2"); // Variable für de button wird erstellt
var symbol2 = document.getElementById("sybmol2");
let temp2 = 1; // Vatiable um zwischen Play/Pause zu wechseln

var wavesurfer2 = WaveSurfer.create({ // nues Wavesurfer objekt wird erstellt 
    container: '#waveform2',
    waveColor: 'grey',
    progressColor: 'white',
    responsive: true,
    height: 90,
    barHeight: 4,

});

wavesurfer2.load('../audio/inverted-lies.mp3'); // audio wird geladen 

playBtn2.onclick = function () { // Fukntion, die beim clicken ausgeführt wird
    wavesurfer2.playPause();
    changeImage2();
}

wavesurfer2.on('finish', function () { // Funktion, die ausgeführt wird wenn die audio vorbei ist
    wavesurfer2.stop();
    document.getElementById("symbol2").src = "../img/play.png"
    temp2 = 1;
})

function changeImage2() { // Fukntion, um das bild zu wechseln
    if(temp2 == 1){
        document.getElementById("symbol2").src = "../img/pause.png"
        temp2 = 2;
    } else if (temp2 == 2){
        document.getElementById("symbol2").src = "../img/play.png"
        temp2 = 1;
    }
     
}

// Player 2 end

// Palyer 4 start

var playBtn4 = document.getElementById("playBtn4"); // Variable für de button wird erstellt
var symbol4 = document.getElementById("sybmol4");
let temp4 = 1; // Vatiable um zwischen Play/Pause zu wechseln

var wavesurfer4 = WaveSurfer.create({ // nues Wavesurfer objekt wird erstellt 
    container: '#waveform4',
    waveColor: 'grey',
    progressColor: 'white',
    responsive: true,
    height: 90,
    barHeight: 4,

});

wavesurfer4.load('../audio/umka.mp3'); // audio wird geladen 

playBtn4.onclick = function () { // Fukntion, die beim clicken ausgeführt wird
    wavesurfer4.playPause();
    changeImage4();
}

wavesurfer4.on('finish', function () { // Funktion, die ausgeführt wird wenn die audio vorbei ist
    wavesurfer4.stop();
    document.getElementById("symbol4").src = "../img/play.png"
    temp4 = 1;
})

function changeImage4() { // Fukntion, um das bild zu wechseln
    if(temp4 == 1){
        document.getElementById("symbol4").src = "../img/pause.png"
        temp4 = 2;
    } else if (temp4 == 2){
        document.getElementById("symbol4").src = "../img/play.png"
        temp4 = 1;
    }
     
}

// Player 4 end

// Palyer 4 start

var playBtn5 = document.getElementById("playBtn5"); // Variable für de button wird erstellt
var symbol5 = document.getElementById("sybmol5");
let temp5 = 1; // Vatiable um zwischen Play/Pause zu wechseln

var wavesurfer5 = WaveSurfer.create({ // nues Wavesurfer objekt wird erstellt 
    container: '#waveform5',
    waveColor: 'grey',
    progressColor: 'white',
    responsive: true,
    height: 90,
    barHeight: 4,

});

wavesurfer5.load('../audio/dystopia.mp3'); // audio wird geladen 

playBtn5.onclick = function () { // Fukntion, die beim clicken ausgeführt wird
    wavesurfer5.playPause();
    changeImage5();
}

wavesurfer5.on('finish', function () { // Funktion, die ausgeführt wird wenn die audio vorbei ist
    wavesurfer5.stop();
    document.getElementById("symbol5").src = "../img/play.png"
    temp5 = 1;
})

function changeImage5() { // Fukntion, um das bild zu wechseln
    if(temp5 == 1){
        document.getElementById("symbol5").src = "../img/pause.png"
        temp5 = 2;
    } else if (temp5 == 2){
        document.getElementById("symbol5").src = "../img/play.png"
        temp5 = 1;
    }
     
}

// Player 5 end