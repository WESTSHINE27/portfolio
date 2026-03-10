import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import modelUrl from "../../../assets/models/phone.glb?url";
import styles from "./ModelViewer.module.scss";

export default function ModelViewer() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls (optional for user drag)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Load GLB model
    const loader = new GLTFLoader();
    let loadedModel;

    loader.load(
      modelUrl,
      (gltf) => {
        loadedModel = gltf.scene;
        loadedModel.scale.set(1, 1, 1); // original size
        loadedModel.position.set(0, 0, 0); // original position
        scene.add(loadedModel);

        // Auto-center camera based on model
        const box = new THREE.Box3().setFromObject(loadedModel);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());

        camera.position.copy(center);
        camera.position.z += size * 1.5;
        camera.lookAt(center);
      },
      undefined,
      (error) => console.error("Model failed to load:", error)
    );

    // Responsive resize
    const setRendererSize = () => {
      const width = canvas.clientWidth || 500;
      const height = canvas.clientHeight || 500;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", setRendererSize);
    setRendererSize();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      if (loadedModel) loadedModel.rotation.y += 0.02; // slow rotation
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setRendererSize);
      if (loadedModel) scene.remove(loadedModel);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles["content-section"]} />;
}