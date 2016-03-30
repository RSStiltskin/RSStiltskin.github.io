function setup(){
  cubo1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
  cubo2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), new THREE.MeshNormalMaterial());
  pelota= new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshNormalMaterial());
  
  cubo1.pos
