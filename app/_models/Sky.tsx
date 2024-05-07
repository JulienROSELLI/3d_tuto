import React from "react";
import skyScene from "../assets/3d/sky.glb";
import { useGLTF } from "@react-three/drei";

const Sky = () => {
  const sky = useGLTF(skyScene);
  if (Array.isArray(sky)) {
    // Handle the case when sky is an array
    // You can access the first element of the array and use its scene property
    const firstSky = sky[0];
    return (
      <mesh>
        <primitive object={firstSky.scene} />
      </mesh>
    );
  } else {
    // Handle the case when sky is a single GLTF object
    return (
      <mesh>
        <primitive object={sky.scene} />
      </mesh>
    );
  }
};
export default Sky;
