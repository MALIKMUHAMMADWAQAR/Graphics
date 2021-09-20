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
cube.position.set(-15,4,0);
cube.castShadow = true;

scene.add(cube);

//Adding light to scene
 var spotLight = new THREE.SpotLight(0xffffff)
 spotLight.position.set(-10,20,-5)
 spotLight.castShadow = true;

 scene.add(spotLight);


 var ambienLight = new THREE.AmbientLight(0x353535);
 scene.add(ambienLight);
//setting camera position
camera.position.set(-30,40,30);
camera.lookAt(scene.position);

document.getElementById("webgl-output").appendChild(renderer.domElement);
renderer.render(scene,camera);
}
//
