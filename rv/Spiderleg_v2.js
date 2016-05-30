var scene, camera, topleg6, topleg5, topleg4, topleg3, topleg2, topleg1;
var middleleg, bottomleg, renderer, spbody, spyRobot;
function setup(){
  scene = new THREE.Scene();
  //fov = 75;
  //aspect = window.innerWidth/window.innerHeight;
  //near = 10;
  //far = 1000;
  //camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera = new THREE.PerspectiveCamera();
  camera.position.z=100;

  var rotation = new THREE.Matrix4().makeRotationX(-Math.PI/2);
  //rotation.set
  var shbody = new THREE.SphereGeometry(20,20,20,0,Math.PI);
  var mtbody = new THREE.MeshBasicMaterial({color: 0xB40404, wireframe: true});
  spbody = new THREE.Mesh(shbody, mtbody);
  var shape = new THREE.CylinderGeometry(5,4,20,15,10);
  var shape2 = new THREE.CylinderGeometry(4,5,20,15,10);
  var material = new THREE.MeshBasicMaterial({color: 0x31B404, wireframe: true});
  topleg6 = new THREE.Mesh(shape, material);
  topleg6.rotation.z = Math.PI/3;
  topleg6.position.set(30*Math.cos(Math.PI/6),-30*Math.sin(Math.PI/6),0);
  topleg5 = new THREE.Mesh(shape, material);
  topleg5.rotation.z = Math.PI/2;
  topleg5.position.set(30,0,0);
  topleg4 = new THREE.Mesh(shape, material);
  topleg4.rotation.z = 2*Math.PI/3;
  topleg4.position.set(30*Math.cos(Math.PI/6),30*Math.sin(Math.PI/6),0);
  topleg3 = new THREE.Mesh(shape2, material);
  topleg3.rotation.z = 2*Math.PI/3;
  topleg3.position.set(-30*Math.cos(Math.PI/6),-30*Math.sin(Math.PI/6),0);
  topleg2 = new THREE.Mesh(shape2, material);
  topleg2.rotation.z = Math.PI/2;
  topleg2.position.set(-30,0,0);
  topleg1 = new THREE.Mesh(shape2, material);
  topleg1.rotation.z = Math.PI/3;
  topleg1.position.set(-30*Math.cos(Math.PI/6),30*Math.sin(Math.PI/6),0);

  var spider = new THREE.Geometry();
  THREE.GeometryUtils.merge( spider, spbody );
  THREE.GeometryUtils.merge( spider, topleg1 );
  //THREE.Geometry.merge( spider, topleg2 );
  THREE.GeometryUtils.merge( spider, topleg3 );
  THREE.GeometryUtils.merge( spider, topleg4 );
  //THREE.Geometry.merge( spider, topleg5 );
  THREE.GeometryUtils.merge( spider, topleg6 );
	
  spyRobot = new THREE.Mesh( spider );
  //spyRobot.applyMatrix(rotation);
  scene.add( spyRobot );
  //scene.add(topleg6, topleg5, topleg4, topleg3, topleg2, topleg1, spbody);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight,window.innerHeight);
  document.body.appendChild(renderer.domElement);
}
setup();
  
function loop(){
  requestAnimationFrame(loop);
  //var timer = Date.now() * 0.0002;
  //camera.position.x = Math.cos( timer ) * 10;
  //camera.position.z = Math.sin( timer ) * 10;
  //camera.lookAt( scene.position );
  //camera.rotation.y += 0.01;
  requestAnimationFrame(loop);
  renderer.render(scene, camera);
}

loop();
