var Beat = function(){

  this.kickURL = './sounds/kick.wav';
  this.snareURL = './sounds/snare.wav';
  this.hihatURL = './sounds/hihat.wav';

  this.kick = new Tone.Player({
    "url": this.kickURL,
    "retrigger": true,
    "volume": -14
  }).toMaster();

  this.snare = new Tone.Player({
    "url": this.snareURL,
    "retrigger": true,
    "volume": -15
  }).toMaster();

  this.hihat = new Tone.Player({
    "url": this.hihatURL,
    "retrigger": true,
    "volume": -35
  }).toMaster();
}

Beat.prototype.start = function(when){
  when = when || this.kick.now();
  
  var bassPattern = 0;
  var loop = new Tone.Loop(function(time){
    debugger;
    // this.kick.start(time);
    // this.kick.start(time + 0.75);
    // this.kick.start(time + 3);

    var bassMath = Math.floor(Math.random() * 4);

    while (bassPattern == bassMath){
      bassMath = Math.floor(Math.random() * 4);
    }
    bassPattern = bassMath;

    switch (bassPattern){
      case 0:
        this.kick.start(time);
        this.kick.start(time + 2.25);
        this.kick.start(time + 2.75);
        break;
      case 1:
        this.kick.start(time);
        break;
      case 2:
        this.kick.start(time);
        this.kick.start(time + 1);
        break;
      case 3:
        this.kick.start(time);
        this.kick.start(time + 0.75);
        break;
    }

    this.snare.start(time + 1.5);
    for (var i = 0; i < 6; i++){
      this.hihat.start(time + i * 0.5);  
    }
    
  }, 3).start(when);
}

Beat.prototype.fadeIn = function(time){
  this.kick.volume.rampTo(-14, time);
  this.snare.volume.rampTo(-15, time);
  this.hihat.volume.rampTo(-35, time);
}