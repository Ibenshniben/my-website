import { useCallback } from "react";
import { Engine } from "@tsparticles/engine";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent"
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 50
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 1, max: 3 }
          }
        }
      }}
    />
  );
}