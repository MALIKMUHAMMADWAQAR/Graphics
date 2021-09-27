function solar_system()
{
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const objects = []


  const camera = new THREE.PerspectiveCamera(70,2,0.1,1000);
  camera.position.set(0, 70, 0);
  camera.lookAt(0, 0, 0);
  const scene = new THREE.Scene();
//One sphere geometry for each sphere
  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;
  const sphereGeometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
//Adding parent nodes
const solar = new THREE.Object3D();
scene.add(solar);
objects.push(solar);

const earthorbit = new THREE.Object3D();
earthorbit.position.x = 20;
solar.add(earthorbit);
objects.push(earthorbit);
//Making of Sun

  const sunMaterial = new THREE.MeshPhongMaterial({emissive:0xFFFF00});
  const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
  sunMesh.position.set(0,0,0)
  sunMesh.scale.set(5,5,5);
  scene.add(sunMesh);
  objects.push(sunMesh);


//Adding light in the scene
  // const color = 0xffffff;
  // const intensity = 1;
  // const light = new THREE.DirectionalLight(color, intensity);
  // scene.add(light);
//Making of earth
  const earthMaterial = new THREE.MeshPhongMaterial({emissive:0x007d01});
  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthMesh.scale.set(2,2,2);
  scene.add(earthMesh);
  earthorbit.add(earthMesh);
  objects.push(earthMesh);
//MAking Moon

const moonMaterial = new THREE.MeshPhongMaterial({emissive:0x9a9a9a})
const moonMesh = new THREE.Mesh(sphereGeometry,moonMaterial);
moonMesh.position.x = 5;
earthorbit.add(moonMesh);
objects.push(moonMesh);

//Child

solar.add(sunMesh);



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

 function render(time) {
   time *= 0.001;

   if (resizeRendererToDisplaySize(renderer)) {
     const canvas = renderer.domElement;
     camera.aspect = canvas.clientWidth / canvas.clientHeight;
     camera.updateProjectionMatrix();
   }

   objects.forEach((obj) => {
     obj.rotation.y = time;
   });

   renderer.render(scene, camera);

   requestAnimationFrame(render);
 }

 requestAnimationFrame(render);
}
