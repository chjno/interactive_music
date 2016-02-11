/*

javascript

weakly typed - don’t have to specify variable type

runs on most devices and not platform specific (mac, pc)

highly distributable - don't need to install packages, everything already exists on people's machines in browser


numbers in js are 64 bit floats

everything is an object

*/

// strings
charAt(n)   // get nth character in string
toFixed(n)  // convert number to float w/ n decimal places?

// arrays
push()    // add to end
pop()     // remove from end
unshift() // add to front
shift()   // remove from front

// object literals / maps / dictionaries
var obj = {
  "key" : 2000,       // don't need quotes
  "key1" : 200000,
  "obj" : "hihi"
}

obj.key
obj["key"]
  => 2000



debugger;
  // stops code from running below where debugger is called
  // allows you to interact with the rest of the code step by step
  // can also add break point in js console

/*

osc.frequency gets updated 44000 times a second
  you have to set osc.frequency.value


attack > decay > sustain (level) > release
  everything is time except for sustain

*/