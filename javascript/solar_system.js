function solar_system()
{
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const objects = []


  const camera = new THREE.PerspectiveCamera(70,2,0.1,1000);
  camera.position.set(50,100,100);
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

const mercuryorbit = new THREE.Object3D();
mercuryorbit.position.x = 20;
solar.add(mercuryorbit);
objects.push(mercuryorbit);


const earthorbit = new THREE.Object3D();
earthorbit.position.x = 50;
mercuryorbit.add(earthorbit);
objects.push(earthorbit);
//Making of Sun

const venusorbit = new THREE.Object3D();
venusorbit.position.x = 30;
solar.add(venusorbit);
objects.push(venusorbit);

const marsorbit = new THREE.Object3D();
marsorbit.position.x = 90;
solar.add(marsorbit);
objects.push(marsorbit);

const sunMaterial = new THREE.MeshPhongMaterial({emissive:0xFFFF00});
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
sunMesh.position.set(0,0,0)
sunMesh.scale.set(15,15,15);
scene.add(sunMesh);
objects.push(sunMesh);

  
  const earthMaterial = new THREE.MeshPhongMaterial({emissive:0x007d01});
  const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
  earthMesh.scale.set(6,6,6);
  scene.add(earthMesh);
  earthorbit.add(earthMesh);
  objects.push(earthMesh);

  const mercuryMaterial = new THREE.MeshPhongMaterial({emissive:0xff7300});
  const mercuryMesh = new THREE.Mesh(sphereGeometry,mercuryMaterial);
  mercuryMesh.scale.set(3,3,3)
  scene.add(mercuryMesh);
  mercuryorbit.add(mercuryMesh);
  objects.push(mercuryMesh);

  const venusMaterial = new THREE.MeshPhongMaterial({emissive:0xcc8316});
  const venusMesh = new THREE.Mesh(sphereGeometry,venusMaterial);
  venusMesh.scale.set(2,2,2)
  scene.add(venusMesh);
  venusorbit.add(venusMesh);
  objects.push(venusMesh);

  const marsMaterial = new THREE.MeshPhongMaterial({emissive:0xcc8316});
  const marsMesh = new THREE.Mesh(sphereGeometry,marsMaterial);
  marsMesh.scale.set(3,3,3)
  scene.add(marsMesh);
  marsorbit.add(marsMesh);
  objects.push(marsMesh);
//MAking Moon

const moonMaterial = new THREE.MeshPhongMaterial({emissive:0x9a9a9a})
const moonMesh = new THREE.Mesh(sphereGeometry,moonMaterial);
moonMesh.scale.set(2,2,2)
moonMesh.position.x = 10;
earthorbit.add(moonMesh);
objects.push(moonMesh);

const marsMoonMaterial = new THREE.MeshPhongMaterial({emissive:0x9a9a9a})
const marsMoonMesh = new THREE.Mesh(sphereGeometry,marsMoonMaterial);
marsMoonMesh.scale.set(2,2,2)
marsMoonMesh.position.x = 8;
marsorbit.add(marsMoonMesh);
objects.push(marsMoonMesh);

const marsSecondMoonMaterial = new THREE.MeshPhongMaterial({emissive:0x9a9a9a})
const marsSecondMoonMesh = new THREE.Mesh(sphereGeometry,marsSecondMoonMaterial);
marsSecondMoonMesh.position.x = 7;
marsMoonMesh.add(marsSecondMoonMesh);
objects.push(marsSecondMoonMesh);

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
