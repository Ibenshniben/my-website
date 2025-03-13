import { useCallback } from "react";
import { Engine } from "@tsparticles/engine";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        // your particle options here
      }}
    />
  );
}