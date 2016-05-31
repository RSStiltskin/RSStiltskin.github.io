var xleg = 20*Math.cos(Math.PI/6);
var yleg = 20*Math.sin(Math.PI/6);

var scene, camera, renderer;
var step, mybody, upperleg1, upperleg2;
//var topleg, unionleg;
//var spleg, cilleg, material1;

//this.topleg.position.set( xleg1, yleg1 );
//this.unionleg.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);

//function TpLft(){
function TopLeg(){
  THREE.Object3D.call(this);
  this.unionleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.topleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshBasicMaterial({color:0x3ADF00, wireframe: true}) );
  //this.topleg.rotation.z=-2*Math.PI/3;
  this.topleg.position.set(-8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
  this.add(this.unionleg);
  this.add(this.topleg);
}
TopLeg.prototype = new THREE.Object3D;

function SpideyBody(){
  THREE.Object3D.call(this);
  this.fatbody = new THREE.Mesh( new THREE.SphereGeometry(20,20,20), new THREE.MeshBasicMaterial({color:0xFF0000, wireframe: true}) );
  this.add(this.fatbody);
}

SpideyBody.prototype = new THREE.Object3D;

function setup(){
  mybody = new SpideyBody;
  upperleg1 = new TopLeg;
  upperleg1.rotation.z = -2*Math.PI/3;
  upperleg1.position.set(-xleg,yleg,0);
  upperleg2 = new TopLeg;
  upperleg2.rotation.z = 2*Math.PI/3;
  upperleg2.position.set(xleg,yleg,0);
  step = .01;
  scene = new THREE.Scene();
  scene.add(mybody, upperleg1, upperleg2);
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
