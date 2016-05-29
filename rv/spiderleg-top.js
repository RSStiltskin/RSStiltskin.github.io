function setup(){
  var scene = new THREE.Scene();
  
  var camera = new THREE.PerspectiveCamera();
  camera.position.z=50;
  
  var shape = new THREE.CylinderGeometry(10,10,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  var topleg = new THREE.Mesh(shape, material);
  scene.add(topleg);
  
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
  
function loop(){
  requestAnimationFrame(loop);
  //topleg.rotation.x += 0.01;
  topleg.rotation.y +=0.01;
  renderer.loop(scene, camera);
}

setup();
loop();
