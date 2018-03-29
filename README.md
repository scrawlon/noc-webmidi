# **noc-webmidi.js** -- Novation Circuit&trade; JavaScript Midi library
This JavaScript library provides a way to interpret MIDI CC data
from the Novation Circuit&trade; and it contains all the info needed to
create a MIDI CC editor for the Circuit&trade; --
The MIDI CC info contained here comes from the official
Novation&trade; "Circuit MIDI Parameters" guide, [available here][1].

[1]: https://us.novationmusic.com/circuit/circuit/support-downloads

## News
This project is now called 'noc-webmidi' (**No**vation **C**ircuit&trade;
**Web MIDI**). It's easier to remember, and it's more npm-friendly.
Which leads to our next announcement -- noc-webmidi is now avialable on npm!

We're looking into adding SysEx and NPRN, dependent on
WebMIDI support.

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

## Sample code
If you're still not sure what's this is useful for, there's a sample project in
the `/sample_code` folder. The file `sample_code.js` contains code for a
simple Circuit MIDI CC editor. Open the file '/samples_code/index.html' in the
Google Chrome web browser.

* Requirements to run the sample code:
  * A Novation Circuit&trade; + USB cable.
  * A computer running the Google Chrome browser, connected to the Novation Circuit&trade;
  via usb cable.

## How to Contribute
If you find an error or see a way to improve, I recommend opening an issue to let me know.
Some things may be easy fixes/improvements.

If you want to work on the code:

* Fork the repo to your own Github account.
* Clone your forked repo to your local computer.
* Find you local copy in Terminal (these steps require Node.js):
  * Run 'npm install'.
  * Run 'gulp watch'.
* Development files are in '/src/js'.
* Changes are compiled by Gulp into '/dist/js' and '/lib'.
* All code is written in vanilla JavaScript.

***I am not employed by or in anyway associated with Focusrite Novation&trade;
