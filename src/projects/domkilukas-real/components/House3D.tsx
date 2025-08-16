import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface House3DProps {
  modelType: 'eco-line-60' | 'classic' | 'modern';
  autoRotate?: boolean;
  showWireframe?: boolean;
}

const House3D: React.FC<House3DProps> = ({ 
  modelType = 'eco-line-60', 
  autoRotate = true,
  showWireframe = false 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(10, 10, 10);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 2;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create house based on model type
    const houseGroup = createHouse(modelType, showWireframe);
    scene.add(houseGroup);

    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelType, autoRotate, showWireframe]);

  const createHouse = (type: string, wireframe: boolean) => {
    const group = new THREE.Group();

    // Base house structure
    const houseGeometry = new THREE.BoxGeometry(8, 6, 10);
    const houseMaterial = new THREE.MeshLambertMaterial({ 
      color: type === 'eco-line-60' ? 0x4CAF50 : 0x8B4513,
      wireframe 
    });
    const house = new THREE.Mesh(houseGeometry, houseMaterial);
    house.position.y = 3;
    house.castShadow = true;
    house.receiveShadow = true;
    group.add(house);

    // Roof
    const roofGeometry = new THREE.ConeGeometry(6, 3, 4);
    const roofMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x8B0000,
      wireframe 
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 7.5;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    // Windows
    const windowGeometry = new THREE.PlaneGeometry(1.5, 1.5);
    const windowMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x87CEEB,
      transparent: true,
      opacity: 0.8,
      wireframe 
    });

    // Front windows
    const frontWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow1.position.set(-2, 3, 5.1);
    group.add(frontWindow1);

    const frontWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow2.position.set(2, 3, 5.1);
    group.add(frontWindow2);

    // Side windows
    const sideWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
    sideWindow1.position.set(-4.1, 3, 2);
    sideWindow1.rotation.y = Math.PI / 2;
    group.add(sideWindow1);

    const sideWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
    sideWindow2.position.set(4.1, 3, -2);
    sideWindow2.rotation.y = -Math.PI / 2;
    group.add(sideWindow2);

    // Door
    const doorGeometry = new THREE.PlaneGeometry(1.5, 3);
    const doorMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x8B4513,
      wireframe 
    });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 1.5, 5.1);
    group.add(door);

    // Eco features for eco-line-60
    if (type === 'eco-line-60') {
      // Solar panels on roof
      const solarPanelGeometry = new THREE.BoxGeometry(2, 0.1, 1);
      const solarPanelMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x2F4F4F,
        wireframe 
      });
      
      for (let i = 0; i < 3; i++) {
        const solarPanel = new THREE.Mesh(solarPanelGeometry, solarPanelMaterial);
        solarPanel.position.set(-2 + i * 2, 8.5, 0);
        group.add(solarPanel);
      }

      // Green wall
      const greenWallGeometry = new THREE.PlaneGeometry(8, 4);
      const greenWallMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x228B22,
        wireframe 
      });
      const greenWall = new THREE.Mesh(greenWallGeometry, greenWallMaterial);
      greenWall.position.set(0, 2, -5.1);
      group.add(greenWall);
    }

    return group;
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-800">
          Model: {modelType.replace('-', ' ').toUpperCase()}
        </h3>
        <p className="text-xs text-gray-600">
          {modelType === 'eco-line-60' ? 'Ekologiczny dom modułowy' : 'Klasyczny dom'}
        </p>
      </div>
    </div>
  );
};

export default House3D;
