import React from 'react';
import { ButtonContainerSend, InformacoesTecnicas, Title } from './styled';
import { freelaObj } from './data';
import { FreelancerData } from '../../interfaces';

const ServicosFrellaCard: React.FC<FreelancerData> = () => {
    return (
        <div>
            <Title>
                <h2>
                    # <span>Serviços Freelancer </span>
                </h2>
            </Title>
            <InformacoesTecnicas>
                {freelaObj.slice(0, 3).map((data, index) => {
                    const Icon = data.Icon;
                    return (
                        <div className="card-frella" key={index}>
                            <h2>{data.nome}</h2>
                            <span>
                                <Icon size={40} />
                            </span>
                            <p>{data.descricao}</p>
                            <ButtonContainerSend>
                                <button className="btn-send-message">
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Orçamento</span>
                                </button>
                            </ButtonContainerSend>
                        </div>
                    );
                })}
            </InformacoesTecnicas>
            <InformacoesTecnicas>
                {freelaObj.slice(3, 5).map((data, index) => {
                    const Icon = data.Icon;
                    return (
                        <div className="card-frella" key={index}>
                            <h2>{data.nome}</h2>
                            <span>
                                <Icon size={40} />
                            </span>
                            <p>{data.descricao}</p>
                            <ButtonContainerSend>
                                <button className="btn-send-message">
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path
                                                    fill="currentColor"
                                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <span>Orçamento</span>
                                </button>
                            </ButtonContainerSend>
                        </div>
                    );
                })}
            </InformacoesTecnicas>
        </div>
    );
};

export default ServicosFrellaCard;
