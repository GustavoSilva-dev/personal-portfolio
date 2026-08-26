import Particles from "../../@/components/Particles.jsx"

function ParticlesComponent() {
    return (
        <div style={{ width: '100vh', height: '100vw', position: 'absolute', zIndex: -1}}>
            <Particles
                particleCount={500}
                particleSpread={10}
                speed={0.1}
                particleColors={["#860000", "#b30000", "#b80000"]}
                moveParticlesOnHover
                particleHoverFactor={0.1}
                alphaParticles
                particleBaseSize={130}
                sizeRandomness={1.4}
                cameraDistance={48}
                disableRotation={false}
                className=""
            />
        </div>
    )
}

export default ParticlesComponent;