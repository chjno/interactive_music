var rainURL = 'https://dl.dropboxusercontent.com/u/1177096/4w/rain.mp3';

var rain = new Tone.Player({
  "url": rainURL,
  "loop": true,
  "loopStart": 4,
  "loopEnd": 54,
  "autostart": true,
  "volume": -20
}).toMaster();

function rampRain() {
  var rampTime = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  if (rain.volume.value < -19) {
    rain.volume.rampTo(0, rampTime);
  } else if (rain.volume.value > -1) {
    rain.volume.rampTo(-20, rampTime);
  }

  var pauseTime = rampTime * 2 - (rampTime / 2);
  setTimeout(function() {
    rampRain();
  }, pauseTime * 1000);
};
rampRain();

var bassNotes = ['G2', 'D2', 'F#2', 'A2', 'G2', 'D2', 'F#2', 'G2'];
var notes = ['A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G4'];
var noteLengths = [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 1, 1.5, 1.5];

var bassIndex = 0;
var lengthSum = 0;
var lengths = [];

genLengths();
var loop = new Tone.Loop(function(time) {
  var index = Math.floor(Math.random() * bassNotes.length);

  bass.triggerAttackRelease(bassNotes[bassIndex], 1.5);
  bassIndex++;
  if (bassIndex > bassNotes.length - 1) {
    bassIndex = 0;
  };

  var now = synth.now();
  var startTime = 0;
  for (i = 0; i < lengths.length; i++) {
    var note = notes[noteIndex];
    if (i == 0) {
      synth.triggerAttackRelease(note, lengths[i]);
    } else {
      startTime += lengths[i - 1];
      synth.triggerAttackRelease(note, lengths[i], now + startTime);
    };
    nextNote();
  };
  genLengths();
}, 1.5).start(0);

Tone.Transport.start();

var bass = new Tone.SimpleSynth({
  "oscillator": {
    "type": "triangle"
  },
  "envelope": {
    "attack": 0.3,
    "decay": 0.2,
    "sustain": 0.7,
    "release": 1
  }
});

var synth = new Tone.SimpleSynth({
  "oscillator": {
    "type": "triangle"
  },
  "envelope": {
    "attack": 0.01,
    "decay": 0.02,
    "sustain": 0.7,
    "release": 0.02,
  }
});

var bassVol = new Tone.Volume(-4);
bass.chain(bassVol, Tone.Master);

var synthVol = new Tone.Volume(-6);
synth.chain(synthVol, Tone.Master);

var mouseY = 0;
var deltaY = 0;

$(document).mousemove(function(event){
  // console.log(event);

  deltaY = event.clientY - mouseY;
  if (deltaY > 5 && deltaY <= 10){
    console.log('> 5');
  } else if (deltaY > 10 && deltaY <= 20){
    console.log('> 10');
  }
  mouseY = event.clientY;

});

var noteIndex = Math.floor(Math.random() * notes.length);

function nextNote() {
  if (deltaY == 0) {
    if (Math.random() < 0.5) {
      noteIndex--;
      noteIndex = Math.max(noteIndex, 0);
    } else {
      noteIndex++;
      noteIndex = Math.min(noteIndex, notes.length - 1);
    }
  } else if (deltaY > -5 && deltaY < 0) {
    noteIndex++;
    noteIndex = Math.min(noteIndex, notes.length - 1);
  } else if (deltaY > 0 && deltaY <= 5) {
    noteIndex--;
    noteIndex = Math.max(noteIndex, 0);
  } else if (deltaY > -20 && deltaY <= -5) {
    noteIndex += 2;
    noteIndex = Math.min(noteIndex, notes.length - 1);
  } else if (deltaY > 5 && deltaY <= 20) {
    noteIndex -= 2;
    noteIndex = Math.max(noteIndex, 0);
  } else if (deltaY <= -20) {
    noteIndex += 3;
    noteIndex = Math.min(noteIndex, notes.length - 1);
  } else if (deltaY > 20) {
    noteIndex -= 3;
    noteIndex = Math.max(noteIndex, 0);
  }
}

function genLengths() {
  lengthSum = 0;
  lengths = [];
  while (lengthSum != 1.5) {
    var lengthIndex = Math.floor(Math.random() * noteLengths.length);
    var length = noteLengths[lengthIndex];
    while (lengthSum + length > 1.5) {
      lengthIndex = Math.floor(Math.random() * noteLengths.length)
      length = noteLengths[lengthIndex];
    };
    lengths.push(length);
    lengthSum += length;
  };
}
