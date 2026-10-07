/* Accueil : emblème Elev'n en 3D (Three.js), piloté par le défilement.
   Deux cubes aux couleurs du logo, vus en isométrie, qui s'assemblent puis
   tournent lentement. Progression 0 → 1 fournie par index.html via window.__heroProgression.
   Se coupe si WebGL est indisponible ou si « réduire les animations » est actif. */
import * as THREE from './vendor/three.module.min.js';

export function demarrerAccueil3D(canvas, options){
  const opts = Object.assign({ reduit:false }, options||{});
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true, powerPreference:'high-performance' }); }
  catch(e){ return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio||1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.3;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b0b10, 0.045);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

  /* Couleurs du logo */
  const C = { bleu:0x3b7be0, bleuF:0x2f5fc4, cyan:0x39c6e8, jaune:0xffb627, orange:0xff7a1a, magenta:0xc81d6f, gris:0x6b6b70, grisF:0x3f3f46 };
  const mat = (hex, extra) => new THREE.MeshPhysicalMaterial(Object.assign({ color:hex, roughness:.28, metalness:.08, clearcoat:.9, clearcoatRoughness:.25, envMapIntensity:1.2 }, extra||{}));
  // ordre des faces BoxGeometry : +x, -x, +y, -y, +z, -z
  const cubeA = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), [mat(C.gris), mat(C.grisF), mat(C.bleu), mat(C.bleuF), mat(C.cyan), mat(C.bleuF)]);
  const cubeB = new THREE.Mesh(new THREE.BoxGeometry(1,1,1), [mat(C.orange), mat(C.grisF), mat(C.jaune), mat(C.magenta), mat(C.magenta), mat(C.grisF)]);
  cubeA.castShadow = cubeB.castShadow = true; cubeA.receiveShadow = cubeB.receiveShadow = true;
  const groupe = new THREE.Group(); groupe.add(cubeA, cubeB); scene.add(groupe);

  /* Positions finales (emblème) : B à droite et un peu plus bas que A, en profondeur */
  const finA = new THREE.Vector3(-0.56, 0.3, 0.3), finB = new THREE.Vector3(0.56, -0.3, -0.3);
  const depA = new THREE.Vector3(-3.6, 1.8, 1.0), depB = new THREE.Vector3(3.8, -1.6, -2.2);

  /* Éclats flottants (petits tétraèdres) */
  const eclats = new THREE.Group(); scene.add(eclats);
  const pal = [C.bleu, C.cyan, C.jaune, C.orange, C.magenta, C.gris];
  const rnd = (a,b) => a + Math.random()*(b-a);
  for(let i=0;i<26;i++){
    const m = new THREE.Mesh(new THREE.TetrahedronGeometry(rnd(.06,.16)), mat(pal[i%pal.length], { roughness:.35 }));
    m.position.set(rnd(-4,4), rnd(-2.4,2.4), rnd(-3,1)); m.rotation.set(rnd(0,6), rnd(0,6), rnd(0,6));
    m.userData = { v: new THREE.Vector3(rnd(-.1,.1), rnd(.03,.12), 0), r: rnd(.2,.8), p0: m.position.clone() };
    eclats.add(m);
  }

  /* Sol de réflexion discret + ombre portée */
  const sol = new THREE.Mesh(new THREE.PlaneGeometry(40,40), new THREE.MeshStandardMaterial({ color:0x0b0b10, roughness:.9, metalness:0 }));
  sol.rotation.x = -Math.PI/2; sol.position.y = -1.35; sol.receiveShadow = true; scene.add(sol);

  /* Lumières : clé chaude orange, contre froide bleue, ambiance */
  scene.add(new THREE.HemisphereLight(0x9ab0ff, 0x1a0f08, .55));
  const cle = new THREE.DirectionalLight(0xffd9b0, 2.8); cle.position.set(3, 5, 3); cle.castShadow = true;
  cle.shadow.mapSize.set(1024,1024); cle.shadow.radius = 6; cle.shadow.camera.left = cle.shadow.camera.bottom = -5; cle.shadow.camera.right = cle.shadow.camera.top = 5; scene.add(cle);
  const contre = new THREE.DirectionalLight(0x4c8dff, 1.1); contre.position.set(-4, 2, -3); scene.add(contre);
  const accent = new THREE.PointLight(0xff5a00, 14, 9, 2); accent.position.set(1.5, -0.4, 2.2); scene.add(accent);
  const accent2 = new THREE.PointLight(0xc81d6f, 8, 8, 2); accent2.position.set(-2.2, 1.6, 1.5); scene.add(accent2);

  /* Environnement simple (dégradé) pour les reflets */
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const envGeo = new THREE.SphereGeometry(10, 16, 8);
  const envMat = new THREE.ShaderMaterial({ side:THREE.BackSide, uniforms:{}, vertexShader:'varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }', fragmentShader:'varying vec3 p; void main(){ float t = normalize(p).y*0.5+0.5; vec3 c = mix(vec3(0.02,0.02,0.04), vec3(0.95,0.6,0.35), smoothstep(0.35,1.0,t)); c = mix(c, vec3(0.25,0.45,0.95), smoothstep(0.0,0.25,t)*(1.0-smoothstep(0.25,0.6,t))*0.6); gl_FragColor = vec4(c,1.0); }' });
  envScene.add(new THREE.Mesh(envGeo, envMat));
  scene.environment = pmrem.fromScene(envScene, 0.04).texture;

  /* Souris (parallaxe) */
  let mx = 0, my = 0, tmx = 0, tmy = 0;
  if(!matchMedia('(hover: none)').matches){
    addEventListener('mousemove', e => { tmx = (e.clientX/innerWidth - .5); tmy = (e.clientY/innerHeight - .5); }, { passive:true });
  }

  function taille(){
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w/h; camera.updateProjectionMatrix();
  }
  taille(); addEventListener('resize', taille);

  const lisse = t => t*t*(3-2*t);
  let t0 = performance.now(), visible = true, raf = null;
  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3();

  function cadre(now){
    if(!visible){ raf = null; return; }
    const t = (now - t0)/1000;
    const p = Math.min(1, Math.max(0, window.__heroProgression || 0));
    const asm = lisse(Math.min(1, p/0.55));            // assemblage sur la première moitié
    const show = Math.max(0, (p-0.55)/0.45);           // présentation sur la seconde
    mx += (tmx-mx)*.05; my += (tmy-my)*.05;

    // positions et rotations des cubes
    tmpA.lerpVectors(depA, finA, asm); tmpB.lerpVectors(depB, finB, asm);
    cubeA.position.copy(tmpA); cubeB.position.copy(tmpB);
    const wob = opts.reduit ? 0 : Math.sin(t*.9)*.04;
    cubeA.rotation.set((1-asm)*1.6 + wob, (1-asm)*2.2 + Math.PI/4, (1-asm)*0.8);
    cubeB.rotation.set((1-asm)*-1.2 - wob, (1-asm)*-1.8 + Math.PI/4, (1-asm)*1.1);
    const flot = opts.reduit ? 0 : Math.sin(t*.7)*.06;
    cubeA.position.y += flot; cubeB.position.y -= flot;

    // groupe : vue isométrique (inclinaison ~35°) + rotation de présentation + parallaxe souris
    groupe.rotation.x = 0.615 + my*0.25 + (1-asm)*0.3;
    groupe.rotation.y = -0.1 + show*1.2 + mx*0.5 + (opts.reduit ? 0 : Math.sin(t*.35)*.08);
    const ech = 1.08 - show*0.14; groupe.scale.setScalar(ech);
    groupe.position.y = -0.1 + show*0.15;

    // éclats : dérive lente, dispersion quand on assemble
    eclats.children.forEach((m,i) => {
      const d = m.userData;
      m.position.x = d.p0.x + Math.sin(t*.25 + i)*.35 + mx*0.8*(1+i%3);
      m.position.y = d.p0.y + Math.cos(t*.3 + i*1.3)*.25 - p*1.2 + my*-0.5;
      m.rotation.x += 0.004*d.r; m.rotation.y += 0.006*d.r;
      m.material.opacity = 1; m.visible = true;
    });

    camera.position.set(0, 0.5, 8.2 - asm*0.8); camera.lookAt(0, -0.05, 0);
    accent.intensity = 10 + Math.sin(t*1.3)*4;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(cadre);
  }
  raf = requestAnimationFrame(cadre);

  const obs = new IntersectionObserver(es => { visible = es[0].isIntersecting; if(visible && !raf) raf = requestAnimationFrame(cadre); });
  obs.observe(canvas);
  return { renderer, scene };
}
