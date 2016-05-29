funtion setup(){
  var shape = new THREE.CylinderGeometry(10,10,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  
  var topleg = new.THREE.Mesh(shape, material)
  
  scene = new THREE.Scene();
  scene.add(topleg);
  
  var fov = 100;
  var aspect = window.innerWidth/window.innerHeight;
  var near = 0.1;
  var far = 1000;
  camera= new THREE.PerspectiveCamera(fov,aspect,near,far);
  camera.position.z=5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
  
function loop(){
  requestAnimationFrame(loop);
  topleg.rotation.x += 0.01;
  topleg.rotation.y +=0.01;
  renderer.render(scene, camera);
}

var camera, scene, renderer, topleg;
setup();
loop();
