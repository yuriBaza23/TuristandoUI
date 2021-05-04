import React from 'react';
import { FiMapPin } from 'react-icons/fi';

import { Container } from './styles';

interface IImageProps { 
    src: string;
    name: string;
    city: string;
    state: string;
}

const Image: React.FC<IImageProps> = ({ src, name, city, state }) => {
    return(
        <Container src={src}>
            <div className="filter">
                <div className="data">
                    <h1>{name}</h1>
                    <div>
                        <FiMapPin/>
                        <span>{city} - {state}</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Image;