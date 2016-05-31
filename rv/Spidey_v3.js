//var xleg = 20*Math.cos(Math.PI/6);
//var yleg = 20*Math.sin(Math.PI/6);
//var step, mybody, upperlegL, upperlegR;
//var bottomlegR, bottomlegL;
//var topleg, unionleg;
//var spleg, cilleg, material1;
//this.topleg.position.set( xleg1, yleg1 );
//this.unionleg.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);
//function TpLft(){
var scene, camera, renderer;
var step, fullbody;
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
  fullbody = new FullSpider;
  step = .01;
  scene = new THREE.Scene();
  scene.add(fullbody);
  camera = new THREE.PerspectiveCamera();
  camera.position.z=80;
 
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight, window.innerHeight);
  document.body.appendChild(renderer.domElement);
}

function loop(){
  requestAnimationFrame( loop );
  fullbody.upperlegL.rotation.z += 0.01;
  //if( LUlegrot > 3*Math.PI/4 )
  // fullbody.upperlegL.rotation.z -= LUlegrot - 0.01;
  //if( LUlegrot < 7*Math.PI/8 )
  // fullbody.upperlegL.rotation.z += LUlegrot + 0.01;
  
  renderer.render (scene, camera);
}

setup();
loop();
