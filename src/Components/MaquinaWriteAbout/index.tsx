import React, { useEffect, useState } from 'react';

interface MaquinaWriteProps {
    text: string;
    delay?: number;
}

const MaquinaWriteAbout: React.FC<MaquinaWriteProps> = ({ text, delay = 130 }) => {
    const [currentText, setCurrentText] = useState('');

    const writeText = (text: string, i = 0) => {
        if (i < text.length) {
            setCurrentText(text.slice(0, i + 1));
            setTimeout(() => writeText(text, i + 1), delay);
        } else {
            setCurrentText(text);
        }
    };

    useEffect(() => {
        writeText(text);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    return <p>{currentText}</p>;
};

export default MaquinaWriteAbout;
