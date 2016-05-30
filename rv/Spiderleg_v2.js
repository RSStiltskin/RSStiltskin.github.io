var scene, camera, topleg, middleleg, bottomleg, renderer;

function setup(){
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=50;
  
  var axisHelper = new THREE.AxisHelper( 20 );
  //scene.add( axisHelper );
  
  var size = 20;
  var step = 1; 
  
  var rotation = new THREE.Matrix4().makeRotationX(Math.PI);
  //rotation.set
  var shape = new THREE.CylinderGeometry(5,4,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  topleg = new THREE.Mesh(shape, material);
  topleg.rotation.x = Math.PI/4;
  //topleg.applyMatrix(rotation);
  
  scene.add(topleg, axisHelper);
  
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
