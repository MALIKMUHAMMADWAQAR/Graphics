function init()
{
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth /
window.innerHeight,0.1, 1000);
var renderer =new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0x000000));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.Enabled = true;

//
// var axes = new THREE.AxesHelper(20);
// scene.add(axes);

var planeGeometry = new THREE.PlaneGeometry(60,20,1,1)
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff
});


var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -0.5 * Math.PI;
plane.position.set(15,0,0);

scene.add(plane);

var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xff0000
});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.castShadow = true;

// position the cube
cube.position.set(-4, 4, 0);

// add the cube to the scene
scene.add(cube);

// create a sphere
var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x7777ff,
});
var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//sphere.castShadow = true;
// position the sphere
sphere.position.set(20, 0, 2);
sphere.castShadow = true;
// add the sphere to the scene
scene.add(sphere);
camera.position.set(-30, 40, 30);
camera.lookAt(scene.position);

var ambienLight = new THREE.AmbientLight(0x353535);
scene.add(ambienLight);


var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-10, 20, -5);
spotLight.castShadow = true;
scene.add(spotLight);




document.getElementById("webgl-output").appendChild(renderer.domElement);
renderer.render(scene, camera);
}
