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
var sphereMaterial = new THREE.MeshLambertMaterial({color:0x75ff09});
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
const detail = 0;
const octgeometry = new THREE.OctahedronGeometry(radius, detail);
const octmaterial  = new THREE.MeshLambertMaterial({color:0xffee06});
const Octahedron = new THREE.Mesh(octgeometry,octmaterial);
Octahedron.position.set(10,1,2)
Octahedron.castShadow = true;
scene.add(Octahedron);
//sphere.add(Octahedron);
// sphere.add(cube);
cube.add(Octahedron);


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

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

var step = 0 ;
function renderScene(time)
{

  if(resizeRendererToDisplaySize(renderer))
  {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  step += controls.bouncingSpeed;
  sphere.position.y = 2 + 10*Math.abs(Math.sin(step));
  time *= 0.001;

  Octahedron.rotation.x = time;
  Octahedron.rotation.y = time;
  // cube.rotation.x += controls.rotationSpeed;
  cube.rotation.y += controls.rotationSpeed;

  requestAnimationFrame(renderScene);
  renderer.render(scene, camera);

}

document.getElementById("webgl-output").appendChild(renderer.domElement);
requestAnimationFrame(renderScene);

}
//
