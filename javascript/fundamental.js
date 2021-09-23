function main() {
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 100;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 2;


  const scene = new THREE.Scene();

function cubeInstances(colormaterial, xpos)
{
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const material = new THREE.MeshPhongMaterial({color: colormaterial});  // greenish blue

  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = xpos;
  scene.add(cube);
  renderer.render(scene, camera);
  return cube;
}

cube =  [cubeInstances(0x32a852, 0),cubeInstances(0x0ee3c7, 2),cubeInstances(0x910ee3,-2)]


  function render(time)
  {
    time *= 0.001;  // convert time to seconds
    for (let i = 0; i < 3; i++)
    {
    cube[i].rotation.x = time;
    cube[i].rotation.y = time;//These rotations are in radians. There are 2 pi radians in a circle so our cube should turn around once on each axis in about 6.28 seconds.
    cube[i].rotation.z = time;
  }
    renderer.render(scene, camera);
  requestAnimationFrame(render);//We then render the scene and request another animation frame to continue our loop.
  //Outside the loop we call requestAnimationFrame one time to start the loop.
  }
  requestAnimationFrame(render);
  {
    const color = 0xADD8E6;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0,0,4); //we're setting the light's position to -1, 2, 4 so it's slightly on the left, above, and behind our camera.
    scene.add(light);
  }
 //requestAnimationFrame is a request to the browser that you want to animate something. You pass it a function to be called

}
