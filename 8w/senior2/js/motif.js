var Motif = function(){

  this.notes = ['A3', 'B3', 'C#4', 'D4', 'E4', 'F#4', 'G4'];
  
  this.noteLengths = [0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.24, 0.99, 1.49, 1.49];
  this.lengths = [];

  this.genLengths = function(){
    var lengthSum = 0;
    this.lengths = [];
    while (lengthSum != 12) {
      var lengthIndex = Math.floor(Math.random() * this.noteLengths.length);
      var length = this.noteLengths[lengthIndex];
      while (lengthSum + length > 12) {
        lengthIndex = Math.floor(Math.random() * this.noteLengths.length)
        length = this.noteLengths[lengthIndex];
      };
      this.lengths.push(length);
      lengthSum += length + 0.01;
    };
  };
  this.genLengths();

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
      "release": 0.015,
    },
    "volume": -70
  }).toMaster();

};

Motif.prototype.setProbabilities = function(oneProb, twoProb, threeProb){
  if (oneProb + twoProb + threeProb == 1){
    this.probabilities = {
      oneStep: oneProb,
      twoStep: twoProb,
      threeStep: threeProb
    };
  } else {
    alert('Probabilities must add up to 1');
  }
};

Motif.prototype.start = function(when){
  when = when || this.synth.now();
  var startTime = 0;
  for (i = 0; i < this.lengths.length; i++) {
    var note = this.notes[this.noteIndex];
    if (i > 0) {
      startTime += this.lengths[i - 1] + 0.01;
    }
    this.synth.triggerAttackRelease(note, this.lengths[i], when + startTime);

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
  this.genLengths();
  return 12 + when;
};