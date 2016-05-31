var xleg = 20*Math.cos(Math.PI/6);
var yleg = 20*Math.sin(Math.PI/6);

var scene, camera, renderer;
var step, mybody, upperlegL, upperlegR;
var bottomlegR, bottomlegL;
//var topleg, unionleg;
//var spleg, cilleg, material1;

//this.topleg.position.set( xleg1, yleg1 );
//this.unionleg.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);

//function TpLft(){
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

function setup(){
  mybody = new SpideyBody;
  
  upperlegL = new TopLLeg;
  //upperlegL.rotation.z = -2*Math.PI/3;
  upperlegL.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
  
  upperlegR = new TopRLeg;
  //upperlegR.rotation.z = 2*Math.PI/3;
  upperlegR.position.set(20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
  
  bottomlegL = new BottomLLeg;
  bottomlegL.position.set(-20*Math.cos(Math.PI/6),-20*Math.sin(Math.PI/6),0);
  
  bottomlegR = new BottomRLeg;
  bottomlegR.position.set(20*Math.cos(Math.PI/6),-20*Math.sin(Math.PI/6),0);
  
  step = .01;
  scene = new THREE.Scene();
  scene.add(mybody, upperlegL, upperlegR, bottomlegL, bottomlegR);
  camera = new THREE.PerspectiveCamera();
  camera.position.z=80;
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame( loop );
renderer.render (scene, camera);
}

setup();
loop();
