function setup(){
  var shape = new THREE.CylinderGeometry(10,10,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  
  var topleg = new THREE.Mesh(shape, material);
  
  camera= new THREE.PerspectiveCamera();
  camera.position.z=5;

  scene = new THREE.Scene();
  scene.add(topleg);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}
  
function loop(){
  requestAnimationFrame(loop);
  //topleg.rotation.x += 0.01;
  //topleg.rotation.y +=0.01;
  renderer.render(scene, camera);
}

var camera, scene, renderer, topleg;
setup();
loop();
