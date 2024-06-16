import React, { useContext, useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

import TransitionContext from '../../Context/TransitionContext';

interface TransitionComponentProps {
    children: React.ReactNode;
}

const TransitionComponent: React.FC<TransitionComponentProps> = ({ children }) => {
    const location = useLocation();
    const nodeRef = useRef<HTMLDivElement>(null);
    const { toggleCompleted }: any = useContext(TransitionContext);

    return (
        <SwitchTransition>
            <Transition
                key={location.pathname}
                timeout={500}
                nodeRef={nodeRef}
                onEnter={() => {
                    if (nodeRef.current) {
                        toggleCompleted(false);
                        gsap.set(nodeRef.current, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
                        gsap.timeline({
                            paused: true,
                            onComplete: () => toggleCompleted(true),
                        })
                            .to(nodeRef.current, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
                            .to(nodeRef.current, { scale: 1, duration: 0.25 })
                            .play();
                    }
                }}
                onExit={() => {
                    if (nodeRef.current) {
                        gsap.timeline({ paused: true })
                            .to(nodeRef.current, { scale: 0.8, duration: 0.2 })
                            .to(nodeRef.current, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
                            .play();
                    }
                }}
            >
                <div ref={nodeRef}>{children}</div>
            </Transition>
        </SwitchTransition>
    );
};

export default TransitionComponent;
