
// How to load in modules
const Scene = require('Scene');
const Animation = require('Animation');
const Reactive = require('Reactive');

// Enables async/await in JS [part 1]
(async function() {


	 const [tornadoPrincipal, fumaca, destrocos] = await Promise.all([
	   Scene.root.findFirst('tornado'),
	   Scene.root.findFirst('fumaca'),
	   Scene.root.findFirst('destrocos')
	 ]);

//--------------

 	const sizeSampler = Animation.samplers.bezier(0,0.02,0.02,0.2);
	const hsvaSampler = Animation.samplers.HSVA([
		Animation.samplers.constant(1),
		Animation.samplers.constant(1),
		Animation.samplers.constant(1),
		Animation.samplers.linear(1,0)
	]);
	tornadoPrincipal.sizeModifier = sizeSampler;
	tornadoPrincipal.hsvaColorModulationModifier = hsvaSampler;

//--------------
	fumaca.colorModulationHSVA = Reactive.HSVA(
		1.0, // Hue
		0.0, // Saturation
		1.0, // Value (Brightness)
		0.9 // Alpha
	);
	const hsvaSamplerFumaca = Animation.samplers.HSVA([
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.linear(1.0,0.0)
	]);
	fumaca.hsvaColorModulationModifier = hsvaSamplerFumaca;

//--------------

	destrocos.colorModulationHSVA = Reactive.HSVA(
		1.0, // Hue
		0.0, // Saturation
		1.0, // Value (Brightness)
		0.0 // Alpha
	);
	const hsvaSamplerDestrocos = Animation.samplers.HSVA([
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.linear(0.0,1.0)
	]);
	destrocos.hsvaColorModulationModifier = hsvaSamplerDestrocos;	

})();
