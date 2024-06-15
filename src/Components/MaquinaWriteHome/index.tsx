import React, { useEffect, useState } from 'react';

interface MaquinaWriteProps {
    text: string;
    delay?: number;
    onComplete: () => void;
}

const MaquinaWriteHome: React.FC<MaquinaWriteProps> = ({ text, delay = 100, onComplete }) => {
    const [currentText, setCurrentText] = useState('');

    const writeText = (text: string, i = 0) => {
        if (i < text.length) {
            setCurrentText(text.slice(0, i + 1));
            setTimeout(() => writeText(text, i + 1), delay);
        } else {
            setCurrentText(text);
            onComplete();
        }
    };

    useEffect(() => {
        writeText(text);
    }, [text]);

    return <h1>{currentText}</h1>;
};

export default MaquinaWriteHome;
