var xleg1 = -20*Math.cos(Math.PI/6)-8*Math.cos(Math.PI/6);
var yleg1 = 20*Math.sin(Math.PI/6)+8*Math.sin(Math.PI/6);

var scene, camera, renderer;
var step, body;
//var topleg, unionleg;
var spleg, cilleg, material1;

//this.topleg.position.set( xleg1, yleg1 );
//this.unionleg.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);

function TpLft(){
THREE.Object3D.call(this);
spleg = new THREE.SphereGeometry(8,20,20);
cilleg = new THREE.CylinderGeometry(8,4,16,15,10);
material = new THREE.MeshBasicMaterial({color:0xFFFF00, wireframe: true});
this.unionleg = new THREE.Mesh( spleg, material );
this.topleg = new THREE.Mesh( cilleg, material );
this.topleg.rotation.z=-2*Math.PI/3;
this.topleg.position.set(-8*Math.PI/6,8*Math.PI/6,0);
this.add(this.unionleg);
this.add(this.topleg);
}

TpLft.prototype = new THREE.Object3D;

function setup(){
body = new TpLft;
step = .01;
scene = new THREE.Scene();
scene.add(body);
camera = new THREE.PerspectiveCamera();
camera.position.z=100;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight, window.innerHeight);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame( loop );
renderer.render (scene, camera);
}

TpLft();
setup();
loop();
