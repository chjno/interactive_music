console.log('windows');

var exclamationURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Exclamation.wav';
var logonURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Logon%20Sound.wav';
var logoffURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Logoff%20Sound.wav';

var hardwareInURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Hardware%20Insert.wav';
var hardwareOutURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Hardware%20Remove.wav';
var hardwareFailURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Hardware%20Fail.wav';

var dingURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Ding.wav';
var balloonURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Balloon.wav';
var recycleURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Recycle.wav';
var startURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Start.wav';

var criticalStopURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Critical%20Stop.wav';
var batteryLowURL = 'https://dl.dropboxusercontent.com/u/1177096/windows_xp_sounds/Windows%20XP%20Battery%20Low.wav';

var start = new Tone.Player({
  "url": startURL,
  "retrigger": true
}).toMaster();

var batteryLow = new Tone.Player({
  "url": batteryLowURL,
  "retrigger": true
}).toMaster();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request);
    if (request.click) {
      if (request.type == 'a') {
        start.start();
      } else {
        ding.start();
      }
    } else if (request.keyCode == 32 || request.keyCode == 13) {
      fart.start();
    } else if (request.keyCode >= 65 && request.keyCode <= 90) {
      if (request.shiftKey) {
        snort.start();
      } else {
        burp.start();
      };
    } else if (request.keyCode != 16) {
      whistle.start();
    };
  });