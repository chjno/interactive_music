var Motif = function(){

  this.notes = ['A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G4'];
  
  this.noteLengths = [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 1, 1.5, 1.5];

  this.noteIndex = Math.floor(Math.random() * this.notes.length);

  this.probabilities = {
    oneStep: 0.5,
    twoStep: 0.3,
    threeStep: 0.2
  };

  this.synth = new Tone.SimpleSynth({
    "oscillator": {
      "type": "triangle"
    },
    "envelope": {
      "attack": 0.01,
      "decay": 0.02,
      "sustain": 0.7,
      "release": 0.02,
    }
  }).toMaster();

};

Motif.prototype.updateProbabilities = function(oneProb, twoProb, threeProb){
  this.probabilities = {
    oneStep: oneProb,
    twoStep: twoProb,
    threeStep: threeProb
  };
};

Motif.prototype.nextNote = function(){
  if (Math.random() < this.probabilities.oneStep / 2) {
    this.noteIndex--;
    this.noteIndex = Math.max(this.noteIndex, 0);
  } else if (Math.random() < this.probabilities.oneStep) {
    this.noteIndex++;
    this.noteIndex = Math.min(this.noteIndex, this.notes.length - 1);
  } else if (Math.random() < this.probabilities.oneStep + this.probabilities.twoStep / 2) {
    this.noteIndex -= 2;
    this.noteIndex = Math.max(this.noteIndex, 0);
  } else if (Math.random() < this.probabilities.oneStep + this.probabilities.twoStep) {
    this.noteIndex += 2;
    this.noteIndex = Math.min(this.noteIndex, this.notes.length - 1);
  } else if (Math.random() < this.probabilities.oneStep + this.probabilities.twoStep + this.probabilities.threeStep / 2) {
    this.noteIndex -= 3;
    this.noteIndex = Math.max(this.noteIndex, 0);
  } else {
    this.noteIndex += 3;
    this.noteIndex = Math.min(this.noteIndex, this.notes.length - 1);
  }
};

Motif.prototype.start = function(when){
  when = when || this.synth.now();
  var startTime = 0;
  for (i = 0; i < this.noteLengths.length; i++) {
    var note = this.notes[this.noteIndex];
    if (i != 0) {
      startTime += this.noteLengths[i - 1];
    }
    this.synth.triggerAttackRelease(note, this.noteLengths[i], when + startTime);
    this.nextNote();
  };
  return 6 + when;
};