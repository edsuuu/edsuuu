"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { useTransition } from "./TransitionContext";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    target?: string;
}

const TransitionLink = ({
    children,
    href,
    onClick,
    ...props
}: TransitionLinkProps) => {
    const { navigate } = useTransition();
    const pathname = usePathname();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) => {
        if (onClick) {
            onClick(e);
        }

        const targetUrl = typeof href === "string" ? href : href.toString();

        if (
            targetUrl.startsWith("http") ||
            targetUrl.startsWith("mailto:") ||
            props.target === "_blank" ||
            e.metaKey ||
            e.ctrlKey
        ) {
            return;
        }

        if (targetUrl === pathname) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        await navigate(targetUrl);
    };

    return (
        <Link onClick={handleTransition} href={href} {...props}>
            {children}
        </Link>
    );
};

export default TransitionLink;
