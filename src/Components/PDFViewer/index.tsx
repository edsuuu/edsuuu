import React, { useState } from 'react';
import { CloseButton, PDFContainer, PDFPopup, VisuButton } from './styled';
import curriculo from '../../../public/Assets/curriculo.pdf';

const PDFViewer: React.FC = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <>
            <VisuButton onClick={openPopup}>Visualizar Curriculo</VisuButton>

            <PDFPopup open={popupOpen}>
                <PDFContainer>
                    <CloseButton onClick={closePopup}>Fechar PDF</CloseButton>
                    <embed src={curriculo} type="application/pdf" />
                </PDFContainer>
            </PDFPopup>
        </>
    );
};

export default PDFViewer;
