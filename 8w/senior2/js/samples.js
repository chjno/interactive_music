var kickURL = './sounds/kick.wav';
var snareURL = './sounds/snare.wav';
var hihatURL = './sounds/hihat.wav';

var kick = new Tone.Player({
  "url": kickURL,
  "retrigger": true,
  "volume": -64
}).toMaster();

var snare = new Tone.Player({
  "url": snareURL,
  "retrigger": true,
  "volume": -65
}).toMaster();

var hihat = new Tone.Player({
  "url": hihatURL,
  "retrigger": true,
  "volume": -85
}).toMaster();

var bassPattern;
var beatLoop = new Tone.Loop(function(time){

  // kick.start(time);
  // kick.start(time + 0.75);
  // kick.start(time + 3);

  var bassMath = Math.floor(Math.random() * 4);


  while (bassPattern == bassMath){
    bassMath = Math.floor(Math.random() * 4);
  }
  bassPattern = bassMath;

  switch (bassPattern){
    case 0:
      kick.start(time);
      kick.start(time + 2.25);
      kick.start(time + 2.75);
      break;
    case 1:
      kick.start(time);
      break;
    case 2:
      kick.start(time);
      kick.start(time + 1);
      break;
    case 3:
      kick.start(time);
      kick.start(time + 0.75);
      break;
  }

  snare.start(time + 1.5);
  for (var i = 0; i < 6; i++){
    hihat.start(time + i * 0.5);  
  }

}, 3).start(0);

function beatFadeIn(time){
  time = time || 0;
  kick.volume.rampTo(-14, time);
  snare.volume.rampTo(-15, time);
  hihat.volume.rampTo(-35, time);
}

function beatFadeOut(time){
  time = time || 0;
  kick.volume.rampTo(-64, time);
  snare.volume.rampTo(-65, time);
  hihat.volume.rampTo(-85, time);
}




var vinylURL = './sounds/static.wav';

var vinyl = new Tone.Player({
  "url": vinylURL,
  "loop": true,
  "loopStart": 4,
  "retrigger": true,
  "volume": -56
}).toMaster();


// var laserEffect= new Tone.FeedbackDelay(0.8, 0.6).toMaster();
// var laserEffect= new Tone.Feedback(0.125).toMaster();

var laserURL = './sounds/laser.wav';

var laser = new Tone.Player({
  "url": laserURL,
  "retrigger": true
});

// laser.connect(laserEffect);
laser.toMaster();

function laserShot(){
  var counter = 0;
  for (var i = 0; i < 16; i++) {
    var delay = 0 + 0.01 * Math.pow(i, 2);
    Tone.Transport.schedule(function(time){
      if (counter < 8){
        laser.volume.value = -30 + counter * 3;
      } else {
        laser.volume.value = -6 - (counter - 7) * 3;
      }
      counter++;
      laser.start(time);
    }, laser.now() + delay);
  }
}

var puffURL = './sounds/puff.wav';

var puff = new Tone.Player({
  "url": puffURL,
  "volume": -50
}).toMaster();