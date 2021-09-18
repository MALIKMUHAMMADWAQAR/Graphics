function init()
{
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth /
window.innerHeight,0.1, 1000);
var renderer =new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);


var axes = new THREE.AxesHelper(20);
scene.add(axes);

var planeGeometry = new THREE.PlaneGeometry(40,20)
var planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xAAAAAA
});


var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(0,0,0);
scene.add(plane);

var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF0000,
    wireframe: true
});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// position the cube
cube.position.set(-15, 3, 0);

// add the cube to the scene
scene.add(cube);

// create a sphere
var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
var sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777FF,
    wireframe: true
});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

// position the sphere
sphere.position.set(15, 4, 2);

// add the sphere to the scene
scene.add(sphere);
camera.position.set(-30, 30, 30);
camera.lookAt(scene.position);

document.getElementById("webgl-output").appendChild(renderer.domElement);
renderer.render(scene, camera);
}
