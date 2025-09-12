import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Table3D.css";

import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import ArrowCursor from "./extras/ArrowCurser";

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);
const RoomScene = ({ onScrollComplete }) => {
  // Refs for mounting Three.js scene and scroll container
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const lastTriggerRef = useRef(null); // 👈 Add this

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // === SCENE SETUP ===
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#222222"); // Dark bluish background

    // === CAMERA SETUP ===
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.4, 5.5); // x, y, z (increase z = zoom out, decrease = zoom in)
    camera.lookAt(0, 1, 0); // Point the camera to the center of the table

    // === RENDERER SETUP ===
    const renderer = new THREE.WebGLRenderer({ antialias: true }); // Smooth edges
    renderer.setSize(width, height); // Match canvas size to container
    renderer.setPixelRatio(window.devicePixelRatio); // HiDPI support
    renderer.shadowMap.enabled = true; // Enable shadows
    mount.appendChild(renderer.domElement); // Add renderer canvas to DOM

    // === LIGHTING SETUP ===
    scene.add(new THREE.AmbientLight(0x404060, 1)); // Ambient light (soft fill light)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1); // Sunlight-like light
    dirLight.position.set(5, 10, 7.5); // Light angle
    dirLight.castShadow = true;
    scene.add(dirLight);

    const spotLight = new THREE.SpotLight(0xffffff, 3, 20, Math.PI / 6, 0.3, 2);
    // ↑ Increase intensity = brighter; Decrease angle = narrower beam
    spotLight.position.set(0, 5, 5); // Above and in front of table
    spotLight.castShadow = true;
    scene.add(spotLight);
    scene.add(spotLight.target); // Where the spotlight points

    // === TEXTURE LOADER ===
    const textureLoader = new THREE.TextureLoader();

    // === TABLE TOP ===
    const top = new THREE.Mesh(
      new THREE.BoxGeometry(4, 0.15, 2), // width, height, depth
      new THREE.MeshStandardMaterial({
        color: 0x28201A,
        roughness: 0.4, // Increase = less shiny
        metalness: 0.1, // Increase = more metallic
      })
    );
    top.position.y = 1; // Raise it above the ground
    top.castShadow = true;
    top.receiveShadow = true;
    scene.add(top);

    // === TABLE LEGS ===
    const legMat = new THREE.MeshStandardMaterial({
      color: "#666", // Gray steel
      metalness: 0.8,
      roughness: 0.3,
    });
    const legGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.1, 32); // radiusTop, radiusBottom, height
    const legPositions = [
      [-1.7, 0.5, -0.8],
      [1.7, 0.5, -0.8],
      [-1.7, 0.5, 0.8],
      [1.7, 0.5, 0.8],
    ];
    legPositions.forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, legMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      leg.receiveShadow = true;
      scene.add(leg);
    });

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(7, 4), // Width x Depth of the floor
      new THREE.MeshStandardMaterial({ color: "#000000", side: THREE.DoubleSide })
    );
    floor.rotation.x = -Math.PI / 2; // Rotate flat horizontally
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    const magazineTexture = textureLoader.load("/cover/cover.jpg", (tex) => {
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
    });

    const magazine = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.03, 1.3), // Like a flat box
      new THREE.MeshStandardMaterial({
        map: magazineTexture,
        roughness: 0.6,
        metalness: 0.05,
      })
    );
    magazine.position.set(0, 1.1, 0); // On top of table
    magazine.castShadow = true;
    scene.add(magazine);

    // === PAPER NEXT TO MAGAZINE ===
    // === PAPER 1 ===
    const paper = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 1), // Width x height of the paper
      new THREE.MeshStandardMaterial({
        color: 0xffffff, // White paper
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide,
      })
    );
    paper.rotation.x = -Math.PI / 2; // Lay flat horizontally
    paper.position.set(1.2, 1.101, 0); // Base paper
    paper.castShadow = true;
    paper.receiveShadow = true;
    scene.add(paper);

    // === PAPER 2 (Slightly Rotated & Raised) ===
    const paper2 = new THREE.Mesh(
      new THREE.PlaneGeometry(0.7, 1),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide,
      })
    );
    paper2.rotation.x = -Math.PI / 2;
    paper2.rotation.z = Math.PI / 28; // Slight tilt
    paper2.position.set(1.2, 1.105, 0); // Slightly above the first one
    paper2.castShadow = true;
    paper2.receiveShadow = true;
    scene.add(paper2);


    // === PEN NEXT TO PAPER ===
    const penBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.6, 16), // Thin cylinder (pen shaft)
      new THREE.MeshStandardMaterial({
        color: 0x2222ff, // Blue pen
        metalness: 0.6,
        roughness: 0.3,
      })
    );
    penBody.rotation.x = Math.PI / 2; // Lay horizontally
    penBody.rotation.z = Math.PI / 5; // Lay horizontally
    penBody.position.set(1.2, 1.12, 0.4); // Slightly rotated and on the paper
    penBody.castShadow = true;
    scene.add(penBody);

    // Base pad
    const lampBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.05, 32),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.6, roughness: 0.3 })
    );
    lampBase.position.set(-1.4, 1.1, 0); // On the table
    lampBase.castShadow = true;
    lampBase.receiveShadow = true;
    scene.add(lampBase);

    // First arm (bottom segment)
    const lowerArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.6, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5, roughness: 0.4 })
    );
    lowerArm.position.set(-1.4, 1.3, 0); // Midpoint
    lowerArm.rotation.z = 2 * Math.PI / 2; // Tilt forward
    lowerArm.castShadow = true;
    scene.add(lowerArm);

    // Second arm (upper segment)
    const upperArm = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.3, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.5, roughness: 0.4 })
    );
    upperArm.position.set(-1.3, 1.69, 0.005); // Forward reach
    upperArm.rotation.z = -Math.PI / 4; // Angle down
    upperArm.castShadow = true;
    scene.add(upperArm);

    // Bulb cover (lamp head)
    const lampHead = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.15, 0.3, 32, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.6,
        roughness: 0.3,
        side: THREE.DoubleSide,
      })
    );
    lampHead.rotation.y = Math.PI / 25;
    lampHead.rotation.z = Math.PI / 3;
    lampHead.position.set(-1.09, 1.8, -0.009); // At the end of the upper arm1
    lampHead.castShadow = true;
    scene.add(lampHead);

    // Light bulb inside
    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshStandardMaterial({
        emissive: 0xffffaa,
        emissiveIntensity: 2,
        color: 0xffffff,
      })
    );
    bulb.position.set(-0.95, 1.73, -0.009); // Inside the lamp head
    bulb.castShadow = true;
    scene.add(bulb);

    // SpotLight to mimic bulb emission
    const lampLight = new THREE.SpotLight(0xffcc66, 2.5, 3, Math.PI / 4, 0.4, 1);
    lampLight.position.set(-1.25, 1.75, -0.4);
    lampLight.target.position.set(0, 1.1, 0); // Aim at magazine center
    lampLight.castShadow = true;
    scene.add(lampLight);
    scene.add(lampLight.target);


    // === ROOM WALLS ===
    const roomWidth = 7;
    const roomHeight = 4;
    const roomDepth = 4;

    const wallPattern = textureLoader.load("/src/components/textures/dark.jpg", (texture) => {
      texture.encoding = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      texture.magFilter = THREE.LinearFilter;

      // Optional: enable repeating if the image is small (for detail)
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
    });

    const backWall = new THREE.Mesh(
      new THREE.PlaneGeometry(roomWidth, roomHeight),
      new THREE.MeshStandardMaterial({
        map: wallPattern,
        color: 0x222222, // Slight tint to darken, but brighter than 0x111111
        side: THREE.DoubleSide,
        roughness: 0.6, // a bit more reflection helps reveal texture
        metalness: 0.2,
      })
    );

    backWall.position.set(0, roomHeight / 2, -roomDepth / 2);
    scene.add(backWall);

    // === WALL LIGHTS (back wall) ===
    const createWallLight = (x, y, z) => {
      // Wooden base
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 0.04, 32),
        new THREE.MeshStandardMaterial({ color: 0xa87c4f, metalness: 0.2, roughness: 0.7 })
      );
      base.rotation.x = Math.PI / 2;
      base.position.set(x, y, z);
      base.castShadow = true;
      scene.add(base);

      // Rope (as two small cylinders angled down)
      const ropeMat = new THREE.MeshStandardMaterial({ color: 0xe0c097, roughness: 1 });
      const ropeGeo = new THREE.CylinderGeometry(0.01, 0.01, 0.25, 8);

      const leftRope = new THREE.Mesh(ropeGeo, ropeMat);
      leftRope.position.set(x - 0.05, y - 0.15, z - 0.02);
      leftRope.rotation.z = Math.PI / 10;
      scene.add(leftRope);

      const rightRope = new THREE.Mesh(ropeGeo, ropeMat);
      rightRope.position.set(x + 0.05, y - 0.15, z - 0.02);
      rightRope.rotation.z = -Math.PI / 10;
      scene.add(rightRope);

      // Bulb (glowing)
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshStandardMaterial({
          color: 0xffffff,
          emissive: 0xffffcc,
          emissiveIntensity: 2,
        })
      );
      bulb.position.set(x, y - 0.3, z);
      bulb.castShadow = true;
      scene.add(bulb);

      // Add actual light source
      const bulbLight = new THREE.PointLight(0xfff2cc, 1, 2); // soft yellow
      bulbLight.position.set(x, y - 0.3, z);
      scene.add(bulbLight);
    };

    // Call it for two bulbs
    createWallLight(-1.5, 2.5, -1.99); // Left side of back wall
    createWallLight(1.6, 2.3, -1.99);  // Right side of back wall

    // === PURPLE NEON WALL-EDGE LIGHTS ===
    const neonMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000, // Black surface (invisible)
      emissive: new THREE.Color(0x8a2be2), // Purple glow (BlueViolet)
      emissiveIntensity: 3,
    });

    const neonHeight = 0.03;
    const neonDepth = 0.05;

    // Back wall bottom strip
    const backNeon = new THREE.Mesh(
      new THREE.BoxGeometry(roomWidth, neonHeight, neonDepth),
      neonMaterial
    );
    backNeon.position.set(0, neonHeight / 2 + 0.01, -roomDepth / 2 + 0.001);
    scene.add(backNeon);

    // Left wall bottom strip
    const leftNeon = new THREE.Mesh(
      new THREE.BoxGeometry(roomDepth, neonHeight, neonDepth),
      neonMaterial
    );
    leftNeon.rotation.y = Math.PI / 2;
    leftNeon.position.set(-roomWidth / 2 + 0.001, neonHeight / 2 + 0.01, 0);
    scene.add(leftNeon);

    // Right wall bottom strip
    const rightNeon = new THREE.Mesh(
      new THREE.BoxGeometry(roomDepth, neonHeight, neonDepth),
      neonMaterial
    );
    rightNeon.rotation.y = -Math.PI / 2;
    rightNeon.position.set(roomWidth / 2 - 0.001, neonHeight / 2 + 0.01, 0);
    scene.add(rightNeon);
    // === WALL BOOK RACK (Right Wall) ===

    // Rack (shelf)
    const rack = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.1, 0.3), // width, thickness, depth
      new THREE.MeshStandardMaterial({
        color: 0xcaa472, // light wood tone
        roughness: 0.8,
        metalness: 0.1,
      })
    );
    rack.position.set(roomWidth / 2 - 0.06, 2, 0); // Near center of right wall
    rack.rotation.y = -Math.PI / 2; // Attach to right wall
    rack.castShadow = true;
    rack.receiveShadow = true;
    scene.add(rack);

    // === BOOKS ===
    const bookColors = [0x547aa5, 0xde7778, 0x89b66c, 0xeac36c];
    bookColors.forEach((color, i) => {
      const book = new THREE.Mesh(
        new THREE.BoxGeometry(0.11, 0.4, 0.26),
        new THREE.MeshStandardMaterial({
          color,
          roughness: 0.6,
          metalness: 0.2,
        })
      );
      book.position.set(roomWidth / 2 - 0.01, 2.15, -0.2 + i * 0.22);
      book.rotation.y = -Math.PI / 2;
      book.castShadow = true;
      scene.add(book);
    });

    // Trunk (slightly thick, green stem)
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.04, 0.8, 12),
      new THREE.MeshStandardMaterial({ color: 0x66aa33, roughness: 0.8 })
    );
    trunk.position.set(-3.05, 0.8, -0.4);
    trunk.castShadow = true;
    scene.add(trunk);

    // Function to create a leaf
    const createLeaf = () => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.quadraticCurveTo(0.1, 0.3, 0, 0.6);
      shape.quadraticCurveTo(-0.1, 0.3, 0, 0);
      const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.02, bevelEnabled: false });
      geometry.center();
      return new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        color: 0xa8e64d,
        roughness: 0.7,
        side: THREE.DoubleSide,
      }));
    };

    const trunkX = -3.05;
    const trunkZ = -0.4;

    // Leaf 1: slightly to the right and forward, tilted upward and sideways
    const leaf1 = createLeaf();
    leaf1.position.set(trunkX + 0.12, 1.35, trunkZ - 0.05);
    leaf1.rotation.y = Math.PI / 1.8;
    leaf1.rotation.z = -Math.PI / 30;
    leaf1.rotation.x = -Math.PI / 10;

    scene.add(leaf1);

    // Leaf 2: directly behind and above trunk
    const leaf2 = createLeaf();
    leaf2.position.set(trunkX, 1.3, trunkZ - 0.1);
    leaf2.rotation.y = Math.PI * 0.9;
    leaf2.rotation.z = Math.PI / 16;
    scene.add(leaf2);

    // Leaf 3: slightly above and right, angled outward
    const leaf3 = createLeaf();
    leaf3.position.set(trunkX + 0.1, 1.23, trunkZ + 0.1);
    leaf3.rotation.y = Math.PI / 6;
    leaf3.rotation.z = -Math.PI / 20;
    scene.add(leaf3);

    // Leaf 4: left and lower, rotated to face out
    const leaf4 = createLeaf();
    leaf4.position.set(trunkX - 0.1, 1.25, trunkZ - 0.1);
    leaf4.rotation.y = -Math.PI / 2.5;
    leaf4.rotation.z = Math.PI / 12;
    scene.add(leaf4);


    // Add as many as you like...

    // === BULB UNDER RACK ===
    const bulb4 = new THREE.Mesh(
      new THREE.SphereGeometry(0.05, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffcc,
        emissiveIntensity: 2,
      })
    );
    bulb4.position.set(roomWidth / 2 - 0.05, 1.82, 0);
    bulb4.castShadow = true;
    scene.add(bulb4);

    // Optional: actual light source under the bulb
    const bulbLight4 = new THREE.PointLight(0xfff2cc, 0.8, 1.5); // soft yellow
    bulbLight4.position.set(roomWidth / 2 - 0.05, 1.82, 0);
    scene.add(bulbLight4);

    const leftWall = new THREE.Mesh(
      new THREE.PlaneGeometry(roomDepth, roomHeight),
      new THREE.MeshStandardMaterial({
        color: "#222222", // Dark gray
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.1,
      })
    );

    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-roomWidth / 2, roomHeight / 2, 0);
    scene.add(leftWall);

    const rightWall = new THREE.Mesh(
      new THREE.PlaneGeometry(roomDepth, roomHeight),
      new THREE.MeshStandardMaterial({
        color: "#222222", // Dark gray
        side: THREE.DoubleSide,
        roughness: 0.7,
        metalness: 0.1,
      })
    );

    rightWall.rotation.y = -Math.PI / 2;
    rightWall.position.set(roomWidth / 2, roomHeight / 2, 0);
    scene.add(rightWall);

    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(roomWidth, roomDepth),
      new THREE.MeshStandardMaterial({ color: "#000000", side: THREE.DoubleSide })
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = roomHeight;
    scene.add(ceiling);
    // === HEXAGONAL GLOWING STRUCTURE ===
    const hexMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: new THREE.Color(0xff00ff), // pink/purple glow
      emissiveIntensity: 3,
      roughness: 0.4,
      metalness: 0.2,
    });

    const hexagonGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.05, 6); // hexagonal prism

    const hexGroup = new THREE.Group();

    // Coordinates for curved layout on wall
    const hexPositions = [
      [-1.2, 2.8, -1.99],
      [-0.8, 3.0, -1.99],
      [-0.4, 3.1, -1.99],
      [0.0, 3.0, -1.99],
      [0.4, 2.8, -1.99],
      [0.8, 2.5, -1.99],
      [1.2, 2.3, -1.99],
    ];

    hexPositions.forEach((pos, i) => {
      const hex = new THREE.Mesh(hexagonGeometry, hexMaterial.clone());
      hex.position.set(...pos);
      hex.rotation.x = Math.PI / 2; // Flat against wall
      hex.castShadow = true;
      hex.receiveShadow = true;
      hexGroup.add(hex);
    });

    // Add point light near each hex for glow effect
    hexPositions.forEach(([x, y, z]) => {
      const glow = new THREE.PointLight(0xff55ff, 0.8, 1.5); // pink light
      glow.position.set(x, y, z + 0.1); // Slightly offset from wall
      scene.add(glow);
    });

    scene.add(hexGroup);
    // === SNAKE PLANT IN TALL VASE ===

    // Vase: tall rectangular prism
    const vase = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 2, 0.3), // width, height, depth
      new THREE.MeshStandardMaterial({
        color: 0x111111, // near-black
        metalness: 0.4,
        roughness: 0.6,
      })
    );
    vase.position.set(
      -roomWidth / 2 + 0.4, // small offset from wall
      -0.1,                 // half height of pot so it sits on the floor
      -roomDepth / 2 + 1.5  // small offset from back wall
    ); // near corner
    vase.castShadow = true;
    vase.receiveShadow = true;
    scene.add(vase);

    // Soft purple light at base for glow effect
    const plantGlow = new THREE.PointLight(0x8a2be2, 0.7, 1.5); // purple glow
    plantGlow.position.set(
      -roomWidth / 2 + 0.5, // small offset from wall
      -0.1,                 // half height of pot so it sits on the floor
      -roomDepth / 2 + 1.5  // small offset from back wall
    );
    scene.add(plantGlow);



    // === NEON STRIP LIGHT ===
    const neonLight = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.05, 0.2), // Long and flat
      new THREE.MeshStandardMaterial({
        emissive: new THREE.Color(0x2e5eff), // Blue glow
        emissiveIntensity: 3, // Increase = brighter glow
        color: 0x000000, // Surface color
      })
    );
    neonLight.position.set(0, 3.5, 0); // Mounted below ceiling
    scene.add(neonLight);
    // === VERTICAL NEON CORNERS ===
    const verticalNeonHeight = roomHeight;
    const verticalNeonThickness = 0.03;
    const verticalNeonDepth = 0.05;

    const verticalNeonMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      emissive: new THREE.Color(0x8a2be2), // Purple neon (same as floor edges)
      emissiveIntensity: 3,
    });

    const createVerticalNeon = (x, z) => {
      const neon = new THREE.Mesh(
        new THREE.BoxGeometry(verticalNeonThickness, verticalNeonHeight, verticalNeonDepth),
        verticalNeonMaterial
      );
      neon.position.set(x, roomHeight / 2, z);
      scene.add(neon);
    };

    // Back wall corners
    createVerticalNeon(-roomWidth / 2 + 0.015, -roomDepth / 2 + 0.001); // back-left
    createVerticalNeon(roomWidth / 2 - 0.015, -roomDepth / 2 + 0.001);  // back-right

    // Front wall corners (optional, if you want glow at all 4 corners)
    createVerticalNeon(-roomWidth / 2 + 0.015, roomDepth / 2 - 0.001); // front-left
    createVerticalNeon(roomWidth / 2 - 0.015, roomDepth / 2 - 0.001);  // front-right

    // === POSTER BASE (white plane) ===
    const posterWidth = 0.8;
    const posterHeight = 0.8;

    const posterPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(posterWidth, posterHeight),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.8,
        metalness: 0.2,
        side: THREE.DoubleSide,
      })
    );
    posterPlane.position.set(-roomWidth / 2 + 0.01, 2.2, -0.5); // attached to left wall
    posterPlane.rotation.y = Math.PI / 2;
    posterPlane.receiveShadow = true;
    scene.add(posterPlane);

    // === FRAME (simple box around poster) ===
    const frameThickness = 0.05;
    const frame = new THREE.Mesh(
      new THREE.BoxGeometry(posterWidth + 0.1, posterHeight + 0.1, frameThickness),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.6,
        metalness: 0.1,
      })
    );
    frame.position.set(-roomWidth / 2 + 0.04, 2.2, -0.5);
    frame.rotation.y = Math.PI / 2;
    frame.castShadow = true;
    scene.add(frame);

    const fontLoader = new FontLoader();
    fontLoader.load("/fonts/roomtext.json", (font) => {
      const textMat12 = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.7,
        metalness: 0.3,
      });

      const makeText = (message, size, yOffset) => {
        const textGeo1 = new TextGeometry(message, {
          font,
          height: 0.01,
          curveSegments: 12,
          curveSegments: 6,
        });
        textGeo1.computeBoundingBox();
        textGeo1.center();

        const textMesh13 = new THREE.Mesh(textGeo1, textMat12);
        textMesh13.position.set(-roomWidth / 2 + 0.06, 2.2 + yOffset, -0.4); // position on poster
        textMesh13.rotation.y = Math.PI / 2;
        scene.add(textMesh13);
      };

    });



    // === CUSTOM MAT CREATED WITH THREE.JS GEOMETRY ===
    const matColors = [
      0x7b57a3, // Outer ring - muted purple
      0x2e39b3, // Middle ring - dark blue
      0x265cbf, // Inner ring - light blue
      0x8c6d4e, // Center - brownish core
    ];

    // Ring geometry parameters: [innerRadius, outerRadius]
    const ringSizes = [
      [1.1, 1.3], // outer ring
      [0.9, 1.1],
      [0.7, 0.9],
    ];

    ringSizes.forEach(([innerR, outerR], i) => {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(innerR, outerR, 64),
        new THREE.MeshStandardMaterial({
          color: matColors[i],
          side: THREE.DoubleSide,
          roughness: 0.9,
          metalness: 0.1,
        })
      );
      ring.rotation.x = -Math.PI / 2; // Lay flat on floor
      ring.position.set(0, 0.012 + i * 0.0005, 1); // Slight offset to avoid z-fighting
      ring.receiveShadow = true;
      scene.add(ring);
    });

    // Center ellipse using scaled CircleGeometry
    const centerMat = new THREE.Mesh(
      new THREE.CircleGeometry(0.64, 64),
      new THREE.MeshStandardMaterial({
        color: matColors[3],
        side: THREE.DoubleSide,
        roughness: 0.9,
        metalness: 0.05,
      })
    );
    centerMat.rotation.x = -Math.PI / 2;
    centerMat.scale.set(1, 1, 1); // Elliptical shape
    centerMat.position.set(0, 0.014, 1); // On top
    centerMat.receiveShadow = true;
    scene.add(centerMat);


    const handleResize = () => {
      const { width, height } = mount.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix(); 
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    const renderScene = () => renderer.render(scene, camera);

    renderScene();
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        camera.position.z = 5.5 - 4.9 * progress;
        camera.position.y = 2.4 + 0.4 * progress;
        camera.lookAt(0, 1, 0);
        renderScene();
        if (progress > 0.98 && lastTriggerRef.current !== true) {
          lastTriggerRef.current = true;
          onScrollComplete(true); 
          console.log("🎯 Flipbook triggered!");

        } else if (progress < 0.98 && lastTriggerRef.current !== false) {
          lastTriggerRef.current = false;
          onScrollComplete(false); 
        }

      },
    });


    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [onScrollComplete]);

  return (
    <div ref={containerRef} style={{ height: "200vh" }}>
      <div
        className="table-container"
        ref={mountRef}
        style={{ position: "sticky", top: 0, height: "100vh", width: "100%" }}
      ></div>
    </div>
  );
};

export default RoomScene;
