var scene, camera, renderer;
var Proof;
function A1(){
  THREE.Object3D.call(this);
  this.a1 = new THREE.Mesh( new THREE.SphereGeometry(20,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.add(this.a1);
}
TopLLeg.prototype = new THREE.Object3D;

function setup(){
  Proof = new A1;
  scene = new THREE.Scene();
  scene.add(Proof);
  camera = new THREE.PerspectiveCamera();
  camera.position.z=80;
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame( loop );
  renderer.render (scene, camera);
  Proof.rotation.x += 0.05;
}

setup();
loop();
