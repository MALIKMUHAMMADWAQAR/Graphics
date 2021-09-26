function animate()
{
  const canvas = document.querySelector("#canvas")
  const renderer = new THREE.WebGLRenderer({canvas});



  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 5;

  const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
  camera.position.z = 2;
  camera.lookAt(scene.position)

  const scene = new THREE.Scene();


 const boxGeometry = new THREE.BoxGeometry(1,1,1); //width height depth
 const boxMaterial = new THREE.MeshBasicMaterial({color:0x09eff6});
 const box = new THREE.Mesh(boxGeometry, boxMaterial);


 scene.add(box);
 
 renderer.render(scene,camera);


}
animate();
