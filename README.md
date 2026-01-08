# NoC Web MIDI JS

This JavaScript library provides MIDI CC and NRPN data for controlling 
the Novation Circuit groovebox.

The MIDI CC and NRPN info contained here comes from the official
["Circuit Programmer’s Reference Guide"][1].

[1]: https://fael-downloads-prod.focusrite.com/customer/prod/downloads/Circuit%20Programmer's%20Reference%20Guide%201.3_2.pdf

Visit the [NoC Web MIDI JS website](https://noc-webmidi.com) for more info,
and to try the 
[Novation Circuit MIDI CC patch editor](https://noc-webmidi.com/sample-app).

## Installation
For standard use in web pages:

  * Use the "Clone or Download" button from the Github repo to obtain a local copy
  of the library.

  * Add the '/dist/js/noc-webmidi.min.js' script to your html page:

  `<script src="/dist/js/noc-webmidi.min.js" type="text/javascript"></script>`

For use with Node.js

  * `npm install --save noc-webmidi`

  * require 'noc-webmidi in your code': `var circuitMidiApp = require('noc-webmidi');`

## What is it?
The library contains a global JavaScript object named __circuitMidiApp__ that includes
the following:

* __circuitMidiApp.midiChannels__  
    This Object's keys/values correspond to the Circuit's&trade; MIDI channels
    and the matching MIDI components:  
    ** In WebMidi, midi channels are zero-indexed (midi channel 1 = WebMidi channel 0)

    `{  
      0: "synth 1",  
      1: "synth 2",  
      9: "drum",  
      15: "session"  
    }`

* __circuitMidiApp.midiCCs__

    This Object contains all of the Circuit's&trade; MIDI CC data, broken down
by component type:

    (Synth, Drum, Session) > CC number > CC attributes.

    Printing the object shows that each key is a Circuit&trade; midi component type:  
    `{  
      drum: Object,  
      session: Object,  
      synth: Object  
     }`  

     Inside a midi component type, the object keys are MIDI CC numbers:  
     `synth: {  
       3: Object,  
       5: Object,  
       9: Object,  
       13: Object,  
       ... etc. (too many to list, but you get the idea)  
     }`

     The MIDI CC objects contain MIDI CC attributes:  
     `3: {  
       default: 2,  
       name: "Polyphony Mode",  
       range: [0,2],  
       rangeValues: ["Mono","Mono AG","Poly"]  
     }`

* __circuitMidiApp.midiNRPNs__

    This Object contains MIDI NRPN data for advanced parameters (e.g., LFOs, envelopes, Mod Matrix, Macro Knobs), broken down by component type.

    `synth: {  
      '0:0': { name: 'Envelope 2 Velocity', range: [0,127], default: 64 },  
      '0:1': { name: 'Envelope 2 Attack', range: [0,127], default: 2 },  
      '1:0': { name: 'Mod Matrix 1 Source 1', range: [0,17], default: 0 },  
      '3:35': { name: 'Macro Knob 1 Source 1', range: [0,17], default: 0 },  
      ...  
    }`

* __circuitMidiApp.midiComponents__
    This is a JavaScript Map of all the Circuit&trade; MIDI CC info:  
    `[  
    0: {"synth 1": Map},  
    1: {"synth 2": Map},  
    2: {"drum 1": Map},  
    3: {"drum 2": Map},  
    4: {"drum 3": Map},  
    5: {"drum 4": Map},  
    6: {"session": Map}  
    ]`

    `key: "synth 1",  
    value: [  
    0: "voice",  
    1: "osc 1",  
    2: "osc 2",  
    3: "mixer",  
    4: "filter",  
    5: "envelope",  
    6: "effects",  
    7: "macro"  
    ]`

    `key: "voice",  
    value: [  
    0: {  
       cc: 3,    
       name: "Polyphony Mode",    
       range: ["Mono","Mono AG","Poly"]  
    }]
    `
* __circuitMidiApp.getCircuitMidiCC()__  
    This is a helper function that takes 2 parameters -
    _MIDI channel number and MIDI CC number_ -
    and it returns the MIDI CC value object associated with those parameters.

    For example:  
    `circuitMidiApp.getCircuitMidiCC(1,108);`  
    The above function call sends parameters 1 (midi channels are zero-indexed,
    so 1 corresponds to midi channel 2) and 108 (midi cc number). The return value
    is the MIDI CC object for 'synth env 1 velocity':  

    `{
      default: 64,  
      name: "env 1 velocity",  
      range: [0,127],  
      rangeValues:[-64,63]  
    }`  

* __circuitMidiApp.getCircuitMidiNRPN()__  
    This is a helper function that takes 2 parameters -
    _NRPN bank number and NRPN LSB number_ -
    and it returns the MIDI NRPN value object associated with those parameters.

    For example:  
    `circuitMidiApp.getCircuitMidiNRPN(0,0);`  
    The above function call sends parameters 0 (bank) and 0 (lsb) and returns
    the MIDI NRPN object for 'Envelope 2 Velocity':  

    `{
      name: "Envelope 2 Velocity",  
      range: [0,127],  
      default: 64  
    }`  

    Another example:  
    `circuitMidiApp.getCircuitMidiNRPN(1,0);`  
    Returns the MIDI NRPN object for 'Mod Matrix 1 Source 1':  

    `{
      name: "Mod Matrix 1 Source 1",  
      range: [0,17],  
      default: 0  
    }`  

## Sample code
If you're still not sure what's this is useful for, there's a sample project in
the `/sample-app` folder. The file `sample_code.js` contains code for a
simple Circuit MIDI CC and NRPN editor. To run the sample:

1. Start a local HTTP server in the project root (e.g., using Python: `python3 -m http.server 8000`).
2. Open `http://localhost:8000/sample-app/index.html` in your web browser.

The sample app provides controls for both MIDI CC and NRPN parameters, organized by type (synth 1 & 2, drum 1-4, session and mixer).

Requirements to run the sample code:
  * A Novation Circuit&trade; + USB cable.
  * A computer running a modern web browser (e.g., Google Chrome), connected to the Novation Circuit&trade;
  via USB cable.
  * A local HTTP server to serve the files (due to browser security restrictions on `file://` URLs).

## How to Contribute
If you find an error or see a way to improve, I recommend opening an issue to let me know.
Some things may be easy fixes/improvements.

If you want to work on the code:

* Fork the repo to your own Github account.
* Clone your forked repo to your local computer.
* Find you local copy in Terminal (these steps require Node.js):
  * Run 'npm install'.
  * Run 'npm run watch' for development (auto-rebuilds browser bundle on changes).
* Development files are in '/src/js'.
* Run 'npm run build' to build both browser and Node.js bundles in '/dist/js' and '/lib'.
* All code is written in vanilla JavaScript.

***I am not employed by or in anyway associated with Focusrite Novation&trade;
