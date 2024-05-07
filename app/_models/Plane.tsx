//@ts-nocheck
import React from "react";
import { useGLTF } from "@react-three/drei";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({
  isRotating,
  position,
  scale,
  rotation,
}: {
  isRotating: boolean;
  position: Array<int> | null;
  scale: Array<int> | null;
  rotation: Array<int> | null;
}) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
