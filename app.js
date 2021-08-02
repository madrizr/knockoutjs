
function conversion(precio){
	let self = this; 
	self.input = ko.observable(0);
	self.numero = ko.computed(function(){
		let conversor = self.input() * precio;
			return conversor;
	},self);
}

fetch('https://s3.amazonaws.com/dolartoday/data.json')
	.then(res => res.json())
	.then(respuesta => {
		let precio = respuesta.USD.promedio;
		ko.applyBindings(new conversion(precio), document.getElementById('data-banding'));
	})

 

