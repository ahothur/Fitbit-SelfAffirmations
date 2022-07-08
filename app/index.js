/*
 * Entry point for the watch app
 */

import * as document from "document";
import clock from "clock";
import {affirmations} from "./affirmations.js";


let n = Math.floor(Math.random() * affirmations.length);
console.log(affirmations[n]);

let demotext = document.getElementById("quote");
demotext.text = affirmations[n];


