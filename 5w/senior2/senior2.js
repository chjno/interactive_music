// change note length probabilities

// change effects


var synth = new Tone.SimpleSynth({
  "oscillator": {
    "type": "sine"
  },
  "envelope": {
    "attack": 0.001,
    "decay": 0.1,
    "sustain": 0.1,
    "release": 1.2
  }
}).toMaster();

synth.triggerAttackRelease('g2', '8n');