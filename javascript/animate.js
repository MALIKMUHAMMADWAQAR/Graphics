function animate()
{
  const canvas = document.querySelector("#an-canvas");
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;
  const near = 0.1;
  const far = 1000;

  const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
  camera.position.set(0,2,5);

  const scene = new THREE.Scene();


  //Creating a plane and adding it to Scene
  var planeGeometry = new THREE.PlaneGeometry(100,60);
  var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(2,-1,-20);
  scene.add(plane);

  const geometry = new THREE.BoxGeometry(1,1,1); //width height depth


  function cube_instance(color,pos_x)
  {
    const material = new THREE.MeshPhongMaterial({color:color});
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);
    box.position.set(pos_x,0,0)
    return box;
  }

boxes = [cube_instance(0x2da266,0), cube_instance(0x9f9615,2), cube_instance(0x30ac21,-2)];

  {
    color = 0x36905d;
    intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5,2,15);
    scene.add(light);

  }
  var ambienLight = new THREE.AmbientLight(0x353535);
  scene.add(ambienLight);

  // function that checks if the renderer's canvas is not already the size it is being displayed as and if so set its size.

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


  function render(time)
  {
    time *= 0.001;

    //Strechy problem
    if(resizeRendererToDisplaySize(renderer))
    {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

    boxes.forEach((box,index) => {
    const speed = 1 + index * .1;
    const rot = time * speed;
    box.rotation.x = rot;
    // box.rotation.y = rot;
    // box.rotation.z = rot;



  });

    requestAnimationFrame(render);
    renderer.render(scene,camera);
  }
  requestAnimationFrame(render);
  // renderer.render(scene,camera);

}
