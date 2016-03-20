/*

  Tone.Transport.schedule always needs a when parameter

  it triggers your callback ahead of time so whatever it is you're doing in the callback happens when you scheduled it on the dot

  Transport.start() - transport time starts at 0, and runs relative to the audio context time
  Transport.stop() - if you start it again it starts back at 0

*/

var synth - new Tone.SimpleSynth().toMaster();

function doSomething(when) {
  synth.triggerAttackRelease('C4', '8n', when);
}

Tone.Transport.schedule(doSomething, 1);


/*

  Tone.CtrlPattern

*/

var synth - new Tone.SimpleSynth().toMaster();

var loop = new Tone.Pattern(function(when, what) {
  synth.triggerAttackRelease(what, '8n', when)
}, ['c3', 'c5', 'c4', 'e4'], 'random').start(0);

// loop.interval = 1;

Tone.Transport.start();


/*

  Sequence is like Pattern but subdivides the what

*/

var synth - new Tone.SimpleSynth().toMaster();

var loop = Tone.Sequence(function(when, note) {
  synth.triggerAttackRelease(note, '8n', when)
}, ['c3', ['g3', 'c3', 'c4', 'g2'], null, ['e4', 'g5', ['a5', 'b5']]]).start(0);

// to access an "index" in the sequence "array"
// loop.at(0, 'c6'); 
// loop.at(3).at(2).at(0) == 'a5';

Tone.Transport.start();


/*

  Tone.Part lets you give it midi parts for notes

*/

var synth - new Tone.SimpleSynth().toMaster();

var loop = Tone.Part(function(when, note) {
  synth.triggerAttackRelease('c4', '8n', when)
}, [0, 1, 1.2, 1.5, 2]).start(0);

part.loop = true;
part.loopEnd = 2;

Tone.Transport.start();