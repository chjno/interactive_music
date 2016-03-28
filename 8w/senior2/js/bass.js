var bass = new Tone.SimpleSynth({
  "oscillator": {
    "type": "triangle"
  },
  "envelope": {
    "attack": 0.01,
    "decay": 0,
    "sustain": 1,
    "release": 0.015
  },
  "volume": -55
});

var bassVol = new Tone.Volume(-4);
bass.chain(bassVol, Tone.Master);

var bassNotes = ['G1', 'D1', 'F#1', 'A1', 'G1', 'D1', 'F#1', 'G1'];
var bassIndex = 0;
var bassStart = false;
var motifStart = false;
var bassLoop = new Tone.Loop(function(time) {
  if (bassStart && bassIndex % 2 == 0){
    bassIndex = 0;
    bass.volume.value = -5;
    bassStart = false;
  }

  if (motifStart && bassIndex % 4 == 0){
    motif.synth.volume.value = -20;
  }


  bass.triggerAttackRelease(bassNotes[bassIndex], 1.49, time);
  bassIndex++;
  if (bassIndex > bassNotes.length - 1) {
    bassIndex = 0;
  };
}, 1.5).start(0);

// Tone.Transport.start();