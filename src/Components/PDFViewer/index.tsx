import React, { useState } from 'react';
import { CloseButton, PDFContainer, PDFPopup } from './styled';
// import curriculo from '../../../public/Assets/curriculo.pdf';
import { BiSpreadsheet } from 'react-icons/bi';

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
            <button className="btn-visu" onClick={openPopup}>
                <div className="icons-terminal">
                    <BiSpreadsheet size={30} />
                </div>
                <span className="tooltip-reverse">Visualizar</span>
            </button>

            <PDFPopup open={popupOpen}>
                <PDFContainer>
                    <CloseButton onClick={closePopup}>Fechar PDF</CloseButton>
                    <embed src="" type="application/pdf" />
                </PDFContainer>
            </PDFPopup>
        </>
    );
};

export default PDFViewer;
