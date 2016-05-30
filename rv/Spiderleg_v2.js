var scene, camera, topleg, middleleg, bottomleg, renderer, spbody;

function setup(){
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=100;
  
  var axisHelper = new THREE.AxisHelper( 20 );
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
  topleg = new THREE.Mesh(shape, material);
  //topleg.rotation.z = Math.PI/4;
  var rotation = new THREE.Matrix4().makeRotationX(Math.PI/2);
  //topleg.applyMatrix(rotation);
  //topleg.position.set(0,-10,0);
  scene.add(topleg, axisHelper, spbody);
  
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
