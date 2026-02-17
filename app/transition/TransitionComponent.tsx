"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { SwitchTransition, Transition } from "react-transition-group";

import { useTransition } from "./TransitionContext";

const FrozenRoute = ({ children }: { children: React.ReactNode }) => {
    const [frozen] = useState(children);
    return <>{frozen}</>;
};

const TransitionComponent = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const nodeRef = useRef<HTMLDivElement>(null);
    const { toggleCompleted, registerExitCallback } = useTransition();

    useEffect(() => {
        registerExitCallback(async () => {
            if (nodeRef.current) {
                await gsap
                    .timeline()
                    .to(nodeRef.current, {
                        scale: 0.8,
                        duration: 0.2,
                        ease: "power2.in",
                    })
                    .to(nodeRef.current, {
                        xPercent: 100,
                        autoAlpha: 0,
                        duration: 0.2,
                        ease: "power2.in",
                    });
            }
        });
    }, [registerExitCallback]);

    return (
        <div className="flex-1 w-full h-full relative overflow-hidden flex flex-col">
            <SwitchTransition mode="out-in">
                <Transition
                    key={pathname}
                    timeout={{
                        enter: 500,
                        exit: 0,
                    }}
                    nodeRef={nodeRef}
                    onEnter={() => {
                        if (nodeRef.current) {
                            toggleCompleted(false);
                            gsap.set(nodeRef.current, {
                                autoAlpha: 0,
                                scale: 0.8,
                                xPercent: -100,
                            });
                            gsap.timeline({
                                onComplete: () => toggleCompleted(true),
                            })
                                .to(nodeRef.current, {
                                    autoAlpha: 1,
                                    xPercent: 0,
                                    duration: 0.25,
                                    ease: "power2.out",
                                })
                                .to(nodeRef.current, {
                                    scale: 1,
                                    duration: 0.25,
                                    ease: "back.out(1.7)",
                                });
                        }
                    }}
                    onExit={() => {}}
                >
                    <div
                        ref={nodeRef}
                        className="flex-1 w-full h-full flex flex-col"
                    >
                        <FrozenRoute>{children}</FrozenRoute>
                    </div>
                </Transition>
            </SwitchTransition>
        </div>
    );
};

export default TransitionComponent;
