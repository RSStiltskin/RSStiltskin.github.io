var scene, camera, renderer;
var step1, step2, step3, step4, fullbody;
var LUlegrot = 2*Math.PI/3;
function TopLLeg(){
  THREE.Object3D.call(this);
  this.unionlleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.toplleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshBasicMaterial({color:0x3ADF00, wireframe: true}) );
  this.toplleg.rotation.z=-2*Math.PI/3;
  this.toplleg.position.set(-8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
  this.add(this.unionlleg);
  this.add(this.toplleg);
}
TopLLeg.prototype = new THREE.Object3D;

function TopRLeg(){
  THREE.Object3D.call(this);
  this.unionrleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.toprleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshBasicMaterial({color:0x3ADF00, wireframe: true}) );
  this.toprleg.rotation.z=2*Math.PI/3;
  this.toprleg.position.set(8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
  this.add(this.unionrleg);
  this.add(this.toprleg);
}
TopRLeg.prototype = new THREE.Object3D;

function BottomRLeg(){
  THREE.Object3D.call(this);
  this.unionbrleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.topbrleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshBasicMaterial({color:0x3ADF00, wireframe: true}) );
  this.topbrleg.rotation.z=Math.PI/3;
  this.topbrleg.position.set(8*Math.cos(Math.PI/6),-8*Math.sin(Math.PI/6),0);
  this.add(this.unionbrleg);
  this.add(this.topbrleg);
}
BottomRLeg.prototype = new THREE.Object3D;

function BottomLLeg(){
  THREE.Object3D.call(this);
  this.unionblleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.topblleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshBasicMaterial({color:0x3ADF00, wireframe: true}) );
  this.topblleg.rotation.z=-Math.PI/3;
  this.topblleg.position.set(-8*Math.cos(Math.PI/6),-8*Math.sin(Math.PI/6),0);
  this.add(this.unionblleg);
  this.add(this.topblleg);
}
BottomLLeg.prototype = new THREE.Object3D;

function SpideyBody(){
  THREE.Object3D.call(this);
  this.fatbody = new THREE.Mesh( new THREE.SphereGeometry(20,20,20), new THREE.MeshBasicMaterial({color:0xFF0000, wireframe: true}) );
  this.add(this.fatbody);
}
SpideyBody.prototype = new THREE.Object3D;

function FullSpider(){
  THREE.Object3D.call(this);
  this.mybody = new SpideyBody;
  this.upperlegL = new TopLLeg;
  this.upperlegL.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
  this.upperlegR = new TopRLeg;
  this.upperlegR.position.set(20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
  this.bottomlegL = new BottomLLeg;
  this.bottomlegL.position.set(-20*Math.cos(Math.PI/6),-20*Math.sin(Math.PI/6),0);
  this.bottomlegR = new BottomRLeg;
  this.bottomlegR.position.set(20*Math.cos(Math.PI/6),-20*Math.sin(Math.PI/6),0);
  this.add(this.mybody);
  this.add(this.upperlegL);
  this.add(this.upperlegR);
  this.add(this.bottomlegR);
  this.add(this.bottomlegL);
}
FullSpider.prototype = new THREE.Object3D;

function setup(){
  var axisHelper = new THREE.AxisHelper( 50 );
  //scene.add( axisHelper );
  fullbody = new FullSpider;
  fullbody.rotation.x = Math.PI/2;
  step1 = 0.01;
  step2 = 0.02;
  step3 = 0.013;
  step4 = 0.017;
  scene = new THREE.Scene();
  scene.add(fullbody, axisHelper);
  camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight,1,1000);
  camera.position.set(15,0,50);
  //camera.rotation.x = Math.PI/6;
  //camera.rotation.z = Math.PI/3;
  //camera.rotation.y = -Math.PI/3;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame( loop );
  camera.rotation.y += 0.01;
  camera.lookAt(scene.position);
  fullbody.upperlegL.rotation.z += step1;
  if(Math.abs(fullbody.upperlegL.rotation.z)>Math.PI/4)
    step1 = -step1;
  fullbody.upperlegR.rotation.z += step2;
  if(Math.abs(fullbody.upperlegR.rotation.z)>Math.PI/4)
    step2 = -step2;
  fullbody.bottomlegL.rotation.z += step3;
  if(Math.abs(fullbody.bottomlegL.rotation.z)>Math.PI/4)
    step3 = -step3;
  fullbody.bottomlegR.rotation.z += step4;
  if(Math.abs(fullbody.bottomlegR.rotation.z)>Math.PI/4)
    step4 = -step4;
  renderer.render (scene, camera);
}

setup();
loop();
