var scene, camera, topleg, middleleg, renderer;

function setup(){
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=50;
  
  var axisHelper = new THREE.AxisHelper( 20 );
  scene.add( axisHelper );
  
  var shape = new THREE.CylinderGeometry(5,4,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  topleg = new THREE.Mesh(shape, material);
  topleg.rotation.z = Math.PI/4;
  
  //var shape2 = new THREE.CylinderGeometry(4,3,20,15,10);
  //middleleg = new THREE.Mesh(shape2, material);
  //middleleg.rotation.z = Math.PI/3;
  //middleleg.position
  
  //var shape3 = new THREE.CylinderGeometry(3,2,15,10);
  //bottomleg = new THREE.Mesh(shape3, material);
  
  scene.add(topleg, axisHelper);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
setup();
  
function render(){
  requestAnimationFrame(render);
  //topleg.rotation.x += 0.01;
  topleg.rotation.y +=0.01;
  renderer.render(scene, camera);
}

render();
