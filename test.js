import Enumerator from './enumerator.js'
import { MonoApiHelper } from 'frida-mono-api'

// mono class we want to enumerate
var GameManager = Enumerator.enumerateClass('GameManager');

// print it out
Enumerator.prettyPrint(GameManager);

MonoApiHelper.Intercept(GameManager.address, 'UpdateScore', {
  onEnter: function(args) {
	this.instance = args[0];
	console.log("Argumant 1: " + parseInt(args[1]));
  	console.log("UpdateScore Address: " + this.instance.toString());
	console.log('Instance Size: ' + GameManager.getInstanceSize());
	console.log('offset: ' + GameManager.fields['score'].offset)
	console.log("Total Score: " + GameManager.getValue(this.instance, 'score'));
	console.log('-----------------------------------------------\n');
  	},
});