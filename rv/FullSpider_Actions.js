var scene, camera, renderer;
var step1, step2, step3, step4, fullbody;
var rotx, roty, rotz;
var obstacle1, obstacle2, obstacle3, obstacle4;
var raycaster1, raycaster2, raycaster3, raycaster4;
var floyd, coord, step;
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
	
function FullSpider( x=0, y=0 ){
  THREE.Object3D.call(this);
  Agent.call(this,x,y);
  this.sensor = new Sensor();
  this.actuator = new Array();
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

