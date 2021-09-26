function init()
{
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();


renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

//Creating a plane and adding it to Scene
var planeGeometry = new THREE.PlaneGeometry(60,20);
var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(10,0,0);
scene.add(plane);


//Creating sphere and adding it to Scene

var sphereGeometry = new THREE.SphereGeometry(4,20,20);
var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(20,4,2);
sphere.castShadow = true;
scene.add(sphere);

//Creating a cube and adding it to Scene

var cubeGeometry = new THREE.BoxGeometry(4,4,4);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x00008b});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(-10,4,0);
cube.castShadow = true;

scene.add(cube);

//Adding light to scene
 var spotLight = new THREE.SpotLight(0xffffff)
 spotLight.position.set(-10,20,-5)
 spotLight.castShadow = true;

 scene.add(spotLight);

const radius =2;
const detail = 5;
const octgeometry = new THREE.OctahedronGeometry(radius, detail);
const octmaterial  = new THREE.MeshLambertMaterial({color:0x06fff0})
const Octahedron = new THREE.Mesh(octgeometry,octmaterial);
Octahedron.position.set(5,1,2)
Octahedron.castShadow = true;

scene.add(Octahedron)

 cube.add(Octahedron);

// sphere.add(Octahedron);
// sphere.add(cube);

var ambienLight = new THREE.AmbientLight(0x353535);
scene.add(ambienLight)
//setting camera position
camera.position.set(-30,40,30);
camera.lookAt(scene.position);

var controls = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.04;
};

var gui = new dat.GUI();
gui.add(controls, 'rotationSpeed', 0.02, 0.5)
gui.add(controls, 'bouncingSpeed', 0.04, 0.5)

var step = 0 ;
function renderScene(time)
{
  // stats.update();
  // trackballControls.update(clock.getDelta());

  step += controls.bouncingSpeed;
  sphere.position.x = 20 + 10*(Math.cos(step));
  sphere.position.y = 2 + 10*Math.abs(Math.sin(step));
  time *= 0.001;
  cube.rotation.y = time;
  //cube.rotation.x += controls.rotationSpeed;
  //cube.rotation.y += controls.rotationSpeed;
  // cube.rotation.z += controls.rotationSpeed;
  requestAnimationFrame(renderScene);
  renderer.render(scene, camera)

}

document.getElementById("webgl-output").appendChild(renderer.domElement);
requestAnimationFrame(renderScene);

}
//
