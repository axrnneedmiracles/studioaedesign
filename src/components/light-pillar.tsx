'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer, RenderPass, EffectPass, BloomEffect } from 'postprocessing';

const LightPillar = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 50);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Post-processing
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomEffect = new BloomEffect({
      intensity: 1.5,
      luminanceThreshold: 0.1,
      luminanceSmoothing: 0.2,
    });
    composer.addPass(new EffectPass(camera, bloomEffect));

    // Pillar setup
    const pillarCount = 50;
    const pillarGeometry = new THREE.CylinderGeometry(0.1, 0.1, 20, 8);
    
    // Custom shader for glowing pillars
    const pillarMaterial = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0.0 },
            uColor: { value: new THREE.Color(0x00ffff) }
        },
        vertexShader: `
            uniform float uTime;
            varying float vOpacity;
            void main() {
                vec3 pos = position;
                pos.x += sin(pos.y * 0.1 + uTime * 0.5) * 2.0;
                pos.z += cos(pos.y * 0.1 + uTime * 0.5) * 2.0;
                
                // Fade out at top and bottom
                vOpacity = 1.0 - abs(position.y / 10.0);

                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
        fragmentShader: `
            uniform vec3 uColor;
            varying float vOpacity;
            void main() {
                gl_FragColor = vec4(uColor, vOpacity * 0.5);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    const instancedMesh = new THREE.InstancedMesh(pillarGeometry, pillarMaterial, pillarCount);
    scene.add(instancedMesh);

    const dummy = new THREE.Object3D();
    for (let i = 0; i < pillarCount; i++) {
        dummy.position.set(
            (Math.random() - 0.5) * 150,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 100 - 50
        );
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
    }
    instancedMesh.instanceMatrix.needsUpdate = true;


    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      composer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      if (!mountRef.current) return; 
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      pillarMaterial.uniforms.uTime.value = elapsedTime;
      instancedMesh.position.y = (instancedMesh.position.y - 0.05) % 20;

      composer.render();
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pillarGeometry.dispose();
      pillarMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default LightPillar;
