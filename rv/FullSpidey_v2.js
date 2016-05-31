var scene, camera, renderer;
var step1, step2, step3, step4, fullbody;
var LUlegrot = 2*Math.PI/3;
function TopLLeg(){
  THREE.Object3D.call(this);
  this.unionlleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.toplleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.toplleg.rotation.z=-2*Math.PI/3;
  this.toplleg.position.set(-8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
  this.add(this.unionlleg, this.toplleg);
}
TopLLeg.prototype = new THREE.Object3D;

function LFoot(){
  THREE.Object3D.call(this);
  this.unionlleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}) );
  this.toplfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.toplelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.toplelbow.rotation.z=-Math.PI;
  this.toplelbow.rotation.x=Math.PI/2;
  this.toplelbow.position.set(-16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),-4);
  this.toplfoot.rotation.x=Math.PI/2;
  this.toplfoot.position.set(-16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),10);
  this.unionlleg2.position.set(-16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),0);
  this.add(this.unionlleg2, this.toplfoot, this.toplelbow);
}
LFoot.prototype = new THREE.Object3D;

function TopRLeg(){
  THREE.Object3D.call(this);
  this.unionrleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.toprleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.toprleg.rotation.z=2*Math.PI/3;
  this.toprleg.position.set(8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
  this.add(this.unionrleg, this.toprleg);
}
TopRLeg.prototype = new THREE.Object3D;

function RFoot(){
  THREE.Object3D.call(this);
  this.unionrleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}) );
  this.toprfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.toprelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.toprelbow.rotation.z=-Math.PI;
  this.toprelbow.rotation.x=Math.PI/2;
  this.toprelbow.position.set(16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),-4);
  this.toprfoot.rotation.x=Math.PI/2;
  this.toprfoot.position.set(16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),10);
  this.unionrleg2.position.set(16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),0);
  this.add(this.unionrleg2, this.toprfoot, this.toprelbow);
}
RFoot.prototype = new THREE.Object3D;

function BottomRLeg(){
  THREE.Object3D.call(this);
  this.unionbrleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.topbrleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.topbrleg.rotation.z=Math.PI/3;
  this.topbrleg.position.set(8*Math.cos(Math.PI/6),-8*Math.sin(Math.PI/6),0);
  this.add(this.unionbrleg, this.topbrleg);
}
BottomRLeg.prototype = new THREE.Object3D;

function BRFoot(){
  THREE.Object3D.call(this);
  this.unionbrleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}) );
  this.bottomrfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.bottomrelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.bottomrelbow.rotation.z=-Math.PI;
  this.bottomrelbow.rotation.x=Math.PI/2;
  this.bottomrelbow.position.set(16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),-4);
  this.bottomrfoot.rotation.x=Math.PI/2;
  this.bottomrfoot.position.set(16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),10);
  this.unionbrleg2.position.set(16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),0);
  this.add(this.unionbrleg2, this.bottomrfoot, this.bottomrelbow);
}
BRFoot.prototype = new THREE.Object3D;

function BottomLLeg(){
  THREE.Object3D.call(this);
  this.unionblleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.topblleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.topblleg.rotation.z=-Math.PI/3;
  this.topblleg.position.set(-8*Math.cos(Math.PI/6),-8*Math.sin(Math.PI/6),0);
  this.add(this.unionblleg, this.topblleg);
}
BottomLLeg.prototype = new THREE.Object3D;

function BLFoot(){
  THREE.Object3D.call(this);
  this.unionblleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}) );
  this.bottomlfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.bottomlelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshPhongMaterial({color:0xFFFF00,emissive:0xFF0000, specular:0xFFBF00}));
  this.bottomlelbow.rotation.z=-Math.PI;
  this.bottomlelbow.rotation.x=Math.PI/2;
  this.bottomlelbow.position.set(-16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),-4);
  this.bottomlfoot.rotation.x=Math.PI/2;
  this.bottomlfoot.position.set(-16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),10);
  this.unionblleg2.position.set(-16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),0);
  this.add(this.unionblleg2, this.bottomlfoot, this.bottomlelbow);
}
BLFoot.prototype = new THREE.Object3D;

