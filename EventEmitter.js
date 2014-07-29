/*

EventEmitter with one to one mapping

*/

function EventEmitterOne2One() {
	this.listeners = {};

	function on (eventName, eventFunction) {
		this.listeners[eventName] = eventFunction;
	};

	function emit (eventName) {
		var eventArgs = Array.prototype.slice.call(arguments, 1);
		return this.listeners[eventName] && this.listeners[eventName].apply(undefined, eventArgs);
	};

	this.on = on;
	this.emit = emit;
}



/*

EventEmitter with one to many mapping

*/
function EventEmitterOne2Many() {
	this.listeners = {};
}

EventEmitterOne2Many.prototype = {
	on: function(eventName, eventFunction) {
		var eventArray = this.listeners[eventName] || [];
		eventArray.push(eventFunction);
		this.listeners[eventName] = eventArray;
	},

	emit: function(eventName) {
		var eventArgs = Array.prototype.slice.call(arguments, 1);
		this.listeners[eventName] && this.listeners[eventName].forEach( function (eventFunction) {
			return eventFunction.apply(undefined, eventArgs);
		});
	}
}
