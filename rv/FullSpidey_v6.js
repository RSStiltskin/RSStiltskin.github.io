var scene, camera, renderer;
var step1, step2, step3, step4, fullbody;
var rotx, roty, rotz;
var obstacle1, obstacle2, obstacle3, obstacle4;
var Thewall1, Thewall2, Thewall3, Thewall4;
	

function TopLLeg(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.unionlleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshBasicMaterial({map: this.texturefeet}) );
	  this.toplleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshBasicMaterial({map: this.texturelegs}) );
	  this.toplleg.rotation.z=-2*Math.PI/3;
	  this.toplleg.position.set(-8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
	  this.add(this.unionlleg, this.toplleg);
	}
TopLLeg.prototype = new THREE.Object3D;
	

function LFoot(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.unionlleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.toplfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.toplelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.toplelbow.rotation.z=-Math.PI;
	  this.toplelbow.rotation.x=Math.PI/2;
	  this.toplelbow.position.set(-16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),-4);
	  this.toplfoot.rotation.x=Math.PI/2;
	  this.toplfoot.position.set(-16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),10);
	  this.unionlleg2.position.set(-16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),0);
	  this.add(this.unionlleg2, this.toplfoot, this.toplelbow);
	}
LFoot.prototype = new THREE.Object3D;
	

	function TopRLeg(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.unionrleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.toprleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshLambertMaterial({map: this.texturelegs}) );
	  this.toprleg.rotation.z=2*Math.PI/3;
	  this.toprleg.position.set(8*Math.cos(Math.PI/6),8*Math.sin(Math.PI/6),0);
	  this.add(this.unionrleg, this.toprleg);
	}
	TopRLeg.prototype = new THREE.Object3D;
	

	function RFoot(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.unionrleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.toprfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.toprelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.toprelbow.rotation.z=-Math.PI;
	  this.toprelbow.rotation.x=Math.PI/2;
	  this.toprelbow.position.set(16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),-4);
	  this.toprfoot.rotation.x=Math.PI/2;
	  this.toprfoot.position.set(16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),10);
	  this.unionrleg2.position.set(16*Math.cos(Math.PI/6),16*Math.sin(Math.PI/6),0);
	  this.add(this.unionrleg2, this.toprfoot, this.toprelbow);
	}
	RFoot.prototype = new THREE.Object3D;
	

	function BottomRLeg(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.unionbrleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.topbrleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshLambertMaterial({map: this.texturelegs}) );
	  this.topbrleg.rotation.z=Math.PI/3;
	  this.topbrleg.position.set(8*Math.cos(Math.PI/6),-8*Math.sin(Math.PI/6),0);
	  this.add(this.unionbrleg, this.topbrleg);
	}
	BottomRLeg.prototype = new THREE.Object3D;
	

	function BRFoot(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.unionbrleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.bottomrfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.bottomrelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.bottomrelbow.rotation.z=-Math.PI;
	  this.bottomrelbow.rotation.x=Math.PI/2;
	  this.bottomrelbow.position.set(16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),-4);
	  this.bottomrfoot.rotation.x=Math.PI/2;
	  this.bottomrfoot.position.set(16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),10);
	  this.unionbrleg2.position.set(16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),0);
	  this.add(this.unionbrleg2, this.bottomrfoot, this.bottomrelbow);
	}
	BRFoot.prototype = new THREE.Object3D;
	

	function BottomLLeg(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.unionblleg = new THREE.Mesh( new THREE.SphereGeometry(8,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.topblleg = new THREE.Mesh( new THREE.CylinderGeometry(8,4,16,15,10), new THREE.MeshLambertMaterial({map: this.texturelegs}) );
	  this.topblleg.rotation.z=-Math.PI/3;
	  this.topblleg.position.set(-8*Math.cos(Math.PI/6),-8*Math.sin(Math.PI/6),0);
	  this.add(this.unionblleg, this.topblleg);
	}
	BottomLLeg.prototype = new THREE.Object3D;
	

	function BLFoot(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturefeet = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderfeet.jpg');
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/spiderleg.jpg');
	  this.unionblleg2 = new THREE.Mesh( new THREE.SphereGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturefeet}) );
	  this.bottomlfoot = new THREE.Mesh(new THREE.ConeGeometry(4,20,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.bottomlelbow = new THREE.Mesh(new THREE.ConeGeometry(4,8,20), new THREE.MeshLambertMaterial({map: this.texturelegs}));
	  this.bottomlelbow.rotation.z=-Math.PI;
	  this.bottomlelbow.rotation.x=Math.PI/2;
	  this.bottomlelbow.position.set(-16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),-4);
	  this.bottomlfoot.rotation.x=Math.PI/2;
	  this.bottomlfoot.position.set(-16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),10);
	  this.unionblleg2.position.set(-16*Math.cos(Math.PI/6),-16*Math.sin(Math.PI/6),0);
	  this.add(this.unionblleg2, this.bottomlfoot, this.bottomlelbow);
	}
	BLFoot.prototype = new THREE.Object3D;
	

	function SpideyBody(){
	  THREE.Object3D.call(this);
	  THREE.ImageUtils.crossOrigin = '';
	  this.texturelegs = THREE.ImageUtils.loadTexture('https://raw.githubusercontent.com/RSStiltskin/RSStiltskin.github.io/master/Spidey.jpg');
	  this.fatbody = new THREE.Mesh( new THREE.SphereGeometry(40,20,20), new THREE.MeshLambertMaterial({map: this.texturelegs}) );
	  this.fatbody.rotation.x=-Math.PI/2;
	  this.fatbody.rotation.y=Math.PI/2;
	  this.fatbody.rotation.z=Math.PI/6;
	  this.add(this.fatbody);
	}
	SpideyBody.prototype = new THREE.Object3D;
	

	function LegOne(){
	  THREE.Object3D.call(this);
	  this.oneupleg = new TopLLeg;
	  this.onedwleg = new LFoot;
	  this.add(this.oneupleg, this.onedwleg);
	}
	LegOne.prototype = new THREE.Object3D;
	

	function LegTwo(){
	  THREE.Object3D.call(this);
	  this.twoupleg = new TopRLeg;
	  this.twodwleg = new RFoot;
	  this.add(this.twoupleg, this.twodwleg);
	}
	LegTwo.prototype = new THREE.Object3D;
	

	function LegThree(){
	  THREE.Object3D.call(this);
	  this.threebtleg = new BottomRLeg;
	  this.threebtfoot = new BRFoot;
	  this.add(this.threebtleg, this.threebtfoot);
	}
	LegThree.prototype = new THREE.Object3D;
	

	function LegFour(){
	  THREE.Object3D.call(this);
	  this.fourbtleg = new BottomLLeg;
	  this.fourbtfoot = new BLFoot;
	  this.add(this.fourbtleg, this.fourbtfoot);
	}
	LegFour.prototype = new THREE.Object3D;
	

	

	function FullSpider(){
	  THREE.Object3D.call(this);
	  this.mybody = new SpideyBody;
	  this.myoneleg = new LegOne;
	  this.myoneleg.position.set(-40*Math.cos(Math.PI/6),40*Math.sin(Math.PI/6),0);
	  this.mytwoleg = new LegTwo;
	  this.mytwoleg.position.set(40*Math.cos(Math.PI/6),40*Math.sin(Math.PI/6),0);
	  this.myfourleg = new LegFour;
	  this.myfourleg.position.set(-40*Math.cos(Math.PI/6),-40*Math.sin(Math.PI/6),0)
	  this.mythreeleg = new LegThree;
	  this.mythreeleg.position.set(40*Math.cos(Math.PI/6),-40*Math.sin(Math.PI/6),0);
	  this.add(this.mybody, this.mytwoleg, this.mythreeleg, this.myfourleg, this.myoneleg);
	}
	FullSpider.prototype = new THREE.Object3D;
	

	function setup(){
	  var lights = [];
	  var axisHelper = new THREE.AxisHelper( 50 );
          //var Thewall1, Thewall2, Thewall3, Thewall4;
	  fullbody = new FullSpider;
	  fullbody.rotation.x = Math.PI;
	  lights[0] = new THREE.PointLight(0xffffff, 1, 0);
	  lights[1] = new THREE.PointLight(0xffffff, 1, 0);
	  //lights[2] = new THREE.PointLight(0xffffff, 1, 0);
	  
	  lights[0].position.set(0, 0, 100);
	  lights[1].position.set(200, 200, -200);
	  //lights[2].position.set(-200, 200, 200);
	  
	Thewall1 = new THREE.Mesh(new THREE.BoxGeometry(10,210,20), new THREE.MeshNormalMaterial());
  Thewall2 = new THREE.Mesh(new THREE.BoxGeometry(10,210,20), new THREE.MeshNormalMaterial());
  Thewall3 = new THREE.Mesh(new THREE.BoxGeometry(210,10,20), new THREE.MeshNormalMaterial());
  Thewall4 = new THREE.Mesh(new THREE.BoxGeometry(210,10,20), new THREE.MeshNormalMaterial());
  
  //Thewall1.rotation.x = Math.PI/2;
  //Thewall2.rotation.x = Math.PI/2;
  //Thewall3.rotation.x = Math.PI/2;
  //Thewall4.rotation.x = Math.PI/2;

  Thewall1.position.set(100,0,0);
  Thewall2.position.set(-100,0,0); 
  Thewall3.position.set(0,100,0); 
  Thewall4.position.set(0,-100,0); 

  raycaster1 = new THREE.Raycaster(fullbody.position, new THREE.Vector3(1,0,0));
  raycaster2 = new THREE.Raycaster(fullbody.position, new THREE.Vector3(-1,0,0));
  raycaster3 = new THREE.Raycaster(fullbody.position, new THREE.Vector3(0,1,0));
  raycaster4 = new THREE.Raycaster(fullbody.position, new THREE.Vector3(0,-1,0));

  step1 = 0.01;
	  step2 = 0.02;
	  step3 = 0.013;
	  step4 = 0.017;
  rotx = 0.1;
  roty = 0.1;
  rotz = Math.PI/4;
	  
	  scene = new THREE.Scene();
	  scene.add(fullbody, axisHelper);
	  scene.add(lights[0]);
	  scene.add(lights[1]);
	  scene.add(Thewall1, Thewall2, Thewall3, Thewall4);
	  
	  camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight,1,1000);
	  camera.position.set(0,0,120);
	  renderer = new THREE.WebGLRenderer();
	  renderer.setSize( window.innerWidth, window.innerHeight);
	  document.body.appendChild(renderer.domElement);
	}
	

	function loop(){
	  requestAnimationFrame( loop );
	  camera.lookAt(scene.position);

  obstacle1 = raycaster1.intersectObject(Thewall1);
  obstacle2 = raycaster2.intersectObject(Thewall2);
  obstacle3 = raycaster3.intersectObject(Thewall3);
  obstacle4 = raycaster4.intersectObject(Thewall4);
  
  fullbody.position.x += rotx;
  fullbody.position.y += roty;

  if((obstacle1.length > 0 && (obstacle1[0].distance <= 50))|| (obstacle2.length > 0 && (obstacle2[0].distance <= 50)))
  fullbody.rotation.z = rotz;

  if((obstacle3.length > 0 && (obstacle3[0].distance <= 50))|| (obstacle4.length > 0 && (obstacle4[0].distance <= 50)))
  fullbody.rotation.z = rotz;
	
//fullbody.rotation.z -= 0.005;
	  fullbody.myoneleg.rotation.z += step1;
	  if(Math.abs(fullbody.myoneleg.rotation.z)>Math.PI/4)
	    step1 = -step1;
	  fullbody.mytwoleg.rotation.z += step2;
	  if(Math.abs(fullbody.mytwoleg.rotation.z)>Math.PI/4)
	    step2 = -step2;
	  fullbody.myfourleg.rotation.z += step3;
	  if(Math.abs(fullbody.myfourleg.rotation.z)>Math.PI/4)
	    step3 = -step3;
	  fullbody.mythreeleg.rotation.z += step4;
	  if(Math.abs(fullbody.mythreeleg.rotation.z)>Math.PI/4)
	    step4 = -step4;
	  renderer.render (scene, camera);
	}
	

	setup();
	loop();


