var xleg1 = -20*Math.cos(Math.PI/6)-8*Math.cos(Math.PI/6);
var yleg1 = 20*Math.sin(Math.PI/6)+8*Math.sin(Math.PI/6);

//this.topleg.position.set( xleg1, yleg1 );
//this.unionleg.position.set(-20*Math.cos(Math.PI/6),20*Math.sin(Math.PI/6),0);

function TpLft(){
THREE.Object3D.call(this);
this.unionleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20));
this.topleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10));
this.topleg.rotation.z=-2*Math.PI/3;
this.topleg.position.set(-8*Math.PI/6,8*Math.PI/6,0);
this.add(this.topleg);
this.add(this.unionleg);
}

TpLft.prototype = new THREE.Object3D;

//function Spidey(){
//THREE.Object3D.call(this);  
//this.Spbody = new THREE.Mesh( new THREE.Sphere(20,20,20,0,Math.PI) );
//this.piernaD = new Pierna();
//this.piernaI = new Pierna();
//this.cuerpo.position.y=2;
//this.piernaD.position.z=-1;
//this.piernaI.position.z=1;
//this.add(this.cuerpo);
//this.add(this.piernaD);
//this.add(this.piernaI);
//}

//Completo.prototype = new THREE.Object3D;

function setup(){
body = new TpLft;
step = .01;
scene = new THREE.Scene();
scene.add(body);
camera = new THREE.PerspectiveCamera();
camera.position.z=40;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame( loop );
renderer.render (scene, camera);

//if (Math.abs(body.piernaD.rotation.z) > .5 )
  //step = -step;
//body.piernaD.rotation.z += step;
//body.piernaI.rotation.z -= step;

//body.rotation.z += 0.01;
}


var scene, camera, renderer;
var step, body;

setup();
