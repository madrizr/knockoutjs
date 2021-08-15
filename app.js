function conversion(precio){
	let self = this; 
	self.input = ko.observable(0);
	self.numero = ko.computed(() => {

		if(self.input() >= 0){
			let conversor = self.input() * precio;
			return conversor.toFixed(2);
		}else return conversor = `error`;

	},self);
}

fetch('https://s3.amazonaws.com/dolartoday/data.json')
	.then(res => res.json())
	.then(respuesta => {
		let precio = respuesta.USD.promedio;
		ko.applyBindings(new conversion(precio), document.getElementById('data-banding'));
	})

 

