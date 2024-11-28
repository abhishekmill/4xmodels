import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const CameraIntractionControls = ({ intensity = 0.05 }) => {
  const { camera } = useThree();

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;

      // Normalize mouse coordinates (-1 to 1)
      const mouseX = (event.clientX / innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / innerHeight) * 2 + 1;

      // Apply intensity to camera rotation
      camera.rotation.y = -mouseX * intensity;
      camera.rotation.x = mouseY * intensity;
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up event listener
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera, intensity]);

  return null; // This component doesn't render anything
};

export default CameraIntractionControls;
