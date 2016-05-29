var scene, camera, topleg, renderer;

function setup(){
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera();
  camera.position.z=50;
  
  var tD = new THREE.Object3D();
  
  var m = new THREE.Matrix4();

  var m1 = new THREE.Matrix4();
  var m2 = new THREE.Matrix4();
  var m3 = new THREE.Matrix4();

  var alpha = 0;
  var beta = Math.PI;
  var gamma = Math.PI/2;

  m1.makeRotationX( alpha );
  m2.makeRotationY( beta );
  m3.makeRotationZ( gamma );

  m.multiplyMatrices( m1, m2 );
  m.multiply( m3 );
  
  tD.applyMatrix(m);
  
  var shape = new THREE.CylinderGeometry(5,4,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  topleg = new THREE.Mesh(shape, material,tD);
  scene.add(topleg);
  
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
