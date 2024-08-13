import Enumerator from './enumerator.js'
import { MonoApiHelper } from 'frida-mono-api'

// mono class we want to enumerate
var GameManager = Enumerator.enumerateClass('GameManager');

// print it out
Enumerator.prettyPrint(GameManager);

MonoApiHelper.Intercept(GameManager.address, 'UpdateScore', {
  onEnter: function(args) {
	this.instance = args[0];
  	console.log("UpdateScore Address: " + this.instance.toString());
	console.log('Instance Size: ' + GameManager.getInstanceSize());
	console.log('offset: ' + GameManager.fields['score'].offset)
	var newAddr = `0x${(parseInt(this.instance) + (parseInt(0x80) - parseInt(GameManager.fields['score'].offset))).toString(16)}`;
	console.log('new Address: ' + newAddr)
	console.log("Total Score: " + GameManager.getValue(newAddr, 'score'));
  	},
});