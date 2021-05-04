import React from 'react';
import { FiX } from 'react-icons/fi';

import { CardModal, Container } from './styles';

interface IModalProps {
    open: boolean;
}

const Modal: React.FC<IModalProps> = ({ open }) => {
    return(
        <>
            { open && (
                <>
                    <Container/>
                    <CardModal>
                        <header>
                            <h1>Escolha as tags para filtragem</h1>
                            <button>
                                <FiX/>
                            </button>
                        </header>
                        <main>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>NATUREZA</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>DIVERSÃO</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>HISTÓRICO</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>RELIGIOSO</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>COMPRAS</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>ESPORTE</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>NATUREZA</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>DIVERSÃO</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>HISTÓRICO</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>RELIGIOSO</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>COMPRAS</label>
                            </div>
                            <div className="turistando-checkbox">
                                <input type='checkbox'/>
                                <label>ESPORTE</label>
                            </div>
                        </main>
                        <footer>
                            <button>FILTRAR</button>
                        </footer>
                    </CardModal>
                </>
            ) }
        </>
    );
}

export default Modal;