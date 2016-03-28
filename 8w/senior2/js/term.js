var state = 0;
var testing = false;

function draw(img, term) {
  var index = 0;
  for (var i = 0; i < img.length; i++) {
    var delay = 0 + i * 50;
    setTimeout(function() {
      term.echo(img[index]);
      index++;
    }, delay);
  }
}

function pauseTerm(delay, term){
  term.pause();
  setTimeout(function(){
    term.resume();
  }, delay);
};

function startTerm(){
  jQuery(function($, undefined) {
    $('#term').terminal(function(command, term) {
      command = command.replace(/ /g, '').toLowerCase();
      switch (command) {

        case 'cometo':
          if (state < 1){
            state = 1;

            vinyl.start();
            vinyl.volume.rampTo(-6,10);
            setTimeout(function(){
              term.echo('[[;white;blue]You wake up in a cold sweat]');
              term.echo(' ');
            }, 2000);
            setTimeout(function(){
              term.echo('[[;white;black]               ][[;white;blue]surrounded by darkness.]');
              term.echo(' ');
            }, 5000);

            if (!testing){
              pauseTerm(9000, term);
            }
          };

          break;
        case 'getup':
          if (state < 2){
            state = 2


            setTimeout(function(){
              draw(trees, term);
            }, 1500);
            setTimeout(function(){
              term.echo("[[;white;blue]You're in the woods.]");
              // term.echo(' ');
            }, 4500);
            setTimeout(function(){
              term.echo('[[;white;blue].]');
            }, 6000);
            setTimeout(function(){
              term.echo('[[;white;blue].]');
            }, 7000);
            setTimeout(function(){
              term.echo('[[;white;blue].]');
              term.echo(' ');
            }, 8000);
            setTimeout(function(){
              term.echo("[[;white;blue]?]");
              term.echo(' ');
            }, 9500);

            if (!testing){
              pauseTerm(10500, term);
            }
          };

          break;

        case 'walk':
          if (state < 3){
            state = 3;

            term.echo('[[;white;blue]How did you get here?]');
            term.echo(' ');

            beatFadeIn(20);

            if (!testing){
              pauseTerm(10000, term);
            }
          };

          break;

        case 'godeeper':
          if (state < 4){
            state = 4;

            setTimeout(function(){
                bassStart = true;
              }, 1000);
            setTimeout(function(){
              term.echo('[[;white;blue]Where are you going?]');
              term.echo(' ');
            }, 6000);

            if (!testing){
              pauseTerm(9000, term);
            }
          };

          break;

        case 'lookaround':
          if (state < 5){
            state = 5;

            motifStart = true;
            setTimeout(function(){
              term.echo("[[;white;blue]It's dark]");
              term.echo(' ');
            }, 7000);

            setTimeout(function(){
              term.echo("[[;white;black]   ][[;white;blue]...and you can't seem to keep your balance.]");
              term.echo(' ');
            }, 11000);

            if (!testing){
              pauseTerm(13000, term);
            };
          }
          break;

        case 'lookup':
          if (state < 6){
            state = 6;

            draw(stars, term);
            setTimeout(function(){
              term.echo('[[;white;blue]The stars look strange tonight.]');
              term.echo(' ');
            }, 5000);
            // setTimeout(function(){
            //   laserShot();
            // }, 1500);
            setTimeout(function(){
              rain.volume.rampTo(-5, 15);
            }, 1000);

            if (!testing){
              pauseTerm(7000, term);
            };
          }

          break;
        case 'close':
          if (state < 7){
            state = 7

            term.echo(' ');
            setTimeout(function(){
              puff.volume.rampTo(-4, 6);
              puff.start();
            }, 2000);
            
            // vinyl.volume.rampTo(vinyl.volume.value - 50, 6);
            beatFadeOut(4);
            bass.volume.rampTo(bass.volume.value - 50, 9);
            motif.synth.volume.rampTo(motif.synth.volume.value - 50, 9);

            if (!testing){
              pauseTerm(11000, term);

              // setTimeout(function(){
              //   term.echo('[[;white;blue]if a person falls in the forest and no one is around to hear it...]')
              //   term.echo(' ');
              // }, 3000);
            }

          }
          
          break;
        default:
          if (state == 0){
            term.echo(' ');
            term.echo('[[;green;black]come to] -- open your eyes');
            term.echo(' ');
          } else if (state == 1){
            term.echo(' ');
            term.echo('[[;green;black]get up] -- stand up and look around');
            term.echo(' ');
          } else if (state == 2){
            term.echo(' ');
            term.echo('[[;green;black]walk] -- start walking');
            term.echo(' ');
          } else if (state == 3){
            term.echo(' ');
            term.echo('[[;green;black]go deeper] -- wander into the depths of the forest');
            term.echo(' ');
          } else if (state == 4){
            term.echo(' ');
            term.echo('[[;green;black]look around] -- search for clues, signs of life... anything');
            term.echo(' ');
          } else if (state == 5){
            term.echo(' ');
            term.echo('[[;green;black]look up] -- maybe the sky has some answers');
            term.echo(' ');
          } else if (state == 6){
            term.echo(' ');
            term.echo('[[;green;black]close] -- close your eyes and take a deep breath');
            term.echo(' ');
          } else if (state == 7){

            if (!testing){
              term.pause();
              term.freeze(true);
            };

            setTimeout(function(){
              term.echo(' ');
              term.echo('[[;white;blue]if a person falls in the forest]');
              term.echo(' ');
            }, 1500);
            setTimeout(function(){
              term.echo('[[;white;black]                 ][[;white;blue]and no one is around to hear it]');
            }, 3000);
            setTimeout(function(){
              term.echo('[[;white;black]                                                   ][[;white;blue].]');
            }, 5000);
            setTimeout(function(){
              term.echo('[[;white;black]                                                        ][[;white;blue].]');
            }, 6000);
            setTimeout(function(){
              term.echo('[[;white;black]                                                             ][[;white;blue].]');
              term.echo(' ');
              term.echo(' ');
              term.echo(' ');
              term.echo(' ');
              term.echo(' ');
            }, 7000);
            setTimeout(function(){
              term.echo('[[;yellow;black]Music adapted from ][[!;;;;https://open.spotify.com/track/7GZkTGmxvBOMXjBsMxgKvz]"...And The Forest Began To Sing"][[;yellow;black] by Royksopp]');
            }, 10000);
            state = 8;
          }
          break;
      }
    }, {
      greetings: '',
      name: 'js_demo',
      height: '100%',
      width: '100%',
      prompt: '> ',
      convertLinks: false
    });
  });
}