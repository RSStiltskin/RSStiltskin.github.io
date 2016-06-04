var scene, camera, renderer;
var Proof;
function A1(){
  THREE.Object3D.call(this);
  this.a1 = new THREE.Mesh( new THREE.SphereGeometry(20,20,20), new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true}) );
  this.add(this.a1);
}
A1.prototype = new THREE.Object3D;

function conveyor(){
  THREE.Object3D.call(this);
  this.C1 = new THREE.Mesh( new THREE.BoxGeometry(20,1,7), new THREE.MeshNormalMaterial());
  this.C2 = new THREE.Mesh( new THREE.BoxGeometry(20,1,7), new THREE.MeshNormalMaterial());
  this.C3 = new THREE.Mesh( new THREE.BoxGeometry(20,20,5), new THREE.MeshNormalMaterial());
  this.C1.position.y = -10;
  this.C2.position.y = 10;
  this.add(this.C1, this.C2, this.C3);
}
conveyor.prototype = new THREE.Object3D;


function setup(){
  con1 = new conveyor;
  con1.position.x = -20;
  con1.rotation.x = -Math.PI/2;
  con2 = new conveyor;
  con2.position.x =-10;
  con2.position.z =-10;
  con2.position.x = -Math.PI/2;
  con2.rotation.y = Math.PI/4;
  con3 = new conveyor;
  con3.rotation.x = -Math.PI/2;
  con3.position.z = 20*Math.sin(Math.PI/4); 
  scene = new THREE.Scene();
  scene.add(con1);
  //con2, con3);
  camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight,1,1000);
  camera.position.set(0,20,80);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame( loop );
  renderer.render (scene, camera);
  //Proof.rotation.x += 0.05;
}

setup();
loop();
