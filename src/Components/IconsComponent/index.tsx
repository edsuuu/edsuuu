import React from 'react';
import styled from 'styled-components';
import { IconItem } from '../../interfaces';

export const Container = styled.div`
    /* border: 1px solid white; */

    .icon-wrapper {
        position: relative;
        display: inline-block;
    }

    .icon-button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .icon-button:focus {
        outline: none;
    }

    .main-icon {
        fill: currentColor;
        height: 40px;
        width: 40px;
        transition: transform 0.3s;
        filter: drop-shadow(1px 1px 20px #ffffff48);
    }

    .icon-button:hover .main-icon {
        transform: scale(1.25);
    }

    .tooltip {
        position: absolute;
        top: -46px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        z-index: 3;
        padding: 8px 16px;
        font-size: 0.875rem;
        font-weight: bold;
        color: #00cfef;
        background-color: #1f2937;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
    }

    .icon-wrapper:hover .tooltip {
        transform: translateX(-50%) scale(1);
    }
`;

const IconsComponent: React.FC<IconItem> = ({ name, Icon }) => {
    return (
        <Container>
            <div className="icon-wrapper">
                <div className="icon-button">
                    <Icon className="main-icon" />
                </div>
                <span className="tooltip">{name}</span>
            </div>
        </Container>
    );
};

export default IconsComponent;