function SpideyBody(){
  THREE.Object3D.call(this);
  this.fatbody = new THREE.Mesh( new THREE.SphereGeometry(20,20,20), new THREE.MeshPhongMaterial({color:0xFF0000,emissive:0x2E2E2E, specular:0xFFFF00}) );
  this.add(this.fatbody);
}
SpideyBody.prototype = new THREE.Object3D;

function LegOne(){
  THREE.Object3D.call(this);
  this.oneupleg = new TopLLeg;
  this.onedwleg = new LFoot;
  this.add(this.oneupleg, this.onedwleg);
}
LegOne.prototype = new THREE.Object3D;

function LegTwo(){
  THREE.Object3D.call(this);
  this.twoupleg = new TopRLeg;
  this.twodwleg = new RFoot;
  this.add(this.twoupleg, this.twodwleg);
}
LegTwo.prototype = new THREE.Object3D;

function LegThree(){
  THREE.Object3D.call(this);
  this.threebtleg = new BottomRLeg;
  this.threebtfoot = new BRFoot;
  this.add(this.threebtleg, this.threebtfoot);
}
LegThree.prototype = new THREE.Object3D;

function LegFour(){
  THREE.Object3D.call(this);
  this.fourbtleg = new BottomLLeg;
  this.fourbtfoot = new BLFoot;
  this.add(this.fourbtleg, this.fourbtfoot);
}
LegFour.prototype = new THREE.Object3D;


function FullSpider(){
  THREE.Object3D.call(this);
  this.mybody = new SpideyBody;
  this.myoneleg = new LegOne;
  this.myoneleg.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
  this.mytwoleg = new LegTwo;
  this.mytwoleg.position.set(20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
  this.myfourleg = new LegFour;
  this.myfourleg.position.set(-20*Math.cos(Math.PI/6),-20*Math.sin(Math.PI/6),0)
  this.mythreeleg = new LegThree;
  this.mythreeleg.position.set(20*Math.cos(Math.PI/6),-20*Math.sin(Math.PI/6),0);
  this.add(this.mybody, this.mytwoleg, this.mythreeleg, this.myfourleg, this.myoneleg);
}
FullSpider.prototype = new THREE.Object3D;

function setup(){
  var lights = [];
  var axisHelper = new THREE.AxisHelper( 50 );
  fullbody = new FullSpider;
  fullbody.rotation.x = Math.PI/2;
  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
  lights[1] = new THREE.PointLight(0xffffff, 1, 0);
  //lights[2] = new THREE.PointLight(0xffffff, 1, 0);
  
  lights[0].position.set(0, 0, 100);
  lights[1].position.set(200, 200, -200);
  //lights[2].position.set(-200, 200, 200);
  
  step1 = 0.01;
  step2 = 0.02;
  step3 = 0.013;
  step4 = 0.017;
  
  scene = new THREE.Scene();
  scene.add(fullbody, axisHelper);
  scene.add(lights[0]);
  scene.add(lights[1]);
  //scene.add(lights[2])
  
  camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight,1,1000);
  camera.position.set(15,25,60);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame( loop );
  camera.lookAt(scene.position);
  fullbody.rotation.z -= 0.005;
  fullbody.myoneleg.rotation.z += step1;
  if(Math.abs(fullbody.myoneleg.rotation.z)>Math.PI/4)
    step1 = -step1;
  fullbody.mytwoleg.rotation.z += step2;
  if(Math.abs(fullbody.mytwoleg.rotation.z)>Math.PI/4)
    step2 = -step2;
  fullbody.myfourleg.rotation.z += step3;
  if(Math.abs(fullbody.myfourleg.rotation.z)>Math.PI/4)
    step3 = -step3;
  fullbody.mythreeleg.rotation.z += step4;
  if(Math.abs(fullbody.mythreeleg.rotation.z)>Math.PI/4)
    step4 = -step4;
  renderer.render (scene, camera);
}

setup();
loop();
