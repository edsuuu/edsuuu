"use client";

import {
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";
import { memo, useEffect, useState } from "react";

interface ParticlesBackgroundProps {
    id?: string;
    speed?: number;
}

const ParticlesBackground = memo(
    ({ id = "tsparticles", speed = 2 }: ParticlesBackgroundProps) => {
        const [init, setInit] = useState(false);
        const { resolvedTheme } = useTheme();

        useEffect(() => {
            initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            }).then(() => {
                setInit(true);
            });
        }, []);

        const options: ISourceOptions = {
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    repulse: {
                        distance: 120,
                        duration: 0.2,
                    },
                },
            },
            particles: {
                color: {
                    value: "#00a4ef",
                },
                links: {
                    color: "#00a4ef",
                    distance: 150,
                    enable: true,
                    opacity: resolvedTheme === "dark" ? 0.9 : 0.4,
                    width: 0.8,
                },
                move: {
                    direction: MoveDirection.none,
                    enable: true,
                    outModes: {
                        default: OutMode.out,
                    },
                    random: false,
                    speed: speed,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 100,
                },
                opacity: {
                    value: resolvedTheme === "dark" ? 0.5 : 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
        };

        if (init) {
            return (
                <Particles
                    id={id}
                    options={options}
                    className="absolute inset-0 z-[-1]"
                />
            );
        }

        return null;
    },
);

ParticlesBackground.displayName = "ParticlesBackground";

export default ParticlesBackground;
