var scene, camera, topleg6, topleg5, topleg4, topleg3, topleg2, topleg1;
var middleleg, bottomleg, renderer, spbody;
function setup(){
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=100;
  
  var axisHelper = new THREE.AxisHelper( 40 );
  //scene.add( axisHelper );
  
  var size = 40;
  var step = 1; 
  
  var rotation = new THREE.Matrix4().makeRotationY(Math.PI/2);
  //rotation.set
  var shbody = new THREE.SphereGeometry(20,20,20,0,Math.PI);
  var mtbody = new THREE.MeshBasicMaterial({color: 0xB40404, wireframe: true});
  spbody = new THREE.Mesh(shbody, mtbody);
  
  var shape = new THREE.CylinderGeometry(5,4,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  
  topleg6 = new THREE.Mesh(shape, material);
  topleg6.rotation.z = Math.PI/3;
  //var rotation = new THREE.Matrix4().makeRotationX(Math.PI/4);
  //topleg.applyMatrix(rotation);
  topleg6.position.set(30*Math.cos(Math.PI/6),-30*Math.sin(Math.PI/6),0);
  
  topleg5 = new THREE.Mesh(shape, material);
  topleg5.rotation.z = Math.PI/2;
  //var rotation = new THREE.Matrix4().makeRotationX(Math.PI/4);
  //topleg.applyMatrix(rotation);
  topleg5.position.set(30,0,0);
  
  topleg4 = new THREE.Mesh(shape, material);
  topleg4.rotation.z = 2*Math.PI/3;
  //var rotation = new THREE.Matrix4().makeRotationX(Math.PI/4);
  //topleg.applyMatrix(rotation);
  topleg4.position.set(30*Math.cos(Math.PI/6),30*Math.sin(Math.PI/6),0);
  
  topleg3 = new THREE.Mesh(shape, material);
  var rotation = new THREE.Matrix4().makeRotationX(Math.PI/2);
  topleg3.applyMatrix(rotation);
  topleg3.rotation.z = 2*Math.PI/3;
  topleg3.position.set(-30*Math.cos(Math.PI/6),-30*Math.sin(Math.PI/6),0);
  
  topleg2 = new THREE.Mesh(shape, material);
  var rotation = new THREE.Matrix4().makeRotationX(Math.PI/4);
  topleg2.applyMatrix(rotation);
  topleg2.rotation.z = Math.PI/2;
  topleg2.position.set(-30,0,0);
  
  topleg1 = new THREE.Mesh(shape, material);
  var rotation = new THREE.Matrix4().makeRotationX(Math.PI/4);
  topleg1.applyMatrix(rotation);
  topleg1.rotation.z = Math.PI/3;
  topleg1.position.set(-30*Math.cos(Math.PI/6),30*Math.sin(Math.PI/6),0);
  
  scene.add(topleg6, topleg5, topleg4, topleg3, topleg2, topleg1, axisHelper, spbody);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
setup();
  
function render(){
  requestAnimationFrame(render);
  //topleg.rotation.x += 0.01;
  //topleg.rotation.y +=0.01;
 
  renderer.render(scene, camera);
}

render();