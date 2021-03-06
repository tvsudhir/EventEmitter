app = {

	//myEventEmitter : new EventEmitterOne2One(),
	myEventEmitter : new EventEmitterOne2Many(),

	init: function () {
		this.myEventEmitter.on("test", this.addUpParams);
		this.myEventEmitter.on("test", this.multiplyParams);
	},

	addUpParams: function () {
		var sum = 0;

		Array.prototype.forEach.call(arguments, function (arg) {
			sum = sum + (parseInt(arg, 10) || 0);
		});

		console.log("Sum: ", sum); 

		return sum; 
	},

	multiplyParams: function () {
		var mul = arguments.length ? 1 : 0
			, i = 0
			;

		for (i = 0; i < arguments.length; i++) {
			// Type coercion is deliberately used.
			if (arguments[i] == 0) { 
				mul = 0; 
				break; 
			}

			mul = mul * (parseInt(arguments[i], 10) || 1);
		}

		console.log("Multiplication Result: ", mul); 

		return mul; 
	},

	applyParams : function () {
		var params = document.getElementById("params").value || "";
	
		//this.myEventEmitter.emit("test", params.split(","));
		this.myEventEmitter.emit.apply(this.myEventEmitter, ["test"].concat(params.split(",")));
	}
};
