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

function startTerm(){
  jQuery(function($, undefined) {
    $('#term').terminal(function(command, term) {
      command = command.replace(/ /g, '').toLowerCase();
      switch (command) {
        case 'trees':

          draw(trees, term);
          break;

        case 'stars':
          draw(stars, term);
          break;

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
              term.echo('[[;white;blue]               surrounded by darkness.]');
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
              term.echo("[[;white;blue].]");
            }, 5500);
            setTimeout(function(){
              term.echo("[[;white;blue].]");
            }, 6500);
            setTimeout(function(){
              term.echo("[[;white;blue].]");
              term.echo(' ');
            }, 7500);

            if (!testing){
              pauseTerm(8000, term);
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
              term.echo("[[;white;blue]You can't seem to keep your balance.]");
              term.echo(' ');
            }, 8000);

            if (!testing){
              pauseTerm(10000, term);
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
            }, 4000);
            setTimeout(function(){
              laserShot();
            }, 6000);

            if (!testing){
              pauseTerm(7000, term);
            };
          }

          break;
        case 'close':
          if (state < 7){
            state = 7

            setTimeout(function(){
              puff.volume.rampTo(-4, 6);
              puff.start();
            }, 2000);
            
            // vinyl.volume.rampTo(vinyl.volume.value - 50, 6);
            beatFadeOut(4);
            bass.volume.rampTo(bass.volume.value - 50, 9);
            motif.synth.volume.rampTo(motif.synth.volume.value - 50, 9);

            if (!testing){
              pauseTerm(8000, term);

              // setTimeout(function(){
              //   term.echo('[[;white;blue]if a person falls in the forest and no one is around to hear it...]')
              //   term.echo(' ');
              // }, 3000);
            }

          }
          
          break;
        default:
          // term.echo(' ');
          // term.echo('Please enter a command:');

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
            term.echo(' ');
            term.echo('[[;white;blue]if a person falls in the forest and no one is around to hear it...]')
            term.echo(' ');
            state = 8;
          }
          break;
      }
    }, {
      greetings: '',
      name: 'js_demo',
      height: '100%',
      width: '100%',
      prompt: '> '
    });
  });

  function pauseTerm(delay, term){
    term.pause();
    setTimeout(function(){
      term.resume();
    }, delay);
  };
}