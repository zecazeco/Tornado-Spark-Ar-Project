
// How to load in modules
const Scene = require('Scene');
const Animation = require('Animation');
const Reactive = require('Reactive');
const Patches = require('Patches');

// Enables async/await in JS [part 1]
(async function() {


	 const [tornado, smoke, wreckage, floor] = await Promise.all([
	   Scene.root.findFirst('tornado'),
	   Scene.root.findFirst('smoke'),
	   Scene.root.findFirst('wreckage'),
	   Scene.root.findFirst('floor')
	 ]);

//--------------

 	const sizeSampler = Animation.samplers.bezier(0,0.02,0.02,0.2);
	const hsvaSampler = Animation.samplers.HSVA([
		Animation.samplers.constant(1),
		Animation.samplers.constant(1),
		Animation.samplers.constant(1),
		Animation.samplers.linear(1,0)
	]);
	tornado.sizeModifier = sizeSampler;
	tornado.hsvaColorModulationModifier = hsvaSampler;

//--------------

	smoke.colorModulationHSVA = Reactive.HSVA(
		1.0, // Hue
		0.0, // Saturation
		1.0, // Value (Brightness)
		0.9 // Alpha
	);
	const hsvaSamplerSmoke = Animation.samplers.HSVA([
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.linear(1.0,0.0)
	]);
	smoke.hsvaColorModulationModifier = hsvaSamplerSmoke;

//--------------

	wreckage.colorModulationHSVA = Reactive.HSVA(
		1.0, // Hue
		0.0, // Saturation
		1.0, // Value (Brightness)
		0.0 // Alpha
	);
	const hsvaSamplerWreckage = Animation.samplers.HSVA([
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.linear(0.0,1.0)
	]);
	wreckage.hsvaColorModulationModifier = hsvaSamplerWreckage;	

//--------------

	floor.colorModulationHSVA = Reactive.HSVA(
		1.0, // Hue
		0.0, // Saturation
		1.0, // Value (Brightness)
		0.9 // Alpha
	);
	const hsvaSamplerFloor = Animation.samplers.HSVA([
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.constant(1.0),
		Animation.samplers.linear(1.0,0.0)
	]);
	floor.hsvaColorModulationModifier = hsvaSamplerFloor;

//--------------

	//tornado screen position
	var objScreenPosition = Scene.projectToScreen(tornado.worldTransform.position);
	Patches.inputs.setPoint2D('tornado2Dposition', objScreenPosition);

})();
