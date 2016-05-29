var scene, camera, topleg, middleleg, bottomleg, renderer;

function setup(){
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=100;
  
  var axisHelper = new THREE.AxisHelper( 20 );
  //scene.add( axisHelper );
  
  var size = 20;
  var step = 1;

  var shape = new THREE.CylinderGeometry(5,4,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  topleg = new THREE.Mesh(shape, material);
  topleg.rotation.z = Math.PI/4;
  
  var shape2 = new THREE.CylinderGeometry(4,3,20,15,10);
  middleleg = new THREE.Mesh(shape2, material);
  middleleg.rotation.z = Math.PI/6;
  middleleg.position.set(15, -20, 0);
  
  var shape3 = new THREE.CylinderGeometry(3,2,15,10);
  bottomleg = new THREE.Mesh(shape3, material);
  bottomleg.rotation.z = Math.PI/12;
  bottomleg.position.set(10,-30,0);
  
  scene.add(topleg, middleleg, bottomleg, axisHelper);
  
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
