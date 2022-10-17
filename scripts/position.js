
//const CameraInfo = require('CameraInfo');
const Scene = require('Scene');
const Patches = require('Patches');

(async function() {
  // Localiza o objeto na cena
  const [obj] = await Promise.all([
    Scene.root.findFirst('shadow')
  ]);


//posicao 2D (posicao na tela) do objeto
var objScreenPosition = Scene.projectToScreen(obj.worldTransform.position);


Patches.inputs.setPoint2D('position', objScreenPosition);
})();